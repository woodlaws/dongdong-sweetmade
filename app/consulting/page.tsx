import type { Metadata } from "next";
import { BadgeCheck, BarChart3, Building2, ChefHat, ClipboardCheck, LayoutTemplate, MapPinned, MessageCircle, Route, Store, Utensils } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { representative } from "@/data/representative";
import { consultingFaqs, siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "카페창업 컨설팅", description: "상권과 콘셉트 분석부터 메뉴 개발, 가격 구성, 운영 교육까지 1:1로 함께하는 카페 창업 컨설팅입니다.", alternates: { canonical: "/consulting" }, openGraph: { title: "카페창업 컨설팅 | 동동이 스윗메이드", description: "메뉴와 운영까지 이어지는 1:1 맞춤 카페 창업 컨설팅", url: "/consulting" } };

const process = ["상담 및 현황 파악", "상권·콘셉트 분석", "메뉴 및 상품 구성", "메뉴 실습과 운영 교육", "오픈 및 운영 피드백"];
const services = [
  [Store, "카페 콘셉트 설계"], [Utensils, "메뉴 개발"], [BarChart3, "원가 및 판매가격 구성"], [Route, "운영 동선 점검"], [LayoutTemplate, "메뉴판 구성"], [ChefHat, "1:1 맞춤 교육"],
] as const;

export default function ConsultingPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: consultingFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return (
    <main>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "카페창업 컨설팅" }]} />
      <PageHero eyebrow="CAFE STARTUP CONSULTING" title="당신의 카페, 성공으로 가는 가장 빠른 길" description="입지 분석부터 메뉴 개발과 운영 교육까지, 필요한 부분을 1:1 맞춤으로 함께 준비합니다." image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=86" imageAlt="창업 컨설팅 대상 카페 공간" />

      <section className="section-shell section-space consulting-intro">
        <div><p className="mini-label">ABOUT CONSULTING</p><h2>예쁜 카페보다<br />운영되는 카페를 만듭니다</h2><p>좋은 아이디어가 있어도 상권, 메뉴, 원가, 동선이 맞지 않으면 운영은 어려워집니다. 현재 상황을 정확히 살피고 실행 가능한 우선순위를 함께 설계합니다.</p><a className="button button-primary" href="/contact">상담 신청하기 <MessageCircle size={17} /></a></div>
        <div className="consulting-image"><SmartImage src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=86" alt="카페 창업 준비와 상담" /></div>
      </section>

      <section className="soft-section section-space">
        <div className="section-shell"><SectionIntro eyebrow="WHO IT IS FOR" title="이런 분께 추천합니다" /><div className="recommend-list"><span><BadgeCheck />처음 카페 창업을 준비하는 분</span><span><BadgeCheck />콘셉트와 메뉴 방향이 정리되지 않은 분</span><span><BadgeCheck />기존 메뉴의 원가와 판매 구성을 개선하려는 분</span><span><BadgeCheck />실습과 운영 노하우를 함께 배우고 싶은 분</span></div></div>
      </section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="PROCESS" title="컨설팅 진행 과정" description="상황을 듣는 것부터 오픈 후 피드백까지 단계별로 진행합니다." />
        <div className="process-line five">{process.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b>{index === 0 ? <MessageCircle /> : index === 1 ? <MapPinned /> : index === 2 ? <ClipboardCheck /> : index === 3 ? <ChefHat /> : <Store />}<h3>{item}</h3></div>)}</div>
      </section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="SERVICE" title="필요한 부분을 맞춤 구성합니다" />
        <div className="icon-card-grid three">{services.map(([Icon, title]) => <article key={title}><Icon /><h3>{title}</h3><p>현재 준비 단계와 매장 상황에 맞춰 구체적인 실행 기준을 함께 정리합니다.</p></article>)}</div>
      </section>

      <section className="case-band section-shell">
        <div className="case-photo"><SmartImage src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=86" alt="카페 브런치 메뉴 개발 사례" /></div>
        <div><p className="mini-label">SAMPLE CASE</p><h2>메뉴가 많아도<br />선택받지 못하던 카페</h2><p>대표 메뉴의 기준과 조리 동선을 다시 정리하고, 매장의 콘셉트에 맞는 브런치 구성을 제안한 샘플 사례입니다.</p><ul><li>대표 메뉴 중심의 구성 정리</li><li>원가와 판매가격 기준 확인</li><li>조리·제공 동선을 고려한 레시피 표준화</li></ul><small>※ 실제 성과 수치는 확인 후 교체할 수 있도록 정성적 샘플 문구로 구성했습니다.</small></div>
      </section>

      <section className="institution-band section-shell consulting-institution">
        <div><p className="mini-label">INSTITUTION & BUSINESS</p><h2>기관·기업 맞춤 교육과<br />지원사업도 함께합니다</h2><p>윤인동 대표의 메뉴 개발·공방 운영 경험을 바탕으로 기관의 목적과 참여 대상에 맞는 교육과 컨설팅을 설계합니다.</p><a className="button button-primary" href="/contact?type=기관·기업%20교육">기관·기업 교육 문의 <Building2 size={17} /></a></div>
        <div className="institution-programs">{representative.consultingAreas.map((item) => <span key={item.value}><BadgeCheck />{item.value}</span>)}</div>
      </section>

      <section className="section-shell section-space faq-section"><SectionIntro eyebrow="FAQ" title="자주 묻는 질문" />{consultingFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <CTASection title="지금 상황부터 편하게 알려주세요" description="필요한 컨설팅 범위와 다음 단계를 차분히 안내해 드립니다." />
      <a className="sr-only" href={siteConfig.kakaoUrl}>카카오톡 상담</a>
    </main>
  );
}
