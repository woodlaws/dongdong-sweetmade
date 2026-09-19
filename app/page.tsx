import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Coffee, Phone, Sprout, Store, UsersRound } from "lucide-react";
import { ClassCard } from "@/components/ClassCard";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { ReviewGallery } from "@/components/ReviewGallery";
import { featuredClasses } from "@/data/classes";
import { homeReviewImages } from "@/data/reviews";
import { representative } from "@/data/representative";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const services = [
  { title: "카페창업 컨설팅", description: "입지 분석부터 메뉴 개발, 마케팅 전략까지 1:1 맞춤 컨설팅", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=84", href: "/consulting" },
  { title: "수제청·음료 클래스", description: "카페와 판매 현장에 활용하는 수제청 메뉴 교육", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=84", href: "/classes" },
  { title: "샌드위치·브런치 수업", description: "카페와 배달 판매를 준비하는 브런치 메뉴 교육", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=84", href: "/classes" },
  { title: "전통차·견과·스프 수업", description: "전통찻집과 다양한 판매 메뉴를 준비하는 과정", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=84", href: "/classes" },
];

const sketches = [
  ["수제청과 과일 음료", "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=82"],
  ["브런치 메뉴 구성", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=82"],
  ["케이크와 디저트", "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=700&q=82"],
  ["카페 음료 메뉴", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=82"],
  ["메뉴 개발 아이디어", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=82"],
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-brand-art" aria-hidden="true"><SmartImage src="/og.png" alt="" priority sizes="(max-width: 1440px) 100vw, 1440px" /></div>
        <div className="home-hero-image"><SmartImage src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=88" alt="상큼한 과일을 담은 카페 음료" priority sizes="100vw" /></div>
        <div className="hero-copy">
          <div className="hero-message">
            <p className="eyebrow">카페와 판매 현장에 연결되는 메뉴 교육</p>
            <h1>배우는 순간,<br /><span>나만의 카페</span>가 시작됩니다</h1>
            <p className="hero-description">수제청부터 브런치·전통차·견과·스프까지.<br />내 매장에서 선보일 메뉴를 배워보세요.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="/classes">클래스 일정 보기 <ArrowRight size={18} /></a>
            <a className="button button-secondary" href="/contact">창업 상담 신청 <ArrowRight size={18} /></a>
          </div>
          <div className="trust-row" aria-label="브랜드 신뢰 지표">
            <div><BadgeCheck aria-hidden="true" /><span>KBS 생생정보통<br />방송 소개</span></div>
            <div><UsersRound aria-hidden="true" /><span>기업·이마트·학교·관공소<br />대상 다수 출강</span></div>
            <div><Coffee aria-hidden="true" /><span>카페·판매 메뉴<br />실전 교육</span></div>
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
          <p className="mini-label">REPRESENTATIVE</p>
          <h2>현장에서 활용할 메뉴로<br />창업 준비의 시작을 돕습니다</h2>
          <p className="representative-name"><strong>{representative.name.value} 대표</strong><span>{representative.title.value}</span></p>
          <p>{representative.introduction.value}</p>
          <div className="representative-highlights">
            {representative.careerHighlights.slice(0, 3).map((item) => <span key={item.value}><BadgeCheck />{item.value}</span>)}
          </div>
          <blockquote>“배운 메뉴가 실제 상품이 되고,<br />자신만의 사업으로 이어질 때까지 함께하겠습니다.”</blockquote>
          <div className="representative-actions"><a className="button button-primary" href="/about">대표 소개 자세히 보기 <ArrowRight size={17} /></a><a className="button button-secondary" href="/contact">창업 상담 신청 <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="section-shell section-space" id="featured-classes">
        <SectionIntro eyebrow="FEATURED CLASS" title="대표 클래스" description="수강료와 수업 시간을 확인하고, 구체적인 일정은 문의해 주세요." />
        <div className="class-grid featured">{featuredClasses.map((item) => <ClassCard item={item} key={item.slug} compact />)}</div>
        <div className="section-more"><a href="/contact?type=클래스%20일정%20문의">수업 일정 문의 <ArrowRight size={16} /></a></div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-shell">
          <SectionIntro eyebrow="REAL REVIEW" title="수강생들이 보내주신 진짜 카톡 후기" />
          <ReviewGallery images={homeReviewImages} variant="home" />
          <div className="section-more"><a href="/reviews">카톡 후기 전체 보기 <ArrowRight size={16} /></a></div>
        </div>
      </section>

      <section className="section-shell section-space">
        <SectionIntro eyebrow="CLASS MENU" title="클래스에서 배우는 메뉴" description="메뉴 이해를 돕는 스톡 참고 이미지입니다. 실제 수업 현장 또는 수강생 작품 사진이 아닙니다." />
        <div className="sketch-grid">
          {sketches.map(([title, image]) => <figure key={title}><div><SmartImage src={image} alt={`${title} 참고 이미지`} /></div><figcaption>{title} · 참고 이미지</figcaption></figure>)}
        </div>
      </section>

      <CTASection />

      <section className="quick-funnel section-shell" aria-label="상담 빠른 안내">
        <div><Store /><span>창업 목표를 알려주세요</span></div><ArrowRight /><div><Sprout /><span>맞춤 과정을 제안해요</span></div><ArrowRight /><div><Phone /><span>전화로 상담해요</span></div>
        <a href={siteConfig.consultation.href} className="sr-only">{siteConfig.consultation.label}</a>
      </section>
    </main>
  );
}
