import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot} />
          iOS &amp; Android 免費下載
        </div>
        <h1 className={styles.heroTitle}>ExploreStamp 探索印記</h1>
        <p className={styles.heroSubtitle}>
          <span className={styles.heroTitleAccent}>
            把每一次冒險化為珍藏的旅行印記
          </span>
          <br />
          城市尋寶，探索世界，收藏你的冒險足跡。
          <br />
          透過打卡挑戰，探索博物館、古蹟、鐵道車站，
          <br />
          打造屬於你的虛擬旅行郵冊。
        </p>
        <div className={styles.heroButtons}>
          <a href="#" className={styles.btnPrimary}>
            <span className={styles.btnIcon}>📱</span>
            立即下載 App
          </a>
          <Link to="/explore" className={styles.btnSecondary}>
            探索景點 →
          </Link>
        </div>
        <div className={styles.heroStampRow}>
          {["🏛️", "🚂", "🏯", "📚", "🎨", "🍜"].map((emoji, i) => (
            <div key={i} className={styles.miniStamp}>
              <span>{emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function StatsBar(): ReactNode {
  const stats = [
    { value: "8", label: "探索任務類別" },
    { value: "100+", label: "精選景點收錄" },
    { value: "郵冊", label: "虛擬郵票收藏" },
    { value: "明信片", label: "照片轉化印記" },
    { value: "iOS & Android", label: "免費下載" },
  ];
  return (
    <div className="ct-stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="ct-stat-item">
          <span className="ct-stat-value">{s.value}</span>
          <span className="ct-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function HowItWorks(): ReactNode {
  const steps = [
    {
      num: "01",
      icon: "📍",
      title: "探索景點",
      desc: "發現身邊的博物館、古蹟、圖書館、美食地圖等精選景點，用地圖找到你的下一站冒險",
    },
    {
      num: "02",
      icon: "📷",
      title: "打卡蓋章",
      desc: "到達景點，拍下照片，把眼前的風景轉化為專屬虛擬郵票與明信片，留下獨一無二的旅行印記",
    },
    {
      num: "03",
      icon: "📮",
      title: "收藏印記",
      desc: "集結每次打卡，打造屬於你的虛擬旅行郵冊，加上文字紀錄，讓冒險足跡永遠不褪色",
    },
  ];
  return (
    <section className="ct-how-it-works">
      <div className="container">
        <div className="ct-section-header">
          <span className="ct-section-badge">使用流程</span>
          <h2>三步驟，開始你的冒險</h2>
        </div>
        <div className="ct-steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="ct-step-card">
              <div className="ct-step-num">STEP {step.num}</div>
              <span className="ct-step-icon">{step.icon}</span>
              <h3 className="ct-step-title">{step.title}</h3>
              <p className="ct-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestCategories(): ReactNode {
  const categories = [
    { icon: "🏛️", label: "博物館" },
    { icon: "🚂", label: "鐵道車站" },
    { icon: "🏯", label: "古蹟" },
    { icon: "📚", label: "圖書館" },
    { icon: "🎨", label: "美術館" },
    { icon: "🏭", label: "觀光工廠" },
    { icon: "🍜", label: "美食地圖" },
    { icon: "🗼", label: "著名景點" },
  ];
  return (
    <section className="ct-categories">
      <div className="container">
        <div className="ct-section-header">
          <span className="ct-section-badge">任務類別</span>
          <h2>探索八大主題，豐富你的冒險</h2>
          <p>
            精心策劃的任務清單，涵蓋城市藝文、歷史文化、特色美食，
            讓你的旅行更有方向與意義
          </p>
        </div>
        <div className="ct-categories-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="ct-category-card">
              <span className="ct-category-icon">{cat.icon}</span>
              <span className="ct-category-label">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppDownloadCTA(): ReactNode {
  return (
    <section className="ct-download-cta">
      <div className="container">
        <div className="ct-download-cta-badge">立即開始</div>
        <h2>開始你的城市尋寶之旅</h2>
        <p>
          免費下載 ExploreStamp，把每一次出發， 變成一場可以被記錄與收藏的冒險。
        </p>
        <div className="ct-download-buttons">
          <a href="#" className="ct-dl-btn ct-dl-btn-primary">
            📱 App Store 下載
          </a>
          <a href="#" className="ct-dl-btn ct-dl-btn-secondary">
            🤖 Google Play 下載
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="透過打卡挑戰，探索城市藝文與經典景點，把每一次冒險化為珍藏的旅行印記。博物館、古蹟、圖書館、鐵道車站，甚至特色美食地圖——打造屬於你的虛擬旅行郵冊。"
    >
      <HomepageHeader />
      <StatsBar />
      <HowItWorks />
      <main>
        <HomepageFeatures />
      </main>
      <QuestCategories />
      <AppDownloadCTA />
      <div className="ct-newsletter-wrap">
        <iframe
          src="https://explorestamp.substack.com/embed"
          width="100%"
          height="320"
          style={{ maxWidth: "680px", margin: "0 auto", display: "block" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Layout>
  );
}
