import { Shield, Award, Sparkles, Heart, Leaf, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Cta from "../components/Cta";
import { unsplash, IMG } from "../lib/images";
import { ADVANTAGES } from "../lib/data";

const ICONS: Record<
  string,
  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
  certificate: Award,
  device: Shield,
  sparkle: Sparkles,
  heart: Heart,
  leaf: Leaf,
  shield: ShieldCheck,
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="Про мене" title="Краса — це турбота, втілена в деталях" />

      <section className="bg-ivory pb-24 sm:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={unsplash(IMG.aboutPortrait, 900, 1125)}
                alt="Ірина Люб'янська"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-taupe font-light leading-relaxed text-base sm:text-lg mb-7">
                Мене звати Ірина, і вже кілька років я допомагаю жінкам у
                Боярці, Тарасівці та Вишневому відчувати впевненість у
                власній шкірі. Кожна процедура для мене — це не просто
                послуга, а маленький ритуал турботи, де важлива кожна
                деталь.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-ink pl-6 py-1 mb-8">
                <p className="font-serif text-xl sm:text-2xl text-ink italic leading-snug">
                  &laquo;Моя мета — щоб ви виходили з кабінету не лише з
                  гладенькою шкірою, а й із відчуттям справжнього
                  спокою&raquo;
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {ADVANTAGES.map((adv, i) => {
              const Icon = ICONS[adv.icon];
              return (
                <Reveal key={adv.title} delay={(i % 3) * 0.1}>
                  <Icon size={26} strokeWidth={1.25} className="text-gold" />
                  <h3 className="font-serif text-xl text-ink mt-5 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-taupe text-sm font-light leading-relaxed max-w-xs">
                    {adv.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
