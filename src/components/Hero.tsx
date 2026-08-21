import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { unsplash, IMG } from "../lib/images";
import { CONTACT } from "../lib/data";

export default function Hero() {
  const { open } = useBooking();

  return (
    <section className="relative bg-ivory pt-24">
      <a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-taupe hover:text-ink transition-colors"
      >
        <span className="vertical-rl rotate-180">Instagram</span>
        <span className="w-px h-10 bg-ink/20" />
      </a>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 48 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px bg-gold mb-8"
          />

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-ink mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Розкрий свою
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              природну красу
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-taupe text-base sm:text-lg font-light leading-relaxed max-w-md mb-10"
          >
            Епіляція, депіляція, шугаринг та ламінування вій з турботою,
            точністю та увагою до кожної деталі.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center gap-2.5 bg-gold text-ivory px-8 py-4 rounded-full text-[12px] uppercase tracking-[0.2em] hover:bg-ink transition-colors duration-300"
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
            src={unsplash(IMG.heroPortrait, 900, 1125)}
            alt="Ірина Люб'янська"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-8 right-8 text-right hidden sm:block">
            <p className="vertical-rl text-[10px] uppercase tracking-[0.3em] text-ivory/90 h-28">
              Краса — це турбота про себе
            </p>
          </div>

          <span className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-ivory/90 flex items-center justify-center">
            <Plus size={18} className="text-ink" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
