"use client";

import { useEffect } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { useCardPhysics } from "@/hooks/useCardPhysics";

interface HangingCardProps {
  reducedMotion: boolean;
  onActivate: () => void;
  /** Hands the mounted button element up to Hero, which passes it to
   *  CardString — a plain callback rather than forwardRef, since
   *  useCardPhysics already owns the "real" ref internally. */
  onCardElement?: (el: HTMLButtonElement | null) => void;
}

/**
 * The signature interaction: a suspended terminal-styled module the
 * user can grab with mouse, trackpad, pen, or touch. All position,
 * rotation, and momentum come from useCardPhysics — this component
 * only supplies the pointer handlers and the visuals.
 */
export function HangingCard({ reducedMotion, onActivate, onCardElement }: HangingCardProps) {
  const { cardRef, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onKeyDown } =
    useCardPhysics({ reducedMotion, onActivate });

  useEffect(() => {
    onCardElement?.(cardRef.current);
    return () => onCardElement?.(null);
    // cardRef is a stable ref object for the component's lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onCardElement]);

  return (
    <button
      ref={cardRef}
      type="button"
      aria-label={`${profile.name} — ${profile.title}. Drag to move, or press Enter to continue.`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onKeyDown={onKeyDown}
      className="hanging-card w-56 touch-none select-none max-w-full rounded-xl border border-line bg-panel p-5 text-left sm:w-60"
      style={{ willChange: "transform" }}
    >
      <div className="-mx-5 -mt-5 mb-4 flex items-center gap-2 rounded-t-xl border-b border-line bg-raised px-5 py-3">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
        <span className="min-w-0 break-words font-mono text-xs leading-relaxed text-ink-muted [overflow-wrap:anywhere]">root@{profile.handle}</span>
      </div>

      {/* The photo is the card's main visual content now — see
          PROJECT_GUIDE.md > "Adding your profile image". Falls back to
          a monogram + instructions until /public/avatar.jpg exists. */}
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-line-strong bg-raised"
      >
        {profile.photoUrl ? (
          <Image
            src={profile.photoUrl}
            alt={profile.name}
            fill
            sizes="(min-width: 640px) 200px, 184px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line-strong font-mono text-2xl text-cyan">
              {profile.name.charAt(0)}
            </span>
            <span className="font-mono text-2xs leading-snug text-ink-faint">
              add /public/avatar.jpg
            </span>
          </div>
        )}
      </div>
    </button>
  );
}
