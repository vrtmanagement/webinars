import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const faqSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const webinarSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    coverImage: { type: String, default: "" },
    speakerName: { type: String, required: true },
    speakerImage: { type: String, default: "" },
    speakerDesignation: { type: String, default: "" },
    webinarDate: { type: String, required: true },
    webinarTime: { type: String, required: true },
    duration: { type: String, default: "60 min" },
    category: { type: String, default: "General" },
    level: { type: String, default: "All Levels" },
    price: { type: Number, default: 0 },
    seats: { type: Number, default: 100 },
    seatsRemaining: { type: Number, default: 100 },
    meetingLink: { type: String, default: "" },
    registrationLink: { type: String, default: "" },
    agenda: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    benefits: { type: [String], default: [] },
    faqs: { type: [faqSchema], default: [] },
    tags: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["Upcoming", "Live", "Completed"],
      default: "Upcoming",
    },
  },
  { timestamps: true }
);

export type WebinarDocument = InferSchemaType<typeof webinarSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const WebinarModel: Model<WebinarDocument> =
  mongoose.models.Webinar ||
  mongoose.model<WebinarDocument>("Webinar", webinarSchema);
