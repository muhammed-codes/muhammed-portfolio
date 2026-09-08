import React from "react";

export const SKILL_CATEGORIES = [
  "ALL",
  "BACKEND",
  "MOBILE",
  "FRONTEND",
  "DATABASE & TOOLS",
];

export default function SkillsFilterTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 select-none">
      {SKILL_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2 rounded-sm font-mono text-xs uppercase tracking-wide transition-colors duration-200 cursor-pointer ${
              isActive
                ? "bg-inverse-bg text-inverse-fg font-bold"
                : "bg-transparent border border-border text-text-secondary hover:border-border-strong hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
