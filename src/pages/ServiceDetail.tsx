import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronDown, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import Cta from "../components/Cta";
import { useBooking } from "../context/BookingContext";
import { unsplash } from "../lib/images";
import { SERVICES } from "../lib/data";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const { open } = useBooking();
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) return <Navigate to="/services" replace />;

  const index = SERVICES.findIndex((s) => s.slug === slug);
  const imageFirst = index % 2 === 0;

  return (
    <>
      <section className="bg-ivory pt-40 pb-20 sm:pt-48 sm:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal className="mb-4">
            <Link
              to="/services"
              className="text-[11px] uppercase tracking-[0.2em] text-taupe hover:text-ink transition-colors"
            >
              ← Усі послуги
            </Link>
          </Reveal>

          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              imageFirst ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={unsplash(service.image, 900, 1125)}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h1 className="font-serif text-4xl sm:text-6xl text-ink leading-[1.1] mb-6">
                  {service.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-taupe font-light text-base sm:text-lg leading-relaxed mb-8">
                  {service.shortDescription}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex items-center gap-8 mb-9 text-sm">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Тривалість
                    </p>
                    <p className="text-ink font-light">{service.duration}</p>
                  </div>
                  <div className="w-px h-8 bg-ink/15" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Вартість
                    </p>
                    <p className="text-ink font-light">{service.priceFrom}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <button
                  type="button"
                  onClick={() => open(service.title)}
                  className="inline-flex items-center bg-ink text-ivory px-9 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-taupe transition-colors duration-300"
                >
                  Записатися
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-ink/8">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-28 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl text-ink mb-7">Що входить</h2>
            <ul className="space-y-4">
              {service.whatIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-ink mt-1 shrink-0" />
                  <span className="text-taupe font-light">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl text-ink mb-7">Для кого підходить</h2>
              <p className="text-taupe font-light leading-relaxed mb-10">
                {service.forWhom}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-serif text-3xl text-ink mb-7">Процес роботи</h2>
              <ol className="space-y-4">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="font-serif text-lg text-taupe shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-taupe font-light">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory border-t border-ink/8">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 py-24 sm:py-28">
          <Reveal className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Питання та відповіді</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-ink/10">
              {service.faq.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.q} className="border-b border-ink/10">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between py-6 text-left gap-4"
                    >
                      <span className="font-serif text-lg text-ink">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-ink shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="text-taupe font-light leading-relaxed pb-6 max-w-lg">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
