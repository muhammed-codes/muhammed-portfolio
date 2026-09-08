import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  metaTop,
  metaBottom,
  className = "",
}) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-[2px] bg-accent inline-block" />
        <span className="font-mono text-label uppercase tracking-mono text-accent">
          {eyebrow}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <h2 className="text-display-lg font-display text-text-primary uppercase tracking-tight">
          {title} {highlight && <em className="italic font-light text-accent not-italic">{highlight}</em>}
        </h2>
        {(metaTop || metaBottom) && (
          <div className="font-mono text-caption text-text-muted uppercase tracking-caption flex flex-col gap-1 border-l-2 lg:border-l-0 lg:border-r-2 border-border-accent pl-3 lg:pl-0 lg:pr-3 shrink-0">
            {metaTop && <span>{metaTop}</span>}
            {metaBottom && <span>{metaBottom}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
