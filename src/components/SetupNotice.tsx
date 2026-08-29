export default function SetupNotice() {
  return (
    <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
      <h1 className="text-xl font-bold text-gold">Almost there…</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        The app is deployed but no database is connected yet. Site owner: in
        Vercel open <strong className="text-ink">Storage → Create Database →
        Neon</strong> (free) and redeploy — that&apos;s the only step. The app
        sets up its own tables on first signup. Details in the README.
      </p>
    </div>
  );
}
