const path = require('path');
const {
  /* 兴趣 */
  interestWeeklySidebar,
  interestSurveySidebar,
  interestDoneSidebar,
  /* 前端 */
  frontendBrowserSidebar,
  frontendPackagesSidebar,
  /* 后端 */
  backendRustSidebar,
  /* 计算机知识 */
  computerKnowledgeSidebar,
  /* 架构 */
  architectureSidebar
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
  title: '全栈人月',
  patterns: ['**/*.md', '**/*.vue', '**/*.svg'],
  description: '全栈人月',
  head: [
    ['meta', { name: "viewport", content: 'width=device-width,initial-scale=1,maximum-scale=1'}],
    ['meta', { name: 'baidu-site-verification', content: 'code-XDF2R0xFu0'}],
    ['meta', { name: 'google-site-verification', content: ''}],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    [ 'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f17885b1de21e5764929b001ee4d850b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/logo.png',
    // repo: 'fullstackren/fullstackren.github.io.git',
    sidebarDepth: 3,
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      /* 兴趣 */
      '/weekly/': interestWeeklySidebar,
      '/survey/': interestSurveySidebar,
      '/done/': interestDoneSidebar,
      /* 前端 */
      '/frontend/browser/': frontendBrowserSidebar,
      '/frontend/packages/': frontendPackagesSidebar,
      /* 后端 */
      '/backend/rust/': backendRustSidebar,
      /* 计算机知识 */
      '/computer-knowledge/': computerKnowledgeSidebar,
      /* 架构 */
      '/architecture/': architectureSidebar
    }
  }
}