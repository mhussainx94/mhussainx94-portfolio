"use client";

import { useEffect, useState } from "react";
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
  const [photoFailed, setPhotoFailed] = useState(false);
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
      aria-label="Hi, I’m Muhammad Hussain. Welcome to my portfolio. Drag to move, or press Enter to continue."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onKeyDown={onKeyDown}
      className="hanging-card w-64 touch-none select-none max-w-full rounded-xl border border-line bg-panel p-5 text-left sm:w-72"
      style={{ willChange: "transform" }}
    >
      <div className="-mx-5 -mt-5 mb-4 flex items-center gap-2 rounded-t-xl border-b border-line bg-raised px-5 py-3">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
        <span className="min-w-0 break-words font-mono text-xs leading-relaxed text-ink-muted [overflow-wrap:anywhere]">root@{profile.handle}</span>
      </div>

      <div className="relative ml-auto h-24 w-24 overflow-hidden rounded-lg border border-line bg-raised">
        {profile.photoUrl && !photoFailed ? (
          <Image
            src={profile.photoUrl}
            alt="Muhammad Hussain"
            fill
            sizes="96px"
            className="object-cover object-top"
            onError={() => setPhotoFailed(true)}
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-mono text-2xl text-cyan" aria-hidden="true">
            MH
          </span>
        )}
      </div>

      <div className="mt-5 min-w-0 font-mono">
        <span className="block text-sm leading-6 text-ink-muted">Hi, I’m</span>
        <span className="mt-1 block whitespace-nowrap text-xl font-medium leading-8 tracking-tight text-ink sm:text-[1.375rem]">
          Muhammad Hussain
        </span>
        <span className="mt-4 block border-t border-line pt-3 text-xs leading-5 text-ink-muted">
          Cybersecurity Professional
        </span>
      </div>
    </button>
  );
}
