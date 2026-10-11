import { Briefcase } from "lucide-react";
import { SectionHeading, Chip } from "@/components/ui/Primitives";
import { experience } from "@/data/experience";
import { formatMonthYear } from "@/lib/utils";

export function Experience() {
  return (
    <>
      <SectionHeading title="Experience" />
      <div className="space-y-8">
        {experience.map((entry) => (
          <div key={entry.id} className="min-w-0 rounded-xl border border-line bg-panel p-4 sm:p-6">
            <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 items-start gap-3">
                <Briefcase className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <p className="break-words font-mono text-base font-medium leading-relaxed text-cyan [overflow-wrap:anywhere] sm:text-lg">{entry.role}</p>
                    {entry.current && (
                      <span className="shrink-0 rounded border border-line bg-void px-2 py-0.5 font-mono text-xs text-signal">
                        current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 break-words text-sm leading-6 text-ink [overflow-wrap:anywhere]">{entry.organization}</p>
                  <p className="mt-1 break-words text-xs leading-5 text-ink-muted">{entry.location}</p>
                </div>
              </div>
              <p className="shrink-0 font-mono text-xs leading-6 text-ink-muted lg:text-right">
                {formatMonthYear(entry.startDate)} – {entry.current ? "Present" : entry.endDate}
              </p>
            </div>

            <p className="mt-5 max-w-measure break-words border-t border-line pt-5 text-sm leading-7 text-ink-muted [overflow-wrap:anywhere] sm:text-base">
              {entry.description}
            </p>

            {entry.technologies.length > 0 && (
              <div className="mt-5 flex min-w-0 flex-wrap gap-2 [&>span]:max-w-full [&>span]:break-words [&>span]:text-xs [&>span]:leading-5 [&>span]:[overflow-wrap:anywhere]">
                {entry.technologies.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
