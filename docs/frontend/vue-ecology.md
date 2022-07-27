---
title: Vue 生态
dateline: 320101-220703
order: 99398
---

# Vue 生态

- [vuejs/vue](https://github.com/vuejs/vue)，Vue2 的代码仓库。
- [vuejs/core](https://github.com/vuejs/core)，Vue2 的代码仓库

## Web端

- 路由 Router
  - [vue/vue-router](https://github.com/vuejs/vue-router)，Vue2 的官方前端路由解决方案
  - [vue/router](https://github.com/vuejs/router)，Vue3 的官方前端路由解决方案
- 状态管理 State Management
  - [Vuex](https://github.com/vuejs/vuex)，Vue 官方的状态管理器，分别在 v3 和 v4 两个大版本支持 Vue2 和 Vue3。
  - [Pinia](https://github.com/vuejs/pinia)，又一个官方的 Vue 状态管理器，比 Vuex 更轻量，基于 Vue 的组合式 API（composition API），同时支持 Vue2 和 3，被认为是下一代的 Vuex。
- Hook
  - [vue/composition-api](https://github.com/vuejs/composition-api)，用于提供组合式 API（composition API）的 Vue 2 插件。能在 Vue2 项目中使用 Vue3 的部分 API，帮助项目顺利迁移过渡到 Vue3。
  - [vueuse](https://github.com/vueuse/vueuse)，能够用于 Vue 2 和 Vue 3 项目的组合式 API（composition API）实用 utils 工具集合。有 useMouse、useScroll 等上百种 hook 函数。据说目前的 Vuer，vueuse 是除了 lodash 以外必装的工集。
  - [vue-demi](https://github.com/vueuse/vue-demi)，Vue Demi （demi 在法语中有半的含义）是一个给开发 Vue 第三方包的开发者使用库，支持你开发出同时支持 Vue2 和 3 的通用 Vue 库。vueuse，vuelidate 和 vue-echarts 都使用了该工具。
- 构建工具 Build Tool
  - [Vite](https://github.com/vitejs/vite)，(法语单词，表示“快速”，发音为/vit/，就像“veet”)，被称为下一代前端开发与构建工具，极大地改善了前端的开发体验。特点就是快!
- 脚手架 Scaffold
  - [create-vue](https://github.com/vuejs/create-vue)，快速搭建基于 Vite 的 Vue 项目的官方脚手架，只需执行命令npm init vue@3。
  - [vue-cli](https://github.com/vuejs/vue-cli)，快速搭建基于 webpack 的 Vue 项目的开发者工具，目前官方更「推荐使用」 create-vue。
- 编辑器 Editor
  - [Vetur](https://github.com/vuejs/vetur)，官方的 VSCode Vue 工具扩展，包括语法高亮，代码片段（snippet），Lint 校验，代码格式化等特性。Vue 开发者必装。
  - [eslint-plugin-vueVue]()，官方的 ESLint 插件。vue-eslint-parser自定义 ESLint 解析 .vue 单文件的解析器。


## 移动端

- [weex](https://weex.apache.org/cn/)

## 参考
