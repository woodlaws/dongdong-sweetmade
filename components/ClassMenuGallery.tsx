import Image from "next/image";
import type { ClassPhoto } from "@/data/classes";

export function ClassMenuGallery({ photos }: { photos: ClassPhoto[] }) {
  return (
    <div className="class-menu-gallery" role="list">
      {photos.map((photo) => (
        <figure key={photo.src} role="listitem">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 45vw, 31vw"
          />
          <figcaption>{photo.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
