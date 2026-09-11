// Home module data — mock static data for the home page
export const stats = [
  { valueKey: "home.stats.specialists", labelKey: "home.stats.specialistsLabel" },
  { valueKey: "home.stats.departments", labelKey: "home.stats.departmentsLabel" },
  { valueKey: "home.stats.patients", labelKey: "home.stats.patientsLabel" },
  { valueKey: "home.stats.experience", labelKey: "home.stats.experienceLabel" },
] as const;

export const whyChooseItems = [
  { icon: "Award", titleKey: "home.whyChooseUs.item1.title", descKey: "home.whyChooseUs.item1.description" },
  { icon: "Sparkles", titleKey: "home.whyChooseUs.item2.title", descKey: "home.whyChooseUs.item2.description" },
  { icon: "HeartHandshake", titleKey: "home.whyChooseUs.item3.title", descKey: "home.whyChooseUs.item3.description" },
  { icon: "Shield", titleKey: "home.whyChooseUs.item4.title", descKey: "home.whyChooseUs.item4.description" },
] as const;

export const journeySteps = [
  { numberKey: "home.journey.step1.number", titleKey: "home.journey.step1.title", descKey: "home.journey.step1.description" },
  { numberKey: "home.journey.step2.number", titleKey: "home.journey.step2.title", descKey: "home.journey.step2.description" },
  { numberKey: "home.journey.step3.number", titleKey: "home.journey.step3.title", descKey: "home.journey.step3.description" },
] as const;
