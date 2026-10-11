import { CommandLabel, SectionHeading, Chip } from "@/components/ui/Primitives";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <>
      <SectionHeading title="Skills" />

      <div className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:gap-x-10">
        {skillGroups.map((group) => (
          <div key={group.id} className="min-w-0 border-t border-line pt-5">
            <CommandLabel>{group.command}</CommandLabel>

            <h3 className="mt-2 break-words font-mono text-sm font-medium leading-6 text-cyan [overflow-wrap:anywhere]">
              {group.label}
            </h3>

            <div className="mt-4 flex min-w-0 flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Chip
                  key={skill}
                  size="md"
                  className="min-w-0 max-w-full break-words bg-panel leading-5 [overflow-wrap:anywhere]"
                >
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}