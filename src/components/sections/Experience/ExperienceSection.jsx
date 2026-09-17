import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ExperienceEntry from "./ExperienceEntry";

const EXPERIENCES = [
  {
    role: "[Full Stack Developer]",
    organization: "[Async Technologies]",
    period: "[June 2025 — Present]",
    location: "[Ilorin, Nigeria • Remote]",
    bullets: [
      "I lead development on MSGold's staff application — schemes, wallet, orders, finance, KYC, and notifications — for a platform serving roughly 10,000 customers and 168 staff across web, app, and admin.",
      "I also maintain MSGold's backend, admin dashboard, and customer-facing apps alongside the original build team, and I'm the lead developer on ZyncGold's customer web and mobile apps, covering live gold-rate updates and a full e-commerce flow from browsing to checkout.",
    ],
    projects: ["[MSGold Staff App]", "[ZyncGold Web & Mobile]"],
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
