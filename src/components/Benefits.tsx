import { User, Gem, Star } from "lucide-react";
import Reveal from "./Reveal";
import { BENEFITS } from "../lib/data";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  user: User,
  gem: Gem,
  star: Star,
};

export default function Benefits() {
  return (
    <section className="border-y border-ink/8 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 sm:py-20 grid sm:grid-cols-3 gap-12 sm:gap-8">
        {BENEFITS.map((b, i) => {
          const Icon = ICONS[b.icon];
          return (
            <Reveal key={b.title} delay={i * 0.1}>
              <Icon size={26} strokeWidth={1.25} />
              <h3 className="font-serif text-xl text-ink mt-5 mb-2">{b.title}</h3>
              <p className="text-taupe text-sm font-light leading-relaxed max-w-xs">
                {b.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
