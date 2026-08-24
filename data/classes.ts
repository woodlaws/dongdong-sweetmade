export type ClassCategory = "수제청·음료" | "브런치·디저트" | "앙금플라워" | "창업반" | "원데이 클래스";

export type ClassItem = {
  slug: string;
  title: string;
  category: ClassCategory;
  status: "모집중" | "상시상담" | "준비중";
  summary: string;
  image: string;
  format: string;
  duration: string;
  price: string;
  location: string;
  recommendedFor: string[];
  outcomes: string[];
  curriculum: string[];
  supplies: string;
  faq: { question: string; answer: string }[];
};

export const classes: ClassItem[] = [
  {
    slug: "handmade-syrup-startup",
    title: "수제청 창업반",
    category: "창업반",
    status: "모집중",
    summary: "제조부터 병입, 라벨링, 판매 준비까지 수제청 창업에 필요한 전 과정을 배웁니다.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=86",
    format: "소수 정원 실습",
    duration: "4주 과정 (주 1회)",
    price: "480,000원 (재료비 포함)",
    location: "교육 장소 추후 안내",
    recommendedFor: ["수제청 판매를 시작하려는 분", "카페 시그니처 음료가 필요한 분", "제품화와 원가 계산까지 배우고 싶은 분"],
    outcomes: ["계절 과일별 배합과 보관법", "판매 가능한 병입·라벨 구성", "음료 메뉴 응용과 원가 계산"],
    curriculum: ["수제청 기본 이론과 식품 위생", "과일 손질과 당도 설계", "병입·보관·라벨링 실습", "판매 메뉴 구성과 원가 계산"],
    supplies: "앞치마와 필기도구",
    faq: [
      { question: "초보자도 참여할 수 있나요?", answer: "네. 재료 손질부터 단계별로 진행해 처음 시작하는 분도 참여할 수 있습니다." },
      { question: "완성한 제품은 가져갈 수 있나요?", answer: "실습 과정에서 만든 제품은 안내된 용기에 담아 가져갑니다." },
    ],
  },
  {
    slug: "cafe-drink-master",
    title: "카페 음료 실전 클래스",
    category: "수제청·음료",
    status: "모집중",
    summary: "수제청을 활용한 에이드와 티, 시즌 음료를 카페 판매 기준으로 실습합니다.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=86",
    format: "실습 중심 클래스",
    duration: "2회 과정",
    price: "상담 문의",
    location: "교육 장소 추후 안내",
    recommendedFor: ["카페 음료 메뉴를 늘리고 싶은 분", "예쁜 비주얼과 안정적인 맛을 함께 잡고 싶은 분"],
    outcomes: ["과일 에이드와 티 레시피", "잔 구성과 가니시", "매장용 레시피 표준화"],
    curriculum: ["베이스와 당도 이해", "에이드·티 조합 실습", "비주얼과 가니시", "매장 레시피 정리"],
    supplies: "앞치마와 필기도구",
    faq: [{ question: "카페 운영자가 아니어도 가능한가요?", answer: "네. 홈카페부터 예비 창업자까지 수준에 맞춰 안내합니다." }],
  },
  {
    slug: "brunch-menu",
    title: "브런치 메뉴반",
    category: "브런치·디저트",
    status: "모집중",
    summary: "카페 인기 브런치 메뉴 실습과 효율적인 메뉴 구성 노하우를 배웁니다.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=86",
    format: "메뉴 실습",
    duration: "3회 과정",
    price: "상담 문의",
    location: "교육 장소 추후 안내",
    recommendedFor: ["브런치 카페를 준비하는 분", "기존 카페에 식사 메뉴를 더하고 싶은 분"],
    outcomes: ["인기 브런치 메뉴 실습", "플레이팅과 제공 동선", "메뉴 조합과 원가 구성"],
    curriculum: ["브런치 메뉴 기획", "메인 플레이트 실습", "소스와 사이드 구성", "플레이팅·운영 동선"],
    supplies: "앞치마와 필기도구",
    faq: [{ question: "레시피를 매장에서 사용해도 되나요?", answer: "수업에서 제공하는 레시피는 본인 매장 운영에 활용할 수 있습니다." }],
  },
  {
    slug: "bean-flower-cake",
    title: "앙금플라워 기초 클래스",
    category: "앙금플라워",
    status: "모집중",
    summary: "기초 꽃 짜기부터 조화로운 디자인까지 완성하는 앙금플라워 입문 과정입니다.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=86",
    format: "소수 정원 실습",
    duration: "3회 과정",
    price: "상담 문의",
    location: "교육 장소 추후 안내",
    recommendedFor: ["앙금플라워를 처음 배우는 분", "답례품·주문 케이크를 준비하는 분"],
    outcomes: ["기본 꽃 짜기", "색 조합과 배치", "완성 케이크 제작"],
    curriculum: ["도구와 앙금 이해", "기본 꽃 파이핑", "색 배합과 구성", "케이크 완성 실습"],
    supplies: "기본 도구 제공, 개인 준비물은 신청 후 안내",
    faq: [{ question: "도구를 따로 구매해야 하나요?", answer: "기초 도구는 수업에서 사용하며, 개인 구매가 필요한 품목은 사전에 안내합니다." }],
  },
  {
    slug: "seasonal-dessert-one-day",
    title: "계절 디저트 원데이",
    category: "원데이 클래스",
    status: "상시상담",
    summary: "계절 재료로 완성하는 카페 디저트를 하루 동안 집중 실습합니다.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=86",
    format: "원데이 클래스",
    duration: "1일 과정",
    price: "일정별 안내",
    location: "교육 장소 추후 안내",
    recommendedFor: ["새로운 취미를 찾는 분", "시즌 메뉴 아이디어가 필요한 카페 운영자"],
    outcomes: ["계절 디저트 1종 완성", "재료 대체와 보관 팁", "카페용 플레이팅"],
    curriculum: ["재료 소개", "반죽·성형 실습", "굽기와 마무리", "포장과 보관"],
    supplies: "앞치마와 필기도구",
    faq: [{ question: "일정은 어디에서 확인하나요?", answer: "모집 일정은 클래스 페이지와 SNS에서 안내하며 카카오톡으로도 문의할 수 있습니다." }],
  },
];

export const classCategories = ["전체", "수제청·음료", "브런치·디저트", "앙금플라워", "창업반", "원데이 클래스"] as const;

export function getClassBySlug(slug: string) {
  return classes.find((item) => item.slug === slug);
}
