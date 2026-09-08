import React from "react";

export default function CardShell({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={`bg-surface border border-border p-6 md:p-8 relative ${className}`}
    >
      {children}
    </Component>
  );
}
