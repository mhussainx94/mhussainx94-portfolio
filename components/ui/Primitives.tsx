import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-5xl px-6", className)}>{children}</div>;
}

export function CommandLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("min-w-0 break-words font-mono text-xs leading-relaxed text-signal [overflow-wrap:anywhere]", className)}>
      <span aria-hidden="true">$ </span>
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 border-b border-line pb-5 sm:mb-8">
      <h2 className="break-words font-mono text-2xl font-medium leading-snug text-cyan sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-measure text-sm leading-relaxed text-ink-muted">{description}</p>}
    </div>
  );
}

export function Chip({ children, className, size = "sm" }: { children: ReactNode; className?: string; size?: "sm" | "md" }) {
  return (
    <span className={cn("inline-flex items-center rounded border border-line px-2.5 py-1 font-mono text-ink-muted", size === "md" ? "text-xs" : "text-2xs", className)}>
      {children}
    </span>
  );
}
