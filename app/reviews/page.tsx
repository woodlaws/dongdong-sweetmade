import type { Metadata } from "next";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ReviewsExplorer } from "@/components/ReviewsExplorer";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";

export const metadata: Metadata = { title: "수강후기", description: "동동이 스윗메이드 수강생의 배움 전 고민과 수강 후 변화를 확인하세요.", alternates: { canonical: "/reviews" }, openGraph: { title: "수강후기 | 동동이 스윗메이드", description: "배움이 실제 변화로 이어진 수강 이야기", url: "/reviews" } };

export default function ReviewsPage() {
  return (
    <main><Breadcrumbs items={[{ label: "수강후기" }]} /><PageHero eyebrow="STUDENT STORIES" title="배움 뒤에 찾아온 작은 변화들" description="과장된 숫자 대신, 수강생이 실제로 느낀 과정과 다음 걸음을 전합니다." image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=86" imageAlt="함께 메뉴를 실습하는 클래스" />
      <section className="section-shell section-space"><ReviewsExplorer /></section>
      <section className="soft-section section-space"><div className="section-shell"><SectionIntro eyebrow="CHANGE STORY" title="수강 전 고민이 실행의 기준으로" /><div className="change-case"><div className="change-photo"><SmartImage src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=86" alt="창업 후 운영하는 따뜻한 카페" /></div><div><TrendingUp /><h3>무엇부터 준비할지 막막했던 예비 창업자</h3><p>원하는 카페의 콘셉트를 정리하고 메뉴의 역할, 준비 순서, 원가 기준을 하나씩 확인했습니다. 수강 후에는 해야 할 일을 단계별로 나누어 실행할 수 있게 되었다고 전했습니다.</p><a href="/consulting">창업 컨설팅 알아보기 <ArrowRight size={16} /></a></div></div></div></section>
      <CTASection title="후기 다음 이야기는 당신의 변화일 수 있습니다" description="현재 고민과 배우고 싶은 내용을 알려주시면 맞는 과정을 안내합니다." />
    </main>
  );
}
