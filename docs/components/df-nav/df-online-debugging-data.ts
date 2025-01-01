import type { NavData } from '../../.vitepress/theme/types'

// 在线调试
export const ONLINE_DEBUGGIN_DATA: NavData[] = [
  {
    title: '',
    items: [
      {
        title: 'npm 库在线执行',
        desc: '在浏览器控制台中在线运行调试与测试 npm 中的库',
        link: 'https://npm.devtool.tech',
        icon: 'https://npm.devtool.tech/logo.svg',
      },
      {
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
        icon: '/icons/json-cn.ico',
      },
      {
        icon: 'https://transform.tools/static/favicon.png',
        title: 'transform',
        desc: '一个支持多语言的在线转换器',
        link: 'https://transform.tools/json-schema-to-typescript'
      },
    ]
  }
]