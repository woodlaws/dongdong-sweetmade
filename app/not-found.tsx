import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><SearchX size={55} /><p>404</p><h1>찾으시는 페이지가 없어요</h1><span>주소가 변경되었거나 존재하지 않는 페이지입니다.</span><a className="button button-primary" href="/"><ArrowLeft size={17} />홈으로 돌아가기</a></main>;
}
