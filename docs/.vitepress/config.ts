import { defineConfig } from 'vitepress'
import { head, nav, sidebar, algolia } from './configs'

export default defineConfig({
  title: '江湖聊IT',
  description: '给时光以效率，给岁月以成长，欢迎来到【江湖聊IT】。在这个信息爆炸、时间紧迫的时代，尽管每日忙碌，却难成有意义之事。作为效率探索者，我创建了此平台，分享节省时间、提升效率的工具与方法，助你腾出更多时间专注于成长和快乐。',
  /* 主题定制 */ 
  themeConfig: {
    logo: '/logo.jpg',
    nav,
    sidebar,
    algolia,
    comment: {
      repo: 'fullstackren/fullstackren.github.io',
      repoId: '',
      category: 'Announcements',
      categoryId: '',
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2011-present 江湖聊IT',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/fullstackren' }],
  },
  head
})
