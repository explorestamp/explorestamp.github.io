import { useState, type ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import type { CategoryKey } from "@site/src/data/product";
// 從 explorestamp-data-api 的 data/spots.json 精簡而來（只留官網用得到的
// 欄位）。App 的景點目錄更新時，記得重新同步這份檔案。
import spots from "@site/src/data/spots.json";

import styles from "./styles.module.css";

type Spot = {
  id: string;
  category: string;
  name: { zh: string | null; en: string | null };
  city: { zh: string | null; en: string | null };
  lat: number;
  lng: number;
};

function pick(text: Spot["name"], isEn: boolean): string {
  return (isEn ? text.en ?? text.zh : text.zh ?? text.en) ?? "";
}

function SpotRow({ spot, isEn }: { spot: Spot; isEn: boolean }): ReactNode {
  // 只有展開過才掛上 iframe：整頁有 43 個景點，一進來就各載一份 Google
  // 地圖太重，也會讓沒點開的人一樣向 Google 發出請求。
  const [opened, setOpened] = useState(false);
  const name = pick(spot.name, isEn);
  const city = pick(spot.city, isEn);
  const src =
    `https://maps.google.com/maps?q=${spot.lat},${spot.lng}` +
    `&z=16&hl=${isEn ? "en" : "zh-TW"}&output=embed`;

  return (
    <details
      className={styles.row}
      onToggle={(e) => {
        if (e.currentTarget.open) setOpened(true);
      }}
    >
      <summary className={styles.summary}>
        <span className={styles.name}>{name}</span>
        <span className={styles.city}>{city}</span>
      </summary>
      {opened && (
        <iframe
          className={styles.map}
          src={src}
          title={translate(
            { id: "spotList.mapTitle", message: "{name} 的地圖位置" },
            { name },
          )}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
    </details>
  );
}

export default function SpotList({
  category,
}: {
  category: CategoryKey;
}): ReactNode {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const isEn = currentLocale === "en";
  const list = (spots as Spot[]).filter((s) => s.category === category);

  return (
    <div className={styles.list}>
      {list.map((spot) => (
        <SpotRow key={spot.id} spot={spot} isEn={isEn} />
      ))}
    </div>
  );
}
