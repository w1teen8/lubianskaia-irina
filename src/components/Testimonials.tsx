import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { unsplash } from "../lib/images";
import { REVIEWS } from "../lib/data";

export default function Testimonials({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const reviews = limit ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <section className="bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="mb-16 sm:mb-20 text-center">
          <div className="h-px w-12 bg-ink mb-8 mx-auto" />
          <h2 className="font-serif text-4xl sm:text-5xl text-ink">Відгуки</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
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
                  <Star key={idx} size={14} className="fill-ink text-ink" />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.2} className="text-center mt-16">
            <Link
              to="/reviews"
              className="inline-flex items-center border border-ink/20 px-9 py-4 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors duration-300"
            >
              Читати більше відгуків
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
