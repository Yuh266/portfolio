"use client";

import React from "react";
import Image from "next/image";
import { Code2, Lightbulb, Users2, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-content">
          <span className="section-tag">{t.about.tag}</span>
          <h2 className="section-title">{t.about.title}</h2>

          <p className="about-desc">{t.about.desc}</p>

          <div className="about-features">
            <div className="about-feature-pill">
              <div className="feature-icon-circle">
                <Code2 size={20} />
              </div>
              <div className="feature-texts">
                <div className="feature-name">{t.about.cleanCode}</div>
                <div className="feature-sub">{t.about.cleanCodeSub}</div>
              </div>
            </div>

            <div className="about-feature-pill">
              <div className="feature-icon-circle">
                <Lightbulb size={20} />
              </div>
              <div className="feature-texts">
                <div className="feature-name">{t.about.problemSolving}</div>
                <div className="feature-sub">{t.about.problemSolvingSub}</div>
              </div>
            </div>

            <div className="about-feature-pill">
              <div className="feature-icon-circle">
                <Users2 size={20} />
              </div>
              <div className="feature-texts">
                <div className="feature-name">{t.about.teamWork}</div>
                <div className="feature-sub">{t.about.teamWorkSub}</div>
              </div>
            </div>
          </div>

          <a href="#experience" className="btn-primary" id="more-about-btn">
            {t.about.moreAbout}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="about-visual">
          <div className="about-image-card">
            <Image
              src="/images/about-plant.jpg"
              alt="About Nguyễn Quang"
              width={600}
              height={400}
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
