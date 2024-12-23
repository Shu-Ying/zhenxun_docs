/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  aboutSidebar: ["about"],
  faqSidebar: ["faq"],
  installSidebar: [
    "install/intro",
    {
      type: "category",
      label: "安装数据库(三选一)",
      items: [
        "install/install-sql/sqlite",
        {
          type: "category",
          label: "Postgresql",
          items: [
            "install/install-sql/postgresql/linux",
            "install/install-sql/postgresql/windows",
          ],
        },
        "install/install-sql/mysql",
      ],
    },
    "install/install-qq",
    "install/install-zhenxun",
    {
      type: "category",
      label: "安装WebUI(二选一)",
      items: [
        "install/webui/install-webui-default",
        "install/webui/install-webui-nginx",
      ],
    },
  ],
  devSidebar: [
    "development/base_data",
    "development/config",
    "development/shop",
    "development/message",
  ],
  usageSidebar: [
    {
      type: "category",
      label: "内置插件",
      items: [{ type: "autogenerated", dirName: "usage/builtin_plugins" }],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
}

export default sidebars
