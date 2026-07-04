import { connectDB } from "@/lib/mongodb";
import { WebinarModel } from "@/models/Webinar";
import mongoose from "mongoose";
import type { CreateWebinarPayload, Webinar } from "@/types/webinar";
import { toWebinar } from "@/utils/webinarMapper";

type WebinarDoc = Parameters<typeof toWebinar>[0];

function isValidId(id: string): boolean {
  return mongoose.Types.ObjectId.isValid(id);
}

export async function getAllWebinars(): Promise<Webinar[]> {
  await connectDB();
  const docs = await WebinarModel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) => toWebinar(doc as WebinarDoc));
}

export async function getWebinarById(id: string): Promise<Webinar | null> {
  await connectDB();
  if (!isValidId(id)) return null;
  const doc = await WebinarModel.findById(id).lean();
  if (!doc) return null;
  return toWebinar(doc as WebinarDoc);
}

export async function getWebinarBySlug(slug: string): Promise<Webinar | null> {
  await connectDB();
  const doc = await WebinarModel.findOne({ slug }).lean();
  if (!doc) return null;
  return toWebinar(doc as WebinarDoc);
}

export async function addWebinar(
  payload: CreateWebinarPayload
): Promise<Webinar> {
  await connectDB();
  const doc = await WebinarModel.create(payload);
  return toWebinar(doc);
}

export async function updateWebinar(
  id: string,
  payload: CreateWebinarPayload
): Promise<Webinar | null> {
  await connectDB();
  if (!isValidId(id)) return null;
  const doc = await WebinarModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!doc) return null;
  return toWebinar(doc);
}

export async function deleteWebinar(id: string): Promise<boolean> {
  await connectDB();
  if (!isValidId(id)) return false;
  const result = await WebinarModel.findByIdAndDelete(id);
  return !!result;
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
