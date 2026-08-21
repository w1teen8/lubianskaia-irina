import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { PRICE_CATEGORIES } from "../lib/data";

export default function PriceList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-ivory border-t border-ink/8">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            Ціни
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink mb-5">Ціни</h2>
          <p className="text-taupe font-light">
            Оберіть категорію, щоб переглянути повний перелік послуг та вартість.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-ink/10">
            {PRICE_CATEGORIES.map((category, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={category.title} className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between py-6 sm:py-7 text-left"
                  >
                    <span className="font-serif text-xl sm:text-2xl text-ink">
                      {category.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="pb-7 space-y-4">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <span className="text-taupe font-light text-sm sm:text-base">
                            {item.name}
                          </span>
                          <span className="flex-1 border-b border-dotted border-ink/20 translate-y-[-4px]" />
                          <span className="font-serif text-base sm:text-lg text-ink whitespace-nowrap">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
