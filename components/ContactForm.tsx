"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { classes } from "@/data/classes";
import { siteConfig } from "@/data/site";

type Errors = Record<string, string>;

const inquiryTypes = ["카페창업 컨설팅", "클래스 일정 문의", "기관·기업 교육", "기관·기업 출강", "메뉴 개발 프로젝트", "기타 문의"] as const;
const classOptions = classes.map((item) => item.title);

export function ContactForm({ initialType, initialClass }: { initialType?: string; initialClass?: string }) {
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

    const subject = `[${String(form.get("type"))}] ${name}님 상담 문의`;
    const body = [`이름: ${name}`, `연락처: ${phone}`, `이메일: ${email || "미입력"}`, `문의 유형: ${String(form.get("type"))}`, `관심 클래스: ${String(form.get("class")) || "미선택"}`, `창업 예정 여부: ${String(form.get("startup"))}`, "", message].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={44} aria-hidden="true" />
        <h2>이메일 앱에서 전송을 마쳐 주세요</h2>
        <p>작성한 내용을 이메일 앱으로 전달했습니다. 이메일 앱에서 보내기를 눌러야 문의가 접수됩니다. 앱이 열리지 않았다면 아래 연락처로 문의해 주세요.</p>
        <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br /><a href={siteConfig.consultation.href}>전화 상담 {siteConfig.phone}</a></p>
        <button type="button" className="button button-secondary" onClick={() => setStatus("idle")}>다른 문의 작성하기</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="inquiry-notice"><strong>어떤 배움을 준비하고 계신가요?</strong><p>내용을 작성하면 이메일 앱이 열립니다. 앱에서 전송을 완료해 주세요. 빠른 일정 확인은 <a href={siteConfig.consultation.href}>전화 상담</a>으로도 가능합니다.</p></div>
      <div className="form-grid">
        <label>이름 <b>*</b><input name="name" autoComplete="name" aria-describedby="name-error" />{errors.name && <small id="name-error">{errors.name}</small>}</label>
        <label>연락처 <b>*</b><input name="phone" inputMode="tel" placeholder="010-0000-0000" autoComplete="tel" aria-describedby="phone-error" />{errors.phone && <small id="phone-error">{errors.phone}</small>}</label>
        <label>이메일<input name="email" type="email" autoComplete="email" aria-describedby="email-error" />{errors.email && <small id="email-error">{errors.email}</small>}</label>
        <label>문의 유형 <b>*</b><select name="type" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)}>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>관심 클래스<select name="class" defaultValue={initialClass && classOptions.includes(initialClass) ? initialClass : ""}><option value="">선택해 주세요</option>{classOptions.map((title) => <option key={title}>{title}</option>)}</select></label>
        <label>창업 예정 여부<select name="startup" defaultValue="준비 중"><option>준비 중</option><option>계획 있음</option><option>이미 운영 중</option><option>해당 없음</option></select></label>
      </div>
      <label>문의 내용 <b>*</b><textarea name="message" rows={7} placeholder="현재 상황과 궁금한 내용을 남겨주세요." aria-describedby="message-error" />{errors.message && <small id="message-error">{errors.message}</small>}</label>
      <label className="check-label"><input name="privacy" type="checkbox" /> <span>문의 답변을 위한 개인정보 수집 및 이용에 동의합니다.</span></label>
      {errors.privacy && <small className="privacy-error">{errors.privacy}</small>}
      <button className="button button-primary submit-button" type="submit"><Send size={17} aria-hidden="true" /> 이메일 앱에서 문의 보내기</button>
      <p className="demo-note">작성 내용은 이 홈페이지에 저장되지 않습니다. 기기에 이메일 앱 설정이 필요합니다.</p>
    </form>
  );
}
