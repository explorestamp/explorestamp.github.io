import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 網站標題與標語不在翻譯檔的範圍內，依建置中的語系挑選。
// Docusaurus 建置每個語系時會設定 DOCUSAURUS_CURRENT_LOCALE。
const SITE_META: Record<string, { title: string; tagline: string }> = {
  "zh-TW": {
    title: "ExploreStamp 探索印記",
    tagline: "把每一次旅行，蓋成一枚印章",
  },
  en: {
    title: "ExploreStamp",
    tagline: "Turn every trip into a stamp",
  },
};
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? "zh-TW";
const siteMeta = SITE_META[currentLocale] ?? SITE_META["zh-TW"];

const config: Config = {
  title: siteMeta.title,
  tagline: siteMeta.tagline,
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.explorestamp.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "explorestamp", // Usually your GitHub org/user name.
  projectName: "explorestamp.github.io", // repo

  onBrokenLinks: "throw",

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600;700&display=swap",
      type: "text/css",
    },
  ],

  // 預設語系 zh-TW 走根路徑 /，英文在 /en/ 底下。
  // 翻譯檔在 i18n/<locale>/，新增字串後用 `npm run write-translations` 產生。
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW", "en"],
    localeConfigs: {
      "zh-TW": { label: "繁體中文", htmlLang: "zh-TW" },
      en: { label: "English", htmlLang: "en" },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-NV48BKMN", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/explore",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        docsRouteBasePath: "/explore",
        blogRouteBasePath: "/blog",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://www.explorestamp.com/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "ExploreStamp",
      logo: {
        alt: "ExploreStamp 探索印記",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "resourceSidebar",
          position: "left",
          label: "主題探索",
        },
        { to: "/blog", label: "文章", position: "left" },
        { to: "/about", label: "關於", position: "left" },
        {
          href: "https://facebook.com/groups/explorestamp",
          label: "社群",
          position: "left",
        },
        { type: "localeDropdown", position: "right" },
        {
          to: "/#download",
          label: "下載 App",
          position: "right",
          className: "navbar__download-cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "產品",
          items: [
            { label: "主題探索", to: "/explore" },
            { label: "下載 App", to: "/#download" },
            { label: "隱私權政策", to: "/privacy" },
            { label: "感謝", to: "/credits" },
          ],
        },
        {
          title: "內容",
          items: [
            { label: "文章", to: "/blog" },
            { label: "電子報", href: "https://explorestamp.substack.com/" },
            { label: "關於探索印記", to: "/about" },
          ],
        },
        {
          title: "社群",
          items: [
            {
              label: "Facebook 社團",
              href: "https://facebook.com/groups/explorestamp",
            },
            {
              label: "Facebook 粉絲專頁",
              href: "https://www.facebook.com/explorestamp",
            },
            { label: "Instagram", href: "https://www.instagram.com/explorestamp" },
          ],
        },
        {
          title: "聯絡",
          items: [
            { label: "聯絡信箱", href: "mailto:explorestamp@gmail.com" },
          ],
        },
        {
          // 連到同一頁的另一個語言版本，見 src/theme/Footer/LinkItem。
          // `to` 只是設定格式要求的佔位，實際網址由 locale 算出來。
          title: "語言",
          items: [
            { label: "繁體中文", to: "/", locale: "zh-TW" },
            { label: "English", to: "/", locale: "en" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ${siteMeta.title}. Built with ❤️ by <a href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
