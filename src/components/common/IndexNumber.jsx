import React from "react";

export default function IndexNumber({ index, className = "" }) {
  const formatted = String(index).padStart(2, "0");
  return (
    <span
      className={`font-mono text-label text-text-muted uppercase tracking-mono select-none ${className}`}
    >
      {formatted}
    </span>
  );
}
