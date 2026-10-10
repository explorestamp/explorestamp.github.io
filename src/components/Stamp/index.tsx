import type { ReactNode } from "react";
import { categoryOf, type CategoryKey } from "@site/src/data/product";

/**
 * App 印章的網頁版示意。外框形狀依分類而定，與 App 的 stamp_frames.dart 一致：
 * 藝文場館＝圓章、特色美食＝雙線圓、觀光工廠＝圓角方、古蹟＝六角、
 * 鐵道＝車票缺口、圖書館＝書冊、自然園區＝葉形。
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
    case "artsVenue":
      return (
        <>
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="40" strokeWidth="1" />
        </>
      );
    case "food":
      return (
        <>
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="42" />
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
      aria-label={locked ? `${cat.label}（未收集）` : `${name ?? cat.label}印章`}
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
            fontSize={name.length > 5 ? 8.5 : 10}
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
