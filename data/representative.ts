export type VerificationStatus = "verified" | "needsConfirmation" | "unpublished";

type Fact<T> = {
  value: T;
  status: VerificationStatus;
  verificationRequired?: boolean;
  note?: string;
};

export const representative = {
  name: { value: "윤인동", status: "verified" },
  title: { value: "동동이 스윗메이드 대표 · 메뉴 교육 전문가", status: "verified" },
  jobTitle: { value: "동동이 스윗메이드 대표", status: "verified" },
  affiliations: [
    { value: "동동이 스윗메이드 대표", status: "verified" },
    { value: "넥스플랜", status: "needsConfirmation", note: "정확한 법적 명칭과 직책 확인 필요" },
  ],
  profileImage: { value: "/yoon-indong-profile.png", status: "verified" },
  positioning: {
    value: "카페와 판매 현장에서 활용할 수 있는 메뉴를 교육하고 예비 창업자의 배움을 돕는 실전형 교육 전문가",
    status: "verified",
  },
  introduction: {
    value: "윤인동 대표는 수제청, 샌드위치와 브런치, 쌍화차와 전통차, 견과, 스프 등 카페와 판매 현장에서 활용할 수 있는 메뉴를 교육합니다. 기업·이마트·학교·관공소 대상 출강 경험을 바탕으로, 카페·전통찻집·배달 판매·온라인 판매를 준비하는 분들의 배움을 돕고 있습니다.",
    status: "verified",
  },
  specialties: [
    "수제청 창업 교육",
    "샌드위치·브런치 교육",
    "쌍화차·전통차 교육",
    "견과 메뉴 교육",
    "스프 메뉴 교육",
    "카페·판매 메뉴 교육",
    "예비 창업자 대상 교육",
    "기업·이마트·학교·관공소 출강",
  ].map((value) => ({ value, status: "verified" as const })),
  careerHighlights: [
    { value: "기업·이마트·학교·관공소 대상 다수 출강", status: "verified" },
    { value: "카페와 판매 현장에 활용하는 메뉴 교육", status: "verified" },
    { value: "KBS 생생정보통 방송 소개", status: "verified" },
  ],
  qualifications: [
    { period: "2013.02~04", type: "자격 취득", title: "라이스케이크 데코레이터 자격 취득", institution: "라이스에듀랩" },
    { period: "2016.03.31", type: "교육 수료", title: "전통주학교 교육과정 수료", institution: "한국전통발효아카데미" },
    { period: "2016.04.02", type: "자격 취득", title: "전통식초 제조사 2급 자격 취득", institution: "한국전통식초협회" },
    { period: "2016.07.18", type: "교육 수료", title: "맥주제조사 과정 수료", institution: "백주한국전통아카데미" },
    { period: "2017.04.05", type: "교육 수료", title: "‘매출을 높여주는 다양한 상품포장’ 과정 수료", institution: "㈜프로에듀코리아 프로에듀사회교육원" },
    { period: "2017.07", type: "자격 취득", title: "디톡스 자격 취득", institution: "로푸드협회" },
  ],
  externalLectures: ["기업 교육", "이마트 강의", "학교 교육", "관공소 강의"],
  broadcastAppearances: [
    {
      title: "KBS 생생정보통 방송 소개",
      description: "윤인동 대표 관련 방송 화면 자료",
      detail: "상세 회차 추후 확인",
      status: "verified",
    },
  ],
  mediaCoverage: [
    {
      outlet: "데일리그리드",
      date: "2019년 3월 26일",
      title: "수제청클래스·수제잼창업반클래스 론칭한 동동이스윗메이드",
      url: "https://www.dailygrid.net/news/articleView.html?idxno=204251",
      status: "verified",
    },
  ],
  institutionalExperience: [
    { value: "여주대학교 연구위원 역임", status: "verified", note: "상세 활동 추후 확인" },
    { value: "기관 목적과 대상에 맞춘 맞춤 교육 프로그램 설계", status: "verified" },
    { value: "지원사업 연계 교육 및 컨설팅", status: "verified" },
  ],
  businessExperience: [
    { value: "주식회사 여주한과 법인업체 이사", status: "verified", note: "재직 기간과 담당 업무 추후 확인" },
    { value: "카페와 판매 현장에 활용하는 메뉴 교육", status: "verified" },
  ],
  consultingAreas: [
    "창업자 대상 카페 메뉴 교육",
    "지역 특산물 활용 상품 개발",
    "수제청·수제잼 창업 과정",
    "브런치·디저트 실무 교육",
    "기관 맞춤형 체험 프로그램",
  ].map((value) => ({ value, status: "verified" as const })),
  contact: {
    address: { value: "경기도 이천시 영창로 101", status: "needsConfirmation", verificationRequired: true },
    phone: { value: "010-3659-5026", status: "needsConfirmation", verificationRequired: true },
    email: { value: "idong22@naver.com", status: "verified" },
    businessHours: {
      value: "09:00~18:00",
      status: "verified",
    },
    parking: { value: "두산아파트 후문 주차라인 및 공방 옆 골목", status: "verified" },
    instagram: { value: "@dongdongesweetmade", status: "verified" },
  },
  verificationNotes: [
    "넥스플랜의 정확한 법적 명칭과 윤인동 대표의 직책 확인 필요",
    "정확한 지원사업명 및 역할 확인 필요",
    "주소·전화번호의 현재 정보 여부 확인 필요",
  ],
} satisfies Record<string, unknown>;

export type Representative = typeof representative;
export type RepresentativeFact<T> = Fact<T>;
