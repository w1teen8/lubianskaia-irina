import { useEffect } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = { image: string; alt: string };

interface LightboxProps {
  images: readonly LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onPrev, onNext]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x > 80) onPrev();
    else if (info.offset.x < -80) onNext();
  }

  return (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 text-ivory/80 hover:text-ivory transition-colors z-10"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={onPrev}
            aria-label="Попереднє фото"
            className="hidden sm:block absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Наступне фото"
            className="hidden sm:block absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors z-10"
          >
            <ChevronRight size={32} />
          </button>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            className="relative w-full max-w-3xl aspect-[4/5]"
          >
            <img
              src={images[activeIndex].image}
              alt={images[activeIndex].alt}
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
