import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../lib/data";

export default function ServicesGrid({
  limit,
  showCta = true,
  hideHeader = false,
}: {
  limit?: number;
  showCta?: boolean;
  hideHeader?: boolean;
}) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-32">
        {!hideHeader && (
          <SectionHeader
            eyebrow="Послуги"
            title="Послуги"
            linkTo={showCta ? "/services" : undefined}
            linkLabel="Переглянути всі послуги"
          />
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.2} className="text-center mt-16 sm:hidden">
            <Link
              to="/services"
              className="inline-flex items-center border border-ink/20 rounded-full px-9 py-4 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-ink transition-colors duration-300"
            >
              Переглянути всі послуги
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
