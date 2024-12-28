import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发者路线', link: '/roadmap', activeMatch: '^/roadmap' },
  { text: 'Web 开发',
    items: [
      { text: 'HTML', link: '/fe/web/html' },
      { text: 'CSS', link: '/fe/web/css' },
      { text: 'JavaScript', link: '/fe/web/javascript' },
      { text: 'ES6', link: '/fe/web/es6' },
      { text: 'Web API', link: '/fe/web/web-api' },
      { text: 'TypeScript', link: '/fe/web/typescript' },
      { text: 'Vue2', link: '/fe/web/framework/vue2' },
    ]
  },
  { text: '后端开发', link: '/be/' },
  { text: '计算机基础', link: '/computer-science/' },
  { text: '工具提效', link: '/efficiency' },
  { text: '关于', link: '/about' },
]