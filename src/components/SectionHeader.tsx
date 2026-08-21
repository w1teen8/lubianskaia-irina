import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  linkTo,
  linkLabel,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  linkTo?: string;
  linkLabel?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="flex items-end justify-between gap-6 mb-12 sm:mb-16">
      <div>
        <p
          className={cn(
            "text-[11px] uppercase tracking-[0.25em] mb-3",
            dark ? "text-gold" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "font-serif text-3xl sm:text-5xl",
            dark ? "text-ivory" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>

      {linkTo && (
        <Link
          to={linkTo}
          className={cn(
            "hidden sm:inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.15em] whitespace-nowrap group",
            dark ? "text-ivory/80 hover:text-ivory" : "text-ink/70 hover:text-ink"
          )}
        >
          {linkLabel}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      )}
    </Reveal>
  );
}
