import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "../lib/data";

export default function Stats() {
  return (
    <section className="bg-beige/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 sm:py-24 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
        <Reveal className="lg:w-64 shrink-0">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
            Чому обирають мене
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 flex-1">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <p className="font-serif text-4xl sm:text-5xl text-ink">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-taupe text-sm font-light mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
