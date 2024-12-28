import { defineConfig } from 'vitepress'
import { head } from './configs'

export default defineConfig({
  title: '江湖聊IT',
  description: '给时光以效率，给岁月以成长，欢迎来到【江湖聊IT】。在这个信息爆炸、时间紧迫的时代，尽管每日忙碌，却难成有意义之事。作为效率探索者，我创建了此平台，分享节省时间、提升效率的工具与方法，助你腾出更多时间专注于成长和快乐。',
  /* 主题定制 */ 
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '开发者路线', link: '/' },
      { text: 'Web 开发', link: '/fe/web/' },
      { text: '源码解读', link: '/source-code/' },
      { text: '工具提效', link: '/tool/' },
    ],
  },
  head
})
