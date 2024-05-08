# Vue3迁移指南

Vue 3 中需要关注的一些新特性包括:

## 组合式 API

组合式 API (Composition API) 是一系列 API 的集合，使我们可以`使用函数`而不是`声明选项`的方式书写 Vue 组件。涵盖了以下方面的 API：

- 响应式 API：例如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。
- 生命周期钩子：例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。
- 依赖注入：例如 provide() 和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。

```vue
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 更改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`计数器初始值为 ${count.value}。`)
})
</script>

<template>
  <button @click="increment">点击了：{{ count }} 次</button>
</template>
```

备注：
- 组合式 API 是 Vue 3 及 Vue 2.7 的内置功能。在 Vue 3 中，组合式 API 基本上都会配合 `<script setup>` 语法在单文件组件中使用。
- 对于更老的 Vue 2 版本，可以使用官方维护的插件 `@vue/composition-api`。

### 为什么要有组合式 API？

#### 更好的逻辑复用

- 组合式 API 通过 `组合函数` 来实现逻辑复用；
- 选项式 API 通过 `mixins` 来实现逻辑复用；

组合式 API 解决了 mixins 的所有缺陷。

mixins 的所有缺陷
