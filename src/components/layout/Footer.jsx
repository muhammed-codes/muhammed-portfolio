import React from "react";
import FooterIdentity from "./FooterIdentity";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  // content.md provides no replacement copy for the footer; preserve it exactly.
  return (
    <footer className="border-t border-border bg-bg pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <FooterIdentity />
          </div>
          <div className="lg:col-span-2">
            <FooterLinks />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
