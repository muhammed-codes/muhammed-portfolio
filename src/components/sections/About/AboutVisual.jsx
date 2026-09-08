import React from "react";
import CornerFrame from "../../common/CornerFrame";
import AnnotationStrip from "../../common/AnnotationStrip";

export default function AboutVisual() {
  return (
    <CornerFrame className="w-full">
      <div className="bg-surface border border-border flex flex-col">
        <AnnotationStrip
          sheet="ARCH-MOD-01"
          scale="1:1"
          discipline="SYSTEM DESIGN"
        />

        <div className="p-6 font-mono text-xs flex flex-col gap-4">
          <div className="border-b border-border pb-3">
            <span className="text-caption text-text-muted uppercase tracking-caption block mb-1">
              SPECIFICATION // ARCHITECTURAL TARGET
            </span>
            <span className="text-text-primary text-sm font-bold block">
              [HIGH-RELIABILITY MODULAR PLATFORMS]
            </span>
          </div>

          <div className="bg-surface-alt p-4 border border-border flex flex-col gap-2">
            <span className="text-accent font-semibold">{"// PIPELINE STAGES"}</span>
            <div className="text-text-secondary flex flex-col gap-1">
              <div>01. SCHEMA MODELING &amp; PRISMA MIGRATIONS</div>
              <div>02. MODULAR NESTJS SERVICES &amp; RESOLVERS</div>
              <div>03. CROSS-PLATFORM MOBILE INTEGRATION</div>
              <div>04. OFFLINE REPLICATION &amp; SYNC CONFLICT RESOLUTION</div>
              <div>05. AUTOMATED CI/CD &amp; QUALITY ASSURANCE</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border text-caption text-text-muted">
            <div>
              <span className="block text-accent">STANDARDS</span>
              <span>REST / GRAPHQL / ACID</span>
            </div>
            <div>
              <span className="block text-accent">ENV</span>
              <span>NODE.JS / LINUX / DOCKER</span>
            </div>
          </div>
        </div>
      </div>
    </CornerFrame>
  );
}
