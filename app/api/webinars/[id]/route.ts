import { NextResponse } from "next/server";
import type { CreateWebinarPayload } from "@/types/webinar";
import {
  getWebinarById,
  updateWebinar,
  deleteWebinar,
} from "@/services/webinarRepository";
import { normalizeWebinarPayload } from "@/utils/normalizeWebinarPayload";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: corsHeaders });
}

type RouteContext = { params: Promise<{ id: string }> };

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const webinar = await getWebinarById(id);

    if (!webinar) {
      return jsonResponse(
        { success: false, message: "Webinar not found" },
        404
      );
    }

    return jsonResponse({
      success: true,
      message: "Webinar fetched successfully",
      data: webinar,
    });
  } catch (error) {
    console.error("GET /api/webinars/[id] error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to fetch webinar";
    return jsonResponse({ success: false, message }, 500);
  }
}

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
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

    const webinar = await updateWebinar(id, body);

    if (!webinar) {
      return jsonResponse(
        { success: false, message: "Webinar not found" },
        404
      );
    }

    return jsonResponse({
      success: true,
      message: "Webinar updated successfully",
      data: webinar,
    });
  } catch (error: unknown) {
    console.error("PUT /api/webinars/[id] error:", error);

    const mongoError = error as { code?: number };
    if (mongoError?.code === 11000) {
      return jsonResponse(
        { success: false, message: "A webinar with this slug already exists" },
        409
      );
    }

    const message =
      error instanceof Error ? error.message : "Failed to update webinar";
    return jsonResponse({ success: false, message }, 500);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const deleted = await deleteWebinar(id);

    if (!deleted) {
      return jsonResponse(
        { success: false, message: "Webinar not found" },
        404
      );
    }

    return jsonResponse({
      success: true,
      message: "Webinar deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/webinars/[id] error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to delete webinar";
    return jsonResponse({ success: false, message }, 500);
  }
}
