import type { Metadata } from "next";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { representative } from "@/data/representative";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "문의하기", description: "카페 창업 컨설팅과 클래스 일정, 수강 관련 궁금한 점을 문의하세요.", alternates: { canonical: "/contact" }, openGraph: { title: "문의하기 | 동동이 스윗메이드", description: "카페 창업과 클래스 상담", url: "/contact" } };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  return (
    <main><Breadcrumbs items={[{ label: "문의" }]} /><section className="contact-layout section-shell">
      <aside><p className="mini-label">CONTACT</p><h1>문의하기</h1><p>개인 클래스, 카페창업 컨설팅, 기관·기업 교육을 목적에 맞게 안내해 드립니다.</p><div className="contact-channels"><a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer"><MessageCircle />카카오톡 상담<span>가장 빠른 상담 채널</span></a><a href={`tel:${representative.contact.phone.value.replaceAll("-", "")}`}><Phone />전화 상담<span>{representative.contact.phone.value}</span></a><div><MapPin />주소<span>{representative.contact.address.value}</span></div></div><div className="contact-social"><a href={siteConfig.blogUrl} target="_blank" rel="noreferrer">N 네이버 블로그</a><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> {representative.contact.instagram.value}</a></div></aside>
      <div className="form-panel"><ContactForm initialType={type} /></div>
    </section></main>
  );
}
