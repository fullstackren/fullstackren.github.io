import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发者路线', link: '/roadmap', activeMatch: '^/roadmap' },
  { text: '技术文章',
    items: [
      { text: '前端框架', link: '/web/framework' },
      { text: 'ES6', link: '/web/es6' },
      { text: 'JavaScript', link: '/web/javascript' },
      { text: 'HTML', link: '/web/html' },
      { text: 'CSS', link: '/web/css' },
      { text: 'Web API', link: '/web/web-api' },
      { text: 'TypeScript', link: '/web/typescript' },
      { text: '工程化', link: '/engineering' },
    ]
  },
  // { text: '付费课程', link: '/course/' },
  // { text: '个人成长', link: '/grow/' },
  { text: '专栏专讲', link: '/column/' },
  { text: '工具提效', link: '/efficiency' },
  { text: '交个朋友', link: '/make-a-friend' },
  // { text: '打赏赞助', link: '/sponsors' },
]