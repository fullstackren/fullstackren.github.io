---
layout: home
layoutClass: 'df-home-layout'

hero:
  name: 江湖聊IT
  text: 给时光以效率，给岁月以成长
  tagline: 助你腾出更多时间专注于成长和快乐
  image:
    src: /logo.jpg
    alt: 江湖聊IT
  actions:
    - text: 不忘初心
      link: /original-intention
    - text: 交个朋友
      link: /make-a-friend
      theme: alt
    # - text: 我的音频
    #   link: https://music.fullstack.ren
    #   theme: alt
features:
  # - icon: 📖
  #   title: Web 开发
  #   details: 整理 Web 开发常用知识点<br />学习各种前端框架
  #   link: /fe/web/
  #   linkText: 查看更多
  # - icon: 📘
  #   title: 源码解读
  #   details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  #   link: /source-code/
  #   linkText: 查看更多
  # - icon: 🧰
  #   title: 工具提效
  #   details: 工欲善其事，必先利其器<br />记录日常使用的软件、插件、扩展等
  #   link: /tools/
  #   linkText: 查看更多
  # - icon: 🐞
  #   title: 踩坑记录
  #   details: 那些年踩过的坑<br />总有一些让你意想不到的问题
  #   link: /pit/
  #   linkText: 查看更多
---

<script setup>
import DfMine from './components/df-mine/DfMine.vue';
import { NEWS_DATA } from './components/df-mine/df-news-data.ts';
</script>

## 动态

<ClientOnly>
  <DfMine :data="NEWS_DATA" />
</ClientOnly>

::: details 申请友链

**友链要求**:

- 网站应保持清洁，避免过多广告内容
- 网站需要有良好的稳定性和可靠性

**申请方式**:

1. 在本页面留言
2. 直接访问 [GitHub 友链申请页面](https://github.com/fullstackren/fullstackren.github.io/issues/01) 提交您的申请

**本站信息**：

- 网站名称: **江湖聊IT**
- 网站描述: **给时光以效率，给岁月以成长，欢迎来到【江湖聊IT】。在这个信息爆炸、时间紧迫的时代，尽管每日忙碌，却难成有意义之事。作为效率探索者，我创建了此平台，分享节省时间、提升效率的工具与方法，助你腾出更多时间专注于成长和快乐。**
- 网站地址：**<https://fullstack.ren>**
- 网站图标：**<https://fullstack.ren/logo.jpg>**

```json
{
  "title": "江湖聊IT",
  "desc": "给时光以效率，给岁月以成长，欢迎来到【江湖聊IT】。在这个信息爆炸、时间紧迫的时代，尽管每日忙碌，却难成有意义之事。作为效率探索者，我创建了此平台，分享节省时间、提升效率的工具与方法，助你腾出更多时间专注于成长和快乐。",
  "link": "https://fullstack.ren",
  "icon": "https://fullstack.ren/logo.jpg"
}
```

:::

<style lang="scss">

.df-home-layout {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  --vp-layout-max-width: 1660px;

  /* layout 样式 */
  .container {
    max-width: var(--vp-layout-max-width) !important;
  }
  .content-container,
  .content {
    max-width: 100% !important;
    padding-bottom: 24px !important;
  }

  /* aside 样式 */
  .aside {
    padding-left: 0;
    max-width: 224px;
  }

  /* custom-block */
  .custom-block {
    .custom-block-title {
      font-size: var(--vp-custom-block-font-size);
    }
    ul {
      margin: 8px 0;
    }
    li {
      margin: 0;
    }
  }

  .vp-doc h2 {
    margin-top: 24px;
  }

  /*爱的魔力转圈圈*/
  .image-src:hover {
    transform: translate(-50%, -50%) rotate(666turn);
    transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
  }

  .details small {
    opacity: 0.8;
  }
}

</style>