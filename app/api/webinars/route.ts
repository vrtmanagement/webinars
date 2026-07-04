import { NextResponse } from "next/server";
import type { CreateWebinarPayload } from "@/types/webinar";
import {
  getAllWebinars,
  addWebinar,
} from "@/services/webinarRepository";
import { normalizeWebinarPayload } from "@/utils/normalizeWebinarPayload";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: corsHeaders });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  try {
    const webinars = await getAllWebinars();
    return jsonResponse({
      success: true,
      message: "Webinars fetched successfully",
      data: webinars,
    });
  } catch (error) {
    console.error("GET /api/webinars error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to fetch webinars";
    return jsonResponse({ success: false, message }, 500);
  }
}

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const body: CreateWebinarPayload = normalizeWebinarPayload(raw);

    const required = [
      "title",
      "slug",
      "description",
      "speakerName",
      "webinarDate",
      "webinarTime",
    ] as const;

    for (const field of required) {
      if (!body[field]) {
        return jsonResponse(
          { success: false, message: `${field} is required` },
          400
        );
      }
    }

    const webinar = await addWebinar(body);

    return jsonResponse(
      {
        success: true,
        message: "Webinar created successfully",
        data: webinar,
      },
      201
    );
  } catch (error: unknown) {
    console.error("POST /api/webinars error:", error);

    const mongoError = error as { code?: number };
    if (mongoError?.code === 11000) {
      return jsonResponse(
        { success: false, message: "A webinar with this slug already exists" },
        409
      );
    }

    const message =
      error instanceof Error ? error.message : "Failed to create webinar";
    return jsonResponse({ success: false, message }, 500);
  }
}
