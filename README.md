# 동동이 스윗메이드 — GitHub · Vercel 배포 패키지

표준 Next.js App Router 프로젝트입니다. GitHub 저장소에 업로드한 뒤 Vercel에서 저장소를 가져오면 자동으로 빌드·배포됩니다.

## 로컬 확인

```bash
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## Vercel 배포

1. 이 폴더의 파일을 GitHub 저장소 루트에 업로드합니다.
2. Vercel에서 **Add New → Project**를 선택합니다.
3. 해당 GitHub 저장소를 선택하고 **Deploy**를 누릅니다.
4. Framework Preset은 자동으로 **Next.js**가 선택됩니다.

별도의 환경 변수는 필요하지 않습니다.

## 주요 페이지

- `/` 홈
- `/about` 브랜드 소개
- `/consulting` 카페창업 컨설팅
- `/classes` 클래스 목록
- `/classes/[slug]` 클래스 상세
- `/reviews` 수강후기
- `/contact` 문의
- `/privacy` 개인정보처리방침
- `/terms` 이용약관

## 운영 전 확인

`data/site.ts`에서 실제 연락처, 사업자 정보, 카카오톡 URL과 최종 도메인을 입력하세요. Vercel 도메인이 확정되면 `siteConfig.url`도 같은 주소로 변경해야 SEO canonical 및 공유 메타데이터가 정확해집니다.
