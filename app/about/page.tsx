import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, BookOpenCheck, Building2, ChefHat, HeartHandshake, Lightbulb, Newspaper, Radio, Store } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { broadcastImage } from "@/data/reviews";
import { representative } from "@/data/representative";

export const metadata: Metadata = {
  title: "윤인동 대표·브랜드 소개",
  description: "윤인동 대표의 메뉴 교육 분야, 자격 및 교육 이력, 기업·이마트·학교·관공소 출강 경험을 소개합니다.",
  alternates: { canonical: "/about" },
  openGraph: { title: "윤인동 대표·브랜드 소개 | 동동이 스윗메이드", description: "카페와 판매 현장에 활용하는 메뉴 교육과 자격·교육 이력", url: "/about" },
};

const methods = [
  [Lightbulb, "목표 정리", "준비하는 매장과 판매 방식, 배우고 싶은 메뉴를 확인합니다."],
  [BookOpenCheck, "수업 선택", "현재 목표에 맞는 메뉴 수업과 상담 방향을 정리합니다."],
  [ChefHat, "메뉴 교육", "카페와 판매 현장에 활용할 수 있는 메뉴를 배웁니다."],
  [Store, "현장 활용", "배운 메뉴를 자신의 매장과 판매 계획에 연결합니다."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "브랜드 소개" }]} />

      <section className="representative-hero section-shell">
        <div className="representative-hero-photo"><SmartImage src={representative.profileImage.value} alt={`${representative.name.value} 대표 프로필 사진`} priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div className="representative-hero-copy">
          <p className="mini-label">MENU EDUCATION &amp; BUSINESS</p>
          <h1>현장에서 활용할 메뉴로<br />창업 준비의 시작을 돕습니다</h1>
          <p className="representative-lead">{representative.introduction.value}</p>
          <div className="representative-identity"><strong>{representative.name.value} 대표</strong><span>{representative.title.value}</span></div>
          <ul className="representative-facts">{representative.careerHighlights.map((item) => <li key={item.value}><BadgeCheck />{item.value}</li>)}</ul>
        </div>
      </section>

      <section className="section-shell section-space representative-story">
        <div><p className="mini-label">① REPRESENTATIVE STORY</p><h2>윤인동 대표의 이야기</h2><p>{representative.introduction.value}</p><blockquote>“배운 메뉴가 실제 상품이 되고,<br />자신만의 사업으로 이어질 때까지 함께하겠습니다.”</blockquote></div>
        <div className="expertise-pillars"><article><ChefHat /><h3>메뉴 교육</h3><p>수제청부터 브런치·전통차·견과·스프까지 현장 활용 메뉴를 교육합니다.</p></article><article><HeartHandshake /><h3>창업 준비</h3><p>카페·전통찻집·배달 판매·온라인 판매를 준비하는 분들의 배움을 돕습니다.</p></article><article><Building2 /><h3>외부 출강</h3><p>기업·이마트·학교·관공소 대상 출강 경험을 보유하고 있습니다.</p></article></div>
      </section>

      <section className="soft-section section-space" id="qualifications"><div className="section-shell"><SectionIntro eyebrow="② QUALIFICATIONS & TRAINING" title="자격 및 교육 이력" description="자격 취득과 교육과정 수료를 구분해 제공된 명칭 그대로 정리했습니다." /><div className="qualification-history" role="list">{representative.qualifications.map((item) => <article key={`${item.period}-${item.title}`} role="listitem"><time>{item.period}</time><span>{item.type}</span><h3>{item.title}</h3><p>{item.institution}</p></article>)}</div></div></section>

      <section className="section-shell section-space external-lecture-section">
        <SectionIntro eyebrow="③ EXTERNAL LECTURES" title="기업·이마트·학교·관공소 대상 다수 출강" description="제공된 출강 범위만 표시하며, 확인되지 않은 기관명이나 강의 횟수는 추가하지 않았습니다." />
        <div className="external-lecture-grid">{representative.externalLectures.map((item) => <article key={item}><Building2 /><h3>{item}</h3></article>)}</div>
      </section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="④ MEDIA & PUBLIC ACTIVITY" title="방송과 언론에 소개된 활동" />
        <div className="media-activity-grid">
          <article className="broadcast-proof"><div className="broadcast-proof-image"><SmartImage src={broadcastImage.src} alt={broadcastImage.alt} sizes="(max-width: 800px) 100vw, 50vw" /></div><Radio /><span>방송 화면 자료</span><h3>KBS 생생정보통 방송 화면</h3><p>방송 화면에 소개된 윤인동 대표 자료입니다.</p></article>
          <article><Newspaper /><span>언론 기사 · {representative.mediaCoverage[0].outlet}</span><h3>{representative.mediaCoverage[0].title}</h3><p>{representative.mediaCoverage[0].date}</p><a href={representative.mediaCoverage[0].url} target="_blank" rel="noreferrer">기사 원문 보기 <ArrowRight size={15} /></a></article>
        </div>
      </section>

      <section className="soft-section section-space"><div className="section-shell"><SectionIntro eyebrow="⑤ SPECIALTIES" title="카페와 판매 현장에 연결하는 교육 분야" /><div className="specialty-cloud">{representative.specialties.map((item) => <span key={item.value}>{item.value}</span>)}</div></div></section>
      <section className="section-shell section-space"><SectionIntro eyebrow="⑥ LEARNING FLOW" title="목표에 맞춰 배우는 과정" /><div className="process-line four">{methods.map(([Icon, title, description], index) => <div key={title}><Icon /><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{description}</p></div>)}</div></section>

      <section className="representative-message section-shell section-space"><p className="mini-label">⑦ REPRESENTATIVE MESSAGE</p><blockquote>“레시피를 배우는 시간을 넘어,<br />내 메뉴와 내 사업을 시작할 힘을 만들어드리겠습니다.”</blockquote><strong>윤인동 · 동동이 스윗메이드 대표</strong></section>
      <CTASection title="⑧ 배우고 싶은 메뉴를 알려주세요" description="대표 클래스와 기타 메뉴 수업의 가능한 일정을 안내합니다." />
    </main>
  );
}
