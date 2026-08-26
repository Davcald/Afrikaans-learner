export default function SetupNotice() {
  return (
    <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
      <h1 className="text-xl font-bold text-gold">Almost there…</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        The app is deployed but no database is connected yet. The site owner
        needs to set the <code className="text-ink">DATABASE_URL</code>{" "}
        environment variable (free Neon Postgres works great) and run{" "}
        <code className="text-ink">npm run db:push</code> — see the README for
        the two-minute setup.
      </p>
    </div>
  );
}
