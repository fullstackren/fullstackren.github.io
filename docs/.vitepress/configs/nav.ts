import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发者路线', link: '/roadmap', activeMatch: '^/roadmap' },
  { text: 'Web 开发', link: '/fe/web/' },
  { text: '后端开发', link: '/be/' },
  { text: '工具提效', link: '/tool/' },
  { text: '关于', link: '/about/' },
]