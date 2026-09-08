import React from "react";

export default function HeroHeadline({
  name = "[MUHAMMED BELLO]",
  subheadline = "[FullStack Engineer & Technical Problem Solver]",
  intro = "[Building scalable web applications, mobile platforms, and robust backend architectures with modern engineering practices.]",
}) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <h1 className="text-display-xl font-display text-text-primary uppercase tracking-tight leading-none">
        {name}
      </h1>
      <p className="font-display text-heading-md text-text-primary tracking-tight">
        {subheadline}
      </p>
      <p className="text-body-md text-text-secondary max-w-xl">
        {intro}
      </p>
    </div>
  );
}
