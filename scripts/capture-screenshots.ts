import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// ============================================
// 設定
// ============================================

// 実績データ（works.ts と同期）
// PlaywrightのwaitUntil型
type WaitUntil = 'load' | 'domcontentloaded' | 'networkidle' | 'commit';

const works: Array<{ id: string; url: string; waitFor: WaitUntil }> = [
  // Shopify / EC
  { id: 'nakashimaya', url: 'https://ec.nakashimaya1823.jp/', waitFor: 'networkidle' },
  { id: 'tofumeat', url: 'https://tofu-meat.com/', waitFor: 'networkidle' },
  { id: 'noichi', url: 'https://noichi.shop/', waitFor: 'networkidle' },
  { id: 'heiwairyo-ec', url: 'https://heiwairyo.net/', waitFor: 'networkidle' },
  { id: 'mikawa', url: 'https://satonoaji-mikawa.com/', waitFor: 'networkidle' },

  // Corporate
  { id: 'showa-kk', url: 'https://showa-kk.com/', waitFor: 'networkidle' },
  { id: 'appsmart', url: 'https://appsmart.co.jp/', waitFor: 'networkidle' },
  { id: 'yamaguchi-hino', url: 'https://www.yamaguchi-hino.co.jp/', waitFor: 'networkidle' },
  { id: 'densyo', url: 'https://www.densyo.co.jp/', waitFor: 'networkidle' },
  { id: 'yama-sys', url: 'https://yama-sys.co.jp/', waitFor: 'networkidle' },
  { id: 'hamato', url: 'https://hamato-shoten.com/', waitFor: 'networkidle' },
  { id: 'ryuuto-corp', url: 'https://ryuuto.co.jp/', waitFor: 'networkidle' },
  { id: 'fujitechno', url: 'https://fujitechno-kk.com/', waitFor: 'networkidle' },
  { id: 'heiwairyo-corp', url: 'https://heiwairyo.co.jp/', waitFor: 'networkidle' },
  { id: 'nichiei', url: 'https://www.iwakuni-nichiei.com/', waitFor: 'networkidle' },
  { id: 'itoishoukai', url: 'https://itoishoukai.com/', waitFor: 'networkidle' },

  // Recruit / Education
  { id: 'kenbun-recruit', url: 'https://mcoop-kenbun.jp/recruit/', waitFor: 'networkidle' },
  { id: 'takidoji', url: 'https://takidoji.net/', waitFor: 'networkidle' },
  { id: 'kunren-east', url: 'https://kunren-east.pref.yamaguchi.lg.jp/', waitFor: 'networkidle' },
  { id: 'kunren-west', url: 'https://kunren-west.pref.yamaguchi.lg.jp/', waitFor: 'networkidle' },

  // LP / Service
  { id: 'leap', url: 'https://leap-fitness24.com/', waitFor: 'networkidle' },
  { id: 'atc-fitness', url: 'https://atcfitness.jp/', waitFor: 'networkidle' },
  { id: 'yamamoto-futon', url: 'https://yamamotofutonten.com/', waitFor: 'networkidle' },
  { id: 'enjoy65', url: 'https://enjoy65.com/', waitFor: 'networkidle' },
];

const OUTPUT_DIR = path.join(__dirname, '../public/images/works');
const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 720;
const DEVICE_SCALE_FACTOR = 2; // 高解像度（Retina相当）
const TIMEOUT = 60000; // 60秒
const SCROLL_WAIT = 2000; // スクロール後の待機時間
const CONCURRENCY = 3; // 同時実行数（サーバー負荷軽減）
const IMAGE_QUALITY = 80; // WebP品質（0-100）

// ============================================
// ユーティリティ
// ============================================

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollToBottom(page: Page) {
  // 段階的にスクロールして遅延読み込みコンテンツをトリガー
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  const steps = Math.ceil(totalHeight / viewportHeight);

  for (let i = 0; i <= steps; i++) {
    const scrollY = Math.min(i * viewportHeight, totalHeight);
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await sleep(300); // 各ステップで少し待機
  }

  // 一番上に戻す
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);
}

async function hideCookieBanners(page: Page) {
  // よくあるCookieバナー・ポップアップを非表示にする試み
  await page.evaluate(() => {
    const selectors = [
      '[class*="cookie"]',
      '[id*="cookie"]',
      '[class*="consent"]',
      '[id*="consent"]',
      '[class*="gdpr"]',
      '[class*="popup"]',
      '[class*="modal"]',
      '[class*="banner"]',
      '.cc-banner',
      '#cc-banner',
      '.cookie-consent',
      '.gdpr-banner',
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
        }
      });
    });
  });
}

async function waitForImages(page: Page) {
  // 画像の読み込み完了を待つ
  await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return Promise.all(
      images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
      })
    );
  });
}

// ============================================
// メイン処理
// ============================================

async function captureScreenshot(browser: Browser, work: typeof works[0]) {
  const { id, url, waitFor } = work;
  const outputPath = path.join(OUTPUT_DIR, `${id}.jpg`);

  console.log(`\n📸 [${id}] 開始: ${url}`);

  const context = await browser.newContext({
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
    deviceScaleFactor: DEVICE_SCALE_FACTOR,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    javaScriptEnabled: true,
    bypassCSP: true,
    ignoreHTTPSErrors: true,
  });

  const page = await context.newPage();

  // リクエストブロック（広告・トラッキング・フォント等で速度向上）
  await page.route('**/*', route => {
    const resourceType = route.request().resourceType();
    const url = route.request().url();

    // ブロック対象
    if (
      resourceType === 'font' ||
      resourceType === 'media' ||
      url.includes('google-analytics') ||
      url.includes('googletagmanager') ||
      url.includes('facebook.net') ||
      url.includes('doubleclick') ||
      url.includes('adsystem') ||
      url.includes('.woff') ||
      url.includes('.woff2')
    ) {
      return route.abort();
    }

    route.continue();
  });

  try {
    // ページ読み込み
    await page.goto(url, {
      waitUntil: waitFor,
      timeout: TIMEOUT,
    });

    console.log(`  ✓ ページ読み込み完了`);

    // 少し待機（アニメーション・遅延読み込み）
    await sleep(2000);

    // 画像読み込み待機
    await waitForImages(page);
    console.log(`  ✓ 画像読み込み完了`);

    // Cookieバナー等を非表示
    await hideCookieBanners(page);

    // フルページスクロールで遅延読み込みトリガー
    await scrollToBottom(page);
    console.log(`  ✓ スクロール完了`);

    // 追加待機
    await sleep(SCROLL_WAIT);

    // 出力パスを .webp に変更
    const outputPathWebp = outputPath.replace(/\.jpg$/, '.webp');

    // スクリーンショット撮影（WebP形式）
    await page.screenshot({
      path: outputPathWebp,
      fullPage: true,
      type: 'webp',
      quality: IMAGE_QUALITY,
    });

    // ファイルサイズ確認
    const stats = fs.statSync(outputPathWebp);
    const sizeKB = Math.round(stats.size / 1024);

    console.log(`  ✅ 完了: ${outputPathWebp} (${sizeKB} KB)`);
    return { id, success: true, sizeKB };

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error(`  ❌ 失敗: ${errorMsg}`);

    // 失敗時もプレースホルダーを残す（既存ファイルをキープ）
    return { id, success: false, error: errorMsg };

  } finally {
    await context.close();
  }
}

async function main() {
  console.log('==========================================');
  console.log('📷 フルページスクリーンショット自動取得');
  console.log('==========================================');
  console.log(`対象: ${works.length} サイト`);
  console.log(`出力先: ${OUTPUT_DIR}`);
  console.log(`ビューポート: ${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT} @ ${DEVICE_SCALE_FACTOR}x`);
  console.log(`同時実行: ${CONCURRENCY}`);
  console.log('------------------------------------------');

  ensureDir(OUTPUT_DIR);

  // Playwright起動
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
    ],
  });

  const results: Array<{ id: string; success: boolean; sizeKB?: number; error?: string }> = [];

  // 並列実行（キュー方式）
  const queue = [...works];
  const running: Promise<void>[] = [];

  const processNext = async () => {
    if (queue.length === 0) return;

    const work = queue.shift()!;
    const promise = captureScreenshot(browser, work).then(result => {
      results.push(result);
      // 完了したら次のタスクを開始
      return processNext();
    });

    running.push(promise);

    // 完了したタスクを配列から削除
    promise.finally(() => {
      const idx = running.indexOf(promise);
      if (idx > -1) running.splice(idx, 1);
    });

    // 同時実行数制限
    if (running.length >= CONCURRENCY) {
      await Promise.race(running);
      return processNext();
    }

    return processNext();
  };

  // 初期タスク開始
  const initialTasks = Math.min(CONCURRENCY, works.length);
  await Promise.all(Array(initialTasks).fill(null).map(() => processNext()));

  // 全完了待機
  await Promise.all(running);

  await browser.close();

  // ============================================
  // 結果サマリー
  // ============================================
  console.log('\n==========================================');
  console.log('📊 実行結果サマリー');
  console.log('==========================================');

  const success = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  const totalSize = results.filter(r => r.success).reduce((sum, r) => sum + (r.sizeKB || 0), 0);

  console.log(`✅ 成功: ${success} / ${works.length}`);
  console.log(`❌ 失敗: ${failed} / ${works.length}`);
  console.log(`📦 合計サイズ: ${totalSize} KB`);

  if (failed > 0) {
    console.log('\n--- 失敗したサイト ---');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  ${r.id}: ${r.error}`);
    });
    console.log('\n💡 失敗分は手動で撮影してください（GoFullPage等）');
  }

  console.log('\n🎉 完了！ `npm run dev` で確認してください。');
}

// 実行
main().catch(err => {
  console.error('致命的エラー:', err);
  process.exit(1);
});