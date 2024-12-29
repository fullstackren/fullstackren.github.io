import type { NavData } from '../../.vitepress/theme/types'

export const EFFICIENCY_DATA: NavData[] = [
  {
    title: '图形图像',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '图片压缩工具。',
        badge: '在线',
        link: 'https://tinypng.com'
      },
    ]
  },
  {
    title: '站点搭建',
    items: [
      {
        title: 'Vitepress',
        desc: '是一个静态网站生成器，它基于 VuePress，并使用 Vite 作为构建工具。',
        link: 'https://www.fullstack.ren/tool/vitepress',
        icon: 'https://vitepress.dev/vitepress-logo-mini.svg',
      },
    ]
  },
]