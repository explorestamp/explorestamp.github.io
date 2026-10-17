import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import { ArrowRight, Camera, MapPin, Route, Smartphone } from "lucide-react";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Stamp from "@site/src/components/Stamp";
import {
  CATALOG_STATS,
  STORE_LINKS,
  type CategoryKey,
} from "@site/src/data/product";

import styles from "./index.module.css";

function StoreButtons(): ReactNode {
  const stores = [
    { label: "App Store", href: STORE_LINKS.appStore },
    { label: "Google Play", href: STORE_LINKS.googlePlay },
  ];
  return (
    <div className={styles.storeButtons}>
      {stores.map((s) =>
        s.href ? (
          <a key={s.label} href={s.href} className={styles.storeButton}>
            <Smartphone size={18} strokeWidth={1.75} aria-hidden />
            <span>
              <small>
                <Translate id="homepage.store.download">下載</Translate>
              </small>
              {s.label}
            </span>
          </a>
        ) : (
          <span
            key={s.label}
            className={`${styles.storeButton} ${styles.storeButtonPending}`}
          >
            <Smartphone size={18} strokeWidth={1.75} aria-hidden />
            <span>
              <small>
                <Translate id="homepage.store.comingSoon">即將上架</Translate>
              </small>
              {s.label}
            </span>
          </span>
        ),
      )}
    </div>
  );
}

const BOOK_PREVIEW: { category: CategoryKey; name?: string; date?: string }[] =
  [
    { category: "railway", name: translate({
        id: "homepage.bookPreview.neiwan",
        message: "內灣車站",
      }), date: "2026.08.02" },
    { category: "museum", name: translate({
        id: "homepage.bookPreview.chimei",
        message: "奇美博物館",
      }), date: "2026.08.16" },
    { category: "worship" },
    { category: "food", name: translate({
        id: "homepage.bookPreview.tongji",
        message: "同記豆花",
      }), date: "2026.08.16" },
    { category: "market", name: translate({
        id: "homepage.bookPreview.nishiki",
        message: "錦市場",
      }), date: "2026.09.20" },
    { category: "nightMarket" },
    { category: "landmark", name: translate({
        id: "homepage.bookPreview.victoriaPeak",
        message: "太平山頂",
      }), date: "2026.10.11" },
    { category: "heritage", name: translate({
        id: "homepage.bookPreview.chihkan",
        message: "赤崁樓",
      }), date: "2026.08.17" },
    { category: "zooAquarium" },
  ];

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            <Translate id="homepage.hero.eyebrow">ExploreStamp 探索印記</Translate>
          </p>
          <Heading as="h1" className={styles.heroTitle}>
            <Translate id="homepage.hero.titleLine1">把每一次旅行，</Translate>
            <br />
            <Translate id="homepage.hero.titleLine2">蓋成一枚印章</Translate>
          </Heading>
          <p className={styles.heroLead}>
            <Translate id="homepage.hero.lead">
              探索印記是一本隨身的集章手冊。走進博物館、古蹟、老車站或夜市，在現場完成定位打卡，就能收下一枚專屬於那個地方的印章，連同當天的照片一起記在月曆上。
            </Translate>
          </p>
          <StoreButtons />
          <Link to="/explore" className={styles.textLink}>
            <Translate id="homepage.hero.exploreLink">
              看看有哪些主題路線
            </Translate>
            <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </Link>
          <ul className={styles.heroFacts}>
            <li>
              <Translate id="homepage.hero.fact.noLogin">
                不用登入，下載即可使用
              </Translate>
            </li>
            <li>
              <Translate id="homepage.hero.fact.localData">
                打卡紀錄與照片只存在你的手機
              </Translate>
            </li>
            <li>
              <Translate id="homepage.hero.fact.languages">
                繁體中文 / English
              </Translate>
            </li>
          </ul>
        </div>

        <div className={styles.heroVisual} aria-hidden>
          <div className={styles.bookCard}>
            <div className={styles.bookHeader}>
              <span>
                <Translate id="homepage.bookPreview.title">我的印記</Translate>
              </span>
              <span className={styles.bookCount}>
                6 / {CATALOG_STATS.spots}
              </span>
            </div>
            <div className={styles.bookGrid}>
              {BOOK_PREVIEW.map((s, i) => (
                <div key={i} className={styles.bookCell}>
                  <Stamp
                    category={s.category}
                    name={s.name}
                    date={s.date}
                    locked={!s.name}
                    size={88}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks(): ReactNode {
  const steps = [
    {
      icon: Route,
      title: translate({
        id: "homepage.steps.pick.title",
        message: "選一條路線",
      }),
      desc: translate(
        {
          id: "homepage.steps.pick.desc",
          message:
            "從 {collections} 個主題任務集挑一條，例如老車站、府城散策或夜市小吃；也可以直接搜尋景點名稱。",
        },
        { collections: CATALOG_STATS.collections },
      ),
    },
    {
      icon: MapPin,
      title: translate({
        id: "homepage.steps.stamp.title",
        message: "到現場蓋章",
      }),
      desc: translate({
        id: "homepage.steps.stamp.desc",
        message:
          "抵達景點後按下「蓋章打卡」。App 以 GPS 確認你在景點範圍內，通過後印章就會收進印章冊。",
      }),
    },
    {
      icon: Camera,
      title: translate({
        id: "homepage.steps.record.title",
        message: "留下這一天",
      }),
      desc: translate({
        id: "homepage.steps.record.desc",
        message:
          "附上最多 6 張照片和一句話，造訪會記在月曆上；想分享時，照片和印章可以合成一張明信片。",
      }),
    },
  ];
  return (
    <section className={styles.steps}>
      <div className="container">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>
            <Translate id="homepage.steps.eyebrow">使用方式</Translate>
          </p>
          <Heading as="h2">
            <Translate id="homepage.steps.title">
              三個步驟，收下第一枚印章
            </Translate>
          </Heading>
        </div>
        <ol className={styles.stepList}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className={styles.step}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function DownloadCTA(): ReactNode {
  return (
    <section className={styles.download}>
      <div className={`container ${styles.downloadInner}`}>
        <div>
          <Heading as="h2" id="download">
            <Translate id="homepage.download.title">從離你最近的一站開始</Translate>
          </Heading>
          <p>
            <Translate id="homepage.download.body">
              探索印記支援 iOS 與 Android，免費下載、不用登入。挑一個週末，去附近的車站或圖書館蓋第一枚章。
            </Translate>
          </p>
        </div>
        <StoreButtons />
      </div>
    </section>
  );
}

function Newsletter(): ReactNode {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>
            <Translate id="homepage.newsletter.eyebrow">電子報</Translate>
          </p>
          <Heading as="h2">
            <Translate id="homepage.newsletter.title">
              下一枚印章去哪裡蓋，我們寫信告訴你
            </Translate>
          </Heading>
          <p className={styles.sectionLead}>
            <Translate id="homepage.newsletter.lead">
              也分享博物館、古蹟與老車站的散步提案，陪你把週末出門變成一段值得收藏的路線。
            </Translate>
          </p>
        </div>
        <iframe
          title={translate({
            id: "homepage.newsletter.iframeTitle",
            message: "ExploreStamp 電子報訂閱",
          })}
          src="https://explorestamp.substack.com/embed"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
          className={styles.newsletterFrame}
        />
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: "homepage.meta.title",
        message: "把每一次旅行，蓋成一枚印章",
      })}
      description={translate({
        id: "homepage.meta.description",
        message:
          "探索印記（ExploreStamp）是一本隨身的虛擬集章手冊。到博物館、古蹟、老車站、市集、夜市與觀景台現場打卡，收集印章、記錄照片，並把旅程做成明信片分享。",
      })}
    >
      <HomepageHeader />
      <main>
        <HowItWorks />
        <HomepageFeatures />
        <DownloadCTA />
        <Newsletter />
      </main>
    </Layout>
  );
}
