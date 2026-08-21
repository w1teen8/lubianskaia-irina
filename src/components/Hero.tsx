import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { IMG } from "../lib/images";
import { CONTACT } from "../lib/data";

export default function Hero() {
  const { open } = useBooking();

  return (
    <section className="relative bg-ink pt-24 overflow-hidden">
      <a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden xl:flex absolute left-6 bottom-10 items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ivory/40 hover:text-ivory transition-colors"
      >
        <span className="vertical-rl rotate-180">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </a>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20">
        <div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ivory mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Стиль — це ваша
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block italic font-normal text-gold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              суперсила
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-ivory/60 text-base sm:text-lg font-light leading-relaxed max-w-md mb-10"
          >
            Допомагаю жінкам розкривати свою унікальність та відчувати себе
            впевнено щодня.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center gap-2.5 bg-gold text-ivory px-8 py-4 rounded-full text-[12px] uppercase tracking-[0.2em] hover:bg-ivory hover:text-ink transition-colors duration-300"
            >
              Записатися на консультацію
              <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]"
        >
          <img
            src={IMG.hero}
            alt="Ірина Люб'янська — персональний стиліст"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
