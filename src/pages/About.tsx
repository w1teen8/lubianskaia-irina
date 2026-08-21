import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Cta from "../components/Cta";
import { IMG } from "../lib/images";
import { BENEFITS } from "../lib/data";

export default function About() {
  return (
    <>
      <PageHero eyebrow="Про мене" title="Стиль — це ваша суперсила" />

      <section className="bg-ivory pb-24 sm:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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
              <p className="text-taupe font-light leading-relaxed text-base sm:text-lg mb-7">
                Я — Ірина Люб&apos;янська, персональний стиліст та майстер
                краси. Допомагаю жінкам розкривати свою унікальність через
                стиль, макіяж та доглянутість. Моя мета — щоб ви почувались
                впевнено та гармонійно кожного дня.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-ink pl-6 py-1 mb-8">
                <p className="font-serif text-xl sm:text-2xl text-ink italic leading-snug">
                  &laquo;Стиль — це не про моду, а про те, як ви себе
                  почуваєте у власній шкірі&raquo;
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-serif text-2xl italic text-ink/70">
                Ірина Люб&apos;янська
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-ink/8">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32">
          <Reveal className="mb-16 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
              Чому обирають мене
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink">
              Чому обирають мене
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-x-10 gap-y-14">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.1}>
                <span className="font-serif text-2xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-ink mt-4 mb-2">
                  {b.title}
                </h3>
                <p className="text-taupe text-sm font-light leading-relaxed max-w-xs">
                  {b.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
