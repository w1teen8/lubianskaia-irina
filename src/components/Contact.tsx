"use client";

import { Phone, Clock, MapPin } from "lucide-react";
import { PiInstagramLogo } from "react-icons/pi";
import Reveal from "./Reveal";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] border border-border">
            <iframe
              title="Карта — зона обслуговування"
              src="https://www.openstreetmap.org/export/embed.html?bbox=30.20%2C50.28%2C30.36%2C50.35&layer=mapnik&marker=50.3167%2C30.2833"
              className="w-full h-full grayscale-[40%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
              Контакти
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text mb-10">
              Завжди на зв&apos;язку
            </h2>
          </Reveal>

          <div className="space-y-7">
            <Reveal delay={0.1}>
              <a
                href={CONTACT.phoneHref}
                className="flex items-start gap-4 group"
              >
                <span className="w-12 h-12 rounded-2xl bg-accent-secondary/70 flex items-center justify-center shrink-0">
                  <Phone size={19} className="text-accent" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-text-secondary mb-1">
                    Телефон
                  </span>
                  <span className="text-lg text-text group-hover:text-accent transition-colors">
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
                <span className="w-12 h-12 rounded-2xl bg-accent-secondary/70 flex items-center justify-center shrink-0">
                  <PiInstagramLogo size={19} className="text-accent" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-text-secondary mb-1">
                    Instagram
                  </span>
                  <span className="text-lg text-text group-hover:text-accent transition-colors">
                    @{CONTACT.instagramHandle}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-accent-secondary/70 flex items-center justify-center shrink-0">
                  <MapPin size={19} className="text-accent" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-text-secondary mb-1">
                    Локації
                  </span>
                  <span className="text-lg text-text">
                    {CONTACT.locations.join(" · ")}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-accent-secondary/70 flex items-center justify-center shrink-0">
                  <Clock size={19} className="text-accent" />
                </span>
                <span className="block">
                  <span className="block text-xs uppercase tracking-[0.15em] text-text-secondary mb-2">
                    Графік роботи
                  </span>
                  <span className="space-y-1 block">
                    {CONTACT.hours.map((h) => (
                      <span key={h.day} className="flex gap-3 text-text">
                        <span className="text-text-secondary font-light w-44 shrink-0">
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
      </div>
    </section>
  );
}
