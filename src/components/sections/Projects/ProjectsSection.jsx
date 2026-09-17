import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    featured: true,
    sheet: "SP-SYS-01",
    discipline: "FULLSTACK SAAS",
    title: "[SchoolPilot]",
    description: "[A full school management platform I built solo — academic operations, attendance, admissions, fees, timetables, and HR, all in one system.]",
    meta: [
      { label: "ROLE", value: "[Solo Full-Stack Developer]" },
      { label: "STACK", value: "[NestJS, GraphQL, Next.js, React Native, PostgreSQL, Supabase, Tailwind CSS, Paystack]" },
      { label: "OUTCOME", value: "[Automated report-card generation, cutting manual processing time by 60%]" },
      { label: "STATUS", value: "[Live — in use by a school, serving hundreds of students]" },
    ],
    tags: ["[NestJS]", "[GraphQL]", "[Next.js]", "[React Native]", "[PostgreSQL]", "[Supabase]", "[Tailwind CSS]", "[Paystack]"],
    codeUrl: "https://github.com/muhammed-codes",
  },
  {
    featured: false,
    sheet: "MS-SYS-02",
    discipline: "GOLD & JEWELLERY PLATFORM",
    title: "[MSGold]",
    description: "[The staff and customer platform behind a gold and jewellery business serving roughly 10,000 customers and 168 staff.]",
    meta: [
      { label: "ROLE", value: "[Lead Developer, Staff Application]" },
      { label: "STACK", value: "[NestJS, GraphQL, Next.js, React Native/Expo, Firebase, MongoDB]" },
      { label: "OUTCOME", value: "[Own every staff-app module — schemes, wallet, orders, finance, KYC]" },
      { label: "STATUS", value: "[Live / Production]" },
    ],
    tags: ["[NestJS]", "[GraphQL]", "[Next.js]", "[React Native/Expo]", "[Firebase]", "[MongoDB]"],
  },
  {
    featured: false,
    sheet: "ZG-SYS-03",
    discipline: "GOLD COMMERCE",
    title: "[ZyncGold]",
    description: "[A gold-commerce platform with live rate tracking and a full e-commerce experience, from browsing to checkout.]",
    meta: [
      { label: "ROLE", value: "[Lead Developer, Web & Mobile]" },
      { label: "STACK", value: "[Next.js, React Native/Expo, GraphQL, Firebase]" },
      { label: "OUTCOME", value: "[Live gold-rate updates and complete order/wallet/KYC flow]" },
      { label: "STATUS", value: "[Live / Production]" },
    ],
    tags: ["[Next.js]", "[React Native/Expo]", "[GraphQL]", "[Firebase]"],
  },
  {
    featured: false,
    sheet: "TK-SYS-04",
    discipline: "OFFLINE-FIRST MOBILE",
    title: "[Taskr]",
    description: "[An offline-first productivity workspace built solo — tasks, habits, goals, and team spaces that stay fast with or without a connection.]",
    meta: [
      { label: "ROLE", value: "[Solo System Architect]" },
      { label: "STACK", value: "[NestJS, Prisma, React Native, WatermelonDB, Socket.IO]" },
      { label: "OUTCOME", value: "[Zero-latency local database operations with reliable sync and conflict resolution]" },
      { label: "STATUS", value: "[Architecture & Prototype]" },
    ],
    tags: ["[NestJS]", "[Prisma]", "[React Native]", "[WatermelonDB]", "[Socket.IO]"],
  },
  {
    featured: false,
    sheet: "EM-SYS-05",
    discipline: "MOBILE APP",
    title: "[Ember]",
    description: "[A habit and behaviour-change app I co-built — I designed and built the entire interface.]",
    meta: [
      { label: "ROLE", value: "[UI/UX Design & Frontend Engineering]" },
      { label: "STACK", value: "[React Native, Expo, TypeScript]" },
      { label: "OUTCOME", value: "[Full interface for habit scheduling, streak tracking, budgeting, and analytics]" },
      { label: "STATUS", value: "[Recently launched]" },
    ],
    tags: ["[React Native]", "[Expo]", "[TypeScript]"],
  },
  {
    featured: false,
    sheet: "DV-SYS-06",
    discipline: "VIDEO AUTOMATION",
    title: "[Documentary Video Automation Engine]",
    description: "[An automated production system I designed and built for my own YouTube documentary work — turns voiceover, footage, and a transcript into a publish-ready ~15-minute video without manual scene-by-scene editing.]",
    meta: [
      { label: "ROLE", value: "[Solo Developer]" },
      { label: "STACK", value: "[React-based video composition, structured transcript/episode data pipelines]" },
      { label: "OUTCOME", value: "[Automated captioning, title/lower-third/quote cards, kinetic typography, charts, transitions, and rendering]" },
      { label: "STATUS", value: "[In active personal use]" },
    ],
    tags: ["[React-based video composition]", "[Structured transcript/episode data pipelines]"],
  },
  {
    featured: false,
    sheet: "TR-SYS-07",
    discipline: "HIGHER-EDUCATION",
    title: "[Tracheids]",
    description: "[A higher-education management platform I contribute to as a volunteer, focused on the maps-based attendance and venue tracking module.]",
    meta: [
      { label: "ROLE", value: "[Volunteer Contributor]" },
      { label: "OUTCOME", value: "[Lecturers select teaching halls via a map; the system tracks venue usage duration and determines presence-based student attendance]" },
      { label: "STATUS", value: "[Volunteer / Ongoing]" },
    ],
    tags: [],
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
          metaTop="PORTFOLIO SPEC: 07 CASE STUDIES"
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
