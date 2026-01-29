 interface AdmissionFAQs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  question?: string;
  answer?: string;
  category?: string;
  isFeatured?: boolean;
  lastUpdated?: Date | string;
  relatedLink?: string;
}

export interface CoreValues {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  title?: string;
  shortDescription?: string;
  detailedDescription?: string;
  image?: string;
  iconEmoji?: string;
  displayOrder?: number;
}

export interface Curriculum {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  programTitle?: string;
  shortDescription?: string;
  detailedDescription?: string;
  category?: string;
  programImage?: string;
}

export interface Faculty {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  name?: string;
  photo?: string;
  biography?: string;
  credentials?: string;
  designation?: string;
  teachingPhilosophy?: string;
}

export interface Gallery {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  title?: string;
  mediaImage?: string;
  mediaVideoUrl?: string;
  category?: string;
  altText?: string;
}

export interface ImportantDates {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  eventName?: string;
  eventDate?: Date | string;
  description?: string;
  isDeadline?: boolean;
  category?: string;
}
