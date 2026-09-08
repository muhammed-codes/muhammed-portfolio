import React from "react";

export const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function NavLinks({ activeSection = "home" }) {
  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = activeSection === id;
        return (
          <a
            key={item.label}
            href={item.href}
            className={`relative py-1 font-mono text-xs uppercase tracking-wide transition-colors duration-200 select-none ${
              isActive ? "text-text-primary font-semibold" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
