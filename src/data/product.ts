import type { LucideIcon } from "lucide-react";
import { translate } from "@docusaurus/Translate";
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
  /** 已依語系排好的範例清單，含分隔符號，直接顯示。 */
  examples: string;
};

export const CATEGORIES: Category[] = [
  {
    key: "artsVenue",
    label: translate({
      id: "product.category.artsVenue.label",
      message: "藝文場館",
    }),
    color: "#3A5FA0",
    icon: Landmark,
    examples: translate({
      id: "product.category.artsVenue.examples",
      message: "國立故宮博物院、奇美博物館、駁二藝術特區",
    }),
  },
  {
    key: "heritage",
    label: translate({
      id: "product.category.heritage.label",
      message: "古蹟遺址",
    }),
    color: "#8B5E3C",
    icon: Castle,
    examples: translate({
      id: "product.category.heritage.examples",
      message: "赤崁樓、淡水紅毛城、鹿港龍山寺",
    }),
  },
  {
    key: "library",
    label: translate({
      id: "product.category.library.label",
      message: "圖書館",
    }),
    color: "#4E7A57",
    icon: BookOpen,
    examples: translate({
      id: "product.category.library.examples",
      message: "北投分館、國家圖書館、臺南市立圖書館總館",
    }),
  },
  {
    key: "railway",
    label: translate({
      id: "product.category.railway.label",
      message: "鐵道車站",
    }),
    color: "#4A4A4A",
    icon: TrainFront,
    examples: translate({
      id: "product.category.railway.examples",
      message: "內灣車站、集集車站、菁桐車站",
    }),
  },
  {
    key: "factory",
    label: translate({
      id: "product.category.factory.label",
      message: "觀光工廠",
    }),
    color: "#E0A02E",
    icon: Factory,
    examples: translate({
      id: "product.category.factory.examples",
      message: "噶瑪蘭威士忌酒廠、巧克力共和國、舊振南漢餅文化館",
    }),
  },
  {
    key: "food",
    label: translate({
      id: "product.category.food.label",
      message: "特色美食",
    }),
    color: "#B7343C",
    icon: Soup,
    examples: translate({
      id: "product.category.food.examples",
      message: "阿宗麵線、同記安平豆花、噴水雞肉飯",
    }),
  },
  {
    key: "nature",
    label: translate({
      id: "product.category.nature.label",
      message: "自然園區",
    }),
    color: "#1F7A6C",
    icon: Trees,
    examples: translate({
      id: "product.category.nature.examples",
      message: "臺北植物園、奧萬大森林遊樂區、富源森林遊樂區",
    }),
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
    name: translate({
      id: "product.collection.tw-railway-classic-6.name",
      message: "臺灣經典老車站 6 選",
    }),
    region: translate({
      id: "product.collection.tw-railway-classic-6.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-railway-classic-6.description",
      message: "從內灣到菁桐，走過六座留著木造月台與鐵道記憶的車站。",
    }),
    accent: "#8B5E3C",
    spotCount: 6,
  },
  {
    id: "tw-tainan-walk",
    name: translate({
      id: "product.collection.tw-tainan-walk.name",
      message: "府城散策",
    }),
    region: translate({
      id: "product.collection.tw-tainan-walk.region",
      message: "臺南",
    }),
    description: translate({
      id: "product.collection.tw-tainan-walk.description",
      message: "古蹟、車站、圖書館與一碗豆花——臺南是走出來的。",
    }),
    accent: "#C25E3A",
    spotCount: 6,
  },
  {
    id: "tw-museum-grand-tour",
    name: translate({
      id: "product.collection.tw-museum-grand-tour.name",
      message: "北中南博物館巡禮",
    }),
    region: translate({
      id: "product.collection.tw-museum-grand-tour.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-museum-grand-tour.description",
      message: "六座館，六種看世界的方式。",
    }),
    accent: "#3A5FA0",
    spotCount: 6,
  },
  {
    id: "tw-street-food-map",
    name: translate({
      id: "product.collection.tw-street-food-map.name",
      message: "夜市與小吃地圖",
    }),
    region: translate({
      id: "product.collection.tw-street-food-map.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-street-food-map.description",
      message: "從一碗麵線開始，把台灣吃過一遍。",
    }),
    accent: "#B7343C",
    spotCount: 7,
  },
  {
    id: "tw-heritage-trail",
    name: translate({
      id: "product.collection.tw-heritage-trail.name",
      message: "古蹟尋跡",
    }),
    region: translate({
      id: "product.collection.tw-heritage-trail.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-heritage-trail.description",
      message: "六座古蹟，見證荷蘭、清朝與日治時期先後留下的痕跡。",
    }),
    accent: "#6B7280",
    spotCount: 6,
  },
  {
    id: "tw-quiet-reading-room",
    name: translate({
      id: "product.collection.tw-quiet-reading-room.name",
      message: "島嶼閱讀",
    }),
    region: translate({
      id: "product.collection.tw-quiet-reading-room.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-quiet-reading-room.description",
      message: "六座圖書館，六個城市最安靜的地方。",
    }),
    accent: "#4E7A57",
    spotCount: 6,
  },
  {
    id: "tw-factory-day-trip",
    name: translate({
      id: "product.collection.tw-factory-day-trip.name",
      message: "觀光工廠一日遊",
    }),
    region: translate({
      id: "product.collection.tw-factory-day-trip.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-factory-day-trip.description",
      message: "威士忌、巧克力、蠟筆與漢餅，六種被做出來的味道。",
    }),
    accent: "#E0A02E",
    spotCount: 6,
  },
  {
    id: "tw-botanical-garden-picks",
    name: translate({
      id: "product.collection.tw-botanical-garden-picks.name",
      message: "必逛植物園清單",
    }),
    region: translate({
      id: "product.collection.tw-botanical-garden-picks.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-botanical-garden-picks.description",
      message: "六座植物園與森林遊樂區，適合放慢腳步。",
    }),
    accent: "#5A8F3D",
    spotCount: 6,
  },
];

export const CATALOG_STATS = {
  spots: 43,
  categories: CATEGORIES.length,
  collections: COLLECTIONS.length,
};
