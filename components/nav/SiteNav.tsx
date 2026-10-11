"use client";

import { useEffect, useRef } from "react";
import { scrollProgress, useSceneState } from "@/lib/sceneStore";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

interface NavItem {
  id: SectionId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "top" },
  { id: "about", label: "about" },
  { id: "education", label: "education" },
  { id: "experience", label: "experience" },
  { id: "certifications", label: "certifications" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      rafId = requestAnimationFrame(tick);

      const el = barRef.current;

      if (el) {
        el.style.transform = `scaleX(${scrollProgress.value})`;
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-px bg-line"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-cyan"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

export function SiteNav() {
  const { activeId } = useSceneState();

  return (
    <>
      <ProgressBar />

      {/* Mobile / Tablet Navigation */}
      <nav
        aria-label="Mobile section navigation"
        className="
          fixed
          bottom-3
          left-1/2
          z-40
          flex
          w-[calc(100%-1rem)]
          max-w-xl
          -translate-x-1/2
          items-center
          justify-start
          overflow-x-auto
          rounded-md
          border
          border-line
          bg-panel
          px-2
          py-2
          lg:hidden
        "
      >
        <div className="flex min-w-max items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan px-2.5 py-1.5 font-mono text-xs transition-colors sm:px-3 sm:text-xs",
                  isActive
                    ? "bg-raised text-cyan"
                    : "text-ink-muted hover:text-cyan"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav
        aria-label="Section navigation"
        className="
          fixed
          right-5
          top-1/2
          z-40
          hidden
          -translate-y-1/2
          flex-col
          items-end
          gap-3
          lg:flex
        "
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-2.5 rounded-sm text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={cn(
                  "font-mono text-2xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                  isActive && "text-cyan opacity-100"
                )}
              >
                {item.label}
              </span>

              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full border transition-colors",
                  isActive
                    ? "border-cyan bg-cyan"
                    : "border-line-strong bg-transparent group-hover:border-cyan"
                )}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}