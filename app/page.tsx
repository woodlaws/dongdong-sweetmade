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

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-image"><SmartImage src="/images/classes/042-lunchbox-feast-wide.webp" alt="샌드위치와 샐러드, 브런치를 함께 담은 테이블" priority sizes="(max-width: 800px) calc(100vw - 28px), 58vw" /></div>
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

      <section className="section-shell section-space" id="featured-classes">
        <SectionIntro eyebrow="FEATURED CLASS" title="대표 클래스" description="수강료와 수업 시간을 확인하고, 구체적인 일정은 문의해 주세요." />
        <div className="class-grid featured">{featuredClasses.map((item) => <ClassCard item={item} key={item.slug} compact />)}</div>
        <div className="section-more"><a href="/contact?type=클래스%20일정%20문의">수업 일정 문의 <ArrowRight size={16} /></a></div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-shell">
          <SectionIntro eyebrow="REAL REVIEW" title="수업 이후, 카톡으로 전해주신 이야기" />
          <ReviewGallery images={homeReviewImages} variant="home" />
          <div className="section-more"><a href="/reviews">후기 더 보기 <ArrowRight size={16} /></a></div>
        </div>
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

      <CTASection />

      <section className="quick-funnel section-shell" aria-label="상담 빠른 안내">
        <div><Store /><span>창업 목표를 알려주세요</span></div><ArrowRight /><div><Sprout /><span>맞춤 과정을 제안해요</span></div><ArrowRight /><div><Phone /><span>전화로 상담해요</span></div>
        <a href={siteConfig.consultation.href} className="sr-only">{siteConfig.consultation.label}</a>
      </section>
    </main>
  );
}
