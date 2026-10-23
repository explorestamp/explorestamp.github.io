import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import collections from "@site/src/data/collections.json";
import styles from "./styles.module.css";

type Localized = { zh: string; en: string };
type Collection = {
  id: string;
  country: string;
  name: Localized;
  regionLabel: Localized;
  description: Localized;
  spotCount: number;
  coverImageUrl: string;
};

// 有對應文章的路線，卡片連到文章。
const ARTICLES: Record<string, string> = {
  "tw-tainan-walk": "/blog/tainan-walk-route",
  "tw-ila-yilan-jiaoxi": "/blog/yilan-jiaoxi-route",
  "tw-sugar-mills": "/blog/taiwan-sugar-mills-route",
  "tw-yun-huwei-beigang": "/blog/huwei-beigang-route",
  "tw-yun-xiluo-douliu": "/blog/xiluo-douliu-route",
  "tw-tpe-ai-foodie-map": "/blog/ai-foodie-map-route",
  "tw-tcg-old-town": "/blog/taichung-old-town-route",
  "tw-tcg-park-and-old-houses": "/blog/taichung-park-old-houses-route",
  "tw-tcg-calligraphy-greenway": "/blog/taichung-calligraphy-greenway-route",
  "tw-tcg-new-city": "/blog/taichung-new-landmarks-route",
  "tw-tcg-nantun-wufeng": "/blog/nantun-wufeng-route",
  "tw-tcg-tunghai-coast": "/blog/tunghai-gaomei-route",
  "tw-tcg-fengyuan-houli": "/blog/fengyuan-houli-route",
  "jp-okinawa-island-loop": "/blog/okinawa-island-loop-route",
};

/** 主題探索頁的路線卡片：封面照片、名稱、地區、景點數與簡介。 */
export default function RouteCards({
  country,
}: {
  country: string;
}): ReactNode {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "en" ? "en" : "zh";
  const items = (collections as Collection[]).filter(
    (c) => c.country === country,
  );
  return (
    <div className={styles.grid}>
      {items.map((c) => {
        const article = ARTICLES[c.id];
        const body = (
          <>
            <img
              className={styles.cover}
              src={c.coverImageUrl}
              alt={c.name[lang]}
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className={styles.body}>
              <div className={styles.meta}>
                {c.regionLabel[lang]} ·{" "}
                {translate(
                  { id: "routeCards.spotCount", message: "{count} 個景點" },
                  { count: c.spotCount },
                )}
              </div>
              <div className={styles.name}>{c.name[lang]}</div>
              <p className={styles.description}>{c.description[lang]}</p>
              {article && (
                <span className={styles.more}>
                  {translate({
                    id: "routeCards.readArticle",
                    message: "閱讀路線介紹 →",
                  })}
                </span>
              )}
            </div>
          </>
        );
        return article ? (
          <Link key={c.id} to={article} className={styles.card}>
            {body}
          </Link>
        ) : (
          <div key={c.id} className={styles.card}>
            {body}
          </div>
        );
      })}
    </div>
  );
}
