import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../lib/data";

export default function ServicesGrid({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="mb-16 sm:mb-20">
          <div className="h-px w-12 bg-ink mb-8 mx-auto" />
          <h2 className="font-serif text-4xl sm:text-5xl text-ink text-center">
            Послуги
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.2} className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center border border-ink/20 px-9 py-4 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors duration-300"
            >
              Переглянути всі послуги
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
