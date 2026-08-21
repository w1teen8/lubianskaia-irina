import { User, Gem, Star } from "lucide-react";
import Reveal from "./Reveal";
import { BENEFITS } from "../lib/data";

const ICONS: Record<
  string,
  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
  user: User,
  gem: Gem,
  star: Star,
};

export default function Benefits() {
  return (
    <section className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-14 sm:py-16">
        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ivory/10">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <Reveal
                key={b.title}
                delay={i * 0.1}
                className="py-8 sm:py-0 sm:px-10 first:pl-0 first:sm:pl-0"
              >
                <Icon size={22} strokeWidth={1.25} className="text-gold" />
                <h3 className="font-serif text-lg text-ivory mt-4 mb-2">
                  {b.title}
                </h3>
                <p className="text-ivory/50 text-sm font-light leading-relaxed max-w-xs">
                  {b.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
