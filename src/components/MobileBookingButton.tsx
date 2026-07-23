"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarHeart } from "lucide-react";

export default function MobileBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-text text-bg-primary rounded-full pl-5 pr-6 py-3.5 flex items-center gap-2 text-sm uppercase tracking-[0.12em] font-medium shadow-2xl"
        >
          <CalendarHeart size={16} />
          Записатися
        </motion.a>
      )}
    </AnimatePresence>
  );
}
