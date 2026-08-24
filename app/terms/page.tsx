import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "이용약관", alternates: { canonical: "/terms" } };
export default function TermsPage() { return <main><Breadcrumbs items={[{ label: "이용약관" }]} /><article className="legal-page section-shell"><h1>이용약관</h1><p>본 페이지는 정식 운영 전 검토가 필요한 임시 약관입니다. 실제 클래스 신청, 취소, 환불, 일정 변경 정책이 확정되면 해당 내용을 반영해 주세요.</p><h2>서비스 안내</h2><p>동동이 스윗메이드는 카페 창업 컨설팅과 디저트·음료 관련 교육 정보를 제공합니다.</p><h2>신청 및 결제</h2><p>정식 신청 방법과 결제 수단, 환불 규정은 운영 정책 확정 후 입력합니다.</p><h2>면책 및 변경</h2><p>클래스 일정과 커리큘럼은 사전 안내 후 조정될 수 있으며, 구체적인 기준은 실제 운영 정책을 따릅니다.</p></article></main>; }
