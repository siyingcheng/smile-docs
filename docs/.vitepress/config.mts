import { defineConfig } from "vitepress";

const appiumSideBar = [
  {
    text: "Appium",
    link: "/auto-frameworks/appium/",
    items: [
      {
        text: "Appium Server Setup",
        link: "/auto-frameworks/appium/appium-setup",
      },
      {
        text: "Appium Client Basic Usage",
        link: "/auto-frameworks/appium/appium-client-basic-usage",
      },
      {
        text: "Limitations of Appium",
        link: "/auto-frameworks/appium/appium-limitations",
      },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Let's do it",
  description: "A pages site write by Simon",
  base: "/smile-docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Automation Frameworks",
        items: [
          {
            text: "Appium",
            link: "/auto-frameworks/appium/",
          },
        ],
        activeMatch: "/auto-frameworks/",
      },
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: {
      "/auto-frameworks/appium/": appiumSideBar,
    },
    socialLinks: [{ icon: "github", link: "https://github.com/siyingcheng" }],
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
        hourCycle: "h24",
      },
    },
    search: {
      provider: "local",
    },
  },
  markdown: {
    math: true,
  },
});
