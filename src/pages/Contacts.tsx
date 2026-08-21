import { Phone, Clock, MapPin } from "lucide-react";
import { PiInstagramLogo } from "react-icons/pi";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { CONTACT } from "../lib/data";

export default function Contacts() {
  return (
    <>
      <PageHero eyebrow="Контакти" title="Завжди на зв'язку" />

      <section className="bg-ivory pb-24 sm:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden border border-ink/10">
              <iframe
                title="Карта — зона обслуговування"
                src="https://www.openstreetmap.org/export/embed.html?bbox=30.20%2C50.28%2C30.36%2C50.35&layer=mapnik&marker=50.3167%2C30.2833"
                className="w-full h-full grayscale-[40%] contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="space-y-9">
            <Reveal delay={0.1}>
              <a href={CONTACT.phoneHref} className="flex items-start gap-4 group">
                <span className="w-12 h-12 border border-ink/15 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-ink" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-taupe mb-1">
                    Телефон
                  </span>
                  <span className="text-lg text-ink group-hover:text-taupe transition-colors">
                    {CONTACT.phone}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="w-12 h-12 border border-ink/15 flex items-center justify-center shrink-0">
                  <PiInstagramLogo size={18} className="text-ink" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-taupe mb-1">
                    Instagram
                  </span>
                  <span className="text-lg text-ink group-hover:text-taupe transition-colors">
                    @{CONTACT.instagramHandle}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 border border-ink/15 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-ink" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-taupe mb-1">
                    Локації
                  </span>
                  <span className="text-lg text-ink">
                    {CONTACT.locations.join(" · ")}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 border border-ink/15 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-ink" />
                </span>
                <span className="block">
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">
                    Графік роботи
                  </span>
                  <span className="space-y-1 block">
                    {CONTACT.hours.map((h) => (
                      <span key={h.day} className="flex gap-3 text-ink text-sm">
                        <span className="text-taupe font-light w-44 shrink-0">
                          {h.day}
                        </span>
                        <span>{h.time}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
