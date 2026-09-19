"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import type { ReviewImage } from "@/data/reviews";

type ReviewGalleryProps = {
  images: ReviewImage[];
  initialCount?: number;
  showMore?: boolean;
  variant?: "default" | "home" | "related";
};

export function ReviewGallery({ images, initialCount = images.length, showMore = false, variant = "default" }: ReviewGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<ReviewImage | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const visible = expanded ? images : images.slice(0, initialCount);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [active]);

  const openImage = (image: ReviewImage, button: HTMLButtonElement) => {
    openerRef.current = button;
    setActive(image);
  };

  return (
    <>
      <div className={`kakao-review-grid kakao-review-grid--${variant}`}>
        {visible.map((image, index) => (
          <figure className="kakao-review-item" key={image.id}>
            <button type="button" className="kakao-review-image-button" onClick={(event) => openImage(image, event.currentTarget)} aria-label={`카카오톡 후기 ${index + 1} 크게 보기`}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={variant === "home" ? "(max-width: 800px) calc(100vw - 36px), 33vw" : "(max-width: 520px) calc(100vw - 36px), (max-width: 900px) 50vw, 33vw"} loading="lazy" />
            </button>
            <button type="button" className="kakao-review-open" onClick={(event) => openImage(image, event.currentTarget)}><Maximize2 size={15} aria-hidden="true" />크게 보기</button>
          </figure>
        ))}
      </div>

      {showMore && !expanded && images.length > initialCount ? (
        <div className="kakao-review-more"><button type="button" onClick={() => setExpanded(true)}>후기 더 보기</button></div>
      ) : null}

      {active ? (
        <div className="kakao-review-lightbox" role="dialog" aria-modal="true" aria-label="카카오톡 후기 크게 보기">
          <div className="kakao-review-lightbox-toolbar"><span>카카오톡 후기</span><button ref={closeRef} type="button" onClick={() => setActive(null)} aria-label="확대 화면 닫기"><X size={22} /></button></div>
          <div className="kakao-review-lightbox-scroll">
            <Image src={active.src} alt={active.alt} width={active.width} height={active.height} sizes="(max-width: 900px) 100vw, 900px" priority />
          </div>
        </div>
      ) : null}
    </>
  );
}
