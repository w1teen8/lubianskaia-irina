import Reveal from "./Reveal";
import { useBooking } from "../context/BookingContext";

export default function Cta() {
  const { open } = useBooking();

  return (
    <section className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink leading-[1.15] mb-6">
            Готові змінити свій образ
            <br /> та розкрити свою красу?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-taupe font-light text-base sm:text-lg mb-10 max-w-md mx-auto">
            Запишіться на консультацію та зробіть перший крок до нового себе.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <button
            type="button"
            onClick={() => open()}
            className="inline-flex items-center bg-ink text-ivory px-10 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-taupe transition-colors duration-300"
          >
            Записатися на консультацію
          </button>
        </Reveal>
      </div>
    </section>
  );
}
