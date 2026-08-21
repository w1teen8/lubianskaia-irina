import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-ivory min-h-[70vh] flex items-center justify-center pt-24">
      <div className="text-center px-6">
        <p className="font-serif text-7xl text-ink mb-6">404</p>
        <p className="text-taupe font-light mb-10">
          Сторінку не знайдено.
        </p>
        <Link
          to="/"
          className="inline-flex items-center border border-ink/20 rounded-full px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink hover:border-gold hover:text-gold transition-colors duration-300"
        >
          На головну
        </Link>
      </div>
    </section>
  );
}
