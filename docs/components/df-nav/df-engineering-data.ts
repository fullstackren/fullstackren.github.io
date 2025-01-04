import type { NavData } from '../../.vitepress/theme/types'

// 工程化
export const ENGINEERING_DATA: NavData[] = [
  {
    title: '',
    items: [
      {
        title: 'Node.js',
        desc: '基于 V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.cn/',
        icon: '/icons/node.svg',
      },
      {
        title: 'Deno',
        desc: 'Deno 是一个 JavaScript/TypeScript 的运行时',
        link: 'https://manual.deno.js.cn/introduction',
        icon: '/icons/deno.svg',
      },
      {
        title: 'bun',
        desc: 'JavaScript新一代一站式运行时',
        link: 'https://bun.sh/',
        icon: 'https://bun.sh/logo.svg',
      },
      {
        title: 'Koa',
        desc: '新一代的 Web 后台框架',
        link: 'https://koajs.com/',
        icon: '/icons/koa.svg',
      },
      {
        title: 'Express',
        desc: '快速极简的 Web 框架',
        link: 'https://expressjs.com/zh-cn/',
        icon: '/icons/express.png',
      },
      {
        title: 'Nest.js',
        desc: '渐进式 Node.js 框架，构建高效、可靠和可扩展的 server 应用程序',
        link: 'https://nestjs.com/',
        icon: '/icons/nest.png',
      },
      {
        title: 'ThinkJS',
        desc: '能够使用完整 ES6/7 特性进行开发的 Node.js 应用程序',
        link: 'https://thinkjs.org/',
        icon: '/icons/think.png',
      },
      {
        title: 'npm',
        desc: 'npm 是 JavaScript package 管理工具，在这里可以找到可复用代码，并以强大的全新方式进行聚合',
        link: '/fe/engineering/npm',
        icon: '/icons/npm.png',
      },
      {
        title: 'yarn',
        desc: '快速、可靠和安全的依赖管理',
        link: 'https://classic.yarnpkg.com/zh-Hans/',
        icon: '/icons/yarn.png',
      },
    ]
  }
]