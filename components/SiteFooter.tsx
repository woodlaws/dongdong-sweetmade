import { Instagram, MessageCircle } from "lucide-react";
import { representative } from "@/data/representative";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand footer-brand" href="/"><span aria-hidden="true">🍊</span>{siteConfig.name}</a>
          <p>카페를 꿈꾸는 분들의 배움이<br />실제 메뉴와 창업으로 이어지도록 함께합니다.</p>
          <div className="social-links">
            <a href={siteConfig.blogUrl} target="_blank" rel="noreferrer">N 네이버 블로그</a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> 인스타그램</a>
            <a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> 카카오톡</a>
          </div>
        </div>
        <div>
          <h2>바로가기</h2>
          <a href="/about">브랜드 소개</a>
          <a href="/consulting">창업 컨설팅</a>
          <a href="/classes">클래스 안내</a>
          <a href="/reviews">수강후기</a>
        </div>
        <div>
          <h2>사업자 정보</h2>
          <p>대표자: {representative.name.value}</p>
          <p>주소: {representative.contact.address.value}</p>
          <p>연락처: {representative.contact.phone.value}</p>
          <p>인스타그램: {representative.contact.instagram.value}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span><a href="/privacy">개인정보처리방침</a><a href="/terms">이용약관</a></span>
      </div>
    </footer>
  );
}
