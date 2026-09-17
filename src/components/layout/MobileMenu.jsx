import React from "react";
import { FiSend, FiFileText } from "react-icons/fi";
import { NAV_ITEMS } from "./NavLinks";
import Button from "../common/Button";

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[72px] bg-bg z-40 lg:hidden flex flex-col border-b border-border p-6 overflow-y-auto">
      <nav className="flex flex-col gap-5 mb-8" aria-label="Mobile Navigation">
        {NAV_ITEMS.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between py-2 border-b border-border font-mono text-sm uppercase tracking-wide ${
                isActive ? "text-accent font-bold" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{item.label}</span>
              {isActive && <span className="w-2 h-2 bg-accent" />}
            </a>
          );
        })}
      </nav>

      <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-border">
        <Button
          variant="accent"
          href="#contact"
          icon={FiSend}
          onClick={onClose}
          className="w-full"
        >
          [INITIALIZE CONTACT]
        </Button>
        <Button
          variant="ghost"
          href="https://drive.google.com/file/d/1EZdFahm547ANK1coRXYegMehbogieXm0/view?usp=sharing"
          target="_blank"
          icon={FiFileText}
          onClick={onClose}
          className="w-full"
        >
          [DOWNLOAD RESUME]
        </Button>
      </div>
    </div>
  );
}
