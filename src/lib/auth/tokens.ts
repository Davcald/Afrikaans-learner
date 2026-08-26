// Edge-safe JWT helpers (jose only — no next/headers, no DB, no bcrypt)
// so the middleware can import this module.
import { jwtVerify, SignJWT } from "jose";

export const SESSION_COOKIE = "vlot_session";
export const SESSION_MAX_AGE_S = 60 * 60 * 24 * 30; // 30 days

function secret(): Uint8Array {
  const s = process.env.AUTH_SECRET;
  if (!s) {
    throw new Error("AUTH_SECRET is not set. Generate one with: openssl rand -base64 32");
  }
  return new TextEncoder().encode(s);
}

export async function createSessionToken(userId: string): Promise<string> {
  return new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_S)
    .sign(secret());
}

/** Returns the userId, or null for a missing/invalid/expired token. */
export async function verifySessionToken(
  token: string | undefined,
): Promise<string | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret(), {
      algorithms: ["HS256"],
    });
    return payload.sub ?? null;
  } catch {
    return null;
  }
}
