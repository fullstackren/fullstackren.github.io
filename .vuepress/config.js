const path = require('path');
const {
  // 技术栈
  htmlSidebar,
  cssSidebar,
  javascriptSidebar,
  nodejsSidebar,
  vueSidebar,
  reactSidebar,
  // 实战体系
  frontendEngineeringSidebar,
  microFrontendsSidebar,
  // 工具方法
  designPatternsSidebar,
  gitSidebar,
  studyAssetsSidebar,
  uiSidebar,
  conceptSidebar,
  // 分享这件事
  shareSidebar,
  // 看世界
  worldSidebar,
} = require('./sidebar');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  base: '/',
  title: '全栈孤勇者',
  patterns: ['**/*.md', '**/*.vue', '**/*.svg'],
  description: '全栈孤勇者之路',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'baidu-site-verification', content: 'F162aQBZSM'}],
    ['meta', { name: 'google-site-verification', content: ''}] 
  ],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/logo.png',
    // repo: 'fullstackren/fullstackren.github.io.git',
    sidebarDepth: 2,
    nav: [
      { text: '主页', link: '/' },
      {
        text: '技术分享', link: '/share/'
      },
      {
        text: '技术栈', items: [
          { text: 'HTML', link: '/html/'},
          { text: 'CSS', link: '/css/'},
          { text: 'Javascript', link: '/javascript/'},
          { text: 'Nodejs', link: '/nodejs/'},
          { text: 'Vue', link: '/vue/'},
          { text: 'React', link: '/react/'}
        ]
      },
      {
        text: '实战体系', items: [
          { text: '前端工程化', link: '/frontend-engineering/' },
          { text: '微前端', link: '/micro-frontends/'},
        ]
      },
      {
        text: '工具方法', items: [
          { text: 'UI', link: '/ui/'},
          { text: 'Git 使用', link: '/git/'},
          { text: '学习资源', link: '/study-assets/'},
          { text: '互联网概念', link: '/concept/'},
          { text: '设计模式', link: '/design-patterns/'},
        ]
      },
      {
        text: '看世界', link: '/world/'
      }
    ],
    // 侧边栏
    sidebar: {
      // 技术栈
      '/html/': htmlSidebar,
      '/css/': cssSidebar,
      '/javascript/': javascriptSidebar,
      '/nodejs/': nodejsSidebar,
      '/vue/': vueSidebar,
      '/react/': reactSidebar,
      // 实战体系
      '/frontend-engineering/': frontendEngineeringSidebar,
      '/micro-frontends/': microFrontendsSidebar,
      // 工具方法
      '/design-patterns/': designPatternsSidebar,
      '/git/': gitSidebar,
      '/study-assets/': studyAssetsSidebar,
      '/ui/': uiSidebar,
      '/concept/': conceptSidebar,
      // 分享这件事
      '/share/': shareSidebar,
      // 看世界
      '/world/': worldSidebar
    }
  },
}