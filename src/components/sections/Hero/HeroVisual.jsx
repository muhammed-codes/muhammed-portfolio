import React from "react";
import CornerFrame from "../../common/CornerFrame";
import AnnotationStrip from "../../common/AnnotationStrip";

export default function HeroVisual() {
  return (
    <CornerFrame className="w-full max-w-lg mx-auto lg:max-w-none">
      <div className="bg-surface border border-border flex flex-col">
        <AnnotationStrip
          sheet="MB-SYS-00"
          scale="1:1"
          discipline="FULLSTACK ENG"
        />

        <div className="p-6 font-mono text-body-sm flex flex-col gap-3 select-none">
          <div className="flex items-center justify-between border-b border-border pb-2 text-caption text-text-muted uppercase">
            <span>STATUS: ACTIVE DISPATCH</span>
            <span className="text-accent flex items-center gap-1.5">
              <span className="w-2 h-2 bg-accent inline-block" />
              ONLINE
            </span>
          </div>

          <div className="text-text-secondary flex flex-col gap-1.5 text-xs py-2">
            <div>
              <span className="text-accent">$</span> sysctl -a core.stack
            </div>
            <div className="text-text-primary font-semibold">
              &gt; BACKEND: NestJS, TypeScript, GraphQL, Prisma
            </div>
            <div className="text-text-primary font-semibold">
              &gt; MOBILE: React Native, Expo, WatermelonDB
            </div>
            <div className="text-text-primary font-semibold">
              &gt; DATABASE: PostgreSQL, Supabase
            </div>
            <div className="text-text-primary font-semibold">
              &gt; METHODOLOGY: Type-Safe APIs, Modular Design
            </div>
          </div>

          <div className="border-t border-border pt-3 flex items-center justify-between text-caption text-text-muted">
            <span>RUNTIME: NODE.JS / V8</span>
            <span>SPEC: RFC-2026-V2</span>
          </div>
        </div>
      </div>
    </CornerFrame>
  );
}
