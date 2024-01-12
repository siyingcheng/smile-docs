import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

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
            text: "Touch (@Deprecated) 👎",
            link: "/auto-frameworks/appium/ios/touch.md",
          },
          {
            text: "Gestures (W3C) 👍",
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

const sqlSideBar = [
  {
    text: "SQL",
    link: "/notes/sql/",
    items: [
      {
        text: "How to connect database",
        link: "/notes/sql/How-to-connect-db.md",
      },
      {
        text: "Types of SQL Commands",
        link: "/notes/sql/Types-of-SQL-commands.md",
      },
      {
        text: "Common SQL Data Types",
        link: "/notes/sql/Common-SQL-data-types.md",
      },
      {
        text: "SQL Operators",
        link: "/notes/sql/SQL-Operators.md",
      },
      {
        text: "DDL",
        link: "/notes/sql/DDL.md",
      },
      {
        text: "DML",
        link: "/notes/sql/DML.md",
      },
      {
        text: "DQL",
        link: "/notes/sql/DQL.md",
      },
      {
        text: "Functions",
        link: "/notes/sql/Functions.md",
      },
      {
        text: "JOIN",
        link: "/notes/sql/JOIN.md",
      },
      {
        text: "Trigger",
        link: "/notes/sql/Trigger.md",
      },
      {
        text: "Procedures",
        link: "/notes/sql/Procedures.md",
      },
      {
        text: "SQL Injection",
        link: "/notes/sql/SQL-Injection.md",
      },
      {
        text: "PostgreSQL Commands",
        link: "/notes/sql/PostgreSQL-commands.md",
      },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Let's do it",
    description: "A pages site write by Simon",
    base: "/smile-docs",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        {
          text: "Notes",
          items: [
            {
              text: "SQL",
              link: "/notes/sql/",
            },
          ],
          activeMatch: "/notes/",
        },
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
        "/notes/sql/": sqlSideBar,
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
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
  })
);
