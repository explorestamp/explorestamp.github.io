import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import {
  ArchiveRestore,
  Bell,
  CalendarDays,
  CircleCheck,
  HardDrive,
  Languages,
  Map as MapIcon,
  MapPin,
  UserX,
  WifiOff,
} from "lucide-react";
import Stamp from "@site/src/components/Stamp";
import {
  CATALOG_STATS,
  CATEGORIES,
  COLLECTIONS,
} from "@site/src/data/product";
import styles from "./styles.module.css";

/* ── Mock UI ── */

function CollectionsMock(): ReactNode {
  const progress = [4, 2, 1, 0];
  return (
    <div className={styles.mockCard}>
      {COLLECTIONS.slice(0, 4).map((c, i) => (
        <div key={c.id} className={styles.collectionRow}>
          <span
            className={styles.collectionBand}
            style={{ background: c.accent }}
          />
          <div className={styles.collectionBody}>
            <div className={styles.collectionTitle}>
              <strong>{c.name}</strong>
              <span>{c.region}</span>
            </div>
            <div className={styles.progressTrack}>
              <span
                style={{
                  width: `${(progress[i] / c.spotCount) * 100}%`,
                  background: c.accent,
                }}
              />
            </div>
          </div>
          <span className={styles.collectionCount}>
            {progress[i]} / {c.spotCount}
          </span>
        </div>
      ))}
    </div>
  );
}

function CheckInMock(): ReactNode {
  return (
    <div className={clsx(styles.mockCard, styles.checkInCard)}>
      <div className={styles.checkInMeta}>
        <MapPin size={16} strokeWidth={2} aria-hidden />
        <span>集集車站・南投縣</span>
      </div>
      <div className={styles.checkInStamp}>
        <Stamp
          category="railway"
          name="集集車站"
          date="2026.10.04"
          size={148}
        />
      </div>
      <div className={styles.checkInResult}>
        <CircleCheck size={18} strokeWidth={2} aria-hidden />
        印記已收藏
      </div>
      <p className={styles.checkInHint}>距離 86 公尺・打卡半徑 250 公尺內</p>
    </div>
  );
}

function PostcardMock(): ReactNode {
  return (
    <div className={styles.postcard}>
      <img
        src="/img/covers/tw-tainan-walk.jpg"
        alt="臺南廟宇前的街景"
        loading="lazy"
        className={styles.postcardPhoto}
      />
      <div className={styles.postcardFooter}>
        <div>
          <strong>赤崁樓</strong>
          <span>Chihkan Tower</span>
          <span className={styles.postcardDate}>臺南市・2026.08.17</span>
        </div>
        <div className={styles.postcardStamp}>
          <Stamp category="heritage" name="赤崁樓" date="2026.08.17" size={92} />
        </div>
      </div>
      <p className={styles.postcardBrand}>ExploreStamp 探索印記</p>
    </div>
  );
}

/* ── Sections ── */

type Showcase = {
  label: string;
  title: string;
  body: string[];
  visual: ReactNode;
};

const SHOWCASES: Showcase[] = [
  {
    label: "任務集",
    title: "有主題的路線，出門前就知道要去哪",
    body: [
      `目前收錄 ${CATALOG_STATS.spots} 個臺灣景點，整理成 ${CATALOG_STATS.collections} 條主題路線：老車站、府城散策、北中南博物館、夜市小吃、植物園等。`,
      "每條路線顯示完成進度，同一個景點也可以同時屬於多條路線。景點目錄會在背景自動更新，不需要重新下載 App。",
    ],
    visual: <CollectionsMock />,
  },
  {
    label: "定位打卡",
    title: "人要到現場，印章才算數",
    body: [
      "按下「蓋章打卡」時，App 會讀取一次目前位置，確認你在景點的打卡半徑內。半徑依景點類型設定，例如車站 250 公尺、觀光工廠 400 公尺，並會把手機回報的定位誤差一起納入判斷。",
      "每個景點各有一枚印章，外框形狀代表分類，上面印著景點名稱和第一次造訪的日期。重複造訪不會多一枚章，但每一次都會記在月曆上。",
    ],
    visual: <CheckInMock />,
  },
  {
    label: "明信片",
    title: "照片加上印章，做成一張明信片",
    body: [
      "打卡後可以選一張當天的照片，與印章、景點名稱和日期合成一張直式明信片，透過系統分享面板傳給朋友或貼到社群。",
      "沒有拍照也沒關係，App 會改用印章為主的版面。明信片下方的品牌小字可以在設定中關閉。",
    ],
    visual: <PostcardMock />,
  },
];

const MORE_FEATURES = [
  {
    icon: MapIcon,
    title: "景點地圖",
    desc: "在地圖上看所有景點，已打卡與未打卡一眼分開，可依分類篩選。",
  },
  {
    icon: CalendarDays,
    title: "月曆紀錄",
    desc: "每一天以當天的照片當封面，月份上方統計本月印記數與新景點數。",
  },
  {
    icon: Bell,
    title: "推薦提醒",
    desc: "每天或只在週末，於你選定的時間推薦一個還沒去過的景點。",
  },
  {
    icon: ArchiveRestore,
    title: "匯出與匯入備份",
    desc: "打卡紀錄與照片可打包成一個檔案，換手機時再匯入，不會重複。",
  },
  {
    icon: WifiOff,
    title: "離線可用",
    desc: "景點資料隨 App 一起安裝，打卡、印章冊與月曆都不需要網路。",
  },
  {
    icon: Languages,
    title: "中英雙語",
    desc: "介面與景點資訊提供繁體中文與英文，可跟隨系統或手動切換。",
  },
];

const PRIVACY_POINTS = [
  {
    icon: UserX,
    title: "不需要帳號",
    desc: "下載後直接使用，不必提供 Email、電話或任何個人資料。",
  },
  {
    icon: MapPin,
    title: "位置只讀一次",
    desc: "只在你按下打卡時讀取位置，不在背景追蹤，也不上傳。",
  },
  {
    icon: HardDrive,
    title: "資料留在手機",
    desc: "打卡紀錄與照片存在 App 自己的空間，不會傳到任何伺服器。",
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.showcase}>
        <div className="container">
          {SHOWCASES.map((item, idx) => (
            <div
              key={item.label}
              className={clsx(
                styles.showcaseRow,
                idx % 2 === 1 && styles.showcaseRowReverse,
              )}
            >
              <div className={styles.showcaseText}>
                <p className={styles.eyebrow}>{item.label}</p>
                <Heading as="h2">{item.title}</Heading>
                {item.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className={styles.showcaseVisual} aria-hidden>
                {item.visual}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.more}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>其他功能</p>
            <Heading as="h2">記錄之外，還有這些</Heading>
          </div>
          <div className={styles.moreGrid}>
            {MORE_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className={styles.moreItem}>
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className={styles.moreIcon}
                    aria-hidden
                  />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>景點分類</p>
            <Heading as="h2">{CATEGORIES.length} 種景點，各有一款印章</Heading>
            <p className={styles.sectionLead}>
              分類決定印章的外框與顏色：古蹟是六角形、鐵道是車票形、圖書館是書冊形。收集多了，翻印章冊就能看出自己偏好哪一類地方。
            </p>
          </div>
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.key} className={styles.categoryItem}>
                  <div className={styles.categoryHead}>
                    <span
                      className={styles.categoryIcon}
                      style={{ color: c.color, borderColor: c.color }}
                    >
                      <Icon size={20} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3>{c.label}</h3>
                  </div>
                  <p>{c.examples.join("、")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.privacy}>
        <div className="container">
          <div className={styles.privacyInner}>
            <div className={styles.privacyIntro}>
              <p className={styles.eyebrow}>隱私</p>
              <Heading as="h2">你的旅行紀錄，只屬於你</Heading>
              <p>
                探索印記沒有會員系統，也沒有雲端資料庫。去過哪裡、拍了什麼，都只存在你自己的手機上。
              </p>
            </div>
            <ul className={styles.privacyList}>
              {PRIVACY_POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title}>
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
