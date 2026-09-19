import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ReviewGallery } from "@/components/ReviewGallery";
import { reviewImages } from "@/data/reviews";

export const metadata: Metadata = { title: "수강후기", description: "동동이 스윗메이드 수강생들과 나눈 실제 카카오톡 후기 캡처를 확인하세요.", alternates: { canonical: "/reviews" }, openGraph: { title: "수강후기 | 동동이 스윗메이드", description: "수강생들과 나눈 실제 카카오톡 이야기", url: "/reviews" } };

export default function ReviewsPage() {
  return (
    <main><Breadcrumbs items={[{ label: "수강후기" }]} />
      <header className="review-page-heading section-shell"><p className="mini-label">STUDENT STORIES</p><h1>수강생들과 나눈 진짜 이야기</h1></header>
      <section className="section-shell review-page-gallery"><ReviewGallery images={reviewImages} initialCount={6} showMore /></section>
      <CTASection title="배우고 싶은 메뉴를 알려주세요" description="현재 고민과 배우고 싶은 내용을 확인해 맞는 과정을 안내합니다." />
    </main>
  );
}
