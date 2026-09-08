import React from "react";
import SectionHeader from "../../common/SectionHeader";
import AboutBio from "./AboutBio";
import AboutWorkflowGrid from "./AboutWorkflowGrid";
import AboutVisual from "./AboutVisual";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="01 // OVERVIEW"
          title="ABOUT"
          highlight="ME"
          metaTop="DISCIPLINE: SOFTWARE ENG"
          metaBottom="SPEC: ARCHITECTURE & SYSTEMS"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col">
            <AboutBio />
            <AboutWorkflowGrid />
          </div>
          <div className="lg:col-span-5">
            <AboutVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
