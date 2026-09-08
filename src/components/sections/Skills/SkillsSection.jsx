import React, { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import SkillsFilterTabs from "./SkillsFilterTabs";
import SkillCard from "./SkillCard";

const ALL_SKILLS = [
  {
    name: "NestJS",
    category: "BACKEND",
    tier: "CORE COMPETENCY",
    description: "Enterprise Node.js framework for scalable modular server architectures and dependency injection.",
  },
  {
    name: "TypeScript",
    category: "BACKEND",
    tier: "CORE COMPETENCY",
    description: "Strictly typed contracts and interfaces across full-stack backend, frontend, and mobile codebases.",
  },
  {
    name: "React Native",
    category: "MOBILE",
    tier: "ADVANCED",
    description: "Cross-platform mobile application engineering with Expo, camera APIs, and native device modules.",
  },
  {
    name: "React",
    category: "FRONTEND",
    tier: "ADVANCED",
    description: "Component-driven responsive web applications, modern hooks, and state management architectures.",
  },
  {
    name: "PostgreSQL",
    category: "DATABASE & TOOLS",
    tier: "ADVANCED",
    description: "Relational database modeling, complex queries, indexing optimizations, and data integrity constraints.",
  },
  {
    name: "Prisma ORM",
    category: "DATABASE & TOOLS",
    tier: "ADVANCED",
    description: "Type-safe database modeling, automated client generation, and schema migration workflows.",
  },
  {
    name: "GraphQL",
    category: "BACKEND",
    tier: "PROFICIENT",
    description: "Declarative API schemas, Apollo server resolvers, and client data query optimizations.",
  },
  {
    name: "Next.js",
    category: "FRONTEND",
    tier: "PROFICIENT",
    description: "Server-side rendering, static site generation, and optimized full-stack React routing.",
  },
  {
    name: "Supabase",
    category: "DATABASE & TOOLS",
    tier: "PROFICIENT",
    description: "Backend-as-a-service, PostgreSQL database hosting, row-level security, and authentication.",
  },
  {
    name: "Tailwind CSS",
    category: "FRONTEND",
    tier: "CORE COMPETENCY",
    description: "Utility-first design token-driven styling systems, layout grids, and responsive components.",
  },
  {
    name: "WatermelonDB",
    category: "MOBILE",
    tier: "PROFICIENT",
    description: "High-performance reactive local-first database with lazy loading and background sync.",
  },
  {
    name: "Git & CI/CD",
    category: "DATABASE & TOOLS",
    tier: "CORE COMPETENCY",
    description: "Git flow, automated test pipelines, GitHub Actions, and release deployments.",
  },
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
          metaBottom="TOTAL ENTRIES: 12 MODULES"
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
