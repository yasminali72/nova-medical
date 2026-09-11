import { DoctorDetailTemplate } from "@/modules/doctors";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DoctorDetailTemplate slug={slug} />;
}
