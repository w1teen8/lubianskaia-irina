import { NAV_LINKS, CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-heading text-xl text-text">Ірина Люб&apos;янська</p>

        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-text-secondary font-light">
          © {new Date().getFullYear()} {CONTACT.phone}
        </p>
      </div>
    </footer>
  );
}
