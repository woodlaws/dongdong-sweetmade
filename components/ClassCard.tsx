import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import type { ClassItem } from "@/data/classes";
import { SmartImage } from "./SmartImage";

export function ClassCard({ item, compact = false }: { item: ClassItem; compact?: boolean }) {
  return (
    <article className={`class-card ${compact ? "compact" : ""}`}>
      <a className="class-image" href={`/classes/${item.slug}`} aria-label={`${item.title} 자세히 보기`}>
        <SmartImage src={item.image} alt={`${item.title} 대표 이미지`} />
        <span className={`status-badge status-${item.status}`}>{item.status}</span>
      </a>
      <div className="class-card-body">
        <span className="category-label">{item.category}</span>
        <h3><a href={`/classes/${item.slug}`}>{item.title}</a></h3>
        <p>{item.summary}</p>
        {!compact && <div className="class-meta"><span><CalendarDays size={15} />{item.format}</span><span><Clock3 size={15} />{item.duration}</span></div>}
        <div className="class-card-footer"><strong>{item.price}</strong><a href={`/classes/${item.slug}`}>상세 보기 <ArrowRight size={15} /></a></div>
      </div>
    </article>
  );
}
