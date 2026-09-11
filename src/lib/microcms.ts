import { createClient } from "microcms-js-sdk";

/**
 * microCMS client — server-only.
 *
 * Do not import this file from a "use client" component: MICROCMS_API_KEY
 * has no NEXT_PUBLIC_ prefix on purpose and must never reach the browser.
 * Fetch data in a Server Component / Route Handler and pass plain props
 * down to client components instead.
 *
 * The service isn't configured yet (see .env.example), so this is `null`
 * until NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are set in
 * `.env.local`. Nothing on the site calls it yet — the homepage content is
 * still the static copy from docs/portfolio-spec.md. Wiring an endpoint
 * (e.g. a `works` list for the WORKS section) is a follow-up task once the
 * microCMS schema is decided; see README.md.
 */
const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

export const microcms =
  serviceDomain && apiKey ? createClient({ serviceDomain, apiKey }) : null;

if (!microcms && process.env.NODE_ENV !== "production") {
  console.warn(
    "[microcms] NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY is not set — the microCMS client is disabled. See .env.example.",
  );
}
