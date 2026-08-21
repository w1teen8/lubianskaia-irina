import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { IMG } from "../lib/images";

export default function AboutTeaser() {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-[1fr_1.1fr_0.6fr] gap-10 lg:gap-14 items-center">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
            <img
              src={IMG.about}
              alt="Ірина Люб'янська"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
              Про мене
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mb-7">
              Привіт, я Ірина
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-taupe font-light leading-relaxed text-base sm:text-lg mb-9 max-w-lg">
              Я — персональний стиліст та майстер краси. Моя місія —
              допомогти вам знайти свій стиль, розкрити природну красу та
              відчувати гармонію у кожній деталі.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex items-center gap-8 flex-wrap">
            <Link
              to="/about"
              className="inline-flex items-center bg-ink text-ivory rounded-full px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-300"
            >
              Дізнатися більше
            </Link>
            <p className="font-serif text-2xl italic text-ink/70">
              Ірина Люб&apos;янська
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hidden lg:flex flex-col items-center gap-6">
          <p className="vertical-rl text-[10px] uppercase tracking-[0.3em] text-taupe">
            Краса — це гармонія
          </p>
          <div className="aspect-[3/4] w-full max-w-[140px] overflow-hidden rounded-xl">
            <img
              src={IMG.aboutDecor}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
