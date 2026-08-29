// Edge-safe JWT helpers (jose only — no next/headers, no DB, no bcrypt)
// so the middleware can import this module.
import { jwtVerify, SignJWT } from "jose";

export const SESSION_COOKIE = "vlot_session";
export const SESSION_MAX_AGE_S = 60 * 60 * 24 * 30; // 30 days

let cachedSecret: Uint8Array | null = null;

/**
 * Session-signing secret. Prefers AUTH_SECRET; falls back to a key derived
 * from DATABASE_URL so a fresh deploy works with a single env var. (Anyone
 * who knows DATABASE_URL already owns the database, so deriving from it
 * grants no new power.) Returns null when neither is set.
 */
async function getSecret(): Promise<Uint8Array | null> {
  if (cachedSecret) return cachedSecret;
  const explicit = process.env.AUTH_SECRET;
  if (explicit) {
    cachedSecret = new TextEncoder().encode(explicit);
    return cachedSecret;
  }
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return null;
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`vlot-session-secret:${dbUrl}`),
  );
  cachedSecret = new Uint8Array(digest);
  return cachedSecret;
}

export async function createSessionToken(userId: string): Promise<string> {
  const secret = await getSecret();
  if (!secret) {
    throw new Error(
      "Set AUTH_SECRET (or at least DATABASE_URL) so sessions can be signed.",
    );
  }
  return new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_S)
    .sign(secret);
}

/** Returns the userId, or null for a missing/invalid/expired token. */
export async function verifySessionToken(
  token: string | undefined,
): Promise<string | null> {
  if (!token) return null;
  try {
    const secret = await getSecret();
    if (!secret) return null;
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
    });
    return payload.sub ?? null;
  } catch {
    return null;
  }
}
