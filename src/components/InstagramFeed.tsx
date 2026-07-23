"use client";

import { PiInstagramLogo } from "react-icons/pi";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import FloatingBotanicals from "./decor/FloatingBotanicals";
import { CONTACT } from "@/lib/data";

export default function InstagramFeed() {
  return (
    <section className="relative py-28 sm:py-36 bg-bg-primary overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent-secondary via-bg-secondary to-accent-secondary/50 px-8 py-16 sm:py-20 text-center shadow-xl">
            <FloatingBotanicals variant="prices" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-card/80 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <PiInstagramLogo className="text-accent" size={28} />
              </div>
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-accent font-medium mb-4">
                Instagram
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl leading-[1.15] text-text mb-5">
                @{CONTACT.instagramHandle}
              </h2>
              <p className="text-text-secondary font-light mb-9 max-w-md mx-auto">
                Більше фото робіт, відгуків та прайсів — у профілі в Instagram.
              </p>
              <MagneticButton
                href={CONTACT.instagramUrl}
                className="bg-text text-bg-primary rounded-full px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-medium hover:bg-accent gap-2"
              >
                <PiInstagramLogo size={16} />
                Підписатися
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
