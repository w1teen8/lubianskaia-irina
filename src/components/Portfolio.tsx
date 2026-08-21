import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Lightbox from "./Lightbox";
import { PORTFOLIO_IMAGES } from "../lib/data";

export default function Portfolio({
  limit,
  showCta = true,
  variant = "row",
  hideHeader = false,
}: {
  limit?: number;
  showCta?: boolean;
  variant?: "row" | "grid";
  hideHeader?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = limit ? PORTFOLIO_IMAGES.slice(0, limit) : PORTFOLIO_IMAGES;

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  const isRow = variant === "row";

  return (
    <section className={isRow ? "bg-ink" : "bg-ivory"}>
      <div className={isRow ? "max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-28" : "max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32"}>
        {!hideHeader && (
          <SectionHeader
            eyebrow="Портфоліо"
            title="Портфоліо"
            linkTo={showCta ? "/portfolio" : undefined}
            linkLabel="Дивитись більше робіт"
            dark={isRow}
          />
        )}

        {isRow ? (
          <Reveal delay={0.1}>
            <div className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-2">
              {images.map((img, i) => (
                <button
                  key={img.image + i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group relative block h-64 sm:h-80 shrink-0 overflow-hidden rounded-lg"
                  style={{ aspectRatio: `${img.w} / ${img.h}` }}
                >
                  <img
                    src={img.image}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                </button>
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <div className="columns-2 sm:columns-3 gap-4 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
              {images.map((img, i) => (
                <button
                  key={img.image + i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group relative block w-full overflow-hidden break-inside-avoid rounded-lg"
                  style={{ aspectRatio: `${img.w} / ${img.h}` }}
                >
                  <img
                    src={img.image}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                </button>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
