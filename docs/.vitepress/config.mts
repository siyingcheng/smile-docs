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
        text: "Image Comparison",
        link: "/auto-frameworks/appium/appium-image-comparison",
      },
      {
        text: "iOS",
        items: [
          {
            text: "Touch (@Deprecated) ⛔",
            link: "/auto-frameworks/appium/ios/touch.md",
          },
          {
            text: "Gestures (W3C) 📖",
            link: "/auto-frameworks/appium/ios/gestures.md",
          },
        ],
      },
      {
        text: "Limitations of Appium",
        link: "/auto-frameworks/appium/appium-limitations",
      },
      {
        text: "How to ❓",
        items: [
          {
            text: "How to swipe to element till visible?",
            link: "/auto-frameworks/appium/How-to-swipe-to-element-till-visible",
          },
        ],
      },
    ],
  },
];

const softwareSidebar = [
  {
    text: "Software",
    items: [
      {
        text: "OpenCV4NodeJs for MacOS",
        link: "/software/opencv4nodejs-macos",
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
        text: "Software",
        link: "/software/opencv4nodejs-macos",
        activeMatch: "/software/",
      },
      {
        text: "Frameworks",
        items: [
          {
            text: "📱 Appium",
            link: "/auto-frameworks/appium/",
          },
        ],
        activeMatch: "/auto-frameworks/",
      },
      { text: "About", link: "/about/" },
    ],
    sidebar: {
      "/auto-frameworks/appium/": appiumSideBar,
      "/software/": softwareSidebar,
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
    outline: {
      level: [2, 5],
    },
  },
  markdown: {
    math: true,
  },
});
