import React from "react";
import Button from "../../common/Button";
import { FiArrowDownRight, FiSend, FiFileText } from "react-icons/fi";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="inverse" href="#projects" icon={FiArrowDownRight}>
        [View my work]
      </Button>
      <Button variant="ghost" href="#contact" icon={FiSend}>
        [Contact me]
      </Button>
      <Button variant="accent" href="#contact" icon={FiFileText}>
        [Download Resume]
      </Button>
    </div>
  );
}
