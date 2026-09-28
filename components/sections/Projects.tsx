"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading, Chip } from "@/components/ui/Primitives";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  reducedMotion: boolean;
}

function ProjectCard({ project, reducedMotion }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -4 }}
      whileTap={reducedMotion ? undefined : { scale: 0.995 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group flex min-w-0 h-full flex-col rounded-md border border-line bg-panel p-4 transition-colors sm:p-5 md:p-6",
        "hover:border-signal/40",
        project.featured && "sm:col-span-2"
      )}
    >
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-mono text-2xs uppercase tracking-[0.16em] text-signal">
              {project.projectType}
            </p>
            {project.status === "in-progress" && (
              <span className="font-mono text-2xs uppercase tracking-[0.12em] text-cyan">
                • active
              </span>
            )}
          </div>

          <h3 className="mt-2 min-w-0 break-words font-mono text-base leading-snug text-ink sm:text-lg">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="mt-3 min-w-0 flex-1 break-words text-sm leading-6 text-ink-muted">
        {project.description}
      </p>

      <div className="mt-5 flex min-w-0 flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={"View " + project.title + " source code on GitHub"}
              className="inline-flex min-h-8 items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-signal"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={"Open " + project.title + " live demo"}
              className="inline-flex min-h-8 items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-signal"
            >
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export function Projects({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <>
      <SectionHeading
        title="Projects"
        description="Selected security tools, lab work, and technical projects built or documented through hands-on work."
      />

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </>
  );
}
