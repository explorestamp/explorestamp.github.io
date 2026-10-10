import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ExploreStamp 探索印記",
  tagline: "把每一次旅行，蓋成一枚印章",
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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
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
          label: "收錄景點",
        },
        { to: "/blog", label: "文章", position: "left" },
        { to: "/about", label: "關於", position: "left" },
        {
          href: "https://facebook.com/groups/explorestamp",
          label: "社群",
          position: "left",
        },
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
            { label: "收錄景點", to: "/explore" },
            { label: "下載 App", to: "/#download" },
            { label: "隱私權政策", to: "/privacy" },
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
            { label: "explorestamp@gmail.com", href: "mailto:explorestamp@gmail.com" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ExploreStamp 探索印記・由 <a href="https://www.kdchang.com">KD Chang</a> 於臺灣開發`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
