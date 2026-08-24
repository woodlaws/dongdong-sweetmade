export type VerificationStatus = "verified" | "needsConfirmation" | "unpublished";

type Fact<T> = {
  value: T;
  status: VerificationStatus;
  verificationRequired?: boolean;
  note?: string;
};

export const representative = {
  name: { value: "윤인동", status: "verified" },
  title: { value: "동동이 스윗메이드 대표 · 카페창업 및 메뉴개발 전문가", status: "verified" },
  jobTitle: { value: "동동이 스윗메이드 대표", status: "verified" },
  affiliations: [
    { value: "동동이 스윗메이드 대표", status: "verified" },
    { value: "넥스플랜", status: "needsConfirmation", note: "정확한 법적 명칭과 직책 확인 필요" },
  ],
  profileImage: { value: "/yoon-indong-profile.png", status: "verified" },
  careerYears: { value: 10, status: "verified" },
  positioning: {
    value: "10년간 전국과 해외에서 수제 공방을 운영하며 카페 메뉴 개발과 창업을 지원해 온 실전형 교육 전문가",
    status: "verified",
  },
  introduction: {
    value: "윤인동 대표는 10년간 전국과 해외에서 수제 공방을 운영하며 수제청, 수제잼, 카페 음료, 샌드위치, 브런치, 베이킹, 디저트 메뉴를 교육해 왔습니다. 레시피 전달에 그치지 않고 메뉴 개발과 원가 구성, 판매 상품화, 카페창업 컨설팅까지 연결하는 실전 중심의 교육을 제공합니다.",
    status: "verified",
  },
  specialties: [
    "수제청·수제잼 클래스",
    "수제청·수제잼 창업반",
    "카페 창업 컨설팅",
    "카페 메뉴 개발",
    "카페 음료 교육",
    "샌드위치·브런치 교육",
    "베이킹·디저트 메뉴 교육",
    "앙금플라워 교육",
    "공방 및 카페 운영 실무",
    "정부·기관 지원사업 수행 경험",
  ].map((value) => ({ value, status: "verified" as const })),
  careerHighlights: [
    { value: "10년간 전국·해외 수제 공방 운영", status: "verified" },
    { value: "KBS 생생정보통 2회 출연", status: "verified" },
    { value: "여주대학교 연구위원 역임", status: "verified" },
    { value: "주식회사 여주한과 법인업체 이사", status: "verified" },
    {
      value: "30억 원 규모 지원사업 성공 경험",
      status: "needsConfirmation",
      note: "정확한 지원사업명 및 역할 확인 필요. 총사업비를 개인 매출이나 수주액으로 표현하지 않음.",
    },
  ],
  broadcastAppearances: [
    {
      title: "KBS 생생정보통 2회 출연",
      description: "수제청 성공 창업 사례로 소개",
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
    { value: "전국 및 해외 수제 공방 10년 운영", status: "verified" },
  ],
  consultingAreas: [
    "창업자 대상 카페 메뉴 교육",
    "지역 특산물 활용 상품 개발",
    "수제청·수제잼 창업 과정",
    "브런치·디저트 실무 교육",
    "기관 맞춤형 체험 프로그램",
    "지원사업 연계 교육 및 컨설팅",
  ].map((value) => ({ value, status: "verified" as const })),
  contact: {
    address: { value: "경기도 이천시 영창로 101", status: "needsConfirmation", verificationRequired: true },
    phone: { value: "010-3659-5026", status: "needsConfirmation", verificationRequired: true },
    businessHours: {
      value: "매일 06:00~18:00",
      status: "unpublished",
      verificationRequired: true,
      note: "일반 방문 가능 시간인지 전화 상담 시간인지 확인 전 미노출",
    },
    instagram: { value: "@dongdongesweetmade", status: "verified" },
  },
  verificationNotes: [
    "넥스플랜의 정확한 법적 명칭과 윤인동 대표의 직책 확인 필요",
    "정확한 지원사업명 및 역할 확인 필요",
    "주소·전화번호·운영시간의 현재 정보 여부 확인 필요",
  ],
} satisfies Record<string, unknown>;

export type Representative = typeof representative;
export type RepresentativeFact<T> = Fact<T>;
