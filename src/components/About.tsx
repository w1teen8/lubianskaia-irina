"use client";

import Reveal from "./Reveal";
import FloatingBotanicals from "./decor/FloatingBotanicals";
import DuotoneImage from "./DuotoneImage";
import { unsplash, PORTRAIT_ABOUT } from "@/lib/images";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 bg-bg-secondary overflow-hidden"
    >
      <FloatingBotanicals variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-xl">
            <DuotoneImage
              src={unsplash(PORTRAIT_ABOUT, 800, 1050)}
              alt="Ірина Люб'янська в кабінеті краси"
              className="absolute inset-0"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
              Про мене
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text mb-8">
              Краса — це турбота,
              <br /> втілена в деталях
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-text-secondary leading-relaxed mb-6 font-light text-base sm:text-lg">
              Мене звати Ірина, і вже кілька років я допомагаю жінкам у Боярці,
              Тарасівці та Вишневому відчувати впевненість у власній шкірі.
              Кожна процедура для мене — це не просто послуга, а маленький
              ритуал турботи, де важлива кожна деталь.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="border-l-2 border-accent pl-6 py-2 mb-8">
              <p className="font-heading text-xl sm:text-2xl text-text italic leading-snug">
                &ldquo;Моя мета — щоб ви виходили з кабінету не лише з гладенькою
                шкірою, а й із відчуттям справжнього спокою&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="font-heading text-3xl text-text">66+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1">
                  Публікацій робіт
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl text-text">809+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1">
                  Клієнток в Instagram
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl text-text">3</p>
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1">
                  Локації обслуговування
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
