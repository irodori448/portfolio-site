'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { works, WorkCategory, categoryLabels, categoryColors, categoryTextColors } from '@/data/works';

const INITIAL_VISIBLE_COUNT = 8;

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'all') return works;
    return works.filter((w) => w.category === activeCategory);
  }, [activeCategory]);

  const displayedWorks = filteredWorks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredWorks.length;
  const remainingCount = filteredWorks.length - visibleCount;

  const categories: (WorkCategory | 'all')[] = ['all', 'shopify', 'corporate', 'recruit', 'lp'];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + INITIAL_VISIBLE_COUNT);
  };

  const handleCategoryChange = (category: WorkCategory | 'all') => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section id="works" className="bg-cream">
      <span className="wm" aria-hidden="true">
        04
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path
              d="M8 15a3 3 0 0 1 3-3h7l3 4h13a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z"
              fill="#E1EAE7"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M26 17v13l4.5-3.2L35 30V17z" fill="#D88F91" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">04</span>
          <span className="en">WORKS</span>
        </div>
        <h2 className="h2">「何を作ったか」より、「どう関わったか」。</h2>
        <p className="lead">
          実際の企業案件で、課題整理から設計・制作・運用までどう関わってきたかを紹介します。
        </p>

        {/* Category Filter */}
        <div className="category-filter" role="group" aria-label="実績カテゴリで絞り込み">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
              aria-pressed={activeCategory === cat}
              style={{
                backgroundColor: cat === 'all' ? 'var(--color-teal)' : categoryColors[cat as WorkCategory],
                color: cat === 'all' ? 'white' : categoryTextColors[cat as WorkCategory],
                borderColor: cat === 'all' ? 'var(--color-teal)' : categoryColors[cat as WorkCategory],
              }}
            >
              {cat === 'all' ? 'すべて' : categoryLabels[cat as WorkCategory]}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="cases-list" role="list">
          {displayedWorks.map((work, index) => (
            <article
              key={work.id}
              className="case-card"
              style={{ animationDelay: `${index * 80}ms` }}
              role="listitem"
            >
              <div className="case-image-wrapper">
                <Image
                  src={work.imagePath}
                  alt={work.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="case-image"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>

              <div className="case-header">
                <div className="case-meta">
                  <span
                    className="case-category"
                    style={{
                      backgroundColor: categoryColors[work.category],
                      color: categoryTextColors[work.category],
                    }}
                  >
                    {categoryLabels[work.category]}
                  </span>
                  {work.isDuplicateCompany && (
                    <span className="case-duplicate-badge" aria-label="同一企業の別サイト">
                      同一企業
                    </span>
                  )}
                </div>
                <h3 className="case-title">
                  <Link
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-title-link"
                    aria-label={`${work.siteName} の公式サイトを開く（新しいタブ）`}
                  >
                    {work.siteName}
                    <svg
                      className="external-link-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </Link>
                </h3>
                <p className="case-company">{work.company}</p>
              </div>

              <div className="case-body">
                <div className="case-section">
                  <h4>担当範囲</h4>
                  <ul className="case-scope-list">
                    {work.scope.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-section">
                  <h4>関わった期間</h4>
                  <p className="case-period">{work.period}</p>
                </div>
                {work.description && (
                  <div className="case-section case-description">
                    <h4>概要</h4>
                    <p>{work.description}</p>
                  </div>
                )}
              </div>

              <div className="case-footer">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-view-link"
                  aria-label={`${work.siteName} の公式サイトを開く（新しいタブ）`}
                >
                  公式サイトを見る
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={handleLoadMore}
              aria-label={`${remainingCount} 件さらに表示`}
            >
              さらに {remainingCount} 件見る
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

        {/* Category Summary */}
        <div className="category-summary" aria-live="polite">
          <p>
            {activeCategory === 'all'
              ? `全 ${works.length} 件の実績を掲載しています`
              : `"${categoryLabels[activeCategory]}" の実績：${filteredWorks.length} 件`}
          </p>
        </div>
      </div>
    </section>
  );
}