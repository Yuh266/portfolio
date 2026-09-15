"use client";

import React, { useState, useEffect } from "react";
import {
  Download,
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Header() {
  const { language, setLanguage, theme, toggleTheme, t } = useApp();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);

      // Bottom of page check - activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveSection("contact");
        return;
      }

      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollTrigger = window.scrollY + 200;
      let currentSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollTrigger >= elementTop - 60) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: t.nav.home, icon: Home, href: "#home" },
    { id: "about", label: t.nav.about, icon: User, href: "#about" },
    { id: "experience", label: t.nav.experience, icon: Briefcase, href: "#experience" },
    { id: "skills", label: t.nav.skills, icon: Cpu, href: "#skills" },
    { id: "projects", label: t.nav.projects, icon: FolderGit2, href: "#projects" },
    { id: "contact", label: t.nav.contact, icon: Mail, href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <header className="banner-header" id="banner-header">
        <a href="#home" className="logo-brand-wrap" aria-label="NguyenQuangHuy.dev">
          NguyenQuangHuy<span className="logo-dev-tag">.dev</span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              >
                <a href={item.href} onClick={(e) => handleNavClick(e, item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            <button
              className={`lang-btn ${language === "vi" ? "active" : ""}`}
              onClick={() => setLanguage("vi")}
              id="lang-vi-btn"
              aria-label="Tiếng Việt"
            >
              VI
            </button>
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              id="lang-en-btn"
              aria-label="English"
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
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="/cv.pdf"
            download="Nguyen_Quang_Huy_Full_Stack_Developer_CV.pdf"
            className="btn-cv"
            id="download-cv-btn"
            aria-label={t.nav.downloadCv}
          >
            <span className="cv-btn-text-full">{t.nav.downloadCv}</span>
            <span className="cv-btn-text-short">CV</span>
            <Download size={14} />
          </a>
        </div>
      </header>

      {/* Mobile Bottom Navigation (Footer Mobile Menu) */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation" id="mobile-bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-bottom-item ${isActive ? "active" : ""}`}
              aria-label={item.label}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <div className="mobile-bottom-icon-wrap">
                <Icon size={18} />
              </div>
              <span className="mobile-bottom-label">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Floating Sticky Navbar (Desktop) */}
      <div className={`sticky-navbar ${isScrolled ? "visible" : ""}`} id="sticky-header">
        <a href="#home" className="logo-brand-wrap mini" aria-label="NguyenQuangHuy.dev">
          NguyenQuangHuy<span className="logo-dev-tag">.dev</span>
        </a>

        <ul className="sticky-nav-links">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
            >
              <a href={item.href} onClick={(e) => handleNavClick(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
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

