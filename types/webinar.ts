export interface WebinarFAQ {
  question: string;
  answer: string;
}

export interface Webinar {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  speakerName: string;
  speakerImage: string;
  speakerDesignation: string;
  webinarDate: string;
  webinarTime: string;
  duration: string;
  category: string;
  level: string;
  price: number;
  seats: number;
  seatsRemaining: number;
  meetingLink: string;
  registrationLink: string;
  agenda: string[];
  requirements: string[];
  benefits: string[];
  faqs: WebinarFAQ[];
  tags: string[];
  isFeatured: boolean;
  status: "Upcoming" | "Live" | "Completed";
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

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
