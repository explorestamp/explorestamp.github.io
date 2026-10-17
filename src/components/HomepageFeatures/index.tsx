import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
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
        <span>
          <Translate id="homepage.mock.checkIn.place">集集車站・南投縣</Translate>
        </span>
      </div>
      <div className={styles.checkInStamp}>
        <Stamp
          category="railway"
          name={translate({
            id: "homepage.mock.checkIn.stampName",
            message: "集集車站",
          })}
          date="2026.10.04"
          size={148}
        />
      </div>
      <div className={styles.checkInResult}>
        <CircleCheck size={18} strokeWidth={2} aria-hidden />
        <Translate id="homepage.mock.checkIn.result">印記已收藏</Translate>
      </div>
      <p className={styles.checkInHint}>
        <Translate id="homepage.mock.checkIn.hint">
          距離 86 公尺・打卡半徑 250 公尺內
        </Translate>
      </p>
    </div>
  );
}

function PostcardMock(): ReactNode {
  return (
    <div className={styles.postcard}>
      <img
        src="/img/covers/tw-tainan-walk.jpg"
        alt={translate({
          id: "homepage.mock.postcard.photoAlt",
          message: "臺南廟宇前的街景",
        })}
        loading="lazy"
        className={styles.postcardPhoto}
      />
      <div className={styles.postcardFooter}>
        <div>
          <strong>
            <Translate id="homepage.mock.postcard.name">赤崁樓</Translate>
          </strong>
          <span>Chihkan Tower</span>
          <span className={styles.postcardDate}>
            <Translate id="homepage.mock.postcard.cityDate">
              臺南市・2026.08.17
            </Translate>
          </span>
        </div>
        <div className={styles.postcardStamp}>
          <Stamp
            category="heritage"
            name={translate({
              id: "homepage.mock.postcard.stampName",
              message: "赤崁樓",
            })}
            date="2026.08.17"
            size={92}
          />
        </div>
      </div>
      <p className={styles.postcardBrand}>
        <Translate id="homepage.mock.postcard.brand">
          ExploreStamp 探索印記
        </Translate>
      </p>
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
    label: translate({
      id: "homepage.showcase.collections.label",
      message: "任務集",
    }),
    title: translate({
      id: "homepage.showcase.collections.title",
      message: "有主題的路線，出門前就知道要去哪",
    }),
    body: [
      translate(
        {
          id: "homepage.showcase.collections.body1",
          message:
            "目前收錄臺灣、日本、韓國、香港、澳門、澳洲、紐西蘭與波蘭共 {spots} 個景點，整理成 {collections} 條主題路線：老車站、府城散策、京都古都散策、雪梨港灣城市、克拉科夫與鹽礦等。",
        },
        {
          spots: CATALOG_STATS.spots,
          collections: CATALOG_STATS.collections,
        },
      ),
      translate({
        id: "homepage.showcase.collections.body2",
        message:
          "每條路線顯示完成進度，同一個景點也可以同時屬於多條路線。景點目錄會在背景自動更新，不需要重新下載 App。",
      }),
    ],
    visual: <CollectionsMock />,
  },
  {
    label: translate({
      id: "homepage.showcase.checkIn.label",
      message: "定位打卡",
    }),
    title: translate({
      id: "homepage.showcase.checkIn.title",
      message: "人要到現場，印章才算數",
    }),
    body: [
      translate({
        id: "homepage.showcase.checkIn.body1",
        message:
          "按下「蓋章打卡」時，App 會讀取一次目前位置，確認你在景點的打卡半徑內。半徑依景點類型設定，例如車站 250 公尺、觀光工廠 400 公尺，並會把手機回報的定位誤差一起納入判斷。",
      }),
      translate({
        id: "homepage.showcase.checkIn.body2",
        message:
          "每個景點各有一枚印章，外框形狀代表分類，上面印著景點名稱和第一次造訪的日期。重複造訪不會多一枚章，但每一次都會記在月曆上。",
      }),
    ],
    visual: <CheckInMock />,
  },
  {
    label: translate({
      id: "homepage.showcase.postcard.label",
      message: "明信片",
    }),
    title: translate({
      id: "homepage.showcase.postcard.title",
      message: "照片加上印章，做成一張明信片",
    }),
    body: [
      translate({
        id: "homepage.showcase.postcard.body1",
        message:
          "打卡後可以選一張當天的照片，與印章、景點名稱和日期合成一張直式明信片，透過系統分享面板傳給朋友或貼到社群。",
      }),
      translate({
        id: "homepage.showcase.postcard.body2",
        message: "沒有拍照也沒關係，App 會改用印章為主的版面。",
      }),
    ],
    visual: <PostcardMock />,
  },
];

const MORE_FEATURES = [
  {
    icon: MapIcon,
    title: translate({
      id: "homepage.more.map.title",
      message: "景點地圖",
    }),
    desc: translate({
      id: "homepage.more.map.desc",
      message: "在地圖上看所有景點，已打卡與未打卡一眼分開，可依分類篩選。",
    }),
  },
  {
    icon: CalendarDays,
    title: translate({
      id: "homepage.more.calendar.title",
      message: "月曆紀錄",
    }),
    desc: translate({
      id: "homepage.more.calendar.desc",
      message: "每一天以當天的照片當封面，月份上方統計本月印記數與新景點數。",
    }),
  },
  {
    icon: Bell,
    title: translate({
      id: "homepage.more.reminder.title",
      message: "推薦提醒",
    }),
    desc: translate({
      id: "homepage.more.reminder.desc",
      message: "每天或只在週末，於你選定的時間推薦一個還沒去過的景點。",
    }),
  },
  {
    icon: ArchiveRestore,
    title: translate({
      id: "homepage.more.backup.title",
      message: "匯出與匯入備份",
    }),
    desc: translate({
      id: "homepage.more.backup.desc",
      message: "打卡紀錄與照片可打包成一個檔案，換手機時再匯入，不會重複。",
    }),
  },
  {
    icon: WifiOff,
    title: translate({
      id: "homepage.more.offline.title",
      message: "離線可用",
    }),
    desc: translate({
      id: "homepage.more.offline.desc",
      message: "景點資料隨 App 一起安裝，打卡、印章冊與月曆都不需要網路。",
    }),
  },
  {
    icon: Languages,
    title: translate({
      id: "homepage.more.languages.title",
      message: "中英雙語",
    }),
    desc: translate({
      id: "homepage.more.languages.desc",
      message: "介面與景點資訊提供繁體中文與英文，可跟隨系統或手動切換。",
    }),
  },
];

const PRIVACY_POINTS = [
  {
    icon: UserX,
    title: translate({
      id: "homepage.privacy.noLogin.title",
      message: "不用登入就能使用",
    }),
    desc: translate({
      id: "homepage.privacy.noLogin.desc",
      message: "下載後直接開始集章，不必提供 Email、電話或任何個人資料。",
    }),
  },
  {
    icon: MapPin,
    title: translate({
      id: "homepage.privacy.locationOnce.title",
      message: "位置只讀一次",
    }),
    desc: translate({
      id: "homepage.privacy.locationOnce.desc",
      message: "只在你按下打卡時讀取位置，不在背景追蹤，也不上傳。",
    }),
  },
  {
    icon: HardDrive,
    title: translate({
      id: "homepage.privacy.localData.title",
      message: "資料預設留在手機",
    }),
    desc: translate({
      id: "homepage.privacy.localData.desc",
      message: "打卡紀錄與照片存在 App 自己的空間，預設不會上傳到伺服器。",
    }),
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
            <p className={styles.eyebrow}>
              <Translate id="homepage.more.eyebrow">其他功能</Translate>
            </p>
            <Heading as="h2">
              <Translate id="homepage.more.title">記錄之外，還有這些</Translate>
            </Heading>
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
            <p className={styles.eyebrow}>
              <Translate id="homepage.categories.eyebrow">景點分類</Translate>
            </p>
            <Heading as="h2">
              <Translate
                id="homepage.categories.title"
                values={{ count: CATEGORIES.length }}
              >
                {"{count} 種景點，各有一款印章"}
              </Translate>
            </Heading>
            <p className={styles.sectionLead}>
              <Translate id="homepage.categories.lead">
                分類決定印章的外框與顏色：古蹟是六角形、鐵道是車票形、圖書館是書冊形。收集多了，翻印章冊就能看出自己偏好哪一類地方。
              </Translate>
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
                  <p>{c.examples}</p>
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
              <p className={styles.eyebrow}>
                <Translate id="homepage.privacy.eyebrow">隱私</Translate>
              </p>
              <Heading as="h2">
                <Translate id="homepage.privacy.title">
                  你的旅行紀錄，只屬於你
                </Translate>
              </Heading>
              <p>
                <Translate id="homepage.privacy.body">
                  探索印記預設不用登入就能使用，去過哪裡、拍了什麼，都存在你自己的手機上。未來若推出會員登入與雲端備份，也會是你自行選擇開啟的選項。
                </Translate>
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
