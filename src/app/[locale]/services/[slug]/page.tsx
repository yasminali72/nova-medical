import { ServiceDetailTemplate } from "@/modules/services";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetailTemplate slug={slug} />;
}
