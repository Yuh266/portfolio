"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./TechIcons";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="home" className="hero-banner-main">
      {/* Background visual with desk setup, books, mug, monitor & plant */}
      <div className="hero-backdrop-visual">
        <Image
          src="/images/hero-desk-banner.webp"
          alt="Nguyễn Quang Huy - Full-Stack Developer Workspace"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="hero-backdrop-img"
        />
        {/* Soft edge blend gradient */}
        <div className="hero-backdrop-gradient" />
      </div>

      {/* Foreground Left Content */}
      <div className="hero-content-col">
        <p className="hero-greeting">{t.hero.greeting}</p>

        <h1 className="hero-title">
          {t.hero.firstName} <span className="highlight">{t.hero.lastName}</span>
        </h1>

        <h2 className="hero-subtitle">{t.hero.title}</h2>

        <p className="hero-desc">{t.hero.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary" id="hero-view-projects-btn">
            {t.hero.viewProjects}
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary" id="hero-contact-btn">
            {t.hero.contactMe}
          </a>
        </div>

        {/* Minimalist monochrome social icons as in design mockup */}
        <div className="hero-socials">
          <a
            href={t.contactInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-clean"
            aria-label="GitHub Profile"
            title={`GitHub: ${t.contactInfo.github}`}
          >
            <GithubIcon />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-clean"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <a
            href={`mailto:${t.contactInfo.email}`}
            className="social-icon-clean"
            aria-label="Email"
            title={`Email: ${t.contactInfo.email}`}
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
