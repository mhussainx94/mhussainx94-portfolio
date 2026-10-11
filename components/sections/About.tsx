import { SectionHeading } from "@/components/ui/Primitives";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";
import { profile } from "@/data/profile";

export function About() {
  return (
    <TerminalWindow command="cat about.txt" title={`visitor@${profile.handle}: ~/about`}>
      <SectionHeading title="About" />
      <div className="min-w-0 max-w-measure space-y-5 text-base leading-7 text-ink [overflow-wrap:anywhere] sm:space-y-6 sm:leading-8">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </TerminalWindow>
  );
}
