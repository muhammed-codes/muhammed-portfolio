import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ExpertiseCard from "./ExpertiseCard";
import {
  FiServer,
  FiSmartphone,
  FiDatabase,
  FiShare2,
  FiFileText,
  FiCreditCard,
  FiWifiOff,
  FiCpu,
} from "react-icons/fi";

const CAPABILITIES = [
  {
    icon: FiServer,
    title: "Backend Architecture",
    description: "I design modular backend services meant to hold up under real, ongoing usage — not just pass a demo.",
    tools: ["NestJS", "GraphQL", "Prisma", "TypeORM"],
    outputs: [
      "[Modular API backends powering multiple live products]",
      "[Typed schema contracts across services]",
    ],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps that feel native, not like a compromise.",
    tools: ["React Native", "Expo", "TypeScript"],
    outputs: [
      "[Shipped iOS & Android apps in active use]",
      "[Offline-capable mobile state management]",
    ],
  },
  {
    icon: FiDatabase,
    title: "Database Design",
    description: "Relational and non-relational schemas built to stay correct as data and usage grow.",
    tools: ["PostgreSQL", "Prisma", "TypeORM", "Supabase", "MongoDB"],
    outputs: [
      "[Normalized schemas across multiple production systems]",
      "[Query optimisation and migrations]",
    ],
  },
  {
    icon: FiShare2,
    title: "API Design",
    description: "REST and GraphQL APIs with contracts I actually trust across frontend, backend, and mobile.",
    tools: ["GraphQL", "Apollo", "REST"],
    outputs: [
      "[Shared GraphQL contracts spanning backend, admin, and mobile clients]",
      "[Authentication and access-control policies]",
    ],
  },
  {
    icon: FiFileText,
    title: "Document Generation",
    description: "Automated, print-accurate document generation for real institutional use.",
    tools: ["Puppeteer", "Chromium", "HTML/CSS"],
    outputs: [
      "[Automated report-card generation for SchoolPilot, cutting manual processing time by 60%]",
      "[Pixel-accurate print-ready PDF output]",
    ],
  },
  {
    icon: FiCreditCard,
    title: "Payments Integration",
    description: "Secure transaction flows built into SchoolPilot's fees and finance module.",
    tools: ["Paystack"],
    outputs: [
      "[Fee and payment handling as part of SchoolPilot's finance system]",
    ],
  },
  {
    icon: FiWifiOff,
    title: "Offline-First Architecture",
    description: "Local-first systems that stay fast and correct with or without a connection.",
    tools: ["WatermelonDB", "SQLite"],
    outputs: [
      "[Zero-latency local database operations on Taskr]",
      "[Sync and conflict resolution for offline-first mobile clients]",
    ],
  },
  {
    icon: FiCpu,
    title: "Real-Time & Financial Flows",
    description: "Building the wallet, order, and notification flows that gold-commerce platforms depend on.",
    tools: ["Socket.IO", "GraphQL", "Firebase"],
    outputs: [
      "[Real-time order and wallet updates across MSGold and ZyncGold]",
      "[Live gold-rate updates on ZyncGold]",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 md:py-32 border-t border-border bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="02 // CAPABILITIES"
          title="ENGINEERING"
          highlight="EXPERTISE"
          metaTop="FRAMEWORK: MODULAR & SCALABLE"
          metaBottom="CAPABILITY COUNT: 08 UNITS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((item, idx) => (
            <ExpertiseCard
              key={item.title}
              index={idx + 1}
              icon={item.icon}
              title={item.title}
              description={item.description}
              tools={item.tools}
              outputs={item.outputs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
