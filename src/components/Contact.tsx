"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, FileText } from "lucide-react";
import { GithubIcon, ZaloIcon } from "./TechIcons";
import { useApp } from "@/context/AppContext";

export default function Contact() {
  const { t, language } = useApp();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const contactList = [
    {
      key: "email",
      icon: <Mail size={22} />,
      label: t.contactInfo.email,
      href: `mailto:${t.contactInfo.email}`,
      copyValue: t.contactInfo.email,
    },
    {
      key: "phone",
      icon: <Phone size={22} />,
      label: t.contactInfo.phone,
      href: `tel:${t.contactInfo.phone}`,
      copyValue: t.contactInfo.phone,
    },
    {
      key: "zalo",
      icon: <ZaloIcon />,
      label: `Zalo (${t.contactInfo.zalo})`,
      href: t.contactInfo.zaloUrl,
      copyValue: t.contactInfo.zaloUrl,
      isExternal: true,
    },
    {
      key: "github",
      icon: <GithubIcon />,
      label: `GitHub (${t.contactInfo.github})`,
      href: t.contactInfo.githubUrl,
      copyValue: t.contactInfo.githubUrl,
      isExternal: true,
    },
    {
      key: "location",
      icon: <MapPin size={22} />,
      label: t.contactInfo.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contactInfo.location)}`,
      copyValue: t.contactInfo.location,
      isExternal: true,
    },
    {
      key: "cv",
      icon: <FileText size={22} />,
      label: language === "vi" ? "Tải xuống Hồ Sơ CV (PDF)" : "Download Resume CV (PDF)",
      href: "/cv.pdf",
      copyValue: "https://nguyenquanghuy-portfolio.vercel.app/cv.pdf",
      isExternal: true,
      download: "Nguyen_Quang_Huy_Full_Stack_Developer_CV.pdf",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="section-header text-center">
          <span className="section-tag">{t.contact.tag}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc">{t.contact.desc}</p>
        </div>

        <div className="contact-cards-container">
          {contactList.map((item) => (
            <div key={item.key} className="contact-pill-item">
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                download={"download" in item ? (item.download as string) : undefined}
                className="contact-pill-link"
                aria-label={item.label}
              >
                <div className="contact-pill-content">
                  <div className="contact-pill-icon">{item.icon}</div>
                  <span className="contact-pill-label">{item.label}</span>
                </div>

                <div className="contact-pill-actions">
                  <button
                    type="button"
                    onClick={(e) => handleCopy(item.copyValue, item.key, e)}
                    className="contact-copy-btn"
                    aria-label={`Copy ${item.label}`}
                    title="Copy"
                  >
                    {copiedKey === item.key ? (
                      <Check size={18} className="copy-success-icon" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                  <div className="contact-pill-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </a>

              {copiedKey === item.key && (
                <div className="contact-copied-toast">
                  {t.contact.copied || "Đã sao chép!"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
