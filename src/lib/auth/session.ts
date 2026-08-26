import "server-only";

import { cookies } from "next/headers";
import {
  createSessionToken,
  SESSION_COOKIE,
  SESSION_MAX_AGE_S,
} from "./tokens";

export async function setSessionCookie(userId: string): Promise<void> {
  const token = await createSessionToken(userId);
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_S,
  });
}

export async function clearSessionCookie(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
}
