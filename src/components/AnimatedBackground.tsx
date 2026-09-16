"use client";

import React, { useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  colorIdx: number;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

export default function AnimatedBackground() {
  const { theme } = useApp();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isDark = () => {
      return (
        document.documentElement.getAttribute("data-theme") === "dark" ||
        theme === "dark"
      );
    };

    // Color palettes for particles & lines
    const getThemeColors = () => {
      const dark = isDark();
      return {
        particles: dark
          ? [
              "rgba(52, 211, 153, ", // mint
              "rgba(34, 197, 94, ",  // emerald
              "rgba(45, 212, 191, ", // teal
              "rgba(134, 239, 172, ", // soft green
            ]
          : [
              "rgba(14, 131, 69, ",  // deep emerald
              "rgba(16, 185, 129, ", // vibrant green
              "rgba(13, 148, 136, ", // teal
              "rgba(34, 197, 94, ",  // forest green
            ],
        lineColor: dark
          ? "rgba(52, 211, 153, "
          : "rgba(14, 131, 69, ",
        mouseGlow: dark
          ? "rgba(34, 197, 94, 0.08)"
          : "rgba(14, 131, 69, 0.04)",
        rippleColor: dark
          ? "rgba(52, 211, 153, "
          : "rgba(14, 131, 69, ",
      };
    };

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Particle setup
    let particles: Particle[] = [];
    const getParticleCount = () => {
      if (width < 640) return 26;
      if (width < 1024) return 42;
      return 62;
    };

    const initParticles = () => {
      const count = getParticleCount();
      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.6 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.45),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.45),
          baseRadius: radius,
          radius: radius,
          colorIdx: Math.floor(Math.random() * 4),
          alpha: Math.random() * 0.4 + 0.35,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    // Mouse Tracking with smooth interpolation
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 170,
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    // Ripples
    let ripples: Ripple[] = [];
    const handlePointerDown = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.min(width, height) * 0.35,
        alpha: 0.65,
        speed: 4.5,
      });
      if (ripples.length > 5) ripples.shift();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    resize();

    // Main animation loop
    let tick = 0;
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      tick++;
      ctx.clearRect(0, 0, width, height);

      const colors = getThemeColors();
      const dark = isDark();

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;

        // Draw ambient cursor spotlight
        const glowGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        );
        glowGrad.addColorStop(0, colors.mouseGlow);
        glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // Update & render ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.96;

        ctx.strokeStyle = `${colors.rippleColor}${rip.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Ripple excites particles nearby
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - rip.x;
          const dy = p.y - rip.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - rip.radius) < 30) {
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * 0.15;
            p.vy += Math.sin(angle) * 0.15;
          }
        }

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1);
        }
      }

      // Constellation line threshold
      const maxDistance = width < 640 ? 95 : 125;

      // Draw particle-to-particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const factor = 1 - dist / maxDistance;
            const lineAlpha = factor * (dark ? 0.22 : 0.14);
            ctx.strokeStyle = `${colors.lineColor}${lineAlpha})`;
            ctx.lineWidth = factor * 1.1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connection to mouse if nearby
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.radius) {
            const mFactor = 1 - mDist / mouse.radius;
            const mLineAlpha = mFactor * (dark ? 0.45 : 0.28);
            ctx.strokeStyle = `${colors.lineColor}${mLineAlpha})`;
            ctx.lineWidth = mFactor * 1.4;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Subtle gentle push away from cursor to feel alive
            if (mDist < 75 && !prefersReducedMotion) {
              const pushForce = (1 - mDist / 75) * 0.45;
              p1.x += (mdx / (mDist || 1)) * pushForce;
              p1.y += (mdy / (mDist || 1)) * pushForce;
            }
          }
        }
      }

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Drag to avoid runaway speed
          p.vx *= 0.995;
          p.vy *= 0.995;

          // Gentle base drift
          if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.05;
          if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.05;

          // Screen wrap-around with smooth padding
          if (p.x < -15) p.x = width + 15;
          if (p.x > width + 15) p.x = -15;
          if (p.y < -15) p.y = height + 15;
          if (p.y > height + 15) p.y = -15;
        }

        // Breathing pulse
        const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset);
        const currentAlpha = Math.max(
          0.15,
          p.alpha + pulse * 0.25 * (dark ? 1 : 0.8)
        );
        const currentRadius = p.baseRadius + pulse * 0.4;

        // Particle Glow
        const colorPrefix = colors.particles[p.colorIdx];
        ctx.fillStyle = `${colorPrefix}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fill();

        // Extra soft outer halo for larger particles in dark mode
        if (dark && p.baseRadius > 2.0) {
          ctx.fillStyle = `${colorPrefix}${currentAlpha * 0.2})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Pause on hidden tab
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [theme]);

  return (
    <div className="animated-bg-container" aria-hidden="true">
      {/* Floating Aurora / Nebula Gradient Blobs */}
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />
      <div className="aurora-orb aurora-orb-4" />

      {/* Cyber Micro-Dot Grid */}
      <div className="cyber-grid-overlay" />

      {/* Dynamic Quantum Particles & Constellation Canvas */}
      <canvas ref={canvasRef} className="animated-canvas" />
    </div>
  );
}
