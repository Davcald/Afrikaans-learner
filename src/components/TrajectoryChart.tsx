import type { TrajectoryPoint } from "@/lib/stats";

/**
 * Words-learned trajectory vs the 16-week reference line. Pure inline SVG.
 */
export default function TrajectoryChart({
  trajectory,
  totalWords,
  planDays,
}: {
  trajectory: TrajectoryPoint[];
  totalWords: number;
  planDays: number;
}) {
  const w = 320;
  const h = 96;
  const pad = 4;
  const maxDay = planDays;
  const maxWords = Math.max(totalWords, 1);
  const x = (day: number) => pad + (day / maxDay) * (w - 2 * pad);
  const y = (words: number) => h - pad - (words / maxWords) * (h - 2 * pad);

  const actualPath = trajectory
    .map((p, i) => `${i === 0 ? "M" : "L"}${x(p.day).toFixed(1)},${y(p.actual).toFixed(1)}`)
    .join(" ");
  const last = trajectory[trajectory.length - 1];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-24 w-full"
      role="img"
      aria-label="Words learned versus the 16-week plan"
    >
      {/* 16-week reference line */}
      <line
        x1={x(0)}
        y1={y(0)}
        x2={x(maxDay)}
        y2={y(maxWords)}
        stroke="var(--color-faint)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.6"
      />
      {/* actual progress */}
      {trajectory.length > 1 && (
        <path
          d={actualPath}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}
      {last && (
        <circle
          cx={x(last.day)}
          cy={y(last.actual)}
          r="4"
          fill="var(--color-gold)"
        />
      )}
    </svg>
  );
}
