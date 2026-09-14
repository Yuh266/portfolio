"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header-row">
          <div>
            <span className="section-tag">{t.projects.tag}</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              {t.projects.title}
            </h2>
          </div>
          <a
            href={t.contactInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-all-projects"
          >
            {t.projects.viewAll}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="projects-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {t.projects.items.map((proj) => (
            <div key={proj.id} className="project-card">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-img-wrapper"
              >
                <Image
                  src={proj.image}
                  alt={proj.name}
                  width={400}
                  height={260}
                  className="project-img"
                />
              </a>

              <div className="project-card-body">
                <div className="project-top-row">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-name"
                    style={{ textDecoration: "none" }}
                  >
                    {proj.name}
                  </a>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow-icon"
                    aria-label={`View ${proj.name}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <div className="project-type">{proj.type}</div>

                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
