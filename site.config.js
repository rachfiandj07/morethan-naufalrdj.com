const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Naufal Djamhur",
    image: "/me.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "Opinionated Engineer, thriving to became 1% engineer in the nearly-future, love to share anything in my software engineering journey!. Sometimes in Indonesia 🇮🇩/ 🇸🇬 Singapore",
    email: "naufalrdj@gmail.com",
    linkedin: "rdj007",
    github: "rachfiandj07",
    instagram: "",
  },
  projects: [
    {
      name: `morethan-naufalrdj.com`,
      href: "https://github.com/rachfiandj07/morethan-naufalrdj.com",
    },
  ],
  // blog setting (required)
  blog: {
    title: "🧑‍💻 Your Code Craftsman",
    description: "welcome to morethan-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://www.morethan-naufalrdj.com/",
  since: "2023", // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Naufal Djamhur", "Djamhur", "Muhammad Naufal", "Rachfian", "naufalrdj", "naufaldjamhur", "rachfiandjamhur", "muhammadnaufalrachfiandjamhur", "muhammad naufal rachfian djamhur", "Muhammad Naufal Rachfian Djamhur"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "rachfiandj07/morethan-naufalrdj.com",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
