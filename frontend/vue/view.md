# Vue视图

在 Vue 中，可以使用两种方式来定义组件的视图：`render 函数`和`模板（template）`。

## 模板写法

模板写法是最常见的方式，通过在组件中使用 `template` 属性来定义组件的视图结构。模板可以是普通的 HTML 代码，也可以包含 Vue 的模板语法，如插值表达式、指令、事件绑定等。示例代码如下：

```javascript
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="updateMessage">更新消息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    updateMessage() {
      this.message = 'Hello, updated Vue!';
    }
  }
}
```

## render 函数写法

render 函数是一个 JavaScript 函数，它返回一个虚拟 DOM（VNode）。使用 render 函数需要对 Vue 的虚拟 DOM API 有一定的了解，通常用于编写更灵活、动态的组件。示例代码如下：

```javascript
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    updateMessage() {
      this.message = 'Hello, updated Vue!';
    }
  },
  render(h) {
    return h('div', [
      h('h1', this.message),
      h('button', { on: { click: this.updateMessage } }, '更新消息')
    ]);
  }
}
</script>
```

总体来说，`模板写法`更加直观易懂，适合简单的组件和项目；而 `render 函数`写法更加灵活，适合处理复杂的逻辑和动态的 UI。选择使用哪种方式取决于项目的需求和开发团队的偏好。