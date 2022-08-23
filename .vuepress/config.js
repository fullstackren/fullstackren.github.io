const path = require('path');
const {
  microFrontends: microFrontendsSidebar,
  designPatterns: designPatternsSidebar
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
    ['meta', { name: 'baidu-site-verification', content: ''}],
    ['meta', { name: 'google-site-verification', content: ''}] 
  ],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/logo.png',
    repo: 'fullstackren/fullstackren.github.io.git',
    sidebarDepth: 2,
    nav: [
      { text: '主页', link: '/' },
      {
        text: '技术栈', items: [
          { text: '微前端', link: '/micro-frontends/'}
        ]
      },
      {
        text: '方法论', items: [
          { text: '设计模式', link: '/design-patterns/'}
        ]
      },
      {
        text: '看世界', items: [
          { text: '大好河山', link: '/world/river-mountain'}
        ]
      },
      {
        text: '友情链接', items: [
          { text: '山月行', link: 'https://shanyue.tech/' },
          { text: 'itclanCoder', link: 'https://coder.itclan.cn/' },
          { text: '若川', link: 'https://lxchuan12.gitee.io' },
          { text: 'sorrycc', link: 'https://sorrycc.com/'}
        ]
      },
    ],
    // 侧边栏
    sidebar: {
      '/micro-frontends/': microFrontendsSidebar,
      '/design-patterns/': designPatternsSidebar
    }
  },
}