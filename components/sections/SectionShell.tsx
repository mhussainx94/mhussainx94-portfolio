"use client";

import { useEffect, useRef } from "react";
import type { ReactNode, RefObject } from "react";
import { CommandLabel, Container } from "@/components/ui/Primitives";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import type { SectionId } from "@/types";

interface SectionShellProps {
  id: SectionId;
  index: number;
  command: string;
  /** Hide outer prompts when the content provides its own terminal prompt. */
  showCommand?: boolean;
  sectionRef: RefObject<HTMLElement>;
  reducedMotion: boolean;
  children: ReactNode;
}

export function SectionShell({
  id,
  index,
  command,
  showCommand = true,
  sectionRef,
  reducedMotion,
  children,
}: SectionShellProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !contentRef.current) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      const el = contentRef.current;

      if (!el) return;

      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="
        scroll-mt-20
        border-t
        border-line
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      <Container>
        <div
          className="
            grid
            gap-6
            sm:grid-cols-[minmax(0,8rem)_1fr]
            sm:gap-8
            md:grid-cols-[minmax(0,9rem)_1fr]
            md:gap-10
            lg:gap-12
          "
        >
          {/* Desktop / Tablet section rail */}
          <div className="hidden sm:block">
            <div className="sticky top-28">
              <p className="font-mono text-2xs text-ink-faint">
                {String(index).padStart(2, "0")}
              </p>

              {showCommand && <CommandLabel className="mt-2">{command}</CommandLabel>}
            </div>
          </div>

          {/* Section content */}
          <div
            ref={contentRef}
            className="min-w-0 w-full"
          >
            {/* Mobile command */}
            {showCommand && <CommandLabel className="mb-5 sm:hidden">{command}</CommandLabel>}

            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}