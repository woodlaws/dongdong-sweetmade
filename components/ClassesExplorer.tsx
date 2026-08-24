"use client";

import { useMemo, useState } from "react";
import { classCategories, classes } from "@/data/classes";
import { ClassCard } from "./ClassCard";

type Category = (typeof classCategories)[number];

export function ClassesExplorer({ selectedCategory, onCategoryChange }: { selectedCategory?: Category; onCategoryChange?: (category: Category) => void }) {
  const [internalCategory, setInternalCategory] = useState<Category>("전체");
  const category = selectedCategory ?? internalCategory;
  const visible = useMemo(() => category === "전체" ? classes : classes.filter((item) => item.category === category), [category]);

  function selectCategory(nextCategory: Category) {
    setInternalCategory(nextCategory);
    onCategoryChange?.(nextCategory);
  }

  return (
    <div id="class-list" tabIndex={-1}>
      <div className="filter-tabs" role="group" aria-label="클래스 카테고리 필터">
        {classCategories.map((item) => (
          <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => selectCategory(item)}>{item}</button>
        ))}
      </div>
      {visible.length ? <div className="class-grid">{visible.map((item) => <ClassCard key={item.slug} item={item} />)}</div> : <p className="empty-state">현재 표시할 클래스가 없습니다.</p>}
    </div>
  );
}
