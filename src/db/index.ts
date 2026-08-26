import "server-only";

import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export type Db = NeonHttpDatabase<typeof schema>;

let _db: Db | null = null;

export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

// Lazy init so `next build` succeeds with no DATABASE_URL present.
export function db(): Db {
  if (!_db) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error(
        "DATABASE_URL is not set. Provision a Postgres database (see README) and set the env var.",
      );
    }
    _db = drizzle(neon(url), { schema });
  }
  return _db;
}
