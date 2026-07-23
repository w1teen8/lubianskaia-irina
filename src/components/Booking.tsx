"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { SERVICES } from "@/lib/data";

const inputClass =
  "w-full bg-transparent border-b border-text/15 focus:border-accent outline-none py-3 text-text placeholder:text-text-secondary/70 transition-colors duration-300 font-light";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="relative py-28 sm:py-36 bg-bg-secondary">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
            Запис
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text mb-5">
            Забронюйте свій час турботи
          </h2>
          <p className="text-text-secondary font-light mb-12 max-w-md mx-auto">
            Заповніть форму, і я особисто зв&apos;яжуся з вами для підтвердження
            зручного часу візиту.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-3xl p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="w-14 h-14 rounded-full bg-accent-secondary flex items-center justify-center mx-auto mb-5">
                <Check className="text-accent" size={26} />
              </div>
              <h3 className="font-heading text-2xl text-text mb-2">
                Дякую за заявку!
              </h3>
              <p className="text-text-secondary font-light">
                Я зв&apos;яжуся з вами найближчим часом, щоб підтвердити запис.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7 text-left">
              <div className="grid sm:grid-cols-2 gap-7">
                <input
                  required
                  type="text"
                  placeholder="Ваше ім'я"
                  className={inputClass}
                />
                <input
                  required
                  type="tel"
                  placeholder="Номер телефону"
                  className={inputClass}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-7">
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Оберіть послугу
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <input type="date" className={inputClass} />
              </div>
              <textarea
                rows={3}
                placeholder="Коментар (необов'язково)"
                className={`${inputClass} resize-none`}
              />

              <div className="text-center pt-4">
                <MagneticButton
                  type="submit"
                  className="bg-text text-bg-primary rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-accent"
                >
                  Надіслати заявку
                </MagneticButton>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
