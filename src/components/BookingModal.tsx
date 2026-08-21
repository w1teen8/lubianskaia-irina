import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { SERVICES } from "../lib/data";

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  comment: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  date: "",
  comment: "",
};

export default function BookingModal() {
  const { isOpen, close, presetService } = useBooking();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, service: presetService ?? f.service }));
    } else {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm(initialState);
        setErrors({});
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, presetService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Введіть ваше ім'я";
    if (!/^[\d+()\s-]{7,}$/.test(form.phone.trim())) {
      next.phone = "Введіть коректний номер телефону";
    }
    if (!form.service) next.service = "Оберіть послугу";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-transparent border-b border-ink/15 focus:border-ink outline-none py-3 text-ink placeholder:text-taupe/70 transition-colors duration-300 font-light text-sm";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-paper rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 sm:p-12"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Закрити"
              className="absolute top-6 right-6 text-taupe hover:text-ink transition-colors"
            >
              <X size={22} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <div className="w-14 h-14 rounded-full bg-beige/40 flex items-center justify-center mx-auto mb-6">
                  <Check className="text-gold" size={26} />
                </div>
                <h3 className="font-serif text-3xl text-ink mb-3">Дякуємо!</h3>
                <p className="text-taupe font-light">
                  Ваша заявка успішно надіслана. Ми зв&apos;яжемося з вами найближчим
                  часом.
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
                  Запис
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-ink mb-8">
                  Забронювати візит
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      type="text"
                      placeholder="Ім'я"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-700 mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      type="tel"
                      placeholder="Номер телефону"
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-700 mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Послуга</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-red-700 mt-1.5">{errors.service}</p>
                    )}
                  </div>

                  <input
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    type="date"
                    className={inputClass}
                  />

                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    rows={3}
                    placeholder="Коментар (необов'язково)"
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    className="w-full bg-gold text-ivory rounded-full py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-ink transition-colors duration-300 mt-2"
                  >
                    Надіслати заявку
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
