import React from "react";

export default function AboutBio() {
  return (
    <div className="flex flex-col gap-6">
      <blockquote className="border-l-2 border-border-accent pl-5 py-2 font-display text-heading-md text-text-primary italic leading-relaxed">
        &ldquo;I care about software that still makes sense a year after I shipped it — clean data models, typed contracts, and systems I'm not afraid to touch again.&rdquo;
      </blockquote>

      <div className="flex flex-col gap-4 text-body-md text-text-secondary leading-relaxed">
        <p>
          I'm a full stack developer working across backend architecture, mobile engineering, and web. Day to day that means TypeScript, NestJS, React Native/Expo, Prisma, and PostgreSQL — building things that go into production and stay there.
        </p>
        <p>
          Right now I lead development on a staff platform serving roughly 10,000 customers and 168 staff, and outside of that I've built and shipped several full-stack products on my own, end to end, including a school management system currently in live use by hundreds of students.
        </p>
        <p>
          I'm particular about clean code, test coverage, and database design that doesn't fall apart under real usage.
        </p>
      </div>
    </div>
  );
}
