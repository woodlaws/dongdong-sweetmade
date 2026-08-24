"use client";

import { useMemo, useState } from "react";
import { Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

const categories = ["전체", "창업반", "수제청·음료", "브런치·디저트", "앙금플라워"];

export function ReviewsExplorer() {
  const [category, setCategory] = useState("전체");
  const visible = useMemo(() => category === "전체" ? reviews : reviews.filter((item) => item.category === category), [category]);
  return (
    <div>
      <div className="filter-tabs" role="group" aria-label="후기 클래스 필터">
        {categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="review-grid large">
        {visible.map((review) => (
          <article className="review-card" key={review.id}>
            <Quote size={27} aria-hidden="true" />
            <span className="category-label">{review.category}</span>
            <p>{review.quote}</p>
            <small>{review.change}</small>
            <strong>{review.author}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}
