import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { CommandLabel } from "@/components/ui/Primitives";

interface TerminalWindowProps {
  command: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

/** Shared terminal frame; the window dots are decorative, not controls. */
export function TerminalWindow({ command, children, className, title }: TerminalWindowProps) {
  return (
    <div className={cn("min-w-0 rounded-xl border border-line bg-panel", className)}>
      <div className="flex min-w-0 items-center gap-3 rounded-t-xl border-b border-line bg-raised px-4 py-3 sm:px-5">
        <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--c-window-red)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--c-window-yellow)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--c-window-green)]" />
        </div>
        <span className="min-w-0 flex-1 break-words text-center font-mono text-xs leading-relaxed text-ink-muted [overflow-wrap:anywhere]">
          {title ?? `visitor@${profile.handle}: ~`}
        </span>
        <span className="hidden w-[46px] shrink-0 sm:block" aria-hidden="true" />
      </div>
      <div className="min-w-0 p-4 sm:p-6">
        <CommandLabel className="mb-5 border-b border-line pb-4">{command}</CommandLabel>
        {children}
      </div>
    </div>
  );
}
