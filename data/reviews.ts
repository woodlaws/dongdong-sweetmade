export type ReviewImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

const review = (id: string, width: number, height: number): ReviewImage => ({
  id,
  src: `/reviews/kakao-review-${id}.jpg`,
  width,
  height,
  alt: "수강생과 나눈 카카오톡 후기 캡처",
});

export const reviewImages: ReviewImage[] = [
  review("12", 2048, 2980),
  review("04", 2048, 3005),
  review("14", 1080, 2316),
  review("02", 2048, 3852),
  review("11", 2048, 2717),
  review("06", 2048, 2954),
  review("base", 2048, 3861),
  review("01", 2048, 2880),
  review("03", 2048, 2956),
  review("05", 2048, 3269),
  review("07", 2048, 2865),
  review("08", 2048, 3039),
  review("09", 2048, 3119),
  review("13", 2444, 2048),
  review("15", 1080, 2316),
  review("16", 1080, 1935),
  review("17", 1080, 1881),
  review("18", 1080, 917),
];

export const homeReviewImages = ["12", "04", "14"].map((id) => reviewImages.find((item) => item.id === id)!);

export const classReviewImages: Record<string, ReviewImage[]> = {
  "brunch-menu": ["02", "04", "13"].map((id) => reviewImages.find((item) => item.id === id)!),
  "cafe-drink-master": ["11", "12"].map((id) => reviewImages.find((item) => item.id === id)!),
  "handmade-syrup-startup": ["11", "12"].map((id) => reviewImages.find((item) => item.id === id)!),
  "traditional-tea-class": ["17", "18", "03"].map((id) => reviewImages.find((item) => item.id === id)!),
  "nut-master": ["14", "15"].map((id) => reviewImages.find((item) => item.id === id)!),
  "soup-class": ["02", "05"].map((id) => reviewImages.find((item) => item.id === id)!),
};

export const consultingReviewImages = ["06", "07", "08"].map((id) => reviewImages.find((item) => item.id === id)!);

export const broadcastImage = {
  src: "/reviews/broadcast-10.jpg",
  width: 2789,
  height: 2048,
  alt: "윤인동 대표가 소개된 방송 화면 자료",
};
