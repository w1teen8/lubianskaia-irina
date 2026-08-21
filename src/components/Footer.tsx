import { Link } from "react-router-dom";
import { Send, Music2 } from "lucide-react";
import { PiInstagramLogo } from "react-icons/pi";
import { NAV_LINKS, CONTACT } from "../lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 sm:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
        <div>
          <span className="block font-serif text-xl text-ivory">
            Ірина Люб&apos;янська
          </span>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-taupe mt-1">
            Студія краси
          </span>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-taupe mb-5">
            Контакти
          </p>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-gold transition-colors">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                @{CONTACT.instagramHandle}
              </a>
            </li>
            <li className="text-ivory/60">{CONTACT.locations.join(" · ")}</li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-taupe mb-5">
            Навігація
          </p>
          <ul className="space-y-3 text-sm font-light">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-taupe mb-5">
            Слідкуйте за мною
          </p>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <PiInstagramLogo size={16} />
            </a>
            <span
              aria-label="Telegram"
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/40"
            >
              <Send size={16} />
            </span>
            <span
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/40"
            >
              <Music2 size={16} />
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50 font-light">
          <p>© {new Date().getFullYear()} Ірина Люб&apos;янська. Всі права захищені.</p>
          <p>Політика конфіденційності</p>
        </div>
      </div>
    </footer>
  );
}
