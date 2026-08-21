import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { unsplash } from "../lib/images";
import { REVIEWS } from "../lib/data";

export default function Testimonials({
  limit,
  showCta = true,
  hideHeader = false,
}: {
  limit?: number;
  showCta?: boolean;
  hideHeader?: boolean;
}) {
  const reviews = limit ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <section className="bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32">
        {!hideHeader && (
          <SectionHeader
            eyebrow="Відгуки"
            title="Відгуки"
            linkTo={showCta ? "/reviews" : undefined}
            linkLabel="Читати більше відгуків"
          />
        )}

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="border border-ink/10 rounded-xl p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={unsplash(r.image, 100, 100)}
                    alt={r.name}
                    className="w-11 h-11 object-cover rounded-full"
                  />
                  <span className="font-serif text-lg text-ink">{r.name}</span>
                </div>
                <p className="text-taupe font-light leading-relaxed text-sm mb-5">
                  &laquo;{r.text}&raquo;
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.2} className="text-center mt-14 sm:hidden">
            <Link
              to="/reviews"
              className="inline-flex items-center border border-ink/20 rounded-full px-9 py-4 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors duration-300"
            >
              Читати більше відгуків
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
