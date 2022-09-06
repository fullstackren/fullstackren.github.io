const path = require('path');
const {
  // 初心
  chuxinSidebar,
  // 技术栈
  htmlSidebar,
  cssSidebar,
  javascriptSidebar,
  nodejsSidebar,
  vueSidebar,
  reactSidebar,
  linuxSidebar,
  tauriSidebar,
  // 知识体系
  frontendEngineeringSidebar,
  microFrontendsSidebar,
  // 架构
  architectureSidebar,
  // 工具方法
  niceToolsSidebar,
  uiSidebar,
  umlSidebar,
  gitSidebar,
  designPatternsSidebar,
  studyAssetsSidebar,
  manageSidebar,
  abstractSidebar,
  conceptSidebar,
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
    sidebarDepth: 2,
    nav: [
      { text: '主页', link: '/' },
      { text: '初心', link: '/chuxin/' },
      {
        text: '技术栈', items: [
          { text: 'HTML', link: '/html/'},
          { text: 'CSS', link: '/css/'},
          { text: 'Javascript', link: '/javascript/'},
          { text: 'Nodejs', link: '/nodejs/'},
          { text: 'Vue', link: '/vue/'},
          { text: 'React', link: '/react/'},
          { text: 'linux', link: '/linux/' },
          { text: 'Tauri', link: '/tauri/'},
        ]
      },
      {
        text: '知识体系', items: [
          { text: '前端工程化', link: '/frontend-engineering/' },
          { text: '微前端', link: '/micro-frontends/'},
        ]
      },
      // 开源
      // 最佳实践
      {
        text: '架构', link: '/architecture/'
      },
      {
        text: '工具方法', items: [
          { text: '好用工具', link: '/nice-tools/'},
          { text: 'UI', link: '/ui/'},
          { text: 'UML', link: '/uml/'},
          { text: 'Git 使用', link: '/git/'},
          { text: '设计模式', link: '/design-patterns/'},
          { text: '学习资源', link: '/study-assets/'},
          { text: '管理', link: '/manage/'},
          { text: '文摘', link: '/abstract/'},
          { text: '互联网概念', link: '/concept/'},
        ]
      },
      {
        text: '看世界', link: '/world/'
      }
    ],
    // 侧边栏
    sidebar: {
      // 初心
      '/chuxin/': chuxinSidebar,
      // 技术栈
      '/html/': htmlSidebar,
      '/css/': cssSidebar,
      '/javascript/': javascriptSidebar,
      '/nodejs/': nodejsSidebar,
      '/vue/': vueSidebar,
      '/react/': reactSidebar,
      '/linux/': linuxSidebar,
      '/tauri/': tauriSidebar,
      // 知识体系
      '/frontend-engineering/': frontendEngineeringSidebar,
      '/micro-frontends/': microFrontendsSidebar,
      // 架构
      '/architecture/': architectureSidebar,
      // 工具方法
      '/nice-tools/': niceToolsSidebar,
      '/ui/': uiSidebar,
      '/uml/': umlSidebar,
      '/git/': gitSidebar,
      '/design-patterns/': designPatternsSidebar,
      '/study-assets/': studyAssetsSidebar,
      '/manage/': manageSidebar,
      '/abstract/': abstractSidebar,
      '/concept/': conceptSidebar,
      // 看世界
      '/world/': worldSidebar
    }
  },
}