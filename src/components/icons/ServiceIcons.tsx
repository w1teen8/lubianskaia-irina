type IconProps = { className?: string };

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function EpilationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} stroke="currentColor">
      <path d="M28 10c-3 6-4 12-4 20 0 8 1 16 3 22h6c1-6 2-14 2-22 0-8-1-14-3-20" />
      <path d="M20 24c4-3 9-4 14-2" strokeDasharray="1 5" />
      <path d="M16 20c6-4 10 2 18-2 3-1.5 5-3.5 6-6" />
      <circle cx="41" cy="11" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DepilationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} stroke="currentColor">
      <rect x="16" y="26" width="30" height="12" rx="3" transform="rotate(-18 16 26)" />
      <path d="M20 30l1.5 5M26 28l1.5 5M32 26l1.5 5M38 24l1.5 5" />
      <path d="M12 42c3-2 6-3 9-3" />
    </svg>
  );
}

export function SugaringIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} stroke="currentColor">
      <path d="M20 24h24l-2 26a4 4 0 01-4 4H26a4 4 0 01-4-4l-2-26z" />
      <path d="M18 24h28" />
      <path d="M24 24l1-6a3 3 0 013-3h8a3 3 0 013 3l1 6" />
      <path d="M26 32c2 2 2 4 0 6s-2 4 0 6s2 4 0 6" />
      <path d="M34 32c2 2 2 4 0 6s-2 4 0 6s2 4 0 6" />
    </svg>
  );
}

export function LashLaminationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} stroke="currentColor">
      <path d="M10 34c7-9 15-13 22-13s15 4 22 13c-7 9-15 13-22 13s-15-4-22-13z" />
      <circle cx="32" cy="34" r="6" />
      <circle cx="32" cy="34" r="1.6" fill="currentColor" stroke="none" />
      <path d="M14 24c1.5-3 3-5 4.5-6.5M22 19c1-3 2-5 3-7M32 17c0-3 0-5.5-.3-7.5M42 19c-1-3-2-5-3-7M50 24c-1.5-3-3-5-4.5-6.5" />
    </svg>
  );
}

export function BrowShapeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} stroke="currentColor">
      <path d="M10 30c5-9 14-14 22-14s13 3 16 7" />
      <path d="M44 18l6-3-1 6.5" />
      <path d="M40 40l6 6M46 40l-6 6" />
      <path d="M16 42c4-2 9-3 13-3" strokeDasharray="1 5" />
    </svg>
  );
}

export function BrowTintIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} stroke="currentColor">
      <path d="M10 30c5-9 14-14 22-14s13 3 16 7" />
      <path d="M42 40l9-9a3 3 0 014 4l-9 9-6 2 2-6z" />
      <circle cx="14" cy="44" r="3" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}
