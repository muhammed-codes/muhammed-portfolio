import React, { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import SkillsFilterTabs from "./SkillsFilterTabs";
import SkillCard from "./SkillCard";

const ALL_SKILLS = [
  { name: "NestJS", category: "BACKEND", tier: "", description: "Backend — the framework I use daily for modular, production-grade services." },
  { name: "TypeScript", category: "BACKEND", tier: "", description: "Backend/Frontend/Mobile — typed contracts across every layer I build." },
  { name: "React Native", category: "MOBILE", tier: "", description: "Mobile — cross-platform apps with Expo, shipped and in active use." },
  { name: "React / Next.js", category: "FRONTEND", tier: "", description: "Frontend — dashboards and admin panels for the platforms I build." },
  { name: "PostgreSQL", category: "DATABASE & TOOLS", tier: "", description: "Database — relational modelling and query design for production data." },
  { name: "MongoDB", category: "DATABASE & TOOLS", tier: "", description: "Database — used on MSGold's backend alongside PostgreSQL." },
  { name: "Prisma / TypeORM", category: "DATABASE & TOOLS", tier: "", description: "Database — schema modelling, migrations, type-safe data access." },
  { name: "Supabase", category: "DATABASE & TOOLS", tier: "", description: "Database/Backend — used on SchoolPilot for backend services." },
  { name: "GraphQL / Apollo", category: "BACKEND", tier: "", description: "Backend — API schemas and resolvers behind every product I currently maintain." },
  { name: "WatermelonDB", category: "MOBILE", tier: "", description: "Mobile — offline-first local database for Taskr." },
  { name: "Socket.IO", category: "DATABASE & TOOLS", tier: "", description: "Real-time — live updates across mobile and web clients." },
  { name: "Firebase", category: "DATABASE & TOOLS", tier: "", description: "Backend/Mobile — notifications and auxiliary services for ZyncGold." },
  { name: "Paystack", category: "DATABASE & TOOLS", tier: "", description: "Payments — transaction handling for SchoolPilot's fees and finance module." },
  { name: "Tailwind CSS", category: "FRONTEND", tier: "", description: "Frontend — utility-first styling used on SchoolPilot." },
  { name: "Docker", category: "DATABASE & TOOLS", tier: "", description: "Environment — containerised deployment for backend services." },
  { name: "Git & CI/CD", category: "DATABASE & TOOLS", tier: "", description: "Workflow — version control and deployment pipelines across all active projects." },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredSkills =
    activeCategory === "ALL"
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="03 // TECHNICAL STACK"
          title="CORE"
          highlight="PROFICIENCIES"
          metaTop="EVALUATION: SELF-AUDITED"
          metaBottom="TOTAL ENTRIES: 16 MODULES"
        />

        <SkillsFilterTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              category={skill.category}
              tier={skill.tier}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
