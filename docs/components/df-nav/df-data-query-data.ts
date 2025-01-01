import type { NavData } from '../../.vitepress/theme/types'

// 数据查询
export const DATA_QUERY_DATA: NavData[] = [
  {
    title: '',
    items: [
      {
        title: 'Can I use',
        desc: '前端 API 兼容性查询。',
        link: 'https://caniuse.com/',
        icon: 'https://caniuse.com/img/favicon-128.png',
      },
      {
        title: 'npm trends',
        desc: '比较 npm package 的大小、下载数据、github 数据等。',
        link: 'https://npmtrends.com/',
        icon: '/icons/npm-trends.png',
      },
    ]
  },
]