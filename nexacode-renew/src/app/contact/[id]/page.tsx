import { Metadata } from "next";
import { fetchInquiryDetail } from "@/src/apis";
import Lenis from "@/src/app/lenis";
import ContactComponent from "@/src/components/contact/ContactComponent";

interface InquiryDetail {
  files: [];
  id: number;
  companyName: string;
  name: string;
  email: string;
  serviceSummary: string;
  response: string;
  createdAt: string;
  developmentAreaId: number;
  preparationStageId: number;
  workPageId: number;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const res = (await fetchInquiryDetail(Number(params.id))) as {
    data: InquiryDetail;
  };
  const inquiry = res.data;
  console.log("메타 타이틀 확인:", inquiry?.serviceSummary);
  return {
    title: inquiry.serviceSummary,
    description: inquiry.response,

    authors: [{ name: "nexacode" }],
  };
}

export default async function ContactPage({
  params,
}: {
  params: { id: string };
}) {
  const res = (await fetchInquiryDetail(Number(params.id))) as {
    data: InquiryDetail;
  };
  const inquiry = res.data;

  return (
    <Lenis>
      <ContactComponent inquiry={inquiry} />
    </Lenis>
  );
}
