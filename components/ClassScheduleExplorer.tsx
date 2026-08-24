"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Clock3, MapPin, MessageCircle, X } from "lucide-react";
import { classSchedule, parseScheduleDate, scheduleCategories, scheduleMonths, type ClassScheduleItem, type ScheduleCategory } from "@/data/class-schedule";
import { classCategories } from "@/data/classes";
import { siteConfig } from "@/data/site";
import { ClassesExplorer } from "./ClassesExplorer";

type ClassCategory = (typeof classCategories)[number];

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
const categoryToClass: Record<ScheduleCategory, ClassCategory> = {
  "수제청·음료": "수제청·음료",
  "브런치·디저트": "브런치·디저트",
  "앙금플라워": "앙금플라워",
  "창업반": "창업반",
  "카페창업": "창업반",
  "외부 출강": "전체",
};

const categoryToken: Record<ScheduleCategory, string> = {
  "수제청·음료": "syrup",
  "브런치·디저트": "brunch",
  "앙금플라워": "flower",
  "창업반": "startup",
  "카페창업": "cafe-startup",
  "외부 출강": "offsite",
};

function monthParts(monthKey: string) {
  const [year, month] = monthKey.split("-").map(Number);
  return { year, month };
}

function formatDate(item: ClassScheduleItem) {
  const { year, month, day, weekday } = parseScheduleDate(item.date);
  return `${year}년 ${month}월 ${day}일 ${weekdays[weekday]}요일`;
}

function ScheduleModal({ item, onClose, onCollect }: { item: ClassScheduleItem; onClose: () => void; onCollect: (category: ScheduleCategory) => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActive?.focus();
    };
  }, [onClose]);

  return (
    <div className="schedule-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="schedule-modal" role="dialog" aria-modal="true" aria-labelledby="schedule-modal-title" ref={dialogRef}>
        <button className="schedule-modal-close" type="button" aria-label="일정 상세 닫기" onClick={onClose} ref={closeRef}><X /></button>
        <p className="mini-label">CLASS DETAIL</p>
        <span className={`schedule-status status-${item.status}`}>{item.status}</span>
        <h2 id="schedule-modal-title">{item.title}</h2>
        <dl className="schedule-detail-list">
          <div><dt><CalendarDays aria-hidden="true" /> 날짜</dt><dd>{formatDate(item)}</dd></div>
          <div><dt><Clock3 aria-hidden="true" /> 시간</dt><dd>{item.startTime}~{item.endTime}</dd></div>
          <div><dt>유형</dt><dd><span className={`category-dot category-${categoryToken[item.category]}`} />{item.category}</dd></div>
          <div><dt><MapPin aria-hidden="true" /> 장소</dt><dd>{item.location}</dd></div>
        </dl>
        <p className="schedule-modal-description">{item.description}</p>
        <div className="schedule-modal-actions">
          <a className="button button-primary" href={`/classes/${item.classSlug}`}>자세히 보기 <ArrowRight size={17} /></a>
          <a className="button button-secondary" href="/contact?type=클래스%20일정%20문의">{item.status === "마감" ? "다음 일정 문의하기" : "수강 문의하기"}</a>
        </div>
        <button className="collect-class-button" type="button" onClick={() => onCollect(item.category)}>이 클래스 모아보기 <ArrowRight size={16} /></button>
      </div>
    </div>
  );
}

export function ClassScheduleExplorer() {
  const [selectedMonth, setSelectedMonth] = useState(scheduleMonths[0] ?? "2026-08");
  const [selectedSchedule, setSelectedSchedule] = useState<ClassScheduleItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ClassCategory>("전체");
  const monthIndex = scheduleMonths.indexOf(selectedMonth);
  const { year, month } = monthParts(selectedMonth);
  const monthSchedules = classSchedule.filter((item) => item.date.startsWith(`${selectedMonth}-`));
  const schedulesByDay = new Map<number, ClassScheduleItem[]>();
  monthSchedules.forEach((item) => {
    const day = parseScheduleDate(item.date).day;
    schedulesByDay.set(day, [...(schedulesByDay.get(day) ?? []), item]);
  });
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const calendarCells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
  while (calendarCells.length % 7) calendarCells.push(null);

  function collectCategory(category: ScheduleCategory) {
    setSelectedCategory(categoryToClass[category]);
    setSelectedSchedule(null);
    requestAnimationFrame(() => {
      const target = document.getElementById("class-list");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      target?.focus({ preventScroll: true });
    });
  }

  return (
    <>
      <section className="schedule-section section-shell" aria-labelledby="schedule-title">
        <header className="schedule-heading">
          <div><p className="mini-label">CLASS SCHEDULE</p><h2 id="schedule-title">동동이 스윗메이드<br />월간 수업 일정</h2></div>
          <div className="schedule-heading-copy"><p>원하는 날짜와 수업을 확인해보세요. 일정을 선택하면 클래스 정보와 신청 방법을 확인할 수 있습니다.</p><span>주말 수업 가능 · 일정별 선착순 모집</span></div>
        </header>
        <p className="schedule-sample-note">현재 표시된 일정은 홈페이지 기능 확인을 위한 예시입니다. 실제 수업 일정은 추후 업데이트됩니다.</p>

        <div className="schedule-controls">
          <button type="button" className="month-arrow" disabled={monthIndex <= 0} onClick={() => setSelectedMonth(scheduleMonths[monthIndex - 1])} aria-label="이전 달 보기"><ChevronLeft /></button>
          <strong aria-live="polite">{year}년 {month}월</strong>
          <button type="button" className="month-arrow" disabled={monthIndex >= scheduleMonths.length - 1} onClick={() => setSelectedMonth(scheduleMonths[monthIndex + 1])} aria-label="다음 달 보기"><ChevronRight /></button>
        </div>
        <div className="month-tabs" role="tablist" aria-label="수업 일정 월 선택">
          {scheduleMonths.map((monthKey) => {
            const parts = monthParts(monthKey);
            return <button key={monthKey} type="button" role="tab" aria-selected={selectedMonth === monthKey} className={selectedMonth === monthKey ? "active" : ""} onClick={() => setSelectedMonth(monthKey)}>{parts.month}월</button>;
          })}
        </div>

        <div className="schedule-calendar" aria-label={`${year}년 ${month}월 수업 일정`}>
          <div className="calendar-weekdays" aria-hidden="true">{weekdays.map((day) => <span key={day}>{day}</span>)}</div>
          <div className="calendar-grid">
            {calendarCells.map((day, index) => {
              if (!day) return <div className="calendar-cell empty" aria-hidden="true" key={`empty-${index}`} />;
              const items = schedulesByDay.get(day) ?? [];
              const weekday = index % 7;
              return (
                <div className={`calendar-cell weekday-${weekday}`} key={day}>
                  <span className="calendar-date">{day}</span>
                  {items.slice(0, 1).map((item) => (
                    <button key={item.id} type="button" className={`calendar-event category-${categoryToken[item.category]} ${item.status === "마감" ? "is-closed" : ""}`} onClick={() => setSelectedSchedule(item)} aria-label={`${formatDate(item)} ${item.title}, ${item.status}, 상세 보기`}>
                      <strong>{item.title}</strong><small>{item.startTime}~{item.endTime}</small><span>{item.status}</span>
                    </button>
                  ))}
                  {items.length > 1 && <button type="button" className="more-events" onClick={() => setSelectedSchedule(items[1])}>+{items.length - 1}개 더보기</button>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="schedule-mobile-list" aria-label={`${year}년 ${month}월 수업 일정 목록`}>
          {monthSchedules.length ? monthSchedules.map((item) => {
            const parsed = parseScheduleDate(item.date);
            return <article key={item.id} className={`mobile-schedule-card category-${categoryToken[item.category]}`}><div className="mobile-date-badge"><strong>{parsed.day}</strong><span>{weekdays[parsed.weekday]}요일</span></div><div className="mobile-schedule-info"><span>{item.category}</span><h3>{item.title}</h3><p>{item.startTime}~{item.endTime}</p></div><div className="mobile-schedule-action"><span className={`schedule-status status-${item.status}`}>{item.status}</span><button type="button" onClick={() => setSelectedSchedule(item)} aria-label={`${formatDate(item)} ${item.title} 상세 보기`}>상세 보기</button></div></article>;
          }) : <p className="schedule-empty">이 달에는 등록된 수업 일정이 없습니다.</p>}
        </div>

        <div className="schedule-legend" aria-label="수업 유형 색상 범례">
          {scheduleCategories.map((category) => <span key={category}><i className={`category-dot category-${categoryToken[category]}`} />{category}</span>)}
          <span><i className="category-dot status-closed" />마감</span>
        </div>

        <div className="schedule-contact-cta">
          <div><h3>원하는 수업 날짜가 없으신가요?</h3><p>희망 과정과 가능한 날짜를 남겨주시면 일정을 안내해드립니다.</p></div>
          <div><a className="button button-primary" href="/contact?type=클래스%20일정%20문의">희망 일정 문의하기 <ArrowRight size={17} /></a><a className="button button-kakao" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} />카카오톡으로 문의하기</a></div>
        </div>
      </section>

      <section className="section-shell section-space classes-section" aria-label="클래스 목록">
        <ClassesExplorer selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </section>

      {selectedSchedule && <ScheduleModal item={selectedSchedule} onClose={() => setSelectedSchedule(null)} onCollect={collectCategory} />}
    </>
  );
}
