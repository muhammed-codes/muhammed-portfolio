import React from "react";
import { FiGithub, FiTwitter, FiMail, FiMessageSquare } from "react-icons/fi";
import { NAV_ITEMS } from "./NavLinks";

export default function FooterLinks() {
  const socials = [
    { label: "GITHUB", href: "https://github.com/muhammed-codes", icon: FiGithub },
    { label: "X / TWITTER", href: "https://x.com/muhammedbello_", icon: FiTwitter },
    { label: "EMAIL", href: "mailto:bellomuhammedoladimeji@gmail.com", icon: FiMail },
    { label: "WHATSAPP", href: "https://wa.me/2348160374083", icon: FiMessageSquare },
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-label uppercase tracking-mono text-accent">
          {"// INDEX"}
        </span>
        <div className="flex flex-col gap-2">
          {NAV_ITEMS.slice(0, 5).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-body-sm text-text-muted hover:text-accent transition-colors duration-200 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-mono text-label uppercase tracking-mono text-accent">
          {"// DISPATCH"}
        </span>
        <div className="flex flex-col gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-body-sm text-text-muted hover:text-accent transition-colors duration-200 uppercase inline-flex items-center gap-2"
            >
              <social.icon className="w-3.5 h-3.5 shrink-0" />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
