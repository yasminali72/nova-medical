import { Service } from "@/types/medical";

export const services: Service[] = [
  {
    id: "cardio-consultation",
    slug: "cardiology-consultation",
    specialtyId: "cardiology",
    titleKey: "services.cardioConsultation.title",
    subtitleKey: "services.cardioConsultation.subtitle",
    descriptionKey: "services.cardioConsultation.description",
    icon: "HeartPulse",
    featuresKeys: [
      "services.cardioConsultation.f1",
      "services.cardioConsultation.f2",
      "services.cardioConsultation.f3",
      "services.cardioConsultation.f4",
    ],
    benefitsKeys: [
      "services.cardioConsultation.b1",
      "services.cardioConsultation.b2",
      "services.cardioConsultation.b3",
    ],
    duration: "45-60 min",
    suitableForKey: "services.cardioConsultation.suitableFor",
    faqKeys: [
      {
        questionKey: "services.cardioConsultation.q1",
        answerKey: "services.cardioConsultation.a1",
      },
      {
        questionKey: "services.cardioConsultation.q2",
        answerKey: "services.cardioConsultation.a2",
      },
    ],
  },
  {
    id: "dermatology-care",
    slug: "dermatology-care",
    specialtyId: "dermatology",
    titleKey: "services.dermatologyCare.title",
    subtitleKey: "services.dermatologyCare.subtitle",
    descriptionKey: "services.dermatologyCare.description",
    icon: "Sparkles",
    featuresKeys: [
      "services.dermatologyCare.f1",
      "services.dermatologyCare.f2",
      "services.dermatologyCare.f3",
      "services.dermatologyCare.f4",
    ],
    benefitsKeys: [
      "services.dermatologyCare.b1",
      "services.dermatologyCare.b2",
      "services.dermatologyCare.b3",
    ],
    duration: "30-45 min",
    suitableForKey: "services.dermatologyCare.suitableFor",
    faqKeys: [
      {
        questionKey: "services.dermatologyCare.q1",
        answerKey: "services.dermatologyCare.a1",
      },
    ],
  },
  {
    id: "pediatric-checkup",
    slug: "pediatric-wellness-checkup",
    specialtyId: "pediatrics",
    titleKey: "services.pediatricCheckup.title",
    subtitleKey: "services.pediatricCheckup.subtitle",
    descriptionKey: "services.pediatricCheckup.description",
    icon: "Baby",
    featuresKeys: [
      "services.pediatricCheckup.f1",
      "services.pediatricCheckup.f2",
      "services.pediatricCheckup.f3",
      "services.pediatricCheckup.f4",
    ],
    benefitsKeys: [
      "services.pediatricCheckup.b1",
      "services.pediatricCheckup.b2",
      "services.pediatricCheckup.b3",
    ],
    duration: "40 min",
    suitableForKey: "services.pediatricCheckup.suitableFor",
    faqKeys: [
      {
        questionKey: "services.pediatricCheckup.q1",
        answerKey: "services.pediatricCheckup.a1",
      },
    ],
  },
  {
    id: "dental-aesthetics",
    slug: "dental-care-aesthetics",
    specialtyId: "dentistry",
    titleKey: "services.dentalCare.title",
    subtitleKey: "services.dentalCare.subtitle",
    descriptionKey: "services.dentalCare.description",
    icon: "Smile",
    featuresKeys: [
      "services.dentalCare.f1",
      "services.dentalCare.f2",
      "services.dentalCare.f3",
      "services.dentalCare.f4",
    ],
    benefitsKeys: [
      "services.dentalCare.b1",
      "services.dentalCare.b2",
      "services.dentalCare.b3",
    ],
    duration: "45-75 min",
    suitableForKey: "services.dentalCare.suitableFor",
    faqKeys: [
      {
        questionKey: "services.dentalCare.q1",
        answerKey: "services.dentalCare.a1",
      },
    ],
  },
  {
    id: "orthopedic-rehab",
    slug: "orthopedic-rehabilitation",
    specialtyId: "orthopedics",
    titleKey: "services.orthoCare.title",
    subtitleKey: "services.orthoCare.subtitle",
    descriptionKey: "services.orthoCare.description",
    icon: "Bone",
    featuresKeys: [
      "services.orthoCare.f1",
      "services.orthoCare.f2",
      "services.orthoCare.f3",
      "services.orthoCare.f4",
    ],
    benefitsKeys: [
      "services.orthoCare.b1",
      "services.orthoCare.b2",
      "services.orthoCare.b3",
    ],
    duration: "60 min",
    suitableForKey: "services.orthoCare.suitableFor",
    faqKeys: [
      {
        questionKey: "services.orthoCare.q1",
        answerKey: "services.orthoCare.a1",
      },
    ],
  },
  {
    id: "comprehensive-screening",
    slug: "comprehensive-health-screening",
    specialtyId: "internal-medicine",
    titleKey: "services.healthScreening.title",
    subtitleKey: "services.healthScreening.subtitle",
    descriptionKey: "services.healthScreening.description",
    icon: "Stethoscope",
    featuresKeys: [
      "services.healthScreening.f1",
      "services.healthScreening.f2",
      "services.healthScreening.f3",
      "services.healthScreening.f4",
    ],
    benefitsKeys: [
      "services.healthScreening.b1",
      "services.healthScreening.b2",
      "services.healthScreening.b3",
    ],
    duration: "90-120 min",
    suitableForKey: "services.healthScreening.suitableFor",
    faqKeys: [
      {
        questionKey: "services.healthScreening.q1",
        answerKey: "services.healthScreening.a1",
      },
    ],
  },
];
