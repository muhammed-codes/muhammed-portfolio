import React from "react";
import CornerFrame from "../../common/CornerFrame";
import AnnotationStrip from "../../common/AnnotationStrip";
import TagChip from "../../common/TagChip";
import ProjectMetaGrid from "./ProjectMetaGrid";
import Button from "../../common/Button";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({
  sheet,
  scale = "1:1",
  discipline,
  title,
  description,
  featured = false,
  meta = [],
  tags = [],
  demoUrl,
  codeUrl,
}) {
  const cardContent = (
    <div className="bg-surface border border-border flex flex-col justify-between h-full">
      <div>
        <AnnotationStrip
          sheet={sheet}
          scale={scale}
          discipline={discipline}
        />

        <div className="p-6">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="font-display text-heading-lg text-text-primary uppercase tracking-tight">
              {title}
            </h3>
            {featured && (
              <span className="px-2 py-0.5 border border-border-accent text-accent font-mono text-[10px] uppercase tracking-mono select-none">
                FEATURED
              </span>
            )}
          </div>

          <p className="text-body-sm text-text-secondary mb-4">
            {description}
          </p>

          <ProjectMetaGrid items={meta} />

          <div className="flex flex-col gap-2 mt-4">
            <span className="font-mono text-caption text-text-muted uppercase tracking-caption font-semibold">
              INPUTS &amp; ASSETS:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <TagChip key={tag} label={tag} className="text-[11px] py-0.5 px-2" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
        {demoUrl && (
          <Button
            variant="inverse"
            href={demoUrl}
            target="_blank"
            icon={FiExternalLink}
            className="text-xs py-2 px-4"
          >
            [LIVE DEMO]
          </Button>
        )}
        {codeUrl && (
          <Button
            variant="ghost"
            href={codeUrl}
            target="_blank"
            icon={FiGithub}
            className="text-xs py-2 px-4"
          >
            [SOURCE REPO]
          </Button>
        )}
      </div>
    </div>
  );

  if (featured) {
    return <CornerFrame className="h-full">{cardContent}</CornerFrame>;
  }

  return cardContent;
}
