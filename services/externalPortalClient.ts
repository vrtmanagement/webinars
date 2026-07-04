/**
 * Copy this file into your admin dashboard portal project.
 * Install axios: npm install axios
 *
 * Production API: https://webinars.vercel.app/api/webinars
 */

import axios from "axios";


const WEBINAR_API_URL =
  process.env.NEXT_PUBLIC_WEBINAR_API_URL ??
  "https://webinars.vercel.app/api/webinars";

export interface WebinarFAQ {
  question: string;
  answer: string;
}

export interface CreateWebinarPayload {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  speakerName: string;
  speakerImage: string;
  speakerDesignation: string;
  category: string;
  level: string;
  webinarDate: string;
  webinarTime: string;
  duration: string;
  meetingLink: string;
  registrationLink: string;
  price: number;
  seats: number;
  seatsRemaining: number;
  agenda: string[];
  requirements: string[];
  benefits: string[];
  faqs: WebinarFAQ[];
  tags: string[];
  isFeatured: boolean;
  status: "Upcoming" | "Live" | "Completed";
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export async function createWebinarFromPortal(payload: CreateWebinarPayload) {
  const { data } = await axios.post<ApiResponse<unknown>>(
    WEBINAR_API_URL,
    payload,
    { headers: { "Content-Type": "application/json" } }
  );

  if (!data.success) {
    throw new Error(data.message || "Failed to create webinar");
  }

  return data.data;
}

export async function getWebinarsFromPortal() {
  const { data } = await axios.get<ApiResponse<unknown[]>>(WEBINAR_API_URL);
  if (!data.success || !data.data) {
    throw new Error(data.message || "Failed to fetch webinars");
  }
  return data.data;
}
