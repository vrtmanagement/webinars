import axios from "axios";
import type {
  Webinar,
  CreateWebinarPayload,
  ApiResponse,
} from "@/types/webinar";
import { WEBINAR_API_BASE_URL, WEBINAR_API_URL } from "@/utils/apiConfig";

const api = axios.create({
  baseURL: typeof window !== "undefined" ? "" : WEBINAR_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

/** Fetch all webinars (used by the landing page) */
export async function getWebinars(): Promise<Webinar[]> {
  const { data } = await api.get<ApiResponse<Webinar[]>>("/api/webinars", {
    params: { _t: Date.now() },
  });
  if (!data.success || !data.data) {
    throw new Error(data.message || "Failed to fetch webinars");
  }
  return data.data;
}

/**
 * Create a webinar.
 * Works from the landing page (same origin) or from an external dashboard
 * when NEXT_PUBLIC_API_URL is set to https://webinars-red.vercel.app
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

export async function getWebinarById(id: string): Promise<Webinar> {
  const { data } = await axios.get<ApiResponse<Webinar>>(
    `${WEBINAR_API_URL}/${id}`
  );
  if (!data.success || !data.data) {
    throw new Error(data.message || "Failed to fetch webinar");
  }
  return data.data;
}

export async function updateWebinar(
  id: string,
  payload: CreateWebinarPayload
): Promise<Webinar> {
  const { data } = await axios.put<ApiResponse<Webinar>>(
    `${WEBINAR_API_URL}/${id}`,
    payload,
    { headers: { "Content-Type": "application/json" } }
  );
  if (!data.success || !data.data) {
    throw new Error(data.message || "Failed to update webinar");
  }
  return data.data;
}

export async function deleteWebinar(id: string): Promise<void> {
  const { data } = await axios.delete<ApiResponse<null>>(
    `${WEBINAR_API_URL}/${id}`
  );
  if (!data.success) {
    throw new Error(data.message || "Failed to delete webinar");
  }
}

export { WEBINAR_API_BASE_URL, WEBINAR_API_URL };
