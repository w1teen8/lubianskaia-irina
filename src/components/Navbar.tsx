"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-6"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <a
            href="#hero"
            className="font-heading text-xl sm:text-2xl tracking-wide text-text"
          >
            Ірина Люб&apos;янська
          </a>

          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={cn(
                    "text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 pb-1",
                    active === link.href
                      ? "text-text"
                      : "text-text-secondary hover:text-text"
                  )}
                >
                  {link.label}
                </a>
                {active === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton
              href="#booking"
              className="bg-text text-bg-primary rounded-full px-6 py-2.5 text-[13px] uppercase tracking-[0.15em] font-medium hover:bg-accent"
            >
              Записатися
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Меню"
            className="lg:hidden text-text"
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
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-3xl text-text hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={CONTACT.phoneHref}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.06 }}
                className="mt-4 text-text-secondary tracking-wide"
              >
                {CONTACT.phone}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
