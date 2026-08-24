import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs section-shell" aria-label="현재 위치">
      <a href="/"><Home size={14} /><span className="sr-only">홈</span></a>
      {items.map((item) => <span key={item.label}><ChevronRight size={13} />{item.href ? <a href={item.href}>{item.label}</a> : <b>{item.label}</b>}</span>)}
    </nav>
  );
}
