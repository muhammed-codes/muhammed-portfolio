import React from "react";

export default function TagChip({
  label,
  variant = "default",
  icon: Icon,
  className = "",
}) {
  const borderClass =
    variant === "primary" || variant === "accent"
      ? "border-border-accent text-accent"
      : "border-border text-text-secondary";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-sm font-mono text-label uppercase tracking-mono bg-transparent ${borderClass} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 text-accent shrink-0" />}
      <span>{label}</span>
    </span>
  );
}
