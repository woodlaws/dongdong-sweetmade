"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SmartImage({ src, alt, className, priority, sizes = "(max-width: 768px) 100vw, 50vw" }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ""}`} role="img" aria-label={alt}>
        <span aria-hidden="true">🍊</span>
        <small>이미지 준비 중</small>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
