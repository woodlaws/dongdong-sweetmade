import { representative } from "@/data/representative";

export const siteConfig = {
  name: "동동이 스윗메이드",
  shortName: "동동이 스윗메이드",
  description: "수제청·음료, 브런치·디저트, 앙금플라워부터 카페 창업까지 실전에 연결되는 교육 브랜드",
  url: "https://dongdong-sweetmade.geosangbruce.chatgpt.site",
  kakaoUrl: "https://pf.kakao.com/",
  blogUrl: "https://blog.naver.com/idong22",
  instagramUrl: "https://www.instagram.com/dongdongesweetmade/",
  phone: representative.contact.phone.value,
  email: "추후 입력",
  address: representative.contact.address.value,
  businessHours: representative.contact.businessHours.value,
  owner: representative.name.value,
  businessNumber: "추후 입력",
} as const;

export const navigation = [
  { label: "브랜드 소개", href: "/about" },
  { label: "카페창업 컨설팅", href: "/consulting" },
  { label: "클래스", href: "/classes" },
  { label: "수강후기", href: "/reviews" },
  { label: "문의", href: "/contact" },
] as const;

export const careerItems = [
  ...representative.careerHighlights.map((item) => item.value),
];

export const consultingFaqs = [
  {
    question: "아직 매장이 없어도 상담할 수 있나요?",
    answer: "네. 창업 아이디어 단계부터 상권, 콘셉트, 메뉴 방향을 함께 정리할 수 있습니다.",
  },
  {
    question: "기존 카페의 메뉴만 개선하는 것도 가능한가요?",
    answer: "가능합니다. 현재 메뉴와 운영 상황을 살펴보고 판매 구성, 원가, 동선에 맞는 개선 방향을 제안합니다.",
  },
  {
    question: "컨설팅 기간과 비용은 어떻게 정해지나요?",
    answer: "매장 준비 단계와 필요한 범위가 다르므로 사전 상담 후 일정과 비용을 안내합니다.",
  },
];
