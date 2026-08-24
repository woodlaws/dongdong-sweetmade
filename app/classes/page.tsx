import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClassScheduleExplorer } from "@/components/ClassScheduleExplorer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "클래스 안내", description: "수제청·음료, 브런치·디저트, 앙금플라워, 카페 창업반과 원데이 클래스를 확인하세요.", alternates: { canonical: "/classes" }, openGraph: { title: "클래스 안내 | 동동이 스윗메이드", description: "카페 현장에 바로 적용하는 실전 클래스", url: "/classes" } };

export default function ClassesPage() {
  return <main><Breadcrumbs items={[{ label: "클래스" }]} /><PageHero eyebrow="CLASS PROGRAM" title="배움이 바로 실전이 되는 클래스" description="처음 시작하는 분부터 카페 운영자까지, 목표에 맞는 과정을 찾아보세요." image="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=86" imageAlt="다양한 수제 과일 음료" /><ClassScheduleExplorer /><CTASection /></main>;
}
