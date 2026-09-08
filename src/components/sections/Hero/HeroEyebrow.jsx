import React from "react";

export default function HeroEyebrow({
  role = "[SOFTWARE ENGINEER]",
  location = "[ILORIN, NIGERIA]",
}) {
  return (
    <div className="flex items-center gap-3 mb-4 select-none">
      <span className="w-6 h-[2px] bg-accent inline-block" />
      <span className="font-mono text-label uppercase tracking-mono text-accent">
        {role} • {location}
      </span>
    </div>
  );
}
