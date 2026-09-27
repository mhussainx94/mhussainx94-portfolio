import { ChevronDown, GraduationCap } from "lucide-react";
import { SectionHeading, Chip } from "@/components/ui/Primitives";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { formatMonthYear } from "@/lib/utils";
import { useState } from "react";

export function Education() {
  const [showLearned, setShowLearned] = useState(false);

  return (
    <>
      <SectionHeading title="Education" />

      <div className="space-y-8">
        {education.map((entry) => (
          <div key={entry.id} className="rounded-md border border-line bg-panel p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-start gap-3">
                <GraduationCap
                  className="mt-1 h-4 w-4 shrink-0 text-signal"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="font-mono text-base text-ink sm:text-lg">
                    {entry.degree} {entry.field}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{entry.institution}</p>
                  <p className="mt-1 text-xs text-ink-faint">{entry.location}</p>
                </div>
              </div>

              <p className="shrink-0 font-mono text-2xs text-ink-faint sm:text-right">
                {formatMonthYear(entry.startDate)} – {entry.endDate}
              </p>
            </div>

            {entry.universityProjects && entry.universityProjects.length > 0 && (
              <div className="mt-6 border-t border-line pt-5">
                <div className="mb-3">
                  <p className="font-mono text-2xs uppercase tracking-[0.18em] text-signal">
                    University Projects
                  </p>
                  <p className="mt-1 text-xs text-ink-faint">
                    Click a project to view its description.
                  </p>
                </div>

                <div className="space-y-2">
                  {entry.universityProjects.map((project) => (
                    <details
                      key={project.id}
                      className="group rounded-md border border-line/80 bg-void/20"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3 font-mono text-xs text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                        <span className="min-w-0 break-words">{project.title}</span>
                        <ChevronDown
                          className="h-4 w-4 shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>

                      <div className="border-t border-line/80 px-3 pb-3 pt-3">
                        <p className="text-xs leading-relaxed text-ink-muted">
                          {project.description}
                        </p>

                        {project.technologies && project.technologies.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <Chip key={technology}>{technology}</Chip>
                            ))}
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 border-t border-line pt-5">
              <button
                type="button"
                onClick={() => setShowLearned((current) => !current)}
                aria-expanded={showLearned}
                className="flex w-full items-center justify-between gap-3 rounded-md border border-line px-3 py-3 text-left transition-colors hover:border-signal/60 hover:text-signal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal"
              >
                <span>
                  <span className="block font-mono text-2xs uppercase tracking-[0.18em] text-ink">
                    Learned Skills & Courses
                  </span>
                  <span className="mt-1 block text-xs text-ink-faint">
                    {showLearned ? "Hide courses and skills" : "Show courses and skills"}
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
                <div className="mt-4 space-y-6">
                  <div>
                    <p className="font-mono text-2xs uppercase tracking-[0.18em] text-signal">
                      Courses Learned
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.coursework.map((course) => (
                        <Chip key={course}>{course}</Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-2xs uppercase tracking-[0.18em] text-signal">
                      Skills
                    </p>
                    <div className="mt-3 space-y-4">
                      {skillGroups.map((group) => (
                        <div key={group.id}>
                          <p className="font-mono text-xs text-ink">{group.label}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <Chip key={skill}>{skill}</Chip>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
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
