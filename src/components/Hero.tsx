"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";
import FloatingBotanicals from "./decor/FloatingBotanicals";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-secondary/60 gradient-blob" />
      <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-accent/20 gradient-blob" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-bg-secondary gradient-blob" />

      <FloatingBotanicals />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-24 flex flex-col items-center text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6"
        >
          Студія краси в Боярці
        </motion.p>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-text mb-8">
          {"Розкрий Свою Природну Красу".split(" ").map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-3 sm:mr-4 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-light"
        >
          Професійна епіляція, депіляція, шугаринг та ламінування вій з
          турботою, точністю та особливою увагою до кожної деталі.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-16"
        >
          <MagneticButton
            href="#booking"
            className="bg-text text-bg-primary rounded-full px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-accent"
          >
            Записатися
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="border border-text/15 rounded-full px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium text-text hover:border-accent hover:text-accent"
          >
            Переглянути послуги
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10"
        >
          <div className="min-w-[7rem]">
            <p className="font-heading text-3xl text-text">809+</p>
            <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1 whitespace-nowrap">
              Задоволених клієнток
            </p>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="min-w-[7rem]">
            <p className="font-heading text-3xl text-text">66+</p>
            <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1 whitespace-nowrap">
              Публікацій робіт
            </p>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="min-w-[7rem]">
            <p className="font-heading text-3xl text-text">3</p>
            <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1 whitespace-nowrap">
              Локації обслуговування
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Гортайте</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
