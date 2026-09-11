import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
      <div className="text-sm font-semibold tracking-[0.14em] text-teal">404</div>
      <h1 className="text-2xl font-bold text-ink lg:text-3xl">
        ページが見つかりませんでした。
      </h1>
      <p className="max-w-md text-[15px] leading-relaxed text-body">
        お探しのページは移動または削除された可能性があります。
      </p>
      <Link href="/" className="btn btn-primary mt-2 !inline-flex !w-auto">
        トップページへ戻る
      </Link>
    </main>
  );
}
