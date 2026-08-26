"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { login, signup, type AuthFormState } from "@/app/actions/auth";

const inputCls =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink placeholder-faint outline-none focus:border-gold";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const action = mode === "login" ? login : signup;
  const [state, formAction, pending] = useActionState<AuthFormState, FormData>(
    action,
    {},
  );
  const [timezone, setTimezone] = useState("UTC");

  useEffect(() => {
    try {
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone ?? "UTC");
    } catch {
      // keep UTC
    }
  }, []);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      {mode === "signup" && (
        <input
          className={inputCls}
          name="displayName"
          placeholder="Display name (shown on leaderboard)"
          autoComplete="nickname"
          maxLength={20}
          required
        />
      )}
      <input
        className={inputCls}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input
        className={inputCls}
        type="password"
        name="password"
        placeholder={mode === "signup" ? "Password (8+ characters)" : "Password"}
        autoComplete={mode === "signup" ? "new-password" : "current-password"}
        minLength={mode === "signup" ? 8 : undefined}
        required
      />
      <input type="hidden" name="timezone" value={timezone} />

      {state.error && (
        <p className="rounded-lg bg-danger/15 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-xl bg-gold px-4 py-3.5 text-base font-bold text-bg transition active:scale-[0.98] disabled:opacity-60"
      >
        {pending
          ? "One moment…"
          : mode === "login"
            ? "Log in"
            : "Create account"}
      </button>

      <p className="mt-2 text-center text-sm text-muted">
        {mode === "login" ? (
          <>
            New here?{" "}
            <Link className="font-semibold text-gold" href="/signup">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link className="font-semibold text-gold" href="/login">
              Log in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
