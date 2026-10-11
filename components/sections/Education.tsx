"use client";

import { ChevronDown, GraduationCap } from "lucide-react";
import { SectionHeading, Chip } from "@/components/ui/Primitives";
import { education } from "@/data/education";
import { formatMonthYear } from "@/lib/utils";
import { useState } from "react";

export function Education() {
  const [showLearned, setShowLearned] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <>
      <SectionHeading title="Education" />

      <div className="space-y-8">
        {education.map((entry) => (
          <div key={entry.id} className="min-w-0 rounded-xl border border-line bg-panel p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-start gap-3">
                <GraduationCap
                  className="mt-1 h-4 w-4 shrink-0 text-cyan"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="break-words font-mono text-base font-medium leading-relaxed text-cyan sm:text-lg">
                    {entry.degree} {entry.field}
                  </p>
                  <p className="mt-1 break-words text-sm leading-6 text-ink">{entry.institution}</p>
                  <p className="mt-1 break-words text-xs leading-5 text-ink-muted">{entry.location}</p>
                </div>
              </div>

              <p className="shrink-0 font-mono text-xs leading-6 text-ink-muted sm:text-right">
                {formatMonthYear(entry.startDate)} – {entry.endDate}
              </p>
            </div>

            {entry.universityProjects && entry.universityProjects.length > 0 && (
              <div className="mt-6 border-t border-line pt-5">
                <div className="mb-3">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-cyan">
                    University Projects
                  </p>
                  <p className="mt-1 text-xs text-ink-faint">
                    Click a project to view its description.
                  </p>
                </div>

                <div className="space-y-2">
                  {entry.universityProjects.map((project) => {
                    const projectKey = `${entry.id}:${project.id}`;
                    const isExpanded = expandedProject === projectKey;
                    const panelId = `education-${entry.id}-${project.id}-description`;

                    return (
                      <div key={project.id} className="min-w-0 rounded-md border border-line bg-void">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={panelId}
                          onClick={() => setExpandedProject((current) => current === projectKey ? null : projectKey)}
                          className="flex min-h-12 w-full min-w-0 items-center justify-between gap-3 rounded-md px-4 py-3 text-left font-mono text-sm leading-6 text-ink transition-colors hover:bg-raised hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                        >
                          <span className="min-w-0 break-words [overflow-wrap:anywhere]">{project.title}</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </button>

                        <div id={panelId} hidden={!isExpanded} className="min-w-0 border-t border-line px-4 pb-4 pt-3">
                          <p className="break-words text-sm leading-6 text-ink-muted [overflow-wrap:anywhere]">
                            {project.description}
                          </p>
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="mt-4 flex min-w-0 flex-wrap gap-2">
                              {project.technologies.map((technology) => (
                                <Chip key={technology}>{technology}</Chip>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-5 border-t border-line pt-5">
              <button
                type="button"
                onClick={() => setShowLearned((current) => !current)}
                aria-expanded={showLearned}
                className="flex min-h-12 w-full min-w-0 items-center justify-between gap-3 rounded-md border border-line bg-void px-4 py-3 text-left transition-colors hover:bg-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.12em] text-cyan">
                    Courses Learned
                  </span>
                  <span className="mt-1 block text-xs text-ink-faint">
                    {showLearned ? "Hide courses" : "Show courses"}
                  </span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-ink-faint transition-transform duration-200 ${
                    showLearned ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {showLearned && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {entry.coursework.map((course) => (
                      <Chip key={course}>{course}</Chip>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
