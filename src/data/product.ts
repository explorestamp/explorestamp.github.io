import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Castle,
  Factory,
  Landmark,
  Soup,
  TrainFront,
  Trees,
} from "lucide-react";

/**
 * 官網上所有產品事實的單一來源。
 * 分類配色與圖示對應 explorestamp-mobile 的 core/theme/category_style.dart，
 * 任務集對應 explorestamp-data-api 的 data/collections.json。
 * App 的景點目錄更新時，記得同步這裡。
 */

// 上架後填入商店網址；留空時頁面會顯示「即將上架」。
export const STORE_LINKS = {
  appStore: "",
  googlePlay: "",
};

export const COMMUNITY_LINKS = {
  facebookGroup: "https://facebook.com/groups/explorestamp",
  instagram: "https://www.instagram.com/explorestamp",
  newsletter: "https://explorestamp.substack.com/",
  email: "mailto:explorestamp@gmail.com",
};

export type CategoryKey =
  | "artsVenue"
  | "heritage"
  | "library"
  | "railway"
  | "factory"
  | "food"
  | "nature";

export type Category = {
  key: CategoryKey;
  label: string;
  color: string;
  icon: LucideIcon;
  examples: string[];
};

export const CATEGORIES: Category[] = [
  {
    key: "artsVenue",
    label: "藝文場館",
    color: "#3A5FA0",
    icon: Landmark,
    examples: ["國立故宮博物院", "奇美博物館", "駁二藝術特區"],
  },
  {
    key: "heritage",
    label: "古蹟遺址",
    color: "#8B5E3C",
    icon: Castle,
    examples: ["赤崁樓", "淡水紅毛城", "鹿港龍山寺"],
  },
  {
    key: "library",
    label: "圖書館",
    color: "#4E7A57",
    icon: BookOpen,
    examples: ["北投分館", "國家圖書館", "臺南市立圖書館總館"],
  },
  {
    key: "railway",
    label: "鐵道車站",
    color: "#4A4A4A",
    icon: TrainFront,
    examples: ["內灣車站", "集集車站", "菁桐車站"],
  },
  {
    key: "factory",
    label: "觀光工廠",
    color: "#E0A02E",
    icon: Factory,
    examples: ["噶瑪蘭威士忌酒廠", "巧克力共和國", "舊振南漢餅文化館"],
  },
  {
    key: "food",
    label: "特色美食",
    color: "#B7343C",
    icon: Soup,
    examples: ["阿宗麵線", "同記安平豆花", "噴水雞肉飯"],
  },
  {
    key: "nature",
    label: "自然園區",
    color: "#1F7A6C",
    icon: Trees,
    examples: ["臺北植物園", "奧萬大森林遊樂區", "富源森林遊樂區"],
  },
];

export const categoryOf = (key: CategoryKey): Category =>
  CATEGORIES.find((c) => c.key === key)!;

export type Collection = {
  id: string;
  name: string;
  region: string;
  description: string;
  accent: string;
  spotCount: number;
};

export const COLLECTIONS: Collection[] = [
  {
    id: "tw-railway-classic-6",
    name: "臺灣經典老車站 6 選",
    region: "全臺",
    description: "從內灣到菁桐，走過六座留著木造月台與鐵道記憶的車站。",
    accent: "#8B5E3C",
    spotCount: 6,
  },
  {
    id: "tw-tainan-walk",
    name: "府城散策",
    region: "臺南",
    description: "古蹟、車站、圖書館與一碗豆花——臺南是走出來的。",
    accent: "#C25E3A",
    spotCount: 6,
  },
  {
    id: "tw-museum-grand-tour",
    name: "北中南博物館巡禮",
    region: "全臺",
    description: "六座館，六種看世界的方式。",
    accent: "#3A5FA0",
    spotCount: 6,
  },
  {
    id: "tw-street-food-map",
    name: "夜市與小吃地圖",
    region: "全臺",
    description: "從一碗麵線開始，把台灣吃過一遍。",
    accent: "#B7343C",
    spotCount: 7,
  },
  {
    id: "tw-heritage-trail",
    name: "古蹟尋跡",
    region: "全臺",
    description: "六座古蹟，見證荷蘭、清朝與日治時期先後留下的痕跡。",
    accent: "#6B7280",
    spotCount: 6,
  },
  {
    id: "tw-quiet-reading-room",
    name: "島嶼閱讀",
    region: "全臺",
    description: "六座圖書館，六個城市最安靜的地方。",
    accent: "#4E7A57",
    spotCount: 6,
  },
  {
    id: "tw-factory-day-trip",
    name: "觀光工廠一日遊",
    region: "全臺",
    description: "威士忌、巧克力、蠟筆與漢餅，六種被做出來的味道。",
    accent: "#E0A02E",
    spotCount: 6,
  },
  {
    id: "tw-botanical-garden-picks",
    name: "必逛植物園清單",
    region: "全臺",
    description: "六座植物園與森林遊樂區，適合放慢腳步。",
    accent: "#5A8F3D",
    spotCount: 6,
  },
];

export const CATALOG_STATS = {
  spots: 43,
  categories: CATEGORIES.length,
  collections: COLLECTIONS.length,
};
