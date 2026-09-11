import { Logomark } from "@/components/Logomark";

export function Header() {
  return (
    <header className="mx-auto flex h-[60px] max-w-[1180px] items-center justify-between px-5 lg:h-[82px] lg:px-12">
      <div className="flex items-center gap-2 text-lg font-bold tracking-[0.04em] text-teal lg:text-xl">
        <Logomark size={22} />
        irodori
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 rounded-full border border-teal px-3.5 py-2 text-[13px] font-medium text-teal lg:gap-2 lg:px-[18px] lg:text-sm"
      >
        お問い合わせ
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    </header>
  );
}
