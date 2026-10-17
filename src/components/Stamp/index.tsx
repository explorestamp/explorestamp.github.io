import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import { categoryOf, type CategoryKey } from "@site/src/data/product";

/**
 * App 印章的網頁版示意。外框形狀依分類而定，對應 App 的 stamp_frames.dart：
 * 博物館＝圓章（沿用改版前藝文場館的樣子）、美術館＝直角畫框、
 * 表演與運動場館＝跑道形、動物園與水族館＝超橢圓、主題樂園＝星芒、
 * 地標與觀景台＝拱窗、圖書館＝書冊、書店＝折角方框、大學校園＝盾形、
 * 古蹟＝尖頂六角、宗教聖地＝平頂八角、購物與商圈＝價格吊牌、市集＝房屋形、
 * 夜市＝四角內凹方形、美食小吃＝雙線圓、咖啡廳＝杯形、機場＝飛機窗、
 * 鐵道＝車票缺口、觀光工廠＝圓角方、自然景點＝葉形。
 * 中央文字固定在 y 63～76，新外框在這一段都要留出足夠寬度。
 */

type Props = {
  category: CategoryKey;
  name?: string;
  date?: string;
  locked?: boolean;
  size?: number;
};

function Frame({ category }: { category: CategoryKey }): ReactNode {
  switch (category) {
    case "museum":
      return (
        <>
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="40" strokeWidth="1" />
        </>
      );
    case "artMuseum":
      return (
        <>
          <rect x="5" y="5" width="90" height="90" />
          <rect x="11" y="11" width="78" height="78" strokeWidth="1" />
        </>
      );
    case "venue":
      return (
        <>
          <rect x="4" y="10" width="92" height="80" rx="40" />
          <rect x="10" y="16" width="80" height="68" rx="34" strokeWidth="1" />
        </>
      );
    case "zooAquarium":
      return (
        <>
          <polygon points="95,50 94.8,66.3 94.2,72.9 93.3,77.8 91.9,81.8 90.1,85.1 87.8,87.8 85.1,90.1 81.8,91.9 77.8,93.3 72.9,94.2 66.3,94.8 50,95 33.7,94.8 27.1,94.2 22.2,93.3 18.2,91.9 14.9,90.1 12.2,87.8 9.9,85.1 8.1,81.8 6.7,77.8 5.8,72.9 5.2,66.3 5,50 5.2,33.7 5.8,27.1 6.7,22.2 8.1,18.2 9.9,14.9 12.2,12.2 14.9,9.9 18.2,8.1 22.2,6.7 27.1,5.8 33.7,5.2 50,5 66.3,5.2 72.9,5.8 77.8,6.7 81.8,8.1 85.1,9.9 87.8,12.2 90.1,14.9 91.9,18.2 93.3,22.2 94.2,27.1 94.8,33.7" />
          <polygon points="89,50 88.8,64.1 88.3,69.8 87.5,74.1 86.3,77.6 84.7,80.4 82.8,82.8 80.4,84.7 77.6,86.3 74.1,87.5 69.8,88.3 64.1,88.8 50,89 35.9,88.8 30.2,88.3 25.9,87.5 22.4,86.3 19.6,84.7 17.2,82.8 15.3,80.4 13.7,77.6 12.5,74.1 11.7,69.8 11.2,64.1 11,50 11.2,35.9 11.7,30.2 12.5,25.9 13.7,22.4 15.3,19.6 17.2,17.2 19.6,15.3 22.4,13.7 25.9,12.5 30.2,11.7 35.9,11.2 50,11 64.1,11.2 69.8,11.7 74.1,12.5 77.6,13.7 80.4,15.3 82.8,17.2 84.7,19.6 86.3,22.4 87.5,25.9 88.3,30.2 88.8,35.9" strokeWidth="1" />
        </>
      );
    case "themePark":
      return (
        <>
          <polygon points="50,4 57.7,11.2 67.6,7.5 72,17.1 82.5,17.5 82.9,28 92.5,32.4 88.8,42.3 96,50 88.8,57.7 92.5,67.6 82.9,72 82.5,82.5 72,82.9 67.6,92.5 57.7,88.8 50,96 42.3,88.8 32.4,92.5 28,82.9 17.5,82.5 17.1,72 7.5,67.6 11.2,57.7 4,50 11.2,42.3 7.5,32.4 17.1,28 17.5,17.5 28,17.1 32.4,7.5 42.3,11.2" />
          <polygon points="50,11 56.5,17.1 64.9,14 68.6,22.1 77.6,22.4 77.9,31.4 86,35.1 82.9,43.5 89,50 82.9,56.5 86,64.9 77.9,68.6 77.6,77.6 68.6,77.9 64.9,86 56.5,82.9 50,89 43.5,82.9 35.1,86 31.4,77.9 22.4,77.6 22.1,68.6 14,64.9 17.1,56.5 11,50 17.1,43.5 14,35.1 22.1,31.4 22.4,22.4 31.4,22.1 35.1,14 43.5,17.1" strokeWidth="1" />
        </>
      );
    case "landmark":
      return (
        <>
          <path d="M5 95 V50 A45 45 0 0 1 95 50 V95 Z" />
          <path d="M11 89 V50 A39 39 0 0 1 89 50 V89 Z" strokeWidth="1" />
        </>
      );
    case "bookstore":
      return (
        <>
          <path d="M5 5 H77 L95 23 V95 H5 Z M77 5 V23 H95" />
          <path d="M11 11 H73 L89 27 V89 H11 Z" strokeWidth="1" />
        </>
      );
    case "campus":
      return (
        <>
          <path d="M5 5 H95 V45.5 Q95 78.8 50 95 Q5 78.8 5 45.5 Z" />
          <path d="M11 11 H89 V46 Q89 75 50 89 Q11 75 11 46 Z" strokeWidth="1" />
        </>
      );
    case "worship":
      return (
        <>
          <polygon points="67.6,7.5 92.5,32.4 92.5,67.6 67.6,92.5 32.4,92.5 7.5,67.6 7.5,32.4 32.4,7.5" />
          <polygon points="65.1,13.5 86.5,34.9 86.5,65.1 65.1,86.5 34.9,86.5 13.5,65.1 13.5,34.9 34.9,13.5" strokeWidth="1" />
        </>
      );
    case "shopping":
      return (
        <>
          <path d="M4 50 L22 5 H89.6 Q95 5 95 10.4 V89.6 Q95 95 89.6 95 H22 Z" />
          <path
            d="M11 50 L26 11 H84.5 Q89 11 89 15.5 V84.5 Q89 89 84.5 89 H26 Z"
            strokeWidth="1"
          />
          <circle cx="19" cy="50" r="3" strokeWidth="1.5" />
        </>
      );
    case "market":
      return (
        <>
          <polygon points="50,4 95,39 95,95 5,95 5,39" />
          <polygon points="50,11 89,41 89,89 11,89 11,41" strokeWidth="1" />
        </>
      );
    case "nightMarket":
      return (
        <>
          <path d="M19.4 5 H80.6 A14.4 14.4 0 0 0 95 19.4 V80.6 A14.4 14.4 0 0 0 80.6 95 H19.4 A14.4 14.4 0 0 0 5 80.6 V19.4 A14.4 14.4 0 0 0 19.4 5 Z" />
          <path
            d="M23.5 11 H76.5 A12.5 12.5 0 0 0 89 23.5 V76.5 A12.5 12.5 0 0 0 76.5 89 H23.5 A12.5 12.5 0 0 0 11 76.5 V23.5 A12.5 12.5 0 0 0 23.5 11 Z"
            strokeWidth="1"
          />
        </>
      );
    case "food":
      return (
        <>
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="42" />
        </>
      );
    case "cafe":
      return (
        <>
          <path d="M23 86 A45 45 0 1 1 77 86 Z" />
          <path d="M25.1 80 A39 39 0 1 1 74.9 80 Z" strokeWidth="1" />
        </>
      );
    case "airport":
      return (
        <>
          <rect x="11.3" y="5" width="77.4" height="90" rx="38.7" />
          <rect
            x="17.3"
            y="11"
            width="65.4"
            height="78"
            rx="32.7"
            strokeWidth="1"
          />
        </>
      );
    case "factory":
      return (
        <>
          <rect x="5" y="5" width="90" height="90" rx="16" />
          <rect x="11" y="11" width="78" height="78" rx="11" strokeWidth="1" />
        </>
      );
    case "heritage":
      return (
        <>
          <polygon points="50,3 91,26.5 91,73.5 50,97 9,73.5 9,26.5" />
          <polygon
            points="50,10 85,30 85,70 50,90 15,70 15,30"
            strokeWidth="1"
          />
        </>
      );
    case "railway":
      return (
        <>
          <path d="M5 12 H95 V40 A10 10 0 0 0 95 60 V88 H5 V60 A10 10 0 0 0 5 40 Z" />
          <line x1="24" y1="12" x2="24" y2="88" strokeWidth="1" strokeDasharray="3 3" />
        </>
      );
    case "library":
      return (
        <>
          <rect x="8" y="5" width="84" height="90" rx="4" />
          <line x1="18" y1="5" x2="18" y2="95" strokeWidth="1" />
        </>
      );
    case "nature":
      return (
        <>
          <path d="M50 3 C84 18 96 52 50 97 C4 52 16 18 50 3 Z" />
          <line x1="50" y1="12" x2="50" y2="88" strokeWidth="1" />
        </>
      );
  }
}

// 名稱決定旋轉角度，同一枚印章每次都長得一樣。
function tiltOf(seed: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 0x01000193) >>> 0;
  }
  return (h % 13) - 6;
}

export default function Stamp({
  category,
  name,
  date,
  locked = false,
  size = 96,
}: Props): ReactNode {
  const cat = categoryOf(category);
  const Icon = cat.icon;
  const color = locked ? "var(--es-ink-faint)" : cat.color;
  const tilt = locked ? 0 : tiltOf(name ?? category);
  const showText = !locked && name;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={
        locked
          ? translate(
              { id: "stamp.ariaLabel.locked", message: "{category}（未收集）" },
              { category: cat.label },
            )
          : translate(
              { id: "stamp.ariaLabel.earned", message: "{name}印章" },
              { name: name ?? cat.label },
            )
      }
      style={{ transform: `rotate(${tilt}deg)`, overflow: "visible" }}
    >
      <g
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeDasharray={locked ? "4 3" : undefined}
        opacity={locked ? 0.55 : 0.92}
      >
        <Frame category={category} />
      </g>
      <Icon
        x={showText ? 37 : 34}
        y={showText ? 22 : 34}
        width={showText ? 26 : 32}
        height={showText ? 26 : 32}
        color={color}
        strokeWidth={1.75}
        opacity={locked ? 0.45 : 0.92}
      />
      {showText && (
        <>
          <text
            x="50"
            y="63"
            textAnchor="middle"
            fill={color}
            // 英文名稱字數多但字寬窄，再多兩級縮小才放得進外框。
            fontSize={
              name.length > 18
                ? 6
                : name.length > 14
                  ? 7
                  : name.length > 5
                    ? 8.5
                    : 10
            }
            fontWeight="700"
            letterSpacing="0.5"
          >
            {name}
          </text>
          {date && (
            <text
              x="50"
              y="76"
              textAnchor="middle"
              fill={color}
              fontSize="6.5"
              letterSpacing="0.8"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            >
              {date}
            </text>
          )}
        </>
      )}
    </svg>
  );
}
