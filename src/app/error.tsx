"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with real error reporting (e.g. Sentry) before launch.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
      <div className="text-sm font-semibold tracking-[0.14em] text-teal">ERROR</div>
      <h1 className="text-2xl font-bold text-ink lg:text-3xl">
        予期しないエラーが発生しました。
      </h1>
      <p className="max-w-md text-[15px] leading-relaxed text-body">
        時間をおいて再度お試しください。問題が続く場合はお問い合わせください。
      </p>
      <button type="button" onClick={() => reset()} className="btn btn-primary mt-2 !inline-flex !w-auto">
        もう一度試す
      </button>
    </main>
  );
}
