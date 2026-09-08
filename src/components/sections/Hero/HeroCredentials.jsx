import React from "react";
import TagChip from "../../common/TagChip";
import { FiCheckCircle } from "react-icons/fi";

export default function HeroCredentials() {
  const credentials = [
    "[3+ Years Engineering]",
    "[FullStack Architecture]",
    "[Remote & Contract Ready]",
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {credentials.map((cred) => (
        <TagChip key={cred} label={cred} icon={FiCheckCircle} />
      ))}
    </div>
  );
}
