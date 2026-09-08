import React from "react";

export default function NavLogo({
  mark = "[M]",
  name = "[MUHAMMED BELLO]",
  tagline = "[SOFTWARE ENGINEER]",
}) {
  return (
    <a href="#home" className="flex items-center gap-3 group focus-visible:outline-none">
      <div className="w-9 h-9 border border-border-accent flex items-center justify-center font-display text-accent text-base select-none shrink-0 group-hover:bg-surface-alt transition-colors duration-200">
        {mark.replace(/[[\]]/g, "")}
      </div>
      <div className="flex flex-col">
        <span className="font-display text-sm text-text-primary uppercase tracking-tight leading-tight">
          {name}
        </span>
        <span className="font-mono text-caption text-text-muted uppercase tracking-caption leading-tight">
          {tagline}
        </span>
      </div>
    </a>
  );
}
