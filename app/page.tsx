import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, Coffee, MessageCircle, Sprout, Star, Store, UsersRound } from "lucide-react";
import { ClassCard } from "@/components/ClassCard";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { classes } from "@/data/classes";
import { reviews } from "@/data/reviews";
import { representative } from "@/data/representative";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const services = [
  { title: "카페창업 컨설팅", description: "입지 분석부터 메뉴 개발, 마케팅 전략까지 1:1 맞춤 컨설팅", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=84", href: "/consulting" },
  { title: "수제청·음료 클래스", description: "계절 과일 수제청과 카페 음료 실전 레시피", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=84", href: "/classes" },
  { title: "브런치·디저트 클래스", description: "카페 인기 브런치 메뉴와 디저트 실전 제작", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=84", href: "/classes" },
  { title: "앙금플라워 클래스", description: "특별한 날을 빛내는 앙금플라워 케이크", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=84", href: "/classes" },
];

const sketches = [
  ["수제청 창업반 실습 현장", "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=82"],
  ["브런치 메뉴 실습", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=82"],
  ["앙금플라워 케이크 실습", "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=700&q=82"],
  ["음료 클래스 실습", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=82"],
  ["창업 컨설팅 특강", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=82"],
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-brand-art" aria-hidden="true"><SmartImage src="/og.png" alt="" priority sizes="(max-width: 1440px) 100vw, 1440px" /></div>
        <div className="home-hero-image"><SmartImage src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=88" alt="상큼한 과일을 담은 카페 음료" priority sizes="100vw" /></div>
        <div className="hero-copy">
          <div className="hero-message">
            <p className="eyebrow">10년 경력 · 카페창업 및 메뉴개발 전문가</p>
            <h1>배우는 순간,<br /><span>나만의 카페</span>가 시작됩니다</h1>
            <p className="hero-description">수제청부터 브런치, 앙금플라워까지.<br />메뉴 개발과 창업 노하우를 한 번에 배워보세요.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="/classes">클래스 일정 보기 <ArrowRight size={18} /></a>
            <a className="button button-secondary" href="/contact">창업 상담 신청 <ArrowRight size={18} /></a>
          </div>
          <div className="trust-row" aria-label="브랜드 신뢰 지표">
            <div><BadgeCheck aria-hidden="true" /><span>KBS 생생정보통<br />2회 출연</span></div>
            <div><UsersRound aria-hidden="true" /><span>전국·해외 공방<br />10년 운영</span></div>
            <div><Coffee aria-hidden="true" /><span>카페 메뉴<br />실전 교육</span></div>
          </div>
        </div>
      </section>

      <section className="section-shell services-grid" aria-label="핵심 서비스">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <a href={service.href} className="service-image"><SmartImage src={service.image} alt={service.title} /></a>
            <div><h2>{service.title}</h2><p>{service.description}</p><a className="circle-link" href={service.href} aria-label={`${service.title} 보기`}><ArrowRight size={17} /></a></div>
          </article>
        ))}
      </section>

      <section className="representative-home section-shell">
        <div className="representative-home-photo"><SmartImage src={representative.profileImage.value} alt={`${representative.name.value} 대표 프로필`} sizes="(max-width: 800px) 100vw, 38vw" /></div>
        <div className="representative-home-copy">
          <p className="mini-label">10 YEARS OF EXPERIENCE</p>
          <h2>10년의 현장 경험으로<br />카페 창업의 시작을 함께합니다</h2>
          <p className="representative-name"><strong>{representative.name.value} 대표</strong><span>{representative.title.value}</span><small>넥스플랜 · 세부 소속 및 직책 확인 중</small></p>
          <p>{representative.introduction.value}</p>
          <div className="representative-highlights">
            {representative.careerHighlights.slice(0, 3).map((item) => <span key={item.value}><BadgeCheck />{item.value}</span>)}
            <span><Building2 />30억 원 규모 지원사업 성공 경험</span>
          </div>
          <blockquote>“배운 메뉴가 실제 상품이 되고,<br />자신만의 사업으로 이어질 때까지 함께하겠습니다.”</blockquote>
          <div className="representative-actions"><a className="button button-primary" href="/about">윤인동 대표 소개 <ArrowRight size={17} /></a><a className="button button-secondary" href="/contact">창업 상담 신청 <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="NOW OPEN" title="지금 모집 중인 클래스" description="배운 내용을 매장에서 바로 활용할 수 있는 실전 중심 과정입니다." />
        <div className="class-grid featured">{classes.slice(0, 3).map((item) => <ClassCard item={item} key={item.slug} compact />)}</div>
        <div className="section-more"><a href="/classes">전체 클래스 보기 <ArrowRight size={16} /></a></div>
      </section>

      <section className="reviews-section">
        <div className="section-shell">
          <SectionIntro eyebrow="REAL REVIEW" title="수강생의 변화가 증명합니다" description="확인되지 않은 수치를 꾸미지 않고, 배움의 실제 변화를 담았습니다." />
          <div className="review-grid">
            {reviews.slice(0, 3).map((review) => <article className="review-card" key={review.id}><Star fill="currentColor" size={18} /><p>{review.quote}</p><small>{review.change}</small><strong>{review.author}</strong></article>)}
          </div>
          <div className="section-more"><a href="/reviews">수강후기 더 보기 <ArrowRight size={16} /></a></div>
        </div>
      </section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="CLASS SKETCH" title="최근 클래스 스케치" />
        <div className="sketch-grid">
          {sketches.map(([title, image]) => <figure key={title}><div><SmartImage src={image} alt={title} /></div><figcaption>{title}</figcaption></figure>)}
        </div>
      </section>

      <CTASection />

      <section className="quick-funnel section-shell" aria-label="상담 빠른 안내">
        <div><Store /><span>창업 목표를 알려주세요</span></div><ArrowRight /><div><Sprout /><span>맞춤 과정을 제안해요</span></div><ArrowRight /><div><MessageCircle /><span>카카오톡으로 상담해요</span></div>
        <a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer" className="sr-only">카카오톡 상담</a>
      </section>
    </main>
  );
}
