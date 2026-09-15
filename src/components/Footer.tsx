"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon } from "./TechIcons";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo-brand" aria-label="NguyenQuangHuy.dev">
            NguyenQuangHuy<span className="logo-dev-tag">.dev</span>
          </a>
          <div>
            <div className="footer-title">{t.contactInfo.name}</div>
            <div className="footer-subtitle">{t.contactInfo.title}</div>
            <div style={{ fontSize: "0.78rem", color: "#9ca3af", marginTop: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
              <MapPin size={12} color="#34d399" />
              <span>{t.contactInfo.location}</span>
            </div>
          </div>
        </div>

        <ul className="footer-links">
          <li className="footer-link">
            <a href="#home">{t.nav.home}</a>
          </li>
          <li className="footer-link">
            <a href="#about">{t.nav.about}</a>
          </li>
          <li className="footer-link">
            <a href="#experience">{t.nav.experience}</a>
          </li>
          <li className="footer-link">
            <a href="#skills">{t.nav.skills}</a>
          </li>
          <li className="footer-link">
            <a href="#projects">{t.nav.projects}</a>
          </li>
          <li className="footer-link">
            <a href="#contact">{t.nav.contact}</a>
          </li>
        </ul>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href={t.contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
              title={`GitHub: ${t.contactInfo.github}`}
            >
              <GithubIcon />
            </a>
            <a
              href={`mailto:${t.contactInfo.email}`}
              className="footer-social-icon"
              aria-label="Email"
              title={`Email: ${t.contactInfo.email}`}
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${t.contactInfo.phone}`}
              className="footer-social-icon"
              aria-label="Phone"
              title={`Phone: ${t.contactInfo.phone}`}
            >
              <Phone size={20} />
            </a>
          </div>

          <span className="footer-quote">{t.footer.quote}</span>

          <button
            onClick={scrollToTop}
            className="btn-back-top"
            aria-label="Scroll back to top"
            id="back-to-top-btn"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
