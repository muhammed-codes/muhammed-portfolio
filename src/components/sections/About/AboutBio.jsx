import React from "react";

export default function AboutBio() {
  return (
    <div className="flex flex-col gap-6">
      <blockquote className="border-l-2 border-border-accent pl-5 py-2 font-display text-heading-md text-text-primary italic leading-relaxed">
        &ldquo;[Building reliable, maintainable software systems through structured engineering discipline, rigorous architectural thinking, and clean API design.]&rdquo;
      </blockquote>

      <div className="flex flex-col gap-4 text-body-md text-text-secondary leading-relaxed">
        <p>
          [Software engineer focused on backend architecture, cross-platform mobile engineering, and web development with experience building reliable end-to-end applications.]
        </p>
        <p>
          [Working daily with <strong className="text-text-primary font-semibold">TypeScript</strong>, <strong className="text-text-primary font-semibold">NestJS</strong>, <strong className="text-text-primary font-semibold">React Native</strong>, <strong className="text-text-primary font-semibold">Prisma</strong>, and <strong className="text-text-primary font-semibold">PostgreSQL</strong> to build production-grade platforms.]
        </p>
        <p>
          [Committed to <em className="italic text-text-primary font-light">clean code principles</em>, systematic test coverage, technical documentation, and robust database design standards.]
        </p>
      </div>
    </div>
  );
}
