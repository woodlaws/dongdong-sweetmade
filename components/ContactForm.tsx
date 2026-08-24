"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Errors = Record<string, string>;

const inquiryTypes = ["카페창업 컨설팅", "클래스 일정 문의", "기관·기업 교육", "기관·기업 출강", "지원사업 협업", "메뉴 개발 프로젝트", "수제청 클래스", "브런치·디저트 클래스", "앙금플라워 클래스", "기타 문의"] as const;

export function ContactForm({ initialType }: { initialType?: string }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [inquiryType, setInquiryType] = useState<string>(() => initialType && inquiryTypes.includes(initialType as (typeof inquiryTypes)[number]) ? initialType : inquiryTypes[0]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name) nextErrors.name = "이름을 입력해 주세요.";
    if (!/^0\d{1,2}-?\d{3,4}-?\d{4}$/.test(phone)) nextErrors.phone = "올바른 연락처를 입력해 주세요.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "올바른 이메일을 입력해 주세요.";
    if (!message) nextErrors.message = "문의 내용을 입력해 주세요.";
    if (form.get("privacy") !== "on") nextErrors.privacy = "개인정보 수집에 동의해 주세요.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // TODO: 실제 운영 시 이 지점에서 문의 API 또는 폼 서비스와 연동하세요.
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={44} aria-hidden="true" />
        <h2>문의 내용이 확인되었습니다.</h2>
        <p>현재는 프론트엔드 데모 상태입니다. 실제 운영 전 문의 수신 API를 연결해 주세요.</p>
        <button type="button" className="button button-secondary" onClick={() => setStatus("idle")}>다른 문의 작성하기</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>이름 <b>*</b><input name="name" autoComplete="name" aria-describedby="name-error" />{errors.name && <small id="name-error">{errors.name}</small>}</label>
        <label>연락처 <b>*</b><input name="phone" inputMode="tel" placeholder="010-0000-0000" autoComplete="tel" aria-describedby="phone-error" />{errors.phone && <small id="phone-error">{errors.phone}</small>}</label>
        <label>이메일<input name="email" type="email" autoComplete="email" aria-describedby="email-error" />{errors.email && <small id="email-error">{errors.email}</small>}</label>
        <label>문의 유형 <b>*</b><select name="type" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)}>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>관심 클래스<select name="class" defaultValue=""><option value="">선택해 주세요</option><option>수제청 창업반</option><option>카페 음료 실전 클래스</option><option>브런치 메뉴반</option><option>앙금플라워 기초 클래스</option></select></label>
        <label>창업 예정 여부<select name="startup" defaultValue="준비 중"><option>준비 중</option><option>계획 있음</option><option>이미 운영 중</option><option>해당 없음</option></select></label>
      </div>
      <label>문의 내용 <b>*</b><textarea name="message" rows={7} placeholder="현재 상황과 궁금한 내용을 남겨주세요." aria-describedby="message-error" />{errors.message && <small id="message-error">{errors.message}</small>}</label>
      <label className="check-label"><input name="privacy" type="checkbox" /> <span>문의 답변을 위한 개인정보 수집 및 이용에 동의합니다.</span></label>
      {errors.privacy && <small className="privacy-error">{errors.privacy}</small>}
      <button className="button button-primary submit-button" type="submit"><Send size={17} aria-hidden="true" /> 문의 보내기</button>
      <p className="demo-note">현재 화면은 데모이며 실제 전송되지 않습니다.</p>
    </form>
  );
}
