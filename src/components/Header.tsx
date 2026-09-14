"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Header() {
  const { language, setLanguage, theme, toggleTheme, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 480);
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="banner-header" id="banner-header">
        <a href="#home" className="logo-brand-wrap" aria-label="NguyenQuangHuy.dev">
          NguyenQuangHuy<span className="logo-dev-tag">.dev</span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
              <a href="#home">{t.nav.home}</a>
            </li>
            <li className={`nav-item ${activeSection === "about" ? "active" : ""}`}>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li className={`nav-item ${activeSection === "experience" ? "active" : ""}`}>
              <a href="#experience">{t.nav.experience}</a>
            </li>
            <li className={`nav-item ${activeSection === "projects" ? "active" : ""}`}>
              <a href="#projects">{t.nav.projects}</a>
            </li>
            <li className={`nav-item ${activeSection === "skills" ? "active" : ""}`}>
              <a href="#skills">{t.nav.skills}</a>
            </li>
            <li className={`nav-item ${activeSection === "contact" ? "active" : ""}`}>
              <a href="#contact">{t.nav.contact}</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            <button
              className={`lang-btn ${language === "vi" ? "active" : ""}`}
              onClick={() => setLanguage("vi")}
              id="lang-vi-btn"
            >
              VI
            </button>
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              id="lang-en-btn"
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light mode"
            id="theme-toggle-btn"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/cv.pdf"
            download="Nguyen_Quang_Huy_Full_Stack_Developer_CV.pdf"
            className="btn-cv"
            id="download-cv-btn"
          >
            <span>{t.nav.downloadCv}</span>
            <Download size={16} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-top">
              <span className="logo-brand-wrap">
                NguyenQuangHuy<span className="logo-dev-tag">.dev</span>
              </span>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="mobile-nav-list">
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a></li>
              <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t.nav.experience}</a></li>
              <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a></li>
              <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t.nav.skills}</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a></li>
            </ul>
            <div className="mobile-drawer-footer">
              <div className="lang-switch">
                <button className={`lang-btn ${language === "vi" ? "active" : ""}`} onClick={() => setLanguage("vi")}>VI</button>
                <button className={`lang-btn ${language === "en" ? "active" : ""}`} onClick={() => setLanguage("en")}>EN</button>
              </div>
              <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="/cv.pdf" download="Nguyen_Quang_Huy_Full_Stack_Developer_CV.pdf" className="btn-cv" style={{ width: "100%", justifyContent: "center" }}>
                <span>{t.nav.downloadCv}</span>
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky Navbar */}
      <div className={`sticky-navbar ${isScrolled ? "visible" : ""}`} id="sticky-header">
        <a href="#home" className="logo-brand-wrap mini" aria-label="NguyenQuangHuy.dev">
          NguyenQuangHuy<span className="logo-dev-tag">.dev</span>
        </a>

        <ul className="sticky-nav-links">
          <li className={activeSection === "home" ? "active" : ""}><a href="#home">{t.nav.home}</a></li>
          <li className={activeSection === "about" ? "active" : ""}><a href="#about">{t.nav.about}</a></li>
          <li className={activeSection === "experience" ? "active" : ""}><a href="#experience">{t.nav.experience}</a></li>
          <li className={activeSection === "projects" ? "active" : ""}><a href="#projects">{t.nav.projects}</a></li>
          <li className={activeSection === "skills" ? "active" : ""}><a href="#skills">{t.nav.skills}</a></li>
          <li className={activeSection === "contact" ? "active" : ""}><a href="#contact">{t.nav.contact}</a></li>
        </ul>

        <div className="sticky-actions">
          <div className="lang-switch">
            <button className={`lang-btn ${language === "vi" ? "active" : ""}`} onClick={() => setLanguage("vi")}>VI</button>
            <button className={`lang-btn ${language === "en" ? "active" : ""}`} onClick={() => setLanguage("en")}>EN</button>
          </div>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="/cv.pdf" download="Nguyen_Quang_Huy_Full_Stack_Developer_CV.pdf" className="btn-cv" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
            <span>{t.nav.downloadCv}</span>
            <Download size={14} />
          </a>
        </div>
      </div>
    </>
  );
}
