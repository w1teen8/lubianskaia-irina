"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import DuotoneImage from "./DuotoneImage";
import { REVIEWS } from "@/lib/data";
import { unsplash } from "@/lib/images";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const review = REVIEWS[index];

  return (
    <section id="reviews" className="relative py-28 sm:py-36 bg-bg-primary overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-secondary/40 gradient-blob" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal className="text-center mb-14 sm:mb-16">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
            Відгуки
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text">
            Слова, що надихають
          </h2>
        </Reveal>

        <div className="relative h-[340px] sm:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.image}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card absolute inset-0 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(185,152,232,0.2)] flex flex-col items-center text-center"
            >
              <Quote className="text-accent mb-4" size={32} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-light text-text text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <DuotoneImage
                  src={unsplash(review.image, 100, 100)}
                  alt={review.name}
                  className="w-11 h-11 rounded-full"
                />
                <span className="font-medium text-text text-sm">{review.name}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((r, i) => (
            <button
              key={r.image}
              type="button"
              aria-label={`Відгук ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-accent" : "w-1.5 bg-accent/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
