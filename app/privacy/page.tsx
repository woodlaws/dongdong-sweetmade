import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "개인정보처리방침", alternates: { canonical: "/privacy" } };
export default function PrivacyPage() { return <main><Breadcrumbs items={[{ label: "개인정보처리방침" }]} /><article className="legal-page section-shell"><h1>개인정보처리방침</h1><p>본 페이지는 정식 운영 전 확인이 필요한 초안입니다. 문의 접수에 필요한 이름, 연락처, 이메일, 문의 내용을 수집할 수 있으며 실제 문의 시스템 연동 시 보유 기간과 처리 위탁 사항을 확정해 입력해야 합니다.</p><h2>수집 항목</h2><p>이름, 연락처, 이메일, 문의 유형, 관심 클래스, 창업 예정 여부, 문의 내용</p><h2>이용 목적</h2><p>클래스와 카페 창업 컨설팅 문의 확인 및 답변</p><h2>운영 전 확인</h2><p>개인정보 보호 책임자, 보유 기간, 파기 절차, 처리 위탁 정보를 실제 운영 정책에 맞게 추가해 주세요.</p></article></main>; }
