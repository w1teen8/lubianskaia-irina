"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import DuotoneImage from "./DuotoneImage";
import { GALLERY_IMAGES } from "@/lib/data";
import { unsplash } from "@/lib/images";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
            Галерея
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text">
            Результати, якими пишаємось
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="columns-2 sm:columns-3 gap-4 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={img.image}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid"
                style={{ aspectRatio: `${img.w} / ${img.h}` }}
              >
                <DuotoneImage
                  src={unsplash(img.image, img.w, img.h)}
                  alt={`Робота Ірини Люб'янської ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Dialog.Root open={activeIndex !== null} onOpenChange={(open) => !open && close()}>
        <AnimatePresence>
          {activeIndex !== null && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[70]"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-10"
                >
                  <Dialog.Title className="sr-only">Перегляд фото галереї</Dialog.Title>
                  {activeIndex !== null && (
                    <div className="relative w-full max-w-3xl aspect-[4/5]">
                      <DuotoneImage
                        src={unsplash(GALLERY_IMAGES[activeIndex].image, 1000, 1250)}
                        alt="Перегляд роботи"
                        fit="contain"
                        className="absolute inset-0"
                      />
                    </div>
                  )}

                  <Dialog.Close
                    className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/80 hover:text-white transition-colors"
                    aria-label="Закрити"
                  >
                    <X size={28} />
                  </Dialog.Close>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Попереднє фото"
                    className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Наступне фото"
                    className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={32} />
                  </button>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
