# irodori — Webサイト

irodori のサービスサイト（トップページ）。Next.js（App Router）+ TypeScript + Tailwind CSS。
CMS には将来的に microCMS を使う想定（ヘッドレス構成）。

サイトの目的・ターゲット・コピーなどの方針は [`docs/portfolio-spec.md`](./docs/portfolio-spec.md)、
Claude Code での制作ルールは [`CLAUDE.md`](./CLAUDE.md) を参照。デザインの元になった
Claude Design キャンバスのソースは [`design/`](./design) に置いています（本番コードではありません）。

## セットアップ

```bash
npm install
cp .env.example .env.local   # 値は空のままでも起動できます
npm run dev
```

http://localhost:3000 を開く。

## 環境変数

`.env.example` を参照。`.env.local` は Git 管理外（`.gitignore` 参照）。

| 変数 | 用途 | 公開範囲 |
|---|---|---|
| `NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN` | microCMS のサービスドメイン | クライアントに公開されます |
| `MICROCMS_API_KEY` | microCMS の API キー | **サーバー専用**。`"use client"` から import しないこと |
| `NEXT_PUBLIC_SITE_URL` | 本番URL（metadata / sitemap / robots / OGP に使用） | クライアントに公開されます |

microCMS が未設定の間、`src/lib/microcms.ts` の `microcms` クライアントは `null` になり、
サイトはすべて静的な文言（`docs/portfolio-spec.md` 準拠）で表示されます。

## スクリプト

```bash
npm run dev     # 開発サーバー
npm run build   # 本番ビルド
npm run start   # ビルド後の本番起動（要 build）
npm run lint    # ESLint
```

## 構成

```
src/app/            App Router（page, layout, metadata, sitemap, robots, icon, OGP画像）
src/components/      セクションごとのコンポーネント（Hero, ValueSection, ... , Footer）
src/lib/microcms.ts  microCMS クライアント（未設定時は null）
design/              Claude Design キャンバスのソース（.dc.html）。デザインの正本ではなく参照用アーカイブ
docs/portfolio-spec.md  サイト仕様（目的・ターゲット・コピー・デザイン方針）
```

## 現在のデータ

すべて静的なハードコード文言。`docs/portfolio-spec.md` に基づく確定コピーと、
`[角括弧]` で囲んだ仮テキスト（実績・プロフィール・連絡先など、実データ未確定の箇所）が混在しています。
本番公開前に `[ ]` を検索し、すべて置き換えてください。

```bash
grep -rn '\[.*\]' src/components
```

## 今後の作業（未着手）

- microCMS のスキーマ設計（実績 = WORKS を想定）と、`WorksSection` のデータ取得への差し替え
- 実績・プロフィール・連絡先・OGP画像・特商法表記など `[ ]` 箇所の実データ反映
- お問い合わせフォームの実装先（フォームサービス連携 or API Route）
- デプロイ先の決定と環境変数の本番設定
# portfolio-site
# portfolio-site
