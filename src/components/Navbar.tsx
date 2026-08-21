import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/data";
import { useBooking } from "../context/BookingContext";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-black/5 py-3"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-lg sm:text-xl tracking-wide text-ink"
          >
            Ірина Люб&apos;янська
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[13px] uppercase tracking-[0.15em] transition-colors duration-300",
                      isActive ? "text-ink" : "text-taupe hover:text-ink"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => open()}
            className="hidden lg:inline-flex items-center bg-ink text-ivory rounded-none px-7 py-3 text-[12px] uppercase tracking-[0.2em] hover:bg-taupe transition-colors duration-300"
          >
            Записатися
          </button>

          <button
            type="button"
            aria-label="Меню"
            className="lg:hidden text-ink"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-9">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <NavLink
                    to={link.to}
                    className="font-serif text-3xl text-ink hover:text-taupe transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.07, duration: 0.5 }}
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="mt-4 bg-ink text-ivory px-9 py-3.5 text-[12px] uppercase tracking-[0.2em]"
              >
                Записатися
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
