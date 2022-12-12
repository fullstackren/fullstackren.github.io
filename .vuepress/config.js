const path = require('path');
const {
  // 话题
  topicSidebar,
  // 技术栈
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
  // 知识体系
  frontendEngineeringSidebar,
  microFrontendsSidebar,
  browserSidebar,
  // 架构
  architectureSidebar,
  // 工具方法
  readSidebar,
  uiSidebar,
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
  // 看世界
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
    // repo: 'fullstackren/fullstackren.github.io.git',
    sidebarDepth: 1,
    nav: [
      { text: '主页', link: '/' },
      { text: '话题', link: '/topic/' },
      {
        text: '技术栈', items: [
          { text: 'Babel', link: '/babel/'},
          { text: 'C', link: '/c/'},
          { text: 'CSS', link: '/css/'},
          { text: 'HTML', link: '/html/'},
          { text: 'Javascript', link: '/javascript/'},
          { text: 'Jest', link: '/jest/'},
          { text: 'Nodejs', link: '/nodejs/'},
          { text: 'Npm', link: '/npm/'},
          { text: 'Lerna', link: '/lerna/'},
          { text: 'Linux', link: '/linux/' },
          { text: 'Python', link: '/python/' },
          { text: 'React', link: '/react/'},
          { text: 'Rust', link: '/rust/'},
          { text: 'Tauri', link: '/tauri/'},
          { text: 'TypeScript', link: '/typescript/'},
          { text: 'Vue', link: '/vue/'},
          { text: 'Vue3', link: '/vue3/'},
        ]
      },
      {
        text: '知识体系', items: [
          { text: 'AI', link: '/ai/'},
          { text: '架构', link: '/architecture/' },
          { text: '文章', link: '/article/'},
          { text: '基础知识', link: '/base-knowledge/'},
          { text: '浏览器', link: '/browser/'},
          { text: '设计模式', link: '/design-patterns/'},
          { text: 'Git', link: '/git/'},
          { text: '前端工程化', link: '/frontend-engineering/' },
          { text: '管理', link: '/manage/'},
          { text: '微前端', link: '/micro-frontends/'},
          { text: 'UML', link: '/uml/'},
          { text: 'UI', link: '/ui/'}
        ]
      },
      {
        text: '资源', items: [
          { text: '资源', link: '/assets/'},
          { text: '金融市场基础', link: '/financial-market-basics/'},
          { text: 'PMP', link: '/pmp/'},
          { text: '阅读', link: '/read/'},
          { text: '证券法律法规', link: '/security-law-regulation/'},
        ]
      },
      {
        text: '看世界', link: '/world/'
      }
    ],
    // 侧边栏
    sidebar: {
      // 话题
      '/topic/': topicSidebar,
      // 技术栈
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
      // 知识体系
      '/architecture/': architectureSidebar,
      '/base-knowledge/': baseKnowledgeSidebar,
      '/frontend-engineering/': frontendEngineeringSidebar,
      '/micro-frontends/': microFrontendsSidebar,
      '/browser/': browserSidebar,
      // 工具方法
      '/read/': readSidebar,
      '/ui/': uiSidebar,
      '/uml/': umlSidebar,
      '/git/': gitSidebar,
      '/design-patterns/': designPatternsSidebar,
      '/assets/': assetsSidebar,
      '/security-law-regulation/': securityLawRegulationSidebar,
      '/financial-market-basics/': financialMarketBasicsSidebar,
      '/pmp/': pmpSidebar,
      '/manage/': manageSidebar,
      '/article/': articleSidebar,
      // 看世界
      '/world/': worldSidebar
    }
  },
}