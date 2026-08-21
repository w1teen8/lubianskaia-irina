import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { BENEFITS } from "../lib/data";

export default function Benefits() {
  return (
    <section className="bg-ink border-t border-ivory/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-10 sm:py-12">
        <div className="grid sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto] gap-8 items-center">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1} className="flex items-start gap-4">
              <span className="font-serif text-2xl text-gold/70 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-ivory text-sm uppercase tracking-[0.05em] mb-1.5">
                  {b.title}
                </h3>
                <p className="text-ivory/45 text-sm font-light leading-relaxed">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="hidden lg:flex justify-end">
            <Link
              to="/about"
              aria-label="Про мене"
              className="w-11 h-11 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-colors"
            >
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
