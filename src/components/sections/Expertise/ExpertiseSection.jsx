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
    description: "Architecting modular, testable backend services designed for scale and enterprise workloads.",
    tools: ["NestJS", "GraphQL", "Prisma", "Supabase"],
    outputs: [
      "[Scalable microservices & modular API backends]",
      "[Strictly typed schema contracts and data pipelines]",
    ],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Engineering cross-platform mobile experiences with native performance and smooth interactions.",
    tools: ["React Native", "Expo", "TypeScript"],
    outputs: [
      "[Cross-platform iOS and Android releases]",
      "[Offline-capable mobile state management]",
    ],
  },
  {
    icon: FiDatabase,
    title: "Database Design",
    description: "Designing normalized relational schemas, query optimizations, and seamless migrations.",
    tools: ["PostgreSQL", "Prisma ORM", "Supabase"],
    outputs: [
      "[Normalized relational data architectures]",
      "[Performant indexed querying & migrations]",
    ],
  },
  {
    icon: FiShare2,
    title: "API Design",
    description: "Developing robust RESTful endpoints and declarative GraphQL APIs with tight type contracts.",
    tools: ["GraphQL", "Apollo", "REST", "OpenAPI"],
    outputs: [
      "[Typed GraphQL schema definitions]",
      "[Versioning, authentication & rate-limiting policies]",
    ],
  },
  {
    icon: FiFileText,
    title: "PDF / Document Generation",
    description: "Programmatic high-fidelity document generation engines for automated reports and invoices.",
    tools: ["Puppeteer", "Chromium", "HTML/CSS"],
    outputs: [
      "[Automated report card & transcript rendering]",
      "[Pixel-accurate print-ready PDF generation]",
    ],
  },
  {
    icon: FiCreditCard,
    title: "Payments Integration",
    description: "Implementing secure transaction workflows, payment gateways, and asynchronous webhooks.",
    tools: ["Paystack", "Webhooks", "Node.js"],
    outputs: [
      "[Secure checkout & transaction verifications]",
      "[Automated billing & payment event handling]",
    ],
  },
  {
    icon: FiWifiOff,
    title: "Offline-First Architecture",
    description: "Local-first persistence engines that synchronize reliably when network connectivity returns.",
    tools: ["WatermelonDB", "SQLite", "RxJS"],
    outputs: [
      "[Local-first sync engine implementations]",
      "[Conflict resolution & cached client stores]",
    ],
  },
  {
    icon: FiCpu,
    title: "Content & Automation Systems",
    description: "Building developer tooling, media transformation scripts, and workflow automation pipelines.",
    tools: ["Node.js", "Shell", "Git", "GitHub Actions"],
    outputs: [
      "[Automated media processing pipelines]",
      "[Developer workflow & build automations]",
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
