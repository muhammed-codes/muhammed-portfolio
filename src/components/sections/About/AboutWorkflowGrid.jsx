import React from "react";
import TagChip from "../../common/TagChip";
import { FiCheck } from "react-icons/fi";

const WORKFLOW_ITEMS = [
  { label: "Backend Architecture", tool: "NestJS + Prisma" },
  { label: "Mobile Engineering", tool: "React Native + Expo" },
  { label: "Database Engineering", tool: "PostgreSQL + TypeORM/Prisma/MongoDB" },
  { label: "API Systems", tool: "REST + GraphQL" },
  { label: "Document Generation", tool: "Puppeteer + Chromium" },
  { label: "Payment Integrations", tool: "Paystack" },
  { label: "Offline-First Sync", tool: "WatermelonDB + SQLite" },
  { label: "Real-Time Systems", tool: "Socket.IO" },
  { label: "System Architecture", tool: "Modular & Type-Safe" },
];

export default function AboutWorkflowGrid() {
  return (
    <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border">
      <span className="font-mono text-label uppercase tracking-mono text-accent">
        {"// CORE WORKFLOW & DISCIPLINE MASTERY"}
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {WORKFLOW_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between p-3 bg-surface border border-border"
          >
            <div className="flex items-center gap-2">
              <FiCheck className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-sm font-medium text-text-primary">
                {item.label}
              </span>
            </div>
            <TagChip label={item.tool} className="text-[10px] py-0.5 px-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
