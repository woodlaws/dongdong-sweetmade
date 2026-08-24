"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="동동이 스윗메이드 홈" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span className="leaf">◆</span>🍊</span>
          <span>{siteConfig.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => {
            const active = item.href === "/classes" ? pathname.startsWith("/classes") : pathname === item.href;
            return <a key={item.href} className={active ? "active" : ""} href={item.href}>{item.label}</a>;
          })}
        </nav>

        <a className="kakao-button" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={16} fill="currentColor" aria-hidden="true" /> 카카오톡 상담하기
        </a>

        <button className="menu-toggle" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <nav aria-label="모바일 메뉴">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          </nav>
          <a className="kakao-button mobile-kakao" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" /> 카카오톡 상담하기
          </a>
        </div>
      )}
    </header>
  );
}
