import React from "react";

export default function FooterIdentity({
  mark = "[M]",
  name = "[MUHAMMED BELLO]",
  role = "[SOFTWARE ENGINEER]",
  summary = "[NestJS • React Native • TypeScript • Cloud Architecture]",
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border border-border-accent flex items-center justify-center font-display text-accent text-base select-none">
          {mark.replace(/[[\]]/g, "")}
        </div>
        <div className="flex flex-col">
          <span className="font-display text-sm text-text-primary uppercase tracking-tight">
            {name}
          </span>
          <span className="font-mono text-caption text-text-muted uppercase tracking-caption">
            {role}
          </span>
        </div>
      </div>
      <p className="font-mono text-body-sm text-text-secondary max-w-sm mt-2">
        {summary}
      </p>
    </div>
  );
}
