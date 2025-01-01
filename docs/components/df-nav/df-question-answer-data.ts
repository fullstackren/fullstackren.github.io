import type { NavData } from '../../.vitepress/theme/types'

// 问答
export const QUESTION_ANSWER_DATA: NavData[] = [
  {
    title: "",
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
  }
]