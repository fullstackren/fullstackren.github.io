const path = require('path');
const {
  topicSidebar,
  aiSidebar,
  babelSidebar,
  cSidebar,
  cssSidebar,
  htmlSidebar,
  javascriptSidebar,
  jestSidebar,
  linuxSidebar,
  npmSidebar,
  nodejsSidebar,
  lernaSidebar,
  pythonSidebar,
  reactSidebar,
  rustSidebar,
  tauriSidebar,
  typescriptSidebar,
  vueSidebar,
  vue3Sidebar,
  frontendEngineeringSidebar,
  microFrontendsSidebar,
  browserSidebar,
  architectureSidebar,
  readSidebar,
  umlSidebar,
  gitSidebar,
  designPatternsSidebar,
  assetsSidebar,
  securityLawRegulationSidebar,
  financialMarketBasicsSidebar,
  pmpSidebar,
  manageSidebar,
  articleSidebar,
  baseKnowledgeSidebar,
  webpackSidebar,
  webComponentSidebar,
  worldSidebar
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
  description: '全栈孤勇者',
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
    repo: 'fullstackren/fullstackren.github.io.git',
    sidebarDepth: 1,
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about/' },
      { text: '友情链接', link: '/friendly-link/' },
    ],
    sidebar: {
      '/topic/': topicSidebar,
      '/ai/': aiSidebar,
      '/babel/': babelSidebar,
      '/c/': cSidebar,
      '/css/': cssSidebar,
      '/html/': htmlSidebar,
      '/javascript/': javascriptSidebar,
      '/jest/': jestSidebar,
      '/npm/': npmSidebar,
      '/nodejs/': nodejsSidebar,
      '/lerna/': lernaSidebar,
      '/linux/': linuxSidebar,
      '/python/': pythonSidebar,
      '/react/': reactSidebar,
      '/rust/': rustSidebar,
      '/tauri/': tauriSidebar,
      '/typescript/': typescriptSidebar,
      '/vue/': vueSidebar,
      '/vue3/': vue3Sidebar,
      '/architecture/': architectureSidebar,
      '/base-knowledge/': baseKnowledgeSidebar,
      '/frontend-engineering/': frontendEngineeringSidebar,
      '/micro-frontends/': microFrontendsSidebar,
      '/browser/': browserSidebar,
      '/read/': readSidebar,
      '/uml/': umlSidebar,
      '/git/': gitSidebar,
      '/design-patterns/': designPatternsSidebar,
      '/assets/': assetsSidebar,
      '/security-law-regulation/': securityLawRegulationSidebar,
      '/financial-market-basics/': financialMarketBasicsSidebar,
      '/pmp/': pmpSidebar,
      '/manage/': manageSidebar,
      '/article/': articleSidebar,
      '/webpack/': webpackSidebar,
      '/web-component/': webComponentSidebar,
      '/world/': worldSidebar
    }
  },
}