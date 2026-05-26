import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "虛擬旅行郵冊",
    icon: "📮",
    description: (
      <>
        每次打卡都化為一枚虛擬郵票，收藏進你的專屬旅行郵冊。
        翻閱郵冊重溫旅途記憶，每一頁都是一段屬於你的故事。
      </>
    ),
  },
  {
    title: "任務挑戰系統",
    icon: "🎯",
    description: (
      <>
        參加博物館巡禮、鐵道蒐集、古蹟探訪等主題任務。
        完成挑戰收集稀有印章，解鎖城市主題成就勳章。
      </>
    ),
  },
  {
    title: "記憶地圖足跡",
    icon: "🗺️",
    description: (
      <>
        每個打卡點都 Pin 在地圖上，附上照片、虛擬郵票與你的文字紀錄，
        讓旅行記憶永遠不褪色。
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

type ShowcaseItem = {
  gradient: string;
  placeholderIcon: string;
  title: string;
  description: string;
};

function ProductShowcase(): ReactNode {
  const features: ShowcaseItem[] = [
    {
      gradient:
        "linear-gradient(135deg, #1a0e08 0%, #2d1509 50%, #3d1e0a 100%)",
      placeholderIcon: "📮",
      title: "打卡蓋章，化景為印",
      description:
        "到達景點，拍下眼前的風景，一鍵轉化為專屬虛擬郵票與明信片，留下這一刻獨一無二的旅行印記",
    },
    {
      gradient:
        "linear-gradient(135deg, #0a1a0e 0%, #0e2218 50%, #1a3520 100%)",
      placeholderIcon: "📖",
      title: "郵冊細節，記錄每一刻",
      description:
        "每個打卡頁面顯示 Google 地圖定位、風景照片與虛擬郵票，並可寫下心情文字紀錄，完整保存你的冒險記憶",
    },
    {
      gradient:
        "linear-gradient(135deg, #0e0a1a 0%, #1a1028 50%, #231535 100%)",
      placeholderIcon: "✅",
      title: "任務清單，探索有方向",
      description:
        "收藏鐵道景點、博物館、美術館等主題任務清單，勾勒專屬探索路線，讓每次出門都有目標",
    },
    {
      gradient:
        "linear-gradient(135deg, #1a0808 0%, #2e1408 50%, #3d2010 100%)",
      placeholderIcon: "🏆",
      title: "解鎖成就，見證冒險",
      description:
        "完成主題任務系列，解鎖城市徽章與特別成就，讓你的旅行不只是到此一遊，而是真正的城市征服者",
    },
    {
      gradient:
        "linear-gradient(135deg, #0e1a0e 0%, #162816 50%, #0e1a1a 100%)",
      placeholderIcon: "🌏",
      title: "城市尋寶，探索世界",
      description:
        "從台灣出發，探索每一座城市的獨特魅力。每一個打卡，都是你在地圖上留下的寶藏座標",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">功能特色</span>
          <Heading as="h2">一起出發，探索城市每個角落</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse,
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <div
                className={styles.showcasePlaceholder}
                style={{ background: feature.gradient }}
              >
                {feature.placeholderIcon}
              </div>
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心優勢</span>
            <Heading as="h2">什麼是 ExploreStamp？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
