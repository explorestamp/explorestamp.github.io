import type { LucideIcon } from "lucide-react";
import { translate } from "@docusaurus/Translate";
import {
  Bath,
  BedDouble,
  Binoculars,
  BookOpen,
  Castle,
  Church,
  Coffee,
  Crown,
  Factory,
  FerrisWheel,
  Fish,
  Flower2,
  GraduationCap,
  House,
  ImageIcon,
  Landmark,
  Library,
  Medal,
  MoonStar,
  Plane,
  Pyramid,
  ShoppingBag,
  Soup,
  Store,
  Theater,
  TrainFront,
  TreePalm,
  Trees,
} from "lucide-react";
// 只留 id、分類與國家，用來算景點數。名稱與經緯度刻意不放進官網，
// 完整目錄留在 App 與 explorestamp-data-api。
import spots from "@site/src/data/spots.json";
import collections from "@site/src/data/collections.json";

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
  | "museum"
  | "artMuseum"
  | "venue"
  | "zooAquarium"
  | "themePark"
  | "landmark"
  | "library"
  | "bookstore"
  | "campus"
  | "heritage"
  | "worship"
  | "shopping"
  | "market"
  | "nightMarket"
  | "food"
  | "cafe"
  | "airport"
  | "railway"
  | "factory"
  | "nature"
  | "archaeologicalSite"
  | "historicDistrict"
  | "castlePalace"
  | "memorial"
  | "parkGarden"
  | "beachIsland"
  | "hotSpring"
  | "hotelStay";

export type Category = {
  key: CategoryKey;
  label: string;
  color: string;
  icon: LucideIcon;
  /** 已依語系排好的範例清單，含分隔符號，直接顯示。 */
  examples: string;
};

// 順序同 explorestamp-data-api 的 docs/categories.md，也就是 App 裡的顯示順序。
// 還沒有景點的分類（書店、校園、購物與商圈、咖啡廳、機場）範例取自規範文件。
export const CATEGORIES: Category[] = [
  {
    key: "museum",
    label: translate({
      id: "product.category.museum.label",
      message: "博物館",
    }),
    color: "#3A5FA0",
    icon: Landmark,
    examples: translate({
      id: "product.category.museum.examples",
      message: "國立故宮博物院、東京國立博物館、奧克蘭戰爭紀念博物館",
    }),
  },
  {
    key: "artMuseum",
    label: translate({
      id: "product.category.artMuseum.label",
      message: "美術館",
    }),
    color: "#8A4FB0",
    icon: ImageIcon,
    examples: translate({
      id: "product.category.artMuseum.examples",
      message: "臺北市立美術館、M+、東大門設計廣場",
    }),
  },
  {
    key: "venue",
    label: translate({
      id: "product.category.venue.label",
      message: "表演與運動場館",
    }),
    color: "#E07B39",
    icon: Theater,
    examples: translate({
      id: "product.category.venue.examples",
      message: "雪梨歌劇院",
    }),
  },
  {
    key: "zooAquarium",
    label: translate({
      id: "product.category.zooAquarium.label",
      message: "動物園與水族館",
    }),
    color: "#2F9FCF",
    icon: Fish,
    examples: translate({
      id: "product.category.zooAquarium.examples",
      message: "沖繩美麗海水族館、龍柏無尾熊保護區",
    }),
  },
  {
    key: "themePark",
    label: translate({
      id: "product.category.themePark.label",
      message: "主題樂園",
    }),
    color: "#E2568F",
    icon: FerrisWheel,
    examples: translate({
      id: "product.category.themePark.examples",
      message: "哈比村",
    }),
  },
  {
    key: "landmark",
    label: translate({
      id: "product.category.landmark.label",
      message: "地標與觀景台",
    }),
    color: "#6B7C8F",
    icon: Binoculars,
    examples: translate({
      id: "product.category.landmark.examples",
      message: "南山N首爾塔、太平山頂、皇后鎮天空纜車",
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
      message: "北投分館、星空圖書館、維多利亞州立圖書館",
    }),
  },
  {
    key: "bookstore",
    label: translate({
      id: "product.category.bookstore.label",
      message: "書店",
    }),
    color: "#2E5E4E",
    icon: Library,
    examples: translate({
      id: "product.category.bookstore.examples",
      message: "誠品書店、蔦屋書店、莎士比亞書店",
    }),
  },
  {
    key: "campus",
    label: translate({
      id: "product.category.campus.label",
      message: "校園",
    }),
    color: "#7D8F2A",
    icon: GraduationCap,
    examples: translate({
      id: "product.category.campus.examples",
      message: "臺灣大學、東京大學、墨爾本大學",
    }),
  },
  {
    key: "heritage",
    label: translate({
      id: "product.category.heritage.label",
      message: "古蹟",
    }),
    color: "#8B5E3C",
    icon: Castle,
    examples: translate({
      id: "product.category.heritage.examples",
      message: "赤崁樓、億載金城、淡水紅毛城",
    }),
  },
  {
    key: "worship",
    label: translate({
      id: "product.category.worship.label",
      message: "宗教聖地",
    }),
    color: "#7A1F2B",
    icon: Church,
    examples: translate({
      id: "product.category.worship.examples",
      message: "鹿港龍山寺、淺草寺、聖母聖殿",
    }),
  },
  {
    key: "shopping",
    label: translate({
      id: "product.category.shopping.label",
      message: "購物與商圈",
    }),
    color: "#0097A7",
    icon: ShoppingBag,
    examples: translate({
      id: "product.category.shopping.examples",
      message: "明洞、銅鑼灣、哈洛德百貨",
    }),
  },
  {
    key: "market",
    label: translate({
      id: "product.category.market.label",
      message: "市集",
    }),
    color: "#A63A7E",
    icon: Store,
    examples: translate({
      id: "product.category.market.examples",
      message: "築地場外市場、札嘎其市場、維多利亞女王市場",
    }),
  },
  {
    key: "nightMarket",
    label: translate({
      id: "product.category.nightMarket.label",
      message: "夜市",
    }),
    color: "#2F2A62",
    icon: MoonStar,
    examples: translate({
      id: "product.category.nightMarket.examples",
      message: "逢甲夜市、六合夜市、廟街夜市",
    }),
  },
  {
    key: "food",
    label: translate({
      id: "product.category.food.label",
      message: "美食",
    }),
    color: "#B7343C",
    icon: Soup,
    examples: translate({
      id: "product.category.food.examples",
      message: "阿宗麵線、安德魯餅店、蘭芳園",
    }),
  },
  {
    key: "cafe",
    label: translate({
      id: "product.category.cafe.label",
      message: "咖啡廳",
    }),
    color: "#6F4E37",
    icon: Coffee,
    examples: translate({
      id: "product.category.cafe.examples",
      message: "老字號咖啡館、星巴克臻選烘焙工坊",
    }),
  },
  {
    key: "airport",
    label: translate({
      id: "product.category.airport.label",
      message: "機場",
    }),
    color: "#5C6BC0",
    icon: Plane,
    examples: translate({
      id: "product.category.airport.examples",
      message: "桃園機場、羽田機場、仁川機場",
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
      message: "內灣車站、東京車站、福林德斯街車站",
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
      message: "噶瑪蘭威士忌酒廠、白色戀人公園、維利奇卡鹽礦",
    }),
  },
  {
    key: "nature",
    label: translate({
      id: "product.category.nature.label",
      message: "自然景點",
    }),
    color: "#1F7A6C",
    icon: Trees,
    examples: translate({
      id: "product.category.nature.examples",
      message: "萬座毛、尼加拉瀑布、太魯閣國家公園",
    }),
  },
  {
    key: "archaeologicalSite",
    label: translate({
      id: "product.category.archaeologicalSite.label",
      message: "考古遺址",
    }),
    color: "#B5654A",
    icon: Pyramid,
    examples: translate({
      id: "product.category.archaeologicalSite.examples",
      message: "吉薩金字塔、阿布辛貝神殿、今歸仁城跡",
    }),
  },
  {
    key: "historicDistrict",
    label: translate({
      id: "product.category.historicDistrict.label",
      message: "歷史街區與特色聚落",
    }),
    color: "#B56576",
    icon: House,
    examples: translate({
      id: "product.category.historicDistrict.examples",
      message: "九份老街、京都祇園、白川鄉合掌村",
    }),
  },
  {
    key: "castlePalace",
    label: translate({
      id: "product.category.castlePalace.label",
      message: "城堡與宮殿",
    }),
    color: "#5B2C83",
    icon: Crown,
    examples: translate({
      id: "product.category.castlePalace.examples",
      message: "大阪城、景福宮、姬路城",
    }),
  },
  {
    key: "memorial",
    label: translate({
      id: "product.category.memorial.label",
      message: "紀念地",
    }),
    color: "#7E6E8F",
    icon: Medal,
    examples: translate({
      id: "product.category.memorial.examples",
      message: "廣島和平紀念公園、國立中正紀念堂",
    }),
  },
  {
    key: "parkGarden",
    label: translate({
      id: "product.category.parkGarden.label",
      message: "公園與花園",
    }),
    color: "#43A047",
    icon: Flower2,
    examples: translate({
      id: "product.category.parkGarden.examples",
      message: "臺北植物園、中央公園、兼六園",
    }),
  },
  {
    key: "beachIsland",
    label: translate({
      id: "product.category.beachIsland.label",
      message: "海灘與島嶼",
    }),
    color: "#1E88E5",
    icon: TreePalm,
    examples: translate({
      id: "product.category.beachIsland.examples",
      message: "白沙灣、七星潭、漁光島",
    }),
  },
  {
    key: "hotSpring",
    label: translate({
      id: "product.category.hotSpring.label",
      message: "溫泉",
    }),
    color: "#C75B12",
    icon: Bath,
    examples: translate({
      id: "product.category.hotSpring.examples",
      message: "北投地熱谷、礁溪溫泉公園",
    }),
  },
  {
    key: "hotelStay",
    label: translate({
      id: "product.category.hotelStay.label",
      message: "住宿與特色旅宿",
    }),
    color: "#A07A10",
    icon: BedDouble,
    examples: translate({
      id: "product.category.hotelStay.examples",
      message: "圓山大飯店、芳堤娜城堡",
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
      message: "老車站：木造月台的時光",
    }),
    region: translate({
      id: "product.collection.tw-railway-classic-6.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-railway-classic-6.description",
      message: "從山城內灣到平溪菁桐，一座座老車站還留著木造站房和手寫時刻表的味道，一站蓋一枚。",
    }),
    accent: "#8B5E3C",
    spotCount: 6,
  },
  {
    id: "tw-tainan-walk",
    name: translate({
      id: "product.collection.tw-tainan-walk.name",
      message: "府城散策：古堡、老車站與一碗豆花",
    }),
    region: translate({
      id: "product.collection.tw-tainan-walk.region",
      message: "臺南",
    }),
    description: translate({
      id: "product.collection.tw-tainan-walk.description",
      message: "走過荷蘭城堡和昭和車站，看完新圖書館與奇美，最後在安平吃一碗豆花收尾。",
    }),
    accent: "#C25E3A",
    spotCount: 6,
  },
  {
    id: "tw-museum-grand-tour",
    name: translate({
      id: "product.collection.tw-museum-grand-tour.name",
      message: "北中南博物館：換個方式看世界",
    }),
    region: translate({
      id: "product.collection.tw-museum-grand-tour.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-museum-grand-tour.description",
      message: "從故宮的翠玉白菜到科博館的恐龍，北中南的博物館，一趟看遍藝術、自然與海港。",
    }),
    accent: "#3A5FA0",
    spotCount: 6,
  },
  {
    id: "tw-street-food-map",
    name: translate({
      id: "product.collection.tw-street-food-map.name",
      message: "夜市小吃：把臺灣吃過一遍",
    }),
    region: translate({
      id: "product.collection.tw-street-food-map.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-street-food-map.description",
      message: "一碗大腸麵線、一盤火雞肉飯、一顆包子，一站一站吃下去，把臺灣的小吃地圖蓋滿。",
    }),
    accent: "#B7343C",
    spotCount: 7,
  },
  {
    id: "tw-heritage-trail",
    name: translate({
      id: "product.collection.tw-heritage-trail.name",
      message: "古蹟尋跡：荷蘭、清朝到日治",
    }),
    region: translate({
      id: "product.collection.tw-heritage-trail.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-heritage-trail.description",
      message: "荷蘭人的紅磚、清朝的廟宇、日治的街屋，一座座古蹟串起四百年的島嶼故事。",
    }),
    accent: "#6B7280",
    spotCount: 6,
  },
  {
    id: "tw-quiet-reading-room",
    name: translate({
      id: "product.collection.tw-quiet-reading-room.name",
      message: "島嶼閱讀：城市裡最安靜的角落",
    }),
    region: translate({
      id: "product.collection.tw-quiet-reading-room.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-quiet-reading-room.description",
      message: "森林裡的北投分館、綠美圖的玻璃書牆，這些圖書館是每座城市最安靜的角落。",
    }),
    accent: "#4E7A57",
    spotCount: 6,
  },
  {
    id: "tw-factory-day-trip",
    name: translate({
      id: "product.collection.tw-factory-day-trip.name",
      message: "觀光工廠：威士忌、巧克力與漢餅",
    }),
    region: translate({
      id: "product.collection.tw-factory-day-trip.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-factory-day-trip.description",
      message: "聞一聞威士忌桶、捏一塊巧克力、畫一支蠟筆，每一座觀光工廠都能動手做。",
    }),
    accent: "#E0A02E",
    spotCount: 6,
  },
  {
    id: "tw-botanical-garden-picks",
    name: translate({
      id: "product.collection.tw-botanical-garden-picks.name",
      message: "植物園與森林：放慢腳步呼吸",
    }),
    region: translate({
      id: "product.collection.tw-botanical-garden-picks.region",
      message: "全臺",
    }),
    description: translate({
      id: "product.collection.tw-botanical-garden-picks.description",
      message: "城市裡的植物園到山裡的森林遊樂區，每一處都適合放慢腳步，聞著樹的味道走一段。",
    }),
    accent: "#5A8F3D",
    spotCount: 6,
  },
];

// COLLECTIONS 只列首頁展示用的幾條任務集，不是全部。總數跟著
// explorestamp-data-api 的 data/collections.json（src/data/collections.json 是它的副本），目錄更新時一起改。
export const CATALOG_STATS = {
  spots: spots.length,
  categories: CATEGORIES.length,
  collections: collections.length,
};
