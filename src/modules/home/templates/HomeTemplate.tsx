import { Hero } from "@/modules/home/components/Hero";
import { Statistics } from "@/modules/home/components/Statistics";
import { SpecialtiesPreview } from "@/modules/home/components/SpecialtiesPreview";
import { WhyChooseNOVA } from "@/modules/home/components/WhyChooseNOVA";
import { ServicesPreview } from "@/modules/home/components/ServicesPreview";
import { FacilitiesPreview } from "@/modules/home/components/FacilitiesPreview";
import { DoctorsPreview } from "@/modules/home/components/DoctorsPreview";
import { PatientExperience } from "@/modules/home/components/PatientExperience";
import { Testimonials } from "@/modules/home/components/Testimonials";
import { FinalCTA } from "@/modules/home/components/FinalCTA";

export async function HomeTemplate() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 overflow-hidden">
      <Hero />
      <Statistics />
      <SpecialtiesPreview />
      <WhyChooseNOVA />
      <ServicesPreview />
      <FacilitiesPreview />
      <DoctorsPreview />
      <PatientExperience />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
