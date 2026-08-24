export const scheduleCategories = ["수제청·음료", "브런치·디저트", "앙금플라워", "창업반", "카페창업", "외부 출강"] as const;

export type ScheduleCategory = (typeof scheduleCategories)[number];
export type ScheduleStatus = "모집중" | "마감임박" | "마감";

export type ClassScheduleItem = {
  id: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  category: ScheduleCategory;
  status: ScheduleStatus;
  location: string;
  classSlug: string;
  description: string;
  isSample: boolean;
};

const location = "경기도 이천시 영창로 101";

// 실제 일정으로 교체할 때는 아래 배열의 항목만 추가·수정·삭제하세요.
// date는 반드시 YYYY-MM-DD, 시간은 HH:mm 형식을 사용하고 isSample은 실제 일정에서 false로 변경할 수 있습니다.
// 월 선택 탭과 달력은 이 데이터의 연·월을 자동으로 읽어 구성됩니다.
export const classSchedule: ClassScheduleItem[] = ([
  { id: "schedule-2026-08-04", date: "2026-08-04", title: "수제청 기초 클래스", startTime: "10:00", endTime: "15:00", category: "수제청·음료", status: "모집중", location, classSlug: "cafe-drink-master", description: "제철 과일을 활용해 수제청의 기본 배합과 보관법을 배우는 과정입니다.", isSample: true },
  { id: "schedule-2026-08-08", date: "2026-08-08", title: "샌드위치·브런치", startTime: "10:00", endTime: "16:00", category: "브런치·디저트", status: "모집중", location, classSlug: "brunch-menu", description: "카페에서 활용하기 좋은 샌드위치와 브런치 메뉴를 실습합니다.", isSample: true },
  { id: "schedule-2026-08-12", date: "2026-08-12", title: "수제잼 창업반", startTime: "10:00", endTime: "17:00", category: "창업반", status: "마감임박", location, classSlug: "handmade-syrup-startup", description: "수제잼 제조부터 상품 구성과 판매 준비까지 익히는 창업 과정입니다.", isSample: true },
  { id: "schedule-2026-08-16", date: "2026-08-16", title: "앙금플라워 원데이", startTime: "13:00", endTime: "17:00", category: "앙금플라워", status: "모집중", location, classSlug: "bean-flower-cake", description: "기초 꽃 짜기와 색 조합으로 앙금플라워 작품을 완성합니다.", isSample: true },
  { id: "schedule-2026-08-20", date: "2026-08-20", title: "카페 음료 창업반", startTime: "10:00", endTime: "17:00", category: "창업반", status: "모집중", location, classSlug: "cafe-drink-master", description: "판매용 카페 음료 레시피와 메뉴 운영의 기본을 배우는 과정입니다.", isSample: true },
  { id: "schedule-2026-08-25", date: "2026-08-25", title: "쌍화청·대추차", startTime: "10:00", endTime: "15:00", category: "수제청·음료", status: "마감", location, classSlug: "cafe-drink-master", description: "쌍화청과 대추차의 재료 손질, 배합, 보관 방법을 실습합니다.", isSample: true },
  { id: "schedule-2026-08-29", date: "2026-08-29", title: "크림치즈 스프레드", startTime: "13:00", endTime: "17:00", category: "브런치·디저트", status: "모집중", location, classSlug: "brunch-menu", description: "브런치 메뉴에 활용할 수 있는 다양한 크림치즈 스프레드를 만듭니다.", isSample: true },
  { id: "schedule-2026-09-02", date: "2026-09-02", title: "과일청 마스터반", startTime: "10:00", endTime: "16:00", category: "수제청·음료", status: "모집중", location, classSlug: "cafe-drink-master", description: "과일별 특성에 맞는 배합과 카페 음료 응용법을 깊이 있게 다룹니다.", isSample: true },
  { id: "schedule-2026-09-05", date: "2026-09-05", title: "샌드위치 실전반", startTime: "10:00", endTime: "17:00", category: "브런치·디저트", status: "모집중", location, classSlug: "brunch-menu", description: "판매용 샌드위치의 재료 구성과 효율적인 제조 동선을 실습합니다.", isSample: true },
  { id: "schedule-2026-09-10", date: "2026-09-10", title: "카페 메뉴 개발", startTime: "10:00", endTime: "17:00", category: "창업반", status: "마감임박", location, classSlug: "handmade-syrup-startup", description: "카페 콘셉트에 맞는 메뉴 기획과 원가 구성 방법을 배웁니다.", isSample: true },
  { id: "schedule-2026-09-13", date: "2026-09-13", title: "앙금플라워 케이크", startTime: "13:00", endTime: "17:00", category: "앙금플라워", status: "모집중", location, classSlug: "bean-flower-cake", description: "꽃 짜기와 배치를 익혀 앙금플라워 케이크를 완성합니다.", isSample: true },
  { id: "schedule-2026-09-17", date: "2026-09-17", title: "수제잼 창업반", startTime: "10:00", endTime: "17:00", category: "창업반", status: "모집중", location, classSlug: "handmade-syrup-startup", description: "수제잼의 제품화와 판매 준비 과정을 실전 중심으로 익힙니다.", isSample: true },
  { id: "schedule-2026-09-22", date: "2026-09-22", title: "브런치 플레이트", startTime: "10:00", endTime: "16:00", category: "브런치·디저트", status: "모집중", location, classSlug: "brunch-menu", description: "한 접시에 조화롭게 담는 브런치 구성과 플레이팅을 실습합니다.", isSample: true },
  { id: "schedule-2026-09-26", date: "2026-09-26", title: "카페창업 집중반", startTime: "10:00", endTime: "18:00", category: "카페창업", status: "마감임박", location, classSlug: "handmade-syrup-startup", description: "카페 콘셉트부터 메뉴와 운영 계획까지 하루 동안 집중적으로 정리합니다.", isSample: true },
  { id: "schedule-2026-10-03", date: "2026-10-03", title: "가을 수제청 클래스", startTime: "10:00", endTime: "15:00", category: "수제청·음료", status: "모집중", location, classSlug: "cafe-drink-master", description: "가을 제철 재료로 수제청을 만들고 음료 활용법을 배웁니다.", isSample: true },
  { id: "schedule-2026-10-07", date: "2026-10-07", title: "샐러드·브런치", startTime: "10:00", endTime: "16:00", category: "브런치·디저트", status: "모집중", location, classSlug: "brunch-menu", description: "샐러드와 브런치 메뉴의 균형 있는 구성과 플레이팅을 실습합니다.", isSample: true },
  { id: "schedule-2026-10-11", date: "2026-10-11", title: "앙금플라워 원데이", startTime: "13:00", endTime: "17:00", category: "앙금플라워", status: "모집중", location, classSlug: "bean-flower-cake", description: "처음 배우는 분도 완성할 수 있는 앙금플라워 원데이 과정입니다.", isSample: true },
  { id: "schedule-2026-10-15", date: "2026-10-15", title: "카페 음료 창업반", startTime: "10:00", endTime: "17:00", category: "창업반", status: "마감임박", location, classSlug: "cafe-drink-master", description: "카페 판매를 위한 음료 레시피와 메뉴 표준화 방법을 배웁니다.", isSample: true },
  { id: "schedule-2026-10-20", date: "2026-10-20", title: "수제잼 마스터반", startTime: "10:00", endTime: "16:00", category: "수제청·음료", status: "모집중", location, classSlug: "handmade-syrup-startup", description: "과일별 잼 배합과 상품화를 위한 제조 노하우를 익힙니다.", isSample: true },
  { id: "schedule-2026-10-24", date: "2026-10-24", title: "샌드위치 메뉴 개발", startTime: "10:00", endTime: "17:00", category: "브런치·디저트", status: "모집중", location, classSlug: "brunch-menu", description: "매장 콘셉트에 맞는 샌드위치 메뉴를 기획하고 실습합니다.", isSample: true },
  { id: "schedule-2026-10-29", date: "2026-10-29", title: "카페창업 컨설팅데이", startTime: "11:00", endTime: "17:00", category: "카페창업", status: "모집중", location, classSlug: "handmade-syrup-startup", description: "예비 창업자의 현재 상황을 진단하고 실행 순서를 함께 정리합니다.", isSample: true },
] satisfies ClassScheduleItem[]).sort((a, b) => a.date.localeCompare(b.date));

export function parseScheduleDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return { year, month, day, weekday: new Date(Date.UTC(year, month - 1, day)).getUTCDay() };
}

export const scheduleMonths = Array.from(new Set(classSchedule.map((item) => item.date.slice(0, 7)))).sort();
