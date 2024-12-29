import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { 
  head, 
  nav, 
  sidebar,
  // algolia
} from './configs'

export default defineConfig({
  title: '江湖聊IT',
  description: '给时光以效率，给岁月以成长，欢迎来到【江湖聊IT】。在这个信息爆炸、时间紧迫的时代，尽管每日忙碌，却难成有意义之事。作为效率探索者，我创建了此平台，分享节省时间、提升效率的工具与方法，助你腾出更多时间专注于成长和快乐。',
  /* 主题定制 */ 
  cleanUrls: true,
  lang: 'zh-CN',
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: '/logo.jpg',
    nav,
    sidebar,
    // algolia,
    search: {
      provider: 'local',
      options: {
        placeholder: '搜索',
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        } 
      }
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },
    comment: {
      repo: 'fullstackren/fullstackren.github.io',
      repoId: 'R_kgDOLUQ83Q',
      category: 'Announcements',
      categoryId: 'DIC_kwDOLUQ83c4Clk1a',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    visitor: {
      badgeId: "fullstackren.fullstackren.github.io"
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
    vite: {
      plugins: [MarkdownPreview()],
    },
  },
  head
})
