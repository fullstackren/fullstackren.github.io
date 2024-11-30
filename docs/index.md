---
layout: home
layoutClass: 'daofa-home-layout'

hero:
  name: 全栈孤勇者
  text: 知行合一
  tagline: 全栈孤勇者致力于了解前后端及运维知识，打造全栈技术体系，助力个人成长与职业发展。
  image:
    src: /logo.png
    alt: 全栈孤勇者
  actions:
    - text: Vue 2 + Vue 3
      link: /web-develop/web-framework/vue2-apis
    - text: Nestjs + MySQL
      link: /nestjs
      theme: alt
features:
  - icon: 💡
    title: 学习路径
    details: 
    link: /
    linkText: 学习路径
  - icon: 📖
    title: 基础知识学习与实践
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /
    linkText: 基础知识学习与实践
  - icon: 📘
    title: 源码解读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /
    linkText: 源码解读
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: 
    linkText: 踩坑记录
  - icon: 💯
    title: 个人产品
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: /
---

::: details 申请友链

**友链要求**:

- 网站应保持清洁，避免过多广告内容。
- 网站需要有良好的稳定性和可靠性。

**申请方式**:

1. 在本页面留言。
2. 直接访问 [GitHub 友链申请页面](https://github.com/fullstackren/fullstackren.github.io/issues/1) 提交您的申请。

**本站信息**：

- 网站名称: **全栈孤勇者**
- 网站描述: **全栈孤勇者致力于了解前后端及运维知识，打造全栈技术体系，助力个人成长与职业发展。**
- 网站地址：**<https://www.fullstack.ren/>**
- 网站图标：**<https://www.fullstack.ren/logo.png>**

```json
{
  "title": "全栈孤勇者",
  "desc": "全栈孤勇者致力于了解前后端及运维知识，打造全栈技术体系，助力个人成长与职业发展。",
  "link": "https://www.fullstack.ren/",
  "icon": "https://www.fullstack.ren/logo.png"
}
```

:::

<style>
/*爱的魔力转圈圈*/
.daofa-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.daofa-home-layout .details small {
  opacity: 0.8;
}

.daofa-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>