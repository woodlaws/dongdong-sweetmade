import type { Metadata } from "next";
import { ArrowRight, Award, BadgeCheck, BookOpenCheck, BriefcaseBusiness, Building2, ChefHat, HeartHandshake, Lightbulb, MessageCircle, Newspaper, Radio, Store } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { representative } from "@/data/representative";

export const metadata: Metadata = {
  title: "윤인동 대표·브랜드 소개",
  description: "10년간 전국과 해외에서 수제 공방을 운영해 온 윤인동 대표의 메뉴 교육, 카페창업 컨설팅, 기관 교육 경험을 소개합니다.",
  alternates: { canonical: "/about" },
  openGraph: { title: "윤인동 대표·브랜드 소개 | 동동이 스윗메이드", description: "레시피를 넘어 실제 판매와 창업까지 연결하는 10년의 현장 경험", url: "/about" },
};

const methods = [
  [Lightbulb, "목표와 시장 정리", "원하는 카페와 고객, 판매할 메뉴의 방향을 구체화합니다."],
  [BookOpenCheck, "판매 메뉴 개발", "레시피·원가·제조 동선을 실제 운영 기준으로 다듬습니다."],
  [ChefHat, "실전 교육", "반복 생산과 판매 상품화가 가능하도록 직접 실습합니다."],
  [Store, "창업과 운영 연결", "메뉴 구성부터 오픈 이후 운영 기준까지 함께 설계합니다."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "브랜드 소개" }]} />

      <section className="representative-hero section-shell">
        <div className="representative-hero-photo"><SmartImage src={representative.profileImage.value} alt={`${representative.name.value} 대표 프로필 사진`} priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div className="representative-hero-copy">
          <p className="mini-label">10 YEARS OF EXPERIENCE</p>
          <h1>레시피를 가르치는 것을 넘어<br />창업의 힘을 만들어드립니다</h1>
          <p className="representative-lead">10년간 축적한 메뉴 교육과 공방 운영 경험을 바탕으로, 수강생이 직접 판매할 수 있는 메뉴와 지속 가능한 사업 구조를 함께 설계합니다.</p>
          <div className="representative-identity"><strong>{representative.name.value} 대표</strong><span>{representative.title.value}</span><small>넥스플랜 · 정확한 소속 명칭과 직책 확인 중</small></div>
          <ul className="representative-facts">{representative.careerHighlights.map((item) => <li key={item.value}><BadgeCheck />{item.value}</li>)}</ul>
        </div>
      </section>

      <section className="section-shell section-space representative-story">
        <div><p className="mini-label">① REPRESENTATIVE STORY</p><h2>윤인동 대표의 이야기</h2><p>{representative.introduction.value}</p><blockquote>“배운 메뉴가 실제 상품이 되고,<br />자신만의 사업으로 이어질 때까지 함께하겠습니다.”</blockquote></div>
        <div className="expertise-pillars"><article><ChefHat /><h3>메뉴 개발 전문가</h3><p>판매 가능한 레시피와 상품 구성을 만듭니다.</p></article><article><HeartHandshake /><h3>창업·운영 컨설턴트</h3><p>원가와 동선, 운영 기준까지 함께 설계합니다.</p></article><article><Building2 /><h3>기관사업 실무자</h3><p>기관 교육과 지원사업 수행 경험을 연결합니다.</p></article></div>
      </section>

      <section className="soft-section section-space"><div className="section-shell"><SectionIntro eyebrow="② 10 YEARS IN THE FIELD" title="10년의 교육·공방 운영 경험" description="확인된 공식 제공 내용을 기준으로 경력을 정리했습니다." /><div className="career-timeline">{representative.careerHighlights.map((item, index) => <article key={item.value}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.value}</h3>{item.note && <p>{item.note}</p>}</div></article>)}</div></div></section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="③ MEDIA & PUBLIC ACTIVITY" title="방송과 언론이 주목한 실전 전문성" />
        <div className="media-activity-grid">
          <article><Radio /><span>방송 출연</span><h3>{representative.broadcastAppearances[0].title}</h3><p>{representative.broadcastAppearances[0].description}</p><small>{representative.broadcastAppearances[0].detail}</small></article>
          <article><Newspaper /><span>언론 인터뷰 · {representative.mediaCoverage[0].outlet}</span><h3>{representative.mediaCoverage[0].title}</h3><p>{representative.mediaCoverage[0].date}</p><a href={representative.mediaCoverage[0].url} target="_blank" rel="noreferrer">기사 원문 보기 <ArrowRight size={15} /></a></article>
          <article><Award /><span>교육·연구</span><h3>여주대학교 연구위원 역임</h3><p>상세 활동은 확인 후 추가할 예정입니다.</p></article>
          <article><BriefcaseBusiness /><span>기업 활동</span><h3>주식회사 여주한과 법인업체 이사</h3><p>재직 기간과 담당 업무는 확인 후 추가할 예정입니다.</p></article>
        </div>
      </section>

      <section className="soft-section section-space"><div className="section-shell"><SectionIntro eyebrow="④ SPECIALTIES" title="메뉴부터 창업까지 연결하는 전문 교육 분야" /><div className="specialty-cloud">{representative.specialties.map((item) => <span key={item.value}>{item.value}</span>)}</div></div></section>

      <section className="section-shell section-space"><SectionIntro eyebrow="⑤ CONSULTING METHOD" title="카페창업 컨설팅 방식" description="아이디어를 실제 판매 메뉴와 운영 가능한 구조로 구체화합니다." /><div className="process-line four">{methods.map(([Icon, title, description], index) => <div key={title}><Icon /><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{description}</p></div>)}</div></section>

      <section className="institution-band section-shell">
        <div><p className="mini-label">⑥ INSTITUTION & BUSINESS</p><h2>기관·기업 맞춤 교육과<br />지원사업도 함께합니다</h2><p>카페 메뉴 개발, 창업 교육, 지역 특산물을 활용한 상품 개발, 수제청·디저트 실습 등 기관의 목적과 대상에 맞춘 교육 프로그램을 설계합니다.</p><a className="button button-primary" href="/contact?type=기관·기업%20교육">기관·기업 교육 문의 <MessageCircle size={17} /></a></div>
        <div className="institution-programs">{representative.consultingAreas.map((item) => <span key={item.value}><BadgeCheck />{item.value}</span>)}</div>
      </section>

      <section className="representative-message section-shell section-space"><p className="mini-label">⑦ REPRESENTATIVE MESSAGE</p><blockquote>“레시피를 배우는 시간을 넘어,<br />내 메뉴와 내 사업을 시작할 힘을 만들어드리겠습니다.”</blockquote><strong>윤인동 · 동동이 스윗메이드 대표</strong></section>
      <CTASection title="⑧ 당신의 메뉴와 창업 계획을 들려주세요" description="개인 클래스와 카페창업 상담, 기관·기업 교육을 목적에 맞게 안내해 드립니다." />
    </main>
  );
}
