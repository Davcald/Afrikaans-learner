"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { db, isDbConfigured } from "@/db";
import { users, userSettings } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { clearSessionCookie, setSessionCookie } from "@/lib/auth/session";

export type AuthFormState = { error?: string };

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Enter a valid email address");

const signupSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, "Password must be at least 8 characters"),
  displayName: z
    .string()
    .trim()
    .min(1, "Pick a display name")
    .max(20, "Display name must be 20 characters or fewer"),
  timezone: z.string().max(64).catch("UTC"),
});

function safeTimezone(tz: string): string {
  try {
    new Intl.DateTimeFormat("en", { timeZone: tz });
    return tz;
  } catch {
    return "UTC";
  }
}

function dbNotReady(): AuthFormState {
  return {
    error:
      "The database is not configured yet. The site owner needs to set DATABASE_URL (see README).",
  };
}

export async function signup(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (!isDbConfigured()) return dbNotReady();

  const parsed = signupSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    displayName: formData.get("displayName"),
    timezone: formData.get("timezone") ?? "UTC",
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { email, password, displayName } = parsed.data;
  const timezone = safeTimezone(parsed.data.timezone);

  const existing = await db()
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (existing.length > 0) {
    return { error: "An account with that email already exists — log in instead." };
  }

  const userId = crypto.randomUUID();
  const passwordHash = await hashPassword(password);
  await db().batch([
    db().insert(users).values({ id: userId, email, passwordHash, displayName }),
    db().insert(userSettings).values({ userId, timezone }),
  ]);

  await setSessionCookie(userId);
  redirect("/onboarding");
}

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Enter your password"),
});

export async function login(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (!isDbConfigured()) return dbNotReady();

  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const rows = await db()
    .select()
    .from(users)
    .where(eq(users.email, parsed.data.email))
    .limit(1);
  const user = rows[0];
  if (!user || !(await verifyPassword(parsed.data.password, user.passwordHash))) {
    return { error: "Wrong email or password" };
  }

  await setSessionCookie(user.id);
  redirect("/");
}

export async function logout(): Promise<void> {
  await clearSessionCookie();
  redirect("/login");
}
