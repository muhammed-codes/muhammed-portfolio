import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ExperienceEntry from "./ExperienceEntry";

const EXPERIENCES = [
  {
    role: "[Senior FullStack Engineer]",
    organization: "[Client Engagements & Contract]",
    period: "[2023 — PRESENT]",
    location: "[ILORIN, NIGERIA • REMOTE]",
    bullets: [
      "Architected and deployed <strong>scalable NestJS backends</strong> serving cross-platform clients with <strong>GraphQL APIs</strong>.",
      "Engineered <strong>automated PDF report generation</strong> using <strong>Puppeteer</strong>, reducing manual processing overhead by <strong>60%</strong>.",
      "Integrated secure <strong>Paystack payment processing</strong> with asynchronous webhook verification handling live transactions.",
    ],
    projects: ["[SchoolPilot]", "[Taskr]", "[Family Tree]"],
  },
  {
    role: "[Mobile Application Developer]",
    organization: "[Product Engineering & Freelance]",
    period: "[2022 — 2023]",
    location: "[REMOTE]",
    bullets: [
      "Built and shipped cross-platform <strong>React Native</strong> applications utilizing <strong>Expo</strong> and <strong>WatermelonDB</strong> for offline persistence.",
      "Implemented <strong>camera barcode & QR scanner</strong> modules boosting inventory lookup speeds by <strong>60%</strong>.",
      "Maintained <strong>strict TypeScript typing</strong> across UI component libraries and API data models.",
    ],
    projects: ["[Barcode Scanner App]", "[HRS Platform]"],
  },
  {
    role: "[Mathematics & Technical Educator]",
    organization: "[Akademiyyatul Bayaan]",
    period: "[2021 — 2022]",
    location: "[ILORIN, NIGERIA]",
    bullets: [
      "Instructed advanced mathematical foundations, emphasizing <strong>analytical problem solving</strong> and algorithmic logic.",
      "Developed structured curriculum and evaluated academic progress for <strong>100+ students</strong>.",
    ],
    projects: ["[Curriculum Design]", "[Analytical Problem Solving]"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="04 // CHRONOLOGY"
          title="WORK"
          highlight="EXPERIENCE"
          metaTop="RECORD: REVERSE CHRONOLOGICAL"
          metaBottom="DOMAIN: FULL-STACK & MOBILE"
        />

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceEntry
              key={idx}
              role={exp.role}
              organization={exp.organization}
              period={exp.period}
              location={exp.location}
              bullets={exp.bullets}
              projects={exp.projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
