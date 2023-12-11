import { defineConfig } from "vitepress";

const ourStoreSidebar = [{ text: "Our Story", link: "/about/our-story" }];

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
        items: [{ text: "Appium", link: "/auto-frameworks/appium" }],
      },
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: {},
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
});
