const DOTS = Array.from({ length: 10 }, (_, i) => i);

/**
 * The premium-2D-fallback path required when WebGL isn't available.
 * Pure CSS: a faint neutral masked grid and a
 * handful of drifting dots — capped well under the "huge particle
 * count" ceiling because these are real DOM nodes, not GPU points.
 */
export function Fallback2D() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(var(--c-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
        }}
      />
      {DOTS.map((i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-ink-faint opacity-20 motion-safe:animate-[drift_18s_linear_infinite]"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${i * -1.4}s`,
          }}
        />
      ))}
    </div>
  );
}
