type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, description, align = "center" }: SectionIntroProps) {
  return (
    <div className={`section-intro ${align === "left" ? "align-left" : ""}`}>
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  );
}
