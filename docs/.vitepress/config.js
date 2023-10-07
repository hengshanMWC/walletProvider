import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'pkgs-template',
  description: 'pkgs模板',
  base: '/',
  themeConfig: {
    siteTitle: 'pkgs-template',
    sidebar: [
      {
        text: '介绍',
        collapsible: true,
        items: [
          {
            text: 'demo',
            link: '/',
          },
        ],
      },
    ],
  },
})
