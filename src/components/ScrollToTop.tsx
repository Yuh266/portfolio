"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ScrollToTop() {
  const { language } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = (scrollY / docHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setIsVisible(scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const titleText = language === "vi" ? "Cuộn lên đầu trang" : "Scroll to top";

  // Circle dimensions for progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
      aria-label={titleText}
      title={titleText}
      id="scroll-to-top-btn"
    >
      {/* SVG Circular Progress Ring */}
      <svg
        className="scroll-progress-ring"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        aria-hidden="true"
      >
        <circle
          className="scroll-progress-track"
          cx="23"
          cy="23"
          r={radius}
        />
        <circle
          className="scroll-progress-bar"
          cx="23"
          cy="23"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>

      <span className="scroll-to-top-icon">
        <ArrowUp size={20} strokeWidth={2.5} />
      </span>
    </button>
  );
}
