type LogomarkProps = {
  size?: number;
  className?: string;
};

/**
 * The irodori mark: three overlapping brand-color dots (teal / rose /
 * mustard) — a small nod to "彩り" (coloring). Used next to the wordmark in
 * the header and footer, and as the basis for the generated favicon
 * (see src/app/icon.tsx, which redraws it with plain divs since the
 * favicon route can't reuse this SVG directly).
 */
export function Logomark({ size = 22, className }: LogomarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12.5" cy="12.5" r="9" fill="#3E7471" opacity="0.9" />
      <circle cx="20.5" cy="12.5" r="9" fill="#D88F91" opacity="0.9" />
      <circle cx="16.5" cy="20" r="9" fill="#ECB94E" opacity="0.9" />
    </svg>
  );
}
