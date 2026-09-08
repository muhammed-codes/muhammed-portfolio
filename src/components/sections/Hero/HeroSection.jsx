import React from "react";
import BackgroundGrid from "../../common/BackgroundGrid";
import HeroEyebrow from "./HeroEyebrow";
import HeroHeadline from "./HeroHeadline";
import HeroCredentials from "./HeroCredentials";
import HeroActions from "./HeroActions";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <BackgroundGrid />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <HeroEyebrow />
            <HeroHeadline />
            <HeroCredentials />
            <HeroActions />
          </div>
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
