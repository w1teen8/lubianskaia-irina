import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { unsplash } from "../lib/images";
import type { Service } from "../lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div whileHover="hover" className="group">
      <Link to={`/services/${service.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden mb-5 rounded-xl">
          <motion.img
            variants={{ hover: { scale: 1.06 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={unsplash(service.image, 600, 750)}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <motion.div
            variants={{ hover: { opacity: 1 } }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-ink/10"
          />
        </div>
        <h3 className="font-serif text-lg sm:text-xl text-ink mb-2">
          {service.title}
        </h3>
        <p className="text-taupe text-sm font-light leading-relaxed mb-3 max-w-xs">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.15em] text-gold">
          Детальніше
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}
