import React from "react";
import { Toaster } from "react-hot-toast";
import SectionHeader from "../../common/SectionHeader";
import ContactMeta from "./ContactMeta";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border bg-bg">
      <Toaster position="top-right" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="06 // TRANSMITTAL"
          title="INITIALIZE"
          highlight="DISPATCH"
          metaTop="GATEWAY: WEB3 PROTOCOL"
          metaBottom="STATUS: READY FOR TRANSMISSION"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ContactMeta />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
