import React from "react";

export default function AnnotationStrip({
  sheet = "GA-SYS-01",
  scale = "1:1",
  discipline = "SOFTWARE ENG",
  className = "",
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-bg/90 border-b border-border font-mono text-caption uppercase tracking-caption text-text-muted select-none ${className}`}
    >
      <span className="text-accent font-semibold">SHEET: {sheet}</span>
      <span>SCALE: {scale}</span>
      <span>DISCIPLINE: {discipline}</span>
    </div>
  );
}
