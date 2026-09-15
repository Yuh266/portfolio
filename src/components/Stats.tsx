"use client";

import React from "react";
import { Briefcase, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Stats() {
  const { t } = useApp();

  const statsItems = [
    {
      icon: Briefcase,
      num: t.stats.expNum,
      title: t.stats.expTitle,
      sub: t.stats.expSub,
    },
    {
      icon: Layers,
      num: t.stats.projNum,
      title: t.stats.projTitle,
      sub: t.stats.projSub,
    },
    {
      icon: ShieldCheck,
      num: null,
      title: t.stats.clientsTitle,
      sub: t.stats.clientsSub,
    },
    {
      icon: Sparkles,
      num: null,
      title: t.stats.learningTitle,
      sub: t.stats.learningSub,
    },
  ];

  return (
    <div className="hero-stats-dock" id="stats-dock">
      {statsItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div className="stat-dock-item" key={index}>
            <div className="stat-dock-top">
              <div className="stat-dock-icon">
                <Icon size={20} />
              </div>
              {item.num && <span className="stat-dock-num">{item.num}</span>}
            </div>
            <div className="stat-dock-info">
              <span className="stat-dock-title">{item.title}</span>
              <span className="stat-dock-sub">{item.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

