import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { unsplash, IMG } from "../lib/images";

export default function AboutTeaser() {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden max-w-md">
            <img
              src={unsplash(IMG.aboutPortrait, 800, 1000)}
              alt="Ірина Люб'янська"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="h-px w-12 bg-ink mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mb-7">
              Про мене
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-taupe font-light leading-relaxed text-base sm:text-lg mb-9 max-w-lg">
              Я — Ірина Люб&apos;янська, майстер краси з Боярки. Допомагаю
              жінкам відчувати впевненість у власній шкірі через дбайливу
              епіляцію, шугаринг та ламінування вій. Моя мета — щоб ви
              виходили з кабінету не лише з гладенькою шкірою, а й із
              відчуттям справжнього спокою.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/about"
              className="inline-flex items-center border border-ink/20 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors duration-300 mb-10"
            >
              Дізнатися більше
            </Link>
            <p className="font-serif text-2xl italic text-ink/70">
              Ірина Люб&apos;янська
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
