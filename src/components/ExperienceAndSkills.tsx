"use client";

import React from "react";
import {
  Settings,
  MapPin,
  Building2,
  Briefcase,
  ExternalLink
} from "lucide-react";
import {
  PhpIcon,
  LaravelIcon,
  RestApiIcon,
  MysqlIcon,
  PostgresIcon,
  RedisIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  TailwindIcon,
  BootstrapIcon,
  ReactIcon,
  VueIcon,
  IonicIcon,
  GitIcon,
  GithubIcon,
  LinuxIcon,
  NginxIcon,
  PostmanIcon,
  ApiIntegrationIcon,
  QueueIcon,
  AiBrainIcon,
  SparklesIcon
} from "./TechIcons";
import { useApp } from "@/context/AppContext";

export default function ExperienceAndSkills() {
  const { t } = useApp();

  return (
    <section id="experience" className="exp-skills-section">
      <div className="container exp-skills-grid">
        {/* Left Column: Work Experience */}
        <div>
          <span className="section-tag">{t.experience.tag}</span>
          <h2 className="section-title">{t.experience.title}</h2>

          <div className="timeline-list">
            {t.experience.jobs.map((job, idx) => (
              <div key={job.company + idx} className="timeline-item">
                <div className="timeline-date">{job.date}</div>
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className={`company-logo-badge ${idx === 0 ? "gapmove" : "travel"}`}>
                      {idx === 0 ? <Building2 size={22} /> : <Briefcase size={22} />}
                    </div>
                    <div className="timeline-company-info">
                      <h3 className="company-name">{job.company}</h3>
                      <div className="role-title">{job.role}</div>
                    </div>
                    <div className="timeline-meta-tags">
                      <span>
                        <MapPin
                          size={13}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                            marginRight: 3,
                          }}
                        />
                        {job.location}
                      </span>
                      <span className={`type-pill ${job.type === "fulltime" ? "fulltime" : "freelance"}`}>
                        {job.type === "fulltime" ? t.experience.fulltime : t.experience.intern}
                      </span>
                    </div>
                  </div>

                  <ul className="timeline-bullet-list">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Technical Skills */}
        <div id="skills">


          {/* Technical Skills */}
          <div className="sidebar-section-title">
            <Settings size={20} />
            <span>{t.skills.title}</span>
          </div>

          <div className="skills-group-list">
            {/* Back-end */}
            <div className="skills-group">
              <div className="group-title">{t.skills.backend}</div>
              <div className="skill-badges-row">
                <div className="skill-badge">
                  <PhpIcon />
                  <span>PHP</span>
                </div>
                <div className="skill-badge">
                  <LaravelIcon />
                  <span>Laravel</span>
                </div>
                <div className="skill-badge">
                  <RestApiIcon />
                  <span>RESTful APIs</span>
                </div>
                <div className="skill-badge">
                  <QueueIcon />
                  <span>Queues & Jobs</span>
                </div>
                <div className="skill-badge">
                  <span>Eloquent ORM</span>
                </div>
                <div className="skill-badge">
                  <span>Authentication</span>
                </div>
              </div>
            </div>

            {/* Database & Cache */}
            <div className="skills-group">
              <div className="group-title">{t.skills.database}</div>
              <div className="skill-badges-row">
                <div className="skill-badge">
                  <MysqlIcon />
                  <span>MySQL</span>
                </div>
                <div className="skill-badge">
                  <PostgresIcon />
                  <span>PostgreSQL</span>
                </div>
                <div className="skill-badge">
                  <RedisIcon />
                  <span>Redis</span>
                </div>
              </div>
            </div>

            {/* Front-end */}
            <div className="skills-group">
              <div className="group-title">{t.skills.frontend}</div>
              <div className="skill-badges-row">
                <div className="skill-badge">
                  <ReactIcon />
                  <span>ReactJS</span>
                </div>
                <div className="skill-badge">
                  <VueIcon />
                  <span>Vue.js</span>
                </div>
                <div className="skill-badge">
                  <IonicIcon />
                  <span>Angular / Ionic</span>
                </div>
                <div className="skill-badge">
                  <JsIcon />
                  <span>JavaScript</span>
                </div>
                <div className="skill-badge">
                  <TsIcon />
                  <span>TypeScript</span>
                </div>
                <div className="skill-badge">
                  <HtmlIcon />
                  <span>HTML</span>
                </div>
                <div className="skill-badge">
                  <CssIcon />
                  <span>CSS</span>
                </div>
                <div className="skill-badge">
                  <TailwindIcon />
                  <span>Tailwind CSS</span>
                </div>
                <div className="skill-badge">
                  <BootstrapIcon />
                  <span>Bootstrap</span>
                </div>
                <div className="skill-badge">
                  <span>Blade</span>
                </div>
              </div>
            </div>

            {/* Tools & Deployment */}
            <div className="skills-group">
              <div className="group-title">{t.skills.tools}</div>
              <div className="skill-badges-row">
                <div className="skill-badge">
                  <GitIcon />
                  <span>Git</span>
                </div>
                <div className="skill-badge">
                  <GithubIcon />
                  <span>GitHub</span>
                </div>
                <div className="skill-badge">
                  <LinuxIcon />
                  <span>Linux Server</span>
                </div>
                <div className="skill-badge">
                  <NginxIcon />
                  <span>Nginx</span>
                </div>
                <div className="skill-badge">
                  <PostmanIcon />
                  <span>Postman</span>
                </div>
                <div className="skill-badge">
                  <ApiIntegrationIcon />
                  <span>API Integration</span>
                </div>
              </div>
            </div>

            {/* AI Skills */}
            <div className="skills-group">
              <div className="group-title" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <SparklesIcon />
                <span>{t.skills.aiSkills}</span>
              </div>
              <div className="skill-badges-row">
                <div className="skill-badge" style={{ borderColor: "#a855f7" }}>
                  <AiBrainIcon />
                  <span>AI API</span>
                </div>
                <div className="skill-badge">
                  <span>Prompt Engineering</span>
                </div>
                <div className="skill-badge">
                  <span>SSE Streaming</span>
                </div>
                <div className="skill-badge">
                  <span>AI Agents (Codex, Claude)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
