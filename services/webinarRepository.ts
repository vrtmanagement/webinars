import { connectDB } from "@/lib/mongodb";
import { WebinarModel } from "@/models/Webinar";
import type { CreateWebinarPayload, Webinar } from "@/types/webinar";
import { toWebinar } from "@/utils/webinarMapper";

export async function getAllWebinars(): Promise<Webinar[]> {
  await connectDB();
  const docs = await WebinarModel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) =>
    toWebinar(doc as Parameters<typeof toWebinar>[0])
  );
}

export async function getWebinarBySlug(slug: string): Promise<Webinar | null> {
  await connectDB();
  const doc = await WebinarModel.findOne({ slug }).lean();
  if (!doc) return null;
  return toWebinar(doc as Parameters<typeof toWebinar>[0]);
}

export async function addWebinar(
  payload: CreateWebinarPayload
): Promise<Webinar> {
  await connectDB();
  const doc = await WebinarModel.create(payload);
  return toWebinar(doc);
}

export async function seedWebinarsIfEmpty(
  webinars: CreateWebinarPayload[]
): Promise<number> {
  await connectDB();
  const count = await WebinarModel.countDocuments();
  if (count > 0) return 0;

  await WebinarModel.insertMany(webinars);
  return webinars.length;
}
