export interface Specialty {
  id: string;
  slug: string;
  nameKey: string;
  descriptionKey: string;
  icon: string;
  stats: string;
  servicesCount: number;
}

export interface Service {
  id: string;
  slug: string;
  specialtyId: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  icon: string;
  featuresKeys: string[];
  benefitsKeys: string[];
  duration: string;
  suitableForKey: string;
  faqKeys: { questionKey: string; answerKey: string }[];
}

export interface Doctor {
  id: string;
  slug: string;
  nameKey: string;
  titleKey: string;
  specialtyId: string;
  experienceYears: number;
  rating: number;
  image: string;
  bioKey: string;
  educationKeys: string[];
  expertiseKeys: string[];
  languagesKeys: string[];
  scheduleDaysKey: string;
}

export interface Facility {
  id: string;
  slug: string;
  nameKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  image: string;
  tagKey: string;
}

export interface Testimonial {
  id: string;
  nameKey: string;
  roleKey: string;
  rating: number;
  textKey: string;
  serviceKey: string;
  dateKey: string;
}
