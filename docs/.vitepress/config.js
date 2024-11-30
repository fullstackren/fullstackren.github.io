// import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'

export default {
  themeConfig: {
    nav,
    sidebar,
    aside: 'left'
  },
  head,
  output: '../dist',
  base: '/',
  lang: 'zh-CN',
  title: '全栈孤勇者',
  description: '全栈开发学习记录',
  cleanUrls: true,
  lastUpdated: true,
}