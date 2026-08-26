"use client";

import { useActionState, useEffect, useState } from "react";
import { updateSettings, type SettingsFormState } from "@/app/actions/settings";

const inputCls =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none focus:border-gold";
const labelCls = "mb-1.5 block text-sm font-bold text-ink";

export default function SettingsForm({
  initial,
}: {
  initial: {
    displayName: string;
    dailyGoalMinutes: number;
    dailyNewCards: number;
    timezone: string;
  };
}) {
  const [state, formAction, pending] = useActionState<
    SettingsFormState,
    FormData
  >(updateSettings, {});
  const [zones, setZones] = useState<string[]>([initial.timezone]);

  useEffect(() => {
    try {
      const all = Intl.supportedValuesOf("timeZone");
      setZones(
        all.includes(initial.timezone) ? all : [initial.timezone, ...all],
      );
    } catch {
      // keep just the current zone
    }
  }, [initial.timezone]);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="displayName" className={labelCls}>
          Display name
        </label>
        <input
          id="displayName"
          name="displayName"
          defaultValue={initial.displayName}
          maxLength={20}
          required
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="dailyGoalMinutes" className={labelCls}>
          Daily goal
        </label>
        <select
          id="dailyGoalMinutes"
          name="dailyGoalMinutes"
          defaultValue={initial.dailyGoalMinutes}
          className={inputCls}
        >
          {[5, 10, 15, 20, 30, 45, 60].map((m) => (
            <option key={m} value={m}>
              {m} minutes a day
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dailyNewCards" className={labelCls}>
          New cards per day
        </label>
        <select
          id="dailyNewCards"
          name="dailyNewCards"
          defaultValue={initial.dailyNewCards}
          className={inputCls}
        >
          {[5, 10, 15, 20, 25].map((n) => (
            <option key={n} value={n}>
              {n} new cards
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-faint">
          Each new card adds ~10 future reviews. 10/day is the sweet spot;
          drop it if reviews pile up.
        </p>
      </div>

      <div>
        <label htmlFor="timezone" className={labelCls}>
          Timezone <span className="font-normal text-faint">(for streaks)</span>
        </label>
        <select
          id="timezone"
          name="timezone"
          defaultValue={initial.timezone}
          className={inputCls}
        >
          {zones.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>

      <input type="hidden" name="ttsRate" value="1" />

      {state.error && (
        <p className="rounded-lg bg-danger/15 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      )}
      {state.saved && !pending && (
        <p className="rounded-lg bg-leaf/15 px-3 py-2 text-sm font-semibold text-leaf">
          Saved ✓
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-gold px-4 py-3.5 font-bold text-bg active:scale-[0.98] disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save settings"}
      </button>
    </form>
  );
}
