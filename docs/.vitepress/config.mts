import { defineConfig } from "vitepress";

const ourStoreSidebar = [{ text: "Our Story", link: "/about/our-story" }];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pages build by VitePress",
  description: "A VitePress Pages Site",
  base: "/smile-docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact" },
    ],

    sidebar: {
      "/about": ourStoreSidebar,
    },
    // [
    // {
    //   text: "Our Story",
    //   link: "/about/our-story",
    //   // items: [
    //   //   { text: "Markdown Examples", link: "/markdown-examples" },
    //   //   { text: "Runtime API Examples", link: "/api-examples" },
    //   // ],
    // },
    // ],

    socialLinks: [{ icon: "github", link: "https://github.com/siyingcheng" }],
  },
});
