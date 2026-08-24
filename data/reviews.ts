export type ReviewItem = {
  id: number;
  category: string;
  quote: string;
  author: string;
  change: string;
};

export const reviews: ReviewItem[] = [
  {
    id: 1,
    category: "창업반",
    quote: "수제청 창업반 수강 후 막연했던 메뉴 구성이 정리됐어요. 준비해야 할 순서를 알게 된 것이 가장 큰 변화였습니다.",
    author: "김** 수강생",
    change: "수강 전: 메뉴 방향이 막연함 → 수강 후: 판매 메뉴와 준비 순서 정리",
  },
  {
    id: 2,
    category: "브런치·디저트",
    quote: "레시피뿐 아니라 매장에서 빠르게 제공하는 방법까지 알려주셔서 실제 운영에 도움이 됐습니다.",
    author: "이** 카페 운영자",
    change: "수강 전: 제공 시간이 길었음 → 수강 후: 작업 동선과 조리 순서 개선",
  },
  {
    id: 3,
    category: "앙금플라워",
    quote: "취미로 시작했는데 주문 케이크를 만들 수 있을 만큼 기본기를 차근차근 배웠어요.",
    author: "박** 수강생",
    change: "수강 전: 꽃 짜기 경험 없음 → 수강 후: 기본 디자인 케이크 완성",
  },
  {
    id: 4,
    category: "수제청·음료",
    quote: "맛의 기준을 숫자와 과정으로 이해하니 계절 과일이 바뀌어도 레시피를 응용할 수 있게 됐습니다.",
    author: "최** 예비 창업자",
    change: "수강 전: 레시피 의존 → 수강 후: 당도와 배합 원리 이해",
  },
];
