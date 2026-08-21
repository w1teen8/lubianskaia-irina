import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { unsplash } from "../lib/images";
import { PORTFOLIO_IMAGES } from "../lib/data";

export default function Portfolio({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = limit ? PORTFOLIO_IMAGES.slice(0, limit) : PORTFOLIO_IMAGES;

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="mb-16 sm:mb-20 text-center">
          <div className="h-px w-12 bg-ink mb-8 mx-auto" />
          <h2 className="font-serif text-4xl sm:text-5xl text-ink">Портфоліо</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="columns-2 sm:columns-3 gap-4 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
            {images.map((img, i) => (
              <button
                key={img.image + i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden break-inside-avoid"
                style={{ aspectRatio: `${img.w} / ${img.h}` }}
              >
                <img
                  src={unsplash(img.image, img.w, img.h)}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
              </button>
            ))}
          </div>
        </Reveal>

        {showCta && (
          <Reveal delay={0.2} className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center border border-ink/20 px-9 py-4 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors duration-300"
            >
              Дивитись більше робіт
            </Link>
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
