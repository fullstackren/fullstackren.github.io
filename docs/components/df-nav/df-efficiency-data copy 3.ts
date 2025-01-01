import type { NavData } from '../../.vitepress/theme/types'

export const EFFICIENCY_DATA: NavData[] = [
  {
    title: "问答",
    items: [
      {
        title: 'ChatGPT',
        link: 'https://chatgpt.com/chat',
        icon: '/icons/chatgpt.png',
        badge: 'AI',
      },
      {
        title: '通义千问',
        link: 'https://tongyi.aliyun.com/qianwen/',
        icon: '/icons/tongyi.png',
        badge: 'AI',
      },
      {
        title: '豆包',
        link: 'https://www.doubao.com/chat/',
        icon: '/icons/doubao.png',
        badge: 'AI',
      },
      {
        title: '文心一言',
        link: 'https://www.doubao.com/chat/',
        icon: '/icons/yiyan.png',
        badge: 'AI',
      },
      {
        title: 'Kimi.ai',
        link: 'https://kimi.moonshot.cn/',
        desc: '超长文本对话。',
        icon: 'icons/kimi.ico',
        badge: 'AI',
      },
      {
        title: '智谱清言',
        link: 'https://chatglm.cn/?lang=zh',
        desc: '超长文本对话。',
        icon: '/icons/chatglm.png',
        badge: 'AI',
      }
    ]
  },
  {
    title: '图形图像',
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
  },
  {
    title: "笔记",
    items: [
      {
        title: 'Notion AI',
        link: 'https://www.notion.so/',
        icon: '/icons/notion.png'
      },
    ]
  },
  {
    title: '在线调试',
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
  {
    title: '数据查询',
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
  {
    title: '职场办公',
    items: [
      {
        title: '懒人 Excel',
        desc: 'Excel 函数公式、操作技巧、数据分析、图表模板、VBA、数据透视表教程。',
        link: 'https://www.lanrenexcel.com/excel-shortcuts/',
        icon: '/icons/lanrenexcel.png',
      },
    ]
  },
  {
    title: '工具集合',
    items: [
      {
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
        icon: 'https://devtool.tech/logo.svg',
      },
      {
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
        icon: 'https://tool.lu/favicon.ico'
      },
    ]
  }
]