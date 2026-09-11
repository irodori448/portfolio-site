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
| `RESEND_API_KEY` | お問い合わせフォームのメール送信（[Resend](https://resend.com)） | **サーバー専用** |
| `CONTACT_TO_EMAIL` | お問い合わせの送信先メールアドレス | サーバー専用 |
| `CONTACT_FROM_EMAIL` | 送信メールの From（省略時は Resend 共有ドメイン） | サーバー専用・任意 |

microCMS が未設定の間、`src/lib/microcms.ts` の `microcms` クライアントは `null` になり、
サイトはすべて静的な文言（`docs/portfolio-spec.md` 準拠）で表示されます。

`RESEND_API_KEY` / `CONTACT_TO_EMAIL` が未設定の間、お問い合わせフォームは表示・入力チェックまでは動作しますが、
送信時に「現在フォームの送信を受け付けられません」というエラーを返します（`src/app/actions/contact.ts`）。

### お問い合わせフォームを有効にする

1. https://resend.com で無料アカウントを作成し、[API Keys](https://resend.com/api-keys) で新しいキーを発行
2. `.env.local`（ローカル）と Vercel の Environment Variables（本番）の両方に設定
   - `RESEND_API_KEY` … 発行したキー
   - `CONTACT_TO_EMAIL` … 問い合わせを受け取りたいメールアドレス
3. ここまでで送信可能（送信元は Resend 共有ドメインの `onboarding@resend.dev` になります）
4. 独自ドメイン（`irodoriweb.com`）から送りたい場合は、Resend の [Domains](https://resend.com/domains) で
   `irodoriweb.com` を追加し、案内される TXT/CNAME レコードを Cloudflare の DNS に追加して認証（DNS only のまま追加して問題ありません）。
   認証後、`CONTACT_FROM_EMAIL` を `irodori <hello@irodoriweb.com>` のように設定

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
src/app/actions/contact.ts  お問い合わせフォームの送信処理（Server Action, Resend）
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
- Resend アカウント作成・APIキー発行、Vercel への環境変数設定（お問い合わせフォームを本番で使えるようにする）
- 独自ドメインからの送信用に Resend でドメイン認証（任意）
# portfolio-site
# portfolio-site
