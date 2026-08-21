import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "../lib/data";

export default function Stats() {
  return (
    <section className="bg-beige/50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-ink/10 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08} className="py-6 lg:py-0">
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
