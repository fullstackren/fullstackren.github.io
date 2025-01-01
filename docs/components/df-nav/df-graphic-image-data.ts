import type { NavData } from '../../.vitepress/theme/types'

// 图形图像
export const GRAPHIC_IMAGE_DATA: NavData[] = [
  {
    title: '',
    items: [
      {
        title: 'Carbon',
        desc: '代码图片生成。',
        link: 'https://carbon.now.sh',
        icon: '/icons/carbon.png',
      },
      {
        title: 'TinyPNG',
        desc: '图片压缩工具。',
        link: 'https://tinypng.com',
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
      },
      {
        title: 'Squoosh',
        desc: '基于浏览器的本地图片压缩工具（支持自定义参数和格式转换）。',
        link: 'https://squoosh.app/',
        icon: '/icons/squoosh.png',
      },
      {
        title: 'Shields.io',
        desc: '制作简洁、一致、易读的徽章。',
        link: 'https://shields.io/',
        icon: '/icons/shields.png',
      },
      {
        title: 'Midjourney',
        link: 'https://www.midjourney.com/',
        icon: '/icons/midjourney.png',
        badge: 'AI',
      },
      {
        title: 'Excalidraw',
        desc: '手绘风格流程图',
        link: 'https://excalidraw.com',
        icon: '/icons/excalidraw.ico',
      }
    ]
  }
]