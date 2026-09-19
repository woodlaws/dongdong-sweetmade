import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Award, BadgeCheck, Check, Clock3, MapPin, PackageCheck, Phone, Sparkles, WalletCards } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClassCard } from "@/components/ClassCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ReviewGallery } from "@/components/ReviewGallery";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { classes, getClassBySlug } from "@/data/classes";
import { classReviewImages } from "@/data/reviews";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return classes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getClassBySlug(slug);
  if (!item) return { title: "클래스를 찾을 수 없습니다" };
  const description = `${item.summary} 수강료 ${item.price}, 수업 시간 ${item.time}.`;
  return {
    title: item.title,
    description,
    alternates: { canonical: `/classes/${item.slug}` },
    openGraph: { title: `${item.title} | 동동이 스윗메이드`, description, url: `/classes/${item.slug}`, images: [{ url: item.image, alt: `${item.title} 대표 이미지` }] },
    twitter: { card: "summary_large_image", title: `${item.title} | 동동이 스윗메이드`, description, images: [item.image] },
  };
}

export default async function ClassDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getClassBySlug(slug);
  if (!item) notFound();

  const related = classes.filter((candidate) => candidate.slug !== item.slug).slice(0, 3);
  const relatedReviews = classReviewImages[item.slug] ?? [];
  const inquiryHref = `/contact?type=${encodeURIComponent("클래스 일정 문의")}&class=${encodeURIComponent(item.title)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: item.title,
    description: `${item.summary} 수업 시간 ${item.time}.`,
    image: item.image,
    provider: { "@type": "Organization", name: siteConfig.name, sameAs: siteConfig.url },
    ...(item.priceAmount ? { offers: { "@type": "Offer", price: item.priceAmount, priceCurrency: "KRW", url: `${siteConfig.url}/classes/${item.slug}` } } : {}),
    hasCourseInstance: { "@type": "CourseInstance", name: `${item.title} 수업`, description: `수업 시간 ${item.time}. 구체적인 일정은 상담 후 안내합니다.` },
  };
  const faqSchema = item.faq?.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: item.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "클래스", item: `${siteConfig.url}/classes` }, { "@type": "ListItem", position: 3, name: item.title, item: `${siteConfig.url}/classes/${item.slug}` }] };

  return (
    <main className="detail-page">
      <JsonLd data={schema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs items={[{ label: "클래스", href: "/classes" }, { label: item.title }]} />

      <section className="class-detail-hero section-shell">
        <div className="detail-image"><SmartImage src={item.image} alt={`${item.title} 대표 이미지`} priority /></div>
        <div className="detail-summary">
          <span className={`status-badge status-${item.status}`}>{item.status}</span>
          <p className="category-label">{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <ul className="detail-facts">
            <li><Clock3 />수업 시간 {item.time}</li>
            <li><WalletCards />수강료 {item.price}</li>
            <li><MapPin />{item.location}</li>
            {item.certification ? <li><Award />{item.certification}</li> : null}
          </ul>
          <div className="hero-actions"><a className="button button-primary" href={inquiryHref}>수업 일정 문의 <ArrowRight size={17} /></a><a className="button button-secondary" href={siteConfig.consultation.href}><Phone size={17} />{siteConfig.consultation.label}</a></div>
        </div>
      </section>

      <section className="soft-section section-space"><div className="section-shell two-column-info class-audience"><article><Sparkles /><h2>이런 분께 추천합니다</h2><ul>{item.recommendedFor.map((text) => <li key={text}><Check />{text}</li>)}</ul></article>{item.certification ? <article><BadgeCheck /><h2>자격 안내</h2><ul><li><Check />{item.certification}</li></ul><p className="class-confirmation-note">발급 조건과 비용은 상담 시 확인해 주세요.</p></article> : null}</div></section>

      {item.outcomes?.length ? <section className="section-shell section-space"><SectionIntro eyebrow="CLASS FOCUS" title="수업에서 다루는 내용" /><div className="two-column-info"><article><BadgeCheck /><ul>{item.outcomes.map((text) => <li key={text}><Check />{text}</li>)}</ul></article></div></section> : null}
      {item.curriculum?.length ? <section className="section-shell section-space curriculum-section"><SectionIntro eyebrow="CURRICULUM" title="배우는 내용과 커리큘럼" /><ol>{item.curriculum.map((text, index) => <li key={text}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{text}</h3></div></li>)}</ol></section> : null}

      <section className="section-shell class-info-strip">
        <div><Clock3 /><span>수업 시간</span><strong>{item.time}</strong></div>
        <div><WalletCards /><span>수강료</span><strong>{item.price}</strong></div>
        <div><MapPin /><span>장소</span><strong>{item.location}</strong></div>
        {item.supplies ? <div><PackageCheck /><span>준비물</span><strong>{item.supplies}</strong></div> : null}
      </section>

      {item.faq?.length ? <section className="section-shell section-space faq-section"><SectionIntro eyebrow="FAQ" title="자주 묻는 질문" />{item.faq.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section> : null}
      <section className="section-shell section-space"><SectionIntro title="함께 살펴보면 좋은 클래스" /><div className="class-grid">{related.map((candidate) => <ClassCard item={candidate} key={candidate.slug} compact />)}</div></section>
      {relatedReviews.length ? <section className="section-shell related-review-section"><SectionIntro eyebrow="KAKAO REVIEW" title="수강생들과 나눈 카톡 이야기" /><ReviewGallery images={relatedReviews} variant="related" /></section> : null}
      <CTASection title={`${item.title} 수업 일정을 문의해 주세요`} description="원하는 수업과 현재 준비 상황을 알려주시면 상담 방법을 안내합니다." />
    </main>
  );
}
