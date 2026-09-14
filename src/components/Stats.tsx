"use client";

import React from "react";
import { Briefcase, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Stats() {
  const { t } = useApp();

  return (
    <div className="hero-stats-dock" id="stats-dock">
      {/* 1. Practical Experience */}
      <div className="stat-dock-item">
        <div className="stat-dock-icon">
          <Briefcase size={22} />
        </div>
        <div className="stat-dock-info">
          <span className="stat-dock-num">{t.stats.expNum}</span>
          <span className="stat-dock-title">{t.stats.expTitle}</span>
          <span className="stat-dock-sub">{t.stats.expSub}</span>
        </div>
      </div>

      {/* 2. Production Projects */}
      <div className="stat-dock-item">
        <div className="stat-dock-icon">
          <Layers size={22} />
        </div>
        <div className="stat-dock-info">
          <span className="stat-dock-num">{t.stats.projNum}</span>
          <span className="stat-dock-title">{t.stats.projTitle}</span>
          <span className="stat-dock-sub">{t.stats.projSub}</span>
        </div>
      </div>

      {/* 3. Architecture & Clean Code */}
      <div className="stat-dock-item">
        <div className="stat-dock-icon">
          <ShieldCheck size={22} />
        </div>
        <div className="stat-dock-info">
          <span className="stat-dock-title-only">{t.stats.clientsTitle}</span>
          <span className="stat-dock-sub">{t.stats.clientsSub}</span>
        </div>
      </div>

      {/* 4. Product Mindset & AI */}
      <div className="stat-dock-item">
        <div className="stat-dock-icon">
          <Sparkles size={22} />
        </div>
        <div className="stat-dock-info">
          <span className="stat-dock-title-only">{t.stats.learningTitle}</span>
          <span className="stat-dock-sub">{t.stats.learningSub}</span>
        </div>
      </div>
    </div>
  );
}
