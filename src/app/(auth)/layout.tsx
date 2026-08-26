export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-10">
      <div className="mb-8 text-center">
        <p className="text-5xl font-black tracking-tight text-gold">Vlot</p>
        <p className="mt-2 text-sm text-muted">
          Learn Afrikaans the way the research says works —{" "}
          <span className="text-ink">15 focused minutes at a time.</span>
        </p>
      </div>
      {children}
    </main>
  );
}
