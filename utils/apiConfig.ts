/**
 * Base URL for the webinar API.
 * Use this in your external admin dashboard portal.
 *
 * Local:      http://localhost:3000
 * Production: https://webinars-red.vercel.app
 */
export const WEBINAR_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost:3000");

export const WEBINAR_API_URL = `${WEBINAR_API_BASE_URL}/api/webinars`;
