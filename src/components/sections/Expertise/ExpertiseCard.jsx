import React from "react";
import IndexNumber from "../../common/IndexNumber";
import TagChip from "../../common/TagChip";

export default function ExpertiseCard({
  index,
  icon: Icon,
  title,
  description,
  tools = [],
  outputs = [],
}) {
  return (
    <div className="bg-surface border border-border p-6 flex flex-col justify-between hover:border-border-strong transition-colors duration-200">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 border border-border-accent flex items-center justify-center text-accent shrink-0">
            {Icon && <Icon className="w-5 h-5" />}
          </div>
          <IndexNumber index={index} />
        </div>

        <h3 className="font-display text-heading-lg text-text-primary mb-2">
          {title}
        </h3>

        <p className="text-body-sm text-text-secondary mb-6">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="border-t border-border pt-4">
          <span className="font-mono text-caption text-text-muted uppercase tracking-caption block mb-2 font-medium">
            PRIMARY TOOLS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <TagChip key={tool} label={tool} className="text-[11px] py-0.5 px-2" />
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <span className="font-mono text-caption text-text-muted uppercase tracking-caption block mb-2 font-medium">
            KEY OUTPUTS
          </span>
          <ul className="flex flex-col gap-1.5 text-xs text-text-secondary font-mono">
            {outputs.map((out, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent inline-block mt-1 shrink-0" />
                <span>{out}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
