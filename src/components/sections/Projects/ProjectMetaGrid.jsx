import React from "react";

export default function ProjectMetaGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-border my-4 bg-surface-alt p-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <span className="font-mono text-caption text-text-muted uppercase tracking-caption font-semibold">
            {item.label}
          </span>
          <span className="text-body-sm font-medium text-text-primary">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
