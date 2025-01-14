import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发者路线', link: '/roadmap', activeMatch: '^/roadmap' },
  // { text: '付费课程', link: '/course/' },
  // { text: '个人成长', link: '/grow/' },
  { text: '专栏专讲', link: '/column/' },
  { text: '思维方法', link: '/thinking/working-mode' },
  { text: '工具提效', link: '/efficiency' },
  { text: '交个朋友', link: '/make-a-friend' },
  // { text: '打赏赞助', link: '/sponsors' },
]