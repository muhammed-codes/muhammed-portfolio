import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    featured: true,
    sheet: "SP-SYS-01",
    discipline: "FULLSTACK SAAS",
    title: "[SchoolPilot]",
    description: "[Comprehensive school management SaaS featuring automated report-card generation and real-time administrative workflows.]",
    meta: [
      { label: "ROLE", value: "[Lead FullStack Engineer]" },
      { label: "STACK", value: "[NestJS, React Native, GraphQL]" },
      { label: "OUTCOME", value: "[Automated PDF generation & 60% faster turnaround]" },
      { label: "STATUS", value: "[Production / Private Deployment]" },
    ],
    tags: ["[NestJS]", "[React Native]", "[GraphQL]", "[Puppeteer]", "[Prisma]"],
    codeUrl: "https://github.com/muhammed-codes",
  },
  {
    featured: false,
    sheet: "FT-SYS-02",
    discipline: "SYSTEM ARCHITECTURE",
    title: "[Family Tree App]",
    description: "[Lineage visualization and chronicle storytelling engine with recursive relationships and rich media archiving.]",
    meta: [
      { label: "ROLE", value: "[Backend & Database Engineer]" },
      { label: "STACK", value: "[NestJS, Supabase, Prisma]" },
      { label: "OUTCOME", value: "[Recursive tree rendering & memory storytelling module]" },
      { label: "STATUS", value: "[Active Development]" },
    ],
    tags: ["[NestJS]", "[Supabase]", "[Prisma]", "[TypeScript]"],
    demoUrl: "https://royal-chuckles-family-portal.vercel.app/",
    codeUrl: "https://github.com/bomaolad/royal-chuckles-family-portal",
  },
  {
    featured: false,
    sheet: "TK-SYS-03",
    discipline: "OFFLINE-FIRST MOBILE",
    title: "[Taskr]",
    description: "[Offline-first mobile productivity system architected for instant responsiveness and transaction reconciliation.]",
    meta: [
      { label: "ROLE", value: "[System Architect]" },
      { label: "STACK", value: "[WatermelonDB, NestJS, Paystack]" },
      { label: "OUTCOME", value: "[Zero-latency local database ops & conflict resolution]" },
      { label: "STATUS", value: "[Architecture & Prototype]" },
    ],
    tags: ["[React Native]", "[WatermelonDB]", "[Paystack]", "[SQLite]"],
    codeUrl: "https://github.com/muhammed-codes",
  },
  {
    featured: false,
    sheet: "BC-SYS-04",
    discipline: "MOBILE UTILITY",
    title: "[Barcode Scanner App]",
    description: "[High-performance optical scanning utility reducing inventory lookups through rapid barcode and QR decoding.]",
    meta: [
      { label: "ROLE", value: "[Lead Mobile Developer]" },
      { label: "STACK", value: "[React Native, Expo, Camera API]" },
      { label: "OUTCOME", value: "[Reduced item lookup duration by 60%]" },
      { label: "STATUS", value: "[Shipped]" },
    ],
    tags: ["[React Native]", "[Expo]", "[Camera API]", "[TypeScript]"],
    demoUrl: "https://drive.google.com/drive/folders/1aBmXOo3XxE_ADhKiCiWuxh67S19TQ3J_?usp=sharing",
    codeUrl: "https://github.com/muhammed-codes/scan-item",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="05 // CASE STUDIES"
          title="SELECTED"
          highlight="WORK"
          metaTop="PORTFOLIO SPEC: 04 CASE STUDIES"
          metaBottom="RELEASE: PRODUCTION & ARCHITECTURE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((proj) => (
            <ProjectCard
              key={proj.sheet}
              featured={proj.featured}
              sheet={proj.sheet}
              discipline={proj.discipline}
              title={proj.title}
              description={proj.description}
              meta={proj.meta}
              tags={proj.tags}
              demoUrl={proj.demoUrl}
              codeUrl={proj.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
