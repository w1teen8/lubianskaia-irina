"use client";

import { motion } from "framer-motion";
import {
  PiCertificateLight,
  PiGearSixLight,
  PiSparkleLight,
  PiHeartLight,
  PiLeafLight,
  PiShieldCheckLight,
} from "react-icons/pi";
import Reveal from "./Reveal";
import { ADVANTAGES } from "@/lib/data";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  certificate: PiCertificateLight,
  device: PiGearSixLight,
  sparkle: PiSparkleLight,
  heart: PiHeartLight,
  leaf: PiLeafLight,
  shield: PiShieldCheckLight,
};

export default function WhyChooseMe() {
  return (
    <section className="relative py-28 sm:py-36 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
            Чому обирають мене
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text">
            Довіра, побудована на деталях
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICONS[adv.icon];
            return (
              <Reveal key={adv.title} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-card rounded-3xl border border-border p-8 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-secondary/70 flex items-center justify-center mb-6">
                    <Icon size={26} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl text-text mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                    {adv.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
