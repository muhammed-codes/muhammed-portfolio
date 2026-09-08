import React from "react";
import { FiMail, FiMessageSquare, FiGithub, FiTwitter, FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function ContactMeta() {
  const channels = [
    {
      label: "EMAIL DISPATCH",
      value: "bellomuhammedoladimeji@gmail.com",
      href: "mailto:bellomuhammedoladimeji@gmail.com",
      icon: FiMail,
    },
    {
      label: "WHATSAPP CHANNEL",
      value: "+2348160374083",
      href: "https://wa.me/2348160374083",
      icon: FiMessageSquare,
    },
    {
      label: "GITHUB REPOSITORY",
      value: "github.com/muhammed-codes",
      href: "https://github.com/muhammed-codes",
      icon: FiGithub,
    },
    {
      label: "X / TWITTER",
      value: "@muhammedbello_",
      href: "https://x.com/muhammedbello_",
      icon: FiTwitter,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-label uppercase tracking-mono text-accent">
          {"// SPECIFICATION // DIRECT DISPATCH"}
        </span>
        <p className="text-body-md text-text-secondary">
          [Open to opportunities for Full-Time roles, Contract engagements, and Technical Consulting.]
        </p>
      </div>

      <div className="flex flex-col gap-4 py-4 border-y border-border">
        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group focus-visible:outline-none"
          >
            <div className="w-8 h-8 border border-border flex items-center justify-center text-text-secondary group-hover:border-border-accent group-hover:text-accent transition-colors duration-200 shrink-0">
              <ch.icon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-caption text-text-muted uppercase tracking-caption">
                {ch.label}
              </span>
              <span className="text-body-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-200 font-mono">
                {ch.value}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2 text-caption font-mono text-text-muted">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-accent shrink-0" />
          <span>LOCATION: ILORIN, NIGERIA • REMOTE GLOBAL</span>
        </div>
        <div className="flex items-center gap-2">
          <FiCheckCircle className="text-accent shrink-0" />
          <span>RESPONSE TARGET: WITHIN 24 HOURS</span>
        </div>
      </div>
    </div>
  );
}
