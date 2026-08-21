import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type BookingContextValue = {
  isOpen: boolean;
  presetService?: string;
  open: (presetService?: string) => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);

  const value = useMemo<BookingContextValue>(
    () => ({
      isOpen,
      presetService,
      open: (service) => {
        setPresetService(service);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }),
    [isOpen, presetService]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
