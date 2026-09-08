import React from "react";

export default function SkillCard({ name, category, tier, description }) {
  let badgeClasses = "border-border text-text-secondary";
  if (tier === "CORE COMPETENCY") {
    badgeClasses = "border-border-accent text-accent";
  } else if (tier === "ADVANCED") {
    badgeClasses = "border-border-strong text-text-primary";
  }

  return (
    <div className="bg-surface border border-border p-6 flex flex-col justify-between hover:border-border-strong transition-colors duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="font-display text-heading-md text-text-primary uppercase tracking-tight">
            {name}
          </h3>
          <span
            className={`px-2.5 py-0.5 border rounded-sm font-mono text-[10px] uppercase tracking-mono shrink-0 select-none ${badgeClasses}`}
          >
            {tier}
          </span>
        </div>
        <p className="font-mono text-body-sm text-text-secondary">
          {description}
        </p>
      </div>
      <div className="pt-4 mt-4 border-t border-border flex items-center justify-between font-mono text-caption text-text-muted">
        <span>CATEGORY: {category}</span>
        <span className="text-accent">{"// VERIFIED"}</span>
      </div>
    </div>
  );
}
