import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClassesExplorer } from "@/components/ClassesExplorer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "클래스 안내",
  description: "수제청, 샌드위치와 브런치, 쌍화차와 전통차, 견과, 스프 클래스의 수강료와 수업 시간을 확인하세요.",
  alternates: { canonical: "/classes" },
  openGraph: { title: "클래스 안내 | 동동이 스윗메이드", description: "카페와 판매 현장에 활용하는 메뉴 교육", url: "/classes" },
};

export default function ClassesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "클래스" }]} />
      <PageHero eyebrow="CLASS PROGRAM" title="배움이 바로 실전이 되는 클래스" description="대표 클래스의 수강료와 수업 시간을 확인하고, 구체적인 일정은 문의해 주세요." image="/images/classes/042-lunchbox-feast-wide.webp" imageAlt="샌드위치와 샐러드, 브런치를 함께 담은 테이블" />
      <section className="section-shell section-space">
        <SectionIntro eyebrow="CLASS LIST" title="대표 클래스와 메뉴 수업" description="모집 일정은 정해지는 대로 안내합니다. 원하는 수업을 선택해 상세 정보와 상담 방법을 확인해 주세요." />
        <ClassesExplorer />
        <div className="center-link"><a href={siteConfig.classVideoUrl} target="_blank" rel="noreferrer">인스타그램 수업 영상 보기</a></div>
      </section>
      <CTASection title="수업 일정을 문의해 주세요" description="관심 있는 클래스를 알려주시면 현재 가능한 일정과 상담 방법을 안내합니다." />
    </main>
  );
}
