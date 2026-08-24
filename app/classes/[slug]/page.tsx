import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, CalendarDays, Check, Clock3, MapPin, MessageCircle, PackageCheck, Sparkles, WalletCards } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClassCard } from "@/components/ClassCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionIntro } from "@/components/SectionIntro";
import { SmartImage } from "@/components/SmartImage";
import { classes, getClassBySlug } from "@/data/classes";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return classes.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getClassBySlug(slug);
  if (!item) return { title: "클래스를 찾을 수 없습니다" };
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/classes/${item.slug}` },
    openGraph: { title: `${item.title} | 동동이 스윗메이드`, description: item.summary, url: `/classes/${item.slug}`, images: [{ url: item.image, alt: `${item.title} 대표 이미지` }] },
    twitter: { card: "summary_large_image", title: `${item.title} | 동동이 스윗메이드`, description: item.summary, images: [item.image] },
  };
}

export default async function ClassDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getClassBySlug(slug);
  if (!item) notFound();
  const related = classes.filter((candidate) => candidate.slug !== item.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: item.title,
    description: item.summary,
    image: item.image,
    provider: { "@type": "Organization", name: siteConfig.name, sameAs: siteConfig.url },
    offers: { "@type": "Offer", category: item.price, availability: "https://schema.org/InStock" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: item.format, courseWorkload: item.duration, location: item.location },
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: item.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "클래스", item: `${siteConfig.url}/classes` }, { "@type": "ListItem", position: 3, name: item.title, item: `${siteConfig.url}/classes/${item.slug}` }] };

  return (
    <main className="detail-page">
      <JsonLd data={schema} /><JsonLd data={faqSchema} /><JsonLd data={breadcrumbSchema} />
      <Breadcrumbs items={[{ label: "클래스", href: "/classes" }, { label: item.title }]} />
      <section className="class-detail-hero section-shell">
        <div className="detail-image"><SmartImage src={item.image} alt={`${item.title} 대표 이미지`} priority /></div>
        <div className="detail-summary"><span className={`status-badge status-${item.status}`}>{item.status}</span><p className="category-label">{item.category}</p><h1>{item.title}</h1><p>{item.summary}</p><ul className="detail-facts"><li><CalendarDays />{item.format}</li><li><Clock3 />{item.duration}</li><li><WalletCards />{item.price}</li><li><MapPin />{item.location}</li></ul><div className="hero-actions"><a className="button button-primary" href="/contact">클래스 신청 <ArrowRight size={17} /></a><a className="button button-secondary" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} />카카오톡 문의</a></div></div>
      </section>

      <section className="soft-section section-space"><div className="section-shell two-column-info"><article><Sparkles /><h2>이런 분께 추천합니다</h2><ul>{item.recommendedFor.map((text) => <li key={text}><Check />{text}</li>)}</ul></article><article><BadgeCheck /><h2>수강 후 기대할 수 있어요</h2><ul>{item.outcomes.map((text) => <li key={text}><Check />{text}</li>)}</ul></article></div></section>

      <section className="section-shell section-space curriculum-section"><SectionIntro eyebrow="CURRICULUM" title="배우는 내용과 커리큘럼" /><ol>{item.curriculum.map((text, index) => <li key={text}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{text}</h3><p>재료의 기준과 실습 포인트를 확인하고, 매장에서 활용할 수 있도록 정리합니다.</p></div></li>)}</ol></section>

      <section className="section-shell class-info-strip"><div><PackageCheck /><span>준비물</span><strong>{item.supplies}</strong></div><div><Clock3 /><span>수업 기간</span><strong>{item.duration}</strong></div><div><WalletCards /><span>수강료</span><strong>{item.price}</strong></div><div><MapPin /><span>장소</span><strong>{item.location}</strong></div></section>

      <section className="section-shell section-space"><SectionIntro eyebrow="STUDENT REVIEW" title="먼저 배운 수강생의 이야기" /><div className="review-grid">{reviews.filter((review) => review.category === item.category || item.category === "창업반" && review.category === "창업반").slice(0, 2).map((review) => <article className="review-card" key={review.id}><p>{review.quote}</p><small>{review.change}</small><strong>{review.author}</strong></article>)}</div></section>

      <section className="section-shell section-space faq-section"><SectionIntro eyebrow="FAQ" title="자주 묻는 질문" />{item.faq.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="section-shell section-space"><SectionIntro title="함께 살펴보면 좋은 클래스" /><div className="class-grid">{related.map((candidate) => <ClassCard item={candidate} key={candidate.slug} compact />)}</div></section>
      <CTASection title={`${item.title}, 지금 상담해 보세요`} description="수업 일정과 준비 사항을 확인하고 자신에게 맞는 과정인지 안내받을 수 있습니다." />
    </main>
  );
}
