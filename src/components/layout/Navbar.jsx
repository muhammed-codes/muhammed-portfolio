import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSend, FiFileText } from "react-icons/fi";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "expertise", "skills", "experience", "projects", "contact"];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const offsetTop = el.offsetTop - 120;
          if (scrollY >= offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-bg border-b border-border z-50 select-none">
      <div className="max-w-[1440px] h-full mx-auto px-6 lg:px-10 flex items-center justify-between">
        <NavLogo
          mark="[M]"
          name="[MUHAMMED BELLO]"
          tagline="[SOFTWARE ENGINEER]"
        />

        <NavLinks activeSection={activeSection} />

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="accent"
            href="#contact"
            icon={FiSend}
            className="text-xs uppercase py-2.5 px-4"
          >
            [CONTACT ME]
          </Button>

          <a
            href="#about"
            title="View Specifications"
            className="w-10 h-10 border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors duration-200"
          >
            <FiFileText className="w-4 h-4 text-text-secondary" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 border border-border flex items-center justify-center text-text-primary hover:border-border-strong transition-colors duration-200"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
}
