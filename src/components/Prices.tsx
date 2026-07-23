"use client";

import Reveal from "./Reveal";
import FloatingBotanicals from "./decor/FloatingBotanicals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { PRICE_CATEGORIES } from "@/lib/data";

export default function Prices() {
  return (
    <section
      id="prices"
      className="relative py-28 sm:py-36 bg-bg-secondary overflow-hidden"
    >
      <FloatingBotanicals variant="prices" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        <Reveal className="text-center mb-16 sm:mb-20">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-6">
            Ціни
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text mb-5">
            Прозорі ціни без сюрпризів
          </h2>
          <p className="text-text-secondary font-light max-w-xl mx-auto">
            Оберіть категорію, щоб переглянути повний перелік послуг та
            вартість.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-card rounded-3xl border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)] px-6 sm:px-10">
            <Accordion type="single" collapsible defaultValue={PRICE_CATEGORIES[0].title}>
              {PRICE_CATEGORIES.map((category) => (
                <AccordionItem key={category.title} value={category.title}>
                  <AccordionTrigger>{category.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <span className="text-text-secondary font-light text-sm sm:text-base">
                            {item.name}
                          </span>
                          <span className="flex-1 border-b border-dashed border-border translate-y-[-4px]" />
                          <span className="font-heading text-base sm:text-lg text-text whitespace-nowrap">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
