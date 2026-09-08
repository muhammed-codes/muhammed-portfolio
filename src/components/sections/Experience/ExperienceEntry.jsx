import React from "react";
import TagChip from "../../common/TagChip";

export default function ExperienceEntry({
  role,
  organization,
  period,
  location,
  bullets = [],
  projects = [],
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-t border-border">
      <div className="lg:col-span-4 flex flex-col gap-1.5">
        <h3 className="font-display text-heading-lg text-text-primary uppercase tracking-tight">
          {role}
        </h3>
        <span className="font-display text-heading-md text-accent">
          {organization}
        </span>
        <div className="font-mono text-caption text-text-muted uppercase tracking-caption mt-1 flex items-center gap-2">
          <span>{period}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="lg:col-span-8 flex flex-col gap-4">
        <ul className="flex flex-col gap-2.5 text-body-sm text-text-secondary leading-relaxed">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent inline-block mt-2 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: bullet }} />
            </li>
          ))}
        </ul>

        {projects.length > 0 && (
          <div className="pt-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-caption text-text-muted uppercase tracking-caption font-semibold mr-1">
              KEY DELIVERABLES:
            </span>
            {projects.map((proj) => (
              <TagChip key={proj} label={proj} className="text-[11px] py-0.5 px-2.5" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
