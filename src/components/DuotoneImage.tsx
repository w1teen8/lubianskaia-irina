import Image from "next/image";
import { cn } from "@/lib/utils";

interface DuotoneImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  fit?: "cover" | "contain";
}

export default function DuotoneImage({
  src,
  alt,
  sizes,
  className,
  imgClassName,
  priority,
  loading,
  fit = "cover",
}: DuotoneImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={loading}
        sizes={sizes}
        className={cn(
          fit === "cover" ? "object-cover" : "object-contain",
          imgClassName
        )}
      />
    </div>
  );
}
