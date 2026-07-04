import axios from "axios";
import type {
  Webinar,
  CreateWebinarPayload,
  ApiResponse,
} from "@/types/webinar";
import { WEBINAR_API_BASE_URL, WEBINAR_API_URL } from "@/utils/apiConfig";

const api = axios.create({
  baseURL:
    typeof window !== "undefined" ? "" : WEBINAR_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

/** Fetch all webinars (used by the landing page) */
export async function getWebinars(): Promise<Webinar[]> {
  const { data } = await api.get<ApiResponse<Webinar[]>>("/api/webinars");
  if (!data.success || !data.data) {
    throw new Error(data.message || "Failed to fetch webinars");
  }
  return data.data;
}

/**
 * Create a webinar.
 * Works from the landing page (same origin) or from an external dashboard
 * when NEXT_PUBLIC_API_URL is set to https://webinars.vercel.app
 */
export async function createWebinar(
  payload: CreateWebinarPayload
): Promise<Webinar> {
  const { data } = await axios.post<ApiResponse<Webinar>>(
    WEBINAR_API_URL,
    payload,
    { headers: { "Content-Type": "application/json" } }
  );
  if (!data.success || !data.data) {
    throw new Error(data.message || "Failed to create webinar");
  }
  return data.data;
}

export { WEBINAR_API_BASE_URL, WEBINAR_API_URL };
