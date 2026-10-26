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
            <p className="eyebrow">DONGDONG SWEETMADE · 이천 메뉴 교육 공방</p>
            <h1>좋아하는 메뉴가<br /><span>나만의 가게</span>가<br />되는 시작.</h1>
            <p className="hero-description">수제청 한 병부터 든든한 브런치 한 접시까지.<br />내 손으로 만들고, 내 매장에서 선보이는 배움.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#featured-classes">나에게 맞는 클래스 찾기 <ArrowRight size={18} /></a>
            <a className="button button-secondary" href="/consulting">카페 창업이 처음이라면 <ArrowRight size={18} /></a>
          </div>
          <div className="trust-row" aria-label="브랜드 신뢰 지표">
            <div><BadgeCheck aria-hidden="true" /><span>KBS 생생정보통<br />방송 소개</span></div>
            <div><UsersRound aria-hidden="true" /><span>기업·이마트·학교·관공소<br />대상 다수 출강</span></div>
            <div><Coffee aria-hidden="true" /><span>카페·판매 메뉴<br />실전 교육</span></div>
          </div>
        </div>
      </section>

      <section className="start-paths section-shell" aria-labelledby="start-paths-title">
        <div className="start-paths-heading"><p className="mini-label">YOUR NEXT STEP</p><h2 id="start-paths-title">어떤 시작을<br />준비하고 있나요?</h2></div>
        <a href="/classes"><span className="path-number">01</span><div><h3>내 가게의 시그니처 메뉴</h3><p>과정별 수강료와 수업 내용 살펴보기</p></div><ArrowRight aria-hidden="true" /></a>
        <a href="/consulting"><span className="path-number">02</span><div><h3>나만의 카페 창업</h3><p>콘셉트부터 메뉴까지 상담하기</p></div><ArrowRight aria-hidden="true" /></a>
        <a href="/contact?type=기관·기업%20교육"><span className="path-number">03</span><div><h3>함께하는 단체 교육</h3><p>기관·기업에 맞는 프로그램 문의하기</p></div><ArrowRight aria-hidden="true" /></a>
      </section>

      <section className="section-shell section-space" id="featured-classes">
        <div className="home-section-heading"><SectionIntro align="left" eyebrow="MADE BY YOU" title="배워서, 내 메뉴로." description="무엇을 만들고 싶은가요? 실제 수업 메뉴와 수강료를 먼저 만나보세요." /><a className="all-classes-link" href="/classes">전체 클래스 보기 <ArrowRight size={18} /></a></div>
        <div className="class-grid featured">{featuredClasses.map((item) => <ClassCard item={item} key={item.slug} compact />)}</div>
        <div className="section-more"><a href="/contact?type=클래스%20일정%20문의">수업 일정 문의 <ArrowRight size={16} /></a></div>
      </section>

      <section className="learning-journey section-shell" aria-labelledby="journey-title">
        <div><p className="mini-label">FROM CLASS TO YOUR CAFE</p><h2 id="journey-title">첫 수업 전부터<br />방향을 함께 찾아요.</h2><p>창업 준비 중이어도, 이미 매장을 운영하고 있어도.<br />지금 필요한 배움부터 시작하세요.</p><a href="/contact" className="journey-link">내 상황에 맞는 과정 문의 <ArrowRight size={18} /></a></div>
        <ol><li><span>01</span><div><h3>관심 메뉴를 골라요</h3><p>클래스별 메뉴와 수강료, 수업 시간을 비교해 보세요.</p></div></li><li><span>02</span><div><h3>일정과 궁금한 점을 확인해요</h3><p>희망 과정과 현재 상황을 알려주시면 상담을 통해 안내합니다.</p></div></li><li><span>03</span><div><h3>내 매장에서 선보일 메뉴를 배워요</h3><p>카페와 판매 현장에 활용할 메뉴를 직접 만들어 보세요.</p></div></li></ol>
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
