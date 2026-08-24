import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

type CTASectionProps = { title?: string; description?: string };

export function CTASection({ title = "나에게 맞는 수업부터 상담해 보세요", description = "1:1 맞춤 상담으로 당신의 카페 창업을 함께 설계합니다." }: CTASectionProps) {
  return (
    <section className="cta-section section-shell">
      <div className="cta-copy">
        <span aria-hidden="true">🍊</span>
        <div><h2>{title}</h2><p>{description}</p></div>
      </div>
      <div className="cta-benefits" aria-label="상담 장점">
        <span>맞춤 커리큘럼 설계</span><span>창업 비용 &amp; 수익 분석</span><span>실전 노하우 전수</span>
      </div>
      <a className="button button-kakao" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={18} fill="currentColor" aria-hidden="true" /> 카카오톡 상담하기 <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
