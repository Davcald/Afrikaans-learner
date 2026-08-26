export default function GoalRing({
  minutes,
  goal,
  size = 108,
}: {
  minutes: number;
  goal: number;
  size?: number;
}) {
  const pct = Math.min(1, goal > 0 ? minutes / goal : 0);
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const done = pct >= 1;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-raised)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={done ? "var(--color-leaf)" : "var(--color-gold)"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-black text-ink">
          {Math.floor(minutes)}
          <span className="text-xs font-bold text-muted">m</span>
        </span>
        <span className="text-[10px] font-semibold text-faint">of {goal}m</span>
      </div>
    </div>
  );
}
