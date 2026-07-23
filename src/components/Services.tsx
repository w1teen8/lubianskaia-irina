"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
            Послуги
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text">
            Ритуали для вашої природної краси
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card rounded-3xl border border-border p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(185,152,232,0.25)] transition-shadow duration-500"
              >
                <div className="w-10 h-1 rounded-full bg-accent mb-6" />
                <h3 className="font-heading text-xl sm:text-2xl text-text mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight
                    size={20}
                    className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
