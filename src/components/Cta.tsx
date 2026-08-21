import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useBooking } from "../context/BookingContext";
import { unsplash, IMG } from "../lib/images";

export default function Cta() {
  const { open } = useBooking();

  return (
    <section className="bg-ink">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 items-center">
        <div className="px-6 sm:px-10 xl:px-20 py-24 sm:py-32">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-6xl text-ivory leading-[1.15] mb-6">
              Готові змінити свій образ
              <br /> та розкрити свою красу?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ivory/60 font-light text-base sm:text-lg mb-10 max-w-md">
              Запишіться на консультацію та зробіть перший крок до нового
              себе.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center gap-2.5 bg-gold text-ivory rounded-full px-9 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-ivory hover:text-ink transition-colors duration-300"
            >
              Записатися на консультацію
              <ArrowRight size={15} />
            </button>
          </Reveal>
        </div>

        <div className="hidden lg:block h-full min-h-[420px]">
          <img
            src={unsplash(IMG.clientPortrait, 800, 900)}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
