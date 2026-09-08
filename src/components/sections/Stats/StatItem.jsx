import React from "react";

export default function StatItem({ number, caption, sublabel }) {
  return (
    <div className="flex flex-col gap-1.5 py-4">
      <span className="font-display text-display-md text-text-primary uppercase tracking-tight leading-none">
        {number}
      </span>
      <span className="font-mono text-caption text-text-muted uppercase tracking-caption font-medium">
        {caption}
      </span>
      <span className="text-body-sm text-text-secondary">
        {sublabel}
      </span>
    </div>
  );
}
