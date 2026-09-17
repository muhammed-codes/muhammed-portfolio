import React from "react";
import Button from "../../common/Button";
import { FiArrowDownRight, FiSend, FiFileText } from "react-icons/fi";

export default function HeroActions() {
  // content.md provides no replacement copy for the existing action buttons; preserve them.
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="inverse" href="#projects" icon={FiArrowDownRight}>
        [View my work]
      </Button>
      <Button variant="ghost" href="#contact" icon={FiSend}>
        [Contact me]
      </Button>
      <Button
        variant="accent"
        href="https://drive.google.com/file/d/1EZdFahm547ANK1coRXYegMehbogieXm0/view?usp=sharing"
        target="_blank"
        icon={FiFileText}
      >
        [Download Resume]
      </Button>
    </div>
  );
}
