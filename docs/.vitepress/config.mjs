import path from 'node:path'
import { defineConfig } from 'vitepress'
import { repository } from '../../package.json'

// const loginPath = '../assets/images/logo.svg'
const githubPath = repository.url.replace(/git\+/, '')

export default defineConfig({
  outDir: path.join(__dirname, '../dist'),
  title: 'walletProvider',
  description: '实现eip-6963和eip-1193代理',
  base: '/walletProvider/docs/dist/',
  head: [
    // ['link', { rel: 'icon', href: loginPath }],
  ],
  themeConfig: {
    siteTitle: 'walletProvider',
    // logo: loginPath,
    socialLinks: [
      { icon: 'github', link: githubPath },
    ],
    sidebar: [
      {
        text: '指南',
        collapsible: true,
        items: [
          {
            text: '简介', // 做什么、为什么要用、思想
            link: '/',
          },
          {
            text: '快速起步', // 依赖安装、模板下载、运行命令
            link: '/use',
          },
        ],
      },
      {
        text: 'API',
        collapsible: true,
        items: [
          {
            text: 'Receive',
            link: 'api/Receive',
          },
        ],
      },
    ],
  },
})
