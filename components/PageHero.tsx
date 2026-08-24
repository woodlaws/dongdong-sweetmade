import { SmartImage } from "./SmartImage";

type PageHeroProps = { eyebrow: string; title: string; description: string; image: string; imageAlt: string };

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy"><p>{eyebrow}</p><h1>{title}</h1><span>{description}</span></div>
      <div className="page-hero-image"><SmartImage src={image} alt={imageAlt} priority /></div>
    </section>
  );
}
