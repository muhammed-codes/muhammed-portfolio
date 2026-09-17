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
    caption: "[CORE BACKEND FRAMEWORK]",
    sublabel: "[Core backend framework I build with daily]",
  },
  {
    number: "[REACT NATIVE]",
    caption: "[CROSS-PLATFORM MOBILE]",
    sublabel: "[Cross-platform mobile, iOS & Android]",
  },
  {
    number: "[NIGERIA]",
    caption: "[LOCATION]",
    sublabel: "[Based in Ilorin, open to remote work globally]",
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
