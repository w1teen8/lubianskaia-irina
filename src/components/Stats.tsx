import { Sparkles, Users, Gem, Heart } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "../lib/data";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  sparkle: Sparkles,
  users: Users,
  gem: Gem,
  heart: Heart,
};

export default function Stats() {
  return (
    <section className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-ivory/10 text-center">
          {STATS.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.caption} delay={0.1 + i * 0.08} className="py-6 lg:py-0 flex flex-col items-center gap-3">
                <Icon size={20} strokeWidth={1.25} className="text-gold" />
                <p className="font-serif text-3xl sm:text-4xl text-ivory">
                  {s.type === "number" ? <CountUp value={s.value} suffix={s.suffix} /> : s.display}
                </p>
                <p className="text-ivory/45 text-sm font-light">{s.caption}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
