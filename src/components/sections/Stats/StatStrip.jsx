import React from "react";
import StatItem from "./StatItem";

const STATS = [
  {
    number: "[3+]",
    caption: "[YEARS EXPERIENCE]",
    sublabel: "[Full Stack & Mobile Systems]",
  },
  {
    number: "[NESTJS]",
    caption: "[CORE ARCHITECTURE]",
    sublabel: "[Enterprise Backends & GraphQL]",
  },
  {
    number: "[REACT NATIVE]",
    caption: "[MOBILE PLATFORMS]",
    sublabel: "[Cross-Platform iOS & Android]",
  },
  {
    number: "[NIGERIA]",
    caption: "[LOCATION & DISPATCH]",
    sublabel: "[Available For Global Remote]",
  },
];

export default function StatStrip() {
  return (
    <section className="border-t border-border bg-bg py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <StatItem
              key={idx}
              number={stat.number}
              caption={stat.caption}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
