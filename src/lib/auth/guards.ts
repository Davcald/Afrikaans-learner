import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "./tokens";

export async function getCurrentUserId(): Promise<string | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}

/** Middleware is only a UX gate; every page and action calls this for real enforcement. */
export async function requireUserId(): Promise<string> {
  const userId = await getCurrentUserId();
  if (!userId) redirect("/login");
  return userId;
}
