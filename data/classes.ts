export type ClassCategory = "수제청·음료" | "브런치·디저트" | "전통차" | "견과·스프" | "앙금플라워" | "창업반" | "원데이 클래스";

export type ClassPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ClassItem = {
  slug: string;
  title: string;
  category: ClassCategory;
  status: "상시상담" | "준비중";
  summary: string;
  image: string;
  gallery?: ClassPhoto[];
  time: string;
  price: string;
  priceAmount?: number;
  location: string;
  recommendedFor: string[];
  certification?: string;
  featured?: boolean;
  format?: string;
  outcomes?: string[];
  curriculum?: string[];
  supplies?: string;
  faq?: { question: string; answer: string }[];
};

const location = "경기도 이천시 영창로 101";

export const classes: ClassItem[] = [
  {
    slug: "handmade-syrup-startup",
    title: "수제청 창업반",
    category: "창업반",
    status: "상시상담",
    summary: "수제청 메뉴를 카페와 판매 현장에서 활용할 수 있도록 배우는 창업 준비 과정입니다.",
    image: "/images/classes/067-fruit-syrup-bottle-circle.webp",
    gallery: [
      { src: "/images/classes/067-fruit-syrup-bottle-circle.webp", width: 1800, height: 1331, alt: "검은 상판에 둥글게 놓인 색색의 과일청 병" },
      { src: "/images/classes/066-fresh-fruit-ingredients.webp", width: 1080, height: 1071, alt: "여러 종류의 생과일 재료" },
    ],
    time: "10:00~18:00",
    price: "1,200,000원",
    priceAmount: 1200000,
    location,
    recommendedFor: ["카페 창업을 준비하는 분", "배달 판매 창업을 준비하는 분", "온라인 판매 사업을 준비하는 분"],
    certification: "자격증 발급 가능",
    featured: true,
  },
  {
    slug: "brunch-menu",
    title: "샌드위치 & 브런치 수업",
    category: "브런치·디저트",
    status: "상시상담",
    summary: "샌드위치와 브런치 메뉴를 카페와 판매 현장에서 활용할 수 있도록 배우는 과정입니다.",
    image: "/images/classes/043-sandwich-lunchbox-closeup.webp",
    gallery: [
      { src: "/images/classes/043-sandwich-lunchbox-closeup.webp", width: 1576, height: 998, alt: "샌드위치 단면과 샐러드 도시락 클로즈업" },
      { src: "/images/classes/042-lunchbox-feast-wide.webp", width: 1575, height: 998, alt: "샌드위치와 샐러드, 브런치를 함께 담은 테이블" },
      { src: "/images/classes/035-lunchbox-overhead.webp", width: 1800, height: 1396, alt: "샌드위치와 샐러드 도시락 여러 개를 위에서 본 모습" },
      { src: "/images/classes/047-savory-dutch-baby-square.webp", width: 1024, height: 1024, alt: "채소와 토핑을 올린 더치베이비 브런치" },
      { src: "/images/classes/048-fruit-dutch-baby-wide.webp", width: 1536, height: 1024, alt: "과일과 크림을 곁들인 더치베이비" },
      { src: "/images/classes/046-shrimp-avocado-toast.webp", width: 1554, height: 1012, alt: "새우와 아보카도, 채소를 곁들인 토스트 접시" },
    ],
    time: "10:00~18:00",
    price: "1,300,000원",
    priceAmount: 1300000,
    location,
    recommendedFor: ["카페 창업을 준비하는 분", "배달 판매 창업을 준비하는 분"],
    featured: true,
  },
  {
    slug: "traditional-tea-class",
    title: "쌍화차·전통차 클래스",
    category: "전통차",
    status: "상시상담",
    summary: "쌍화차와 전통차 메뉴를 매장에서 활용할 수 있도록 배우는 과정입니다.",
    image: "/images/classes/095-ssanghwa-cup-hero.webp",
    gallery: [
      { src: "/images/classes/095-ssanghwa-cup-hero.webp", width: 1800, height: 1013, alt: "고명을 올린 쌍화차와 나무 숟가락" },
      { src: "/images/classes/094-ssanghwa-lineup-and-cup.webp", width: 1800, height: 1127, alt: "전통차 관련 제품 여러 병과 찻잔" },
      { src: "/images/classes/087-ssanghwa-cup-with-snacks.webp", width: 1800, height: 1013, alt: "돌잔에 담긴 쌍화차와 곁들임 간식" },
      { src: "/images/classes/022-jujube-ginger-paste.webp", width: 1800, height: 1800, alt: "대추생강고 라벨이 보이는 용기" },
      { src: "/images/classes/023-ginger-scallion-tea.webp", width: 1800, height: 1800, alt: "생강대파차 라벨이 보이는 병" },
      { src: "/images/classes/024-omija-tea-bottle.webp", width: 1800, height: 1800, alt: "오미자차 라벨이 보이는 붉은 차 병" },
    ],
    time: "10:00~17:00",
    price: "1,000,000원",
    priceAmount: 1000000,
    location,
    recommendedFor: ["전통찻집 창업을 준비하는 분", "카페에 전통차 메뉴를 더하고 싶은 분"],
    featured: true,
  },
  {
    slug: "nut-master",
    title: "견과 마스터반",
    category: "견과·스프",
    status: "상시상담",
    summary: "견과 메뉴를 판매 상품으로 활용하려는 분을 위한 실전 과정입니다.",
    image: "/images/classes/068-walnut-snacks-and-jars.webp",
    gallery: [
      { src: "/images/classes/068-walnut-snacks-and-jars.webp", width: 1800, height: 1013, alt: "호두 간식과 포장 용기" },
    ],
    time: "10:00~16:30",
    price: "800,000원",
    priceAmount: 800000,
    location,
    recommendedFor: ["온라인 판매 사업을 준비하는 분", "카페 또는 배달 판매 상품을 준비하는 분"],
    featured: true,
  },
  {
    slug: "soup-class",
    title: "스프 수업",
    category: "견과·스프",
    status: "상시상담",
    summary: "카페와 브런치 매장에서 활용할 수 있는 스프 메뉴를 배우는 과정입니다.",
    image: "/images/classes/059-golden-soup-white-bowl.webp",
    gallery: [
      { src: "/images/classes/059-golden-soup-white-bowl.webp", width: 1024, height: 1024, alt: "흰 그릇에 담긴 황금빛 스프" },
      { src: "/images/classes/061-soup-spread-dark-table.webp", width: 1024, height: 1024, alt: "어두운 테이블 위 여러 스프와 빵" },
      { src: "/images/classes/060-soup-spread-light-table.webp", width: 1024, height: 1024, alt: "밝은 테이블 위 여러 스프와 빵" },
      { src: "/images/classes/030-green-soup-black-bread.webp", width: 1296, height: 864, alt: "검은 빵을 곁들인 초록색 스프" },
      { src: "/images/classes/062-golden-soup-dark-bowl.webp", width: 1024, height: 1024, alt: "어두운 그릇에 담긴 황금빛 스프" },
    ],
    time: "10:00~14:00",
    price: "300,000원",
    priceAmount: 300000,
    location,
    recommendedFor: ["카페 창업을 준비하는 분", "브런치 또는 배달 판매 메뉴를 준비하는 분"],
    featured: true,
  },
  {
    slug: "cafe-drink-master",
    title: "카페 음료 실전 클래스",
    category: "수제청·음료",
    status: "상시상담",
    summary: "수제청을 활용한 에이드와 티, 시즌 음료를 카페 판매 기준으로 실습합니다.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=86",
    format: "실습 중심 클래스",
    time: "일정 상담",
    price: "상담 문의",
    location,
    recommendedFor: ["카페 음료 메뉴를 늘리고 싶은 분", "예비 카페 창업자"],
    outcomes: ["과일 에이드와 티 응용", "잔 구성과 가니시", "매장용 레시피 정리"],
    curriculum: ["베이스와 당도 이해", "에이드·티 조합 실습", "비주얼과 가니시", "매장 레시피 정리"],
    supplies: "신청 후 안내",
    faq: [{ question: "카페 운영자가 아니어도 가능한가요?", answer: "네. 예비 창업자도 현재 준비 단계에 맞춰 상담할 수 있습니다." }],
  },
  {
    slug: "bean-flower-cake",
    title: "앙금플라워 기초 클래스",
    category: "앙금플라워",
    status: "상시상담",
    summary: "기초 꽃 짜기부터 조화로운 디자인까지 완성하는 앙금플라워 입문 과정입니다.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=86",
    format: "소수 정원 실습",
    time: "일정 상담",
    price: "상담 문의",
    location,
    recommendedFor: ["앙금플라워를 처음 배우는 분", "답례품·주문 케이크를 준비하는 분"],
    outcomes: ["기본 꽃 짜기", "색 조합과 배치", "완성 케이크 제작"],
    curriculum: ["도구와 앙금 이해", "기본 꽃 파이핑", "색 배합과 구성", "케이크 완성 실습"],
    supplies: "신청 후 안내",
    faq: [{ question: "도구 준비가 필요한가요?", answer: "필요한 준비물은 수업 일정 상담 후 안내합니다." }],
  },
  {
    slug: "seasonal-dessert-one-day",
    title: "계절 디저트 원데이",
    category: "원데이 클래스",
    status: "상시상담",
    summary: "계절 재료로 완성하는 카페 디저트를 하루 동안 집중 실습합니다.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=86",
    format: "원데이 클래스",
    time: "일정 상담",
    price: "일정별 안내",
    location,
    recommendedFor: ["새로운 취미를 찾는 분", "시즌 메뉴 아이디어가 필요한 카페 운영자"],
    outcomes: ["계절 디저트 실습", "재료 활용과 보관 팁", "카페용 플레이팅"],
    curriculum: ["재료 소개", "제조 실습", "마무리", "포장과 보관"],
    supplies: "신청 후 안내",
    faq: [{ question: "일정은 어디에서 확인하나요?", answer: "구체적인 수업 일정은 문의 페이지 또는 전화 상담으로 확인해 주세요." }],
  },
];

export const featuredClasses = classes.filter((item) => item.featured);

export const classCategories = ["전체", "수제청·음료", "브런치·디저트", "전통차", "견과·스프", "앙금플라워", "창업반", "원데이 클래스"] as const;

export function getClassBySlug(slug: string) {
  return classes.find((item) => item.slug === slug);
}
