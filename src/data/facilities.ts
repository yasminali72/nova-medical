import { Facility, Testimonial } from "@/types/medical";

export const facilities: Facility[] = [
  {
    id: "consultation-suites",
    slug: "consultation-suites",
    nameKey: "facilities.consultation.name",
    descriptionKey: "facilities.consultation.description",
    featuresKeys: [
      "facilities.consultation.f1",
      "facilities.consultation.f2",
      "facilities.consultation.f3",
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    tagKey: "facilities.tags.patientCare",
  },
  {
    id: "diagnostic-imaging",
    slug: "diagnostic-imaging",
    nameKey: "facilities.imaging.name",
    descriptionKey: "facilities.imaging.description",
    featuresKeys: [
      "facilities.imaging.f1",
      "facilities.imaging.f2",
      "facilities.imaging.f3",
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    tagKey: "facilities.tags.technology",
  },
  {
    id: "automated-laboratory",
    slug: "automated-laboratory",
    nameKey: "facilities.lab.name",
    descriptionKey: "facilities.lab.description",
    featuresKeys: [
      "facilities.lab.f1",
      "facilities.lab.f2",
      "facilities.lab.f3",
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    tagKey: "facilities.tags.diagnostics",
  },
  {
    id: "specialized-pharmacy",
    slug: "specialized-pharmacy",
    nameKey: "facilities.pharmacy.name",
    descriptionKey: "facilities.pharmacy.description",
    featuresKeys: [
      "facilities.pharmacy.f1",
      "facilities.pharmacy.f2",
      "facilities.pharmacy.f3",
    ],
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200",
    tagKey: "facilities.tags.services",
  },
  {
    id: "executive-waiting-lounge",
    slug: "executive-waiting-lounge",
    nameKey: "facilities.lounge.name",
    descriptionKey: "facilities.lounge.description",
    featuresKeys: [
      "facilities.lounge.f1",
      "facilities.lounge.f2",
      "facilities.lounge.f3",
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    tagKey: "facilities.tags.comfort",
  },
  {
    id: "welcoming-reception",
    slug: "welcoming-reception",
    nameKey: "facilities.reception.name",
    descriptionKey: "facilities.reception.description",
    featuresKeys: [
      "facilities.reception.f1",
      "facilities.reception.f2",
      "facilities.reception.f3",
    ],
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200",
    tagKey: "facilities.tags.welcome",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    nameKey: "home.testimonials.t1.name",
    roleKey: "home.testimonials.t1.role",
    rating: 5,
    textKey: "home.testimonials.t1.text",
    serviceKey: "home.testimonials.t1.service",
    dateKey: "home.testimonials.t1.date",
  },
  {
    id: "t2",
    nameKey: "home.testimonials.t2.name",
    roleKey: "home.testimonials.t2.role",
    rating: 5,
    textKey: "home.testimonials.t2.text",
    serviceKey: "home.testimonials.t2.service",
    dateKey: "home.testimonials.t2.date",
  },
  {
    id: "t3",
    nameKey: "home.testimonials.t3.name",
    roleKey: "home.testimonials.t3.role",
    rating: 5,
    textKey: "home.testimonials.t3.text",
    serviceKey: "home.testimonials.t3.service",
    dateKey: "home.testimonials.t3.date",
  },
];
