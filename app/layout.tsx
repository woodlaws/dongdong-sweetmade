import type { Metadata, Viewport } from "next";
import { CalendarDays, Phone } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { representative } from "@/data/representative";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "동동이 스윗메이드 | 카페창업·디저트 교육", template: "%s | 동동이 스윗메이드" },
  description: siteConfig.description,
  keywords: ["카페 창업 교육", "수제청 창업반", "샌드위치 브런치 수업", "전통차 클래스", "견과 마스터반", "스프 수업"],
  alternates: { canonical: "/" },
  openGraph: { title: "동동이 스윗메이드", description: siteConfig.description, type: "website", url: "/", locale: "ko_KR", images: [{ url: "/og.png", width: 1732, height: 909, alt: "동동이 스윗메이드 카페창업·디저트 교육" }] },
  twitter: { card: "summary_large_image", title: "동동이 스윗메이드", description: siteConfig.description, images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fffdf9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: siteConfig.address,
    sameAs: [siteConfig.blogUrl, siteConfig.instagramUrl],
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about#representative`,
    name: representative.name.value,
    jobTitle: representative.jobTitle.value,
    image: `${siteConfig.url}${representative.profileImage.value}`,
    worksFor: { "@id": `${siteConfig.url}/#organization`, name: siteConfig.name },
    knowsAbout: ["수제청", "샌드위치", "브런치", "쌍화차", "전통차", "견과", "스프", "카페 메뉴 교육"],
    sameAs: [siteConfig.instagramUrl],
  };
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">본문 바로가기</a>
        <JsonLd data={organization} />
        <JsonLd data={person} />
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <nav className="mobile-bottom-cta" aria-label="빠른 상담">
          <a href="/classes"><CalendarDays size={18} />클래스 일정</a>
          <a href={siteConfig.consultation.href}><Phone size={18} />{siteConfig.consultation.shortLabel}</a>
        </nav>
      </body>
    </html>
  );
}
