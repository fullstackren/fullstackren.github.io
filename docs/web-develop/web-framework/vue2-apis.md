---
outline: 'deep'
---

# <img src="https://v2.cn.vuejs.org/images/logo.svg" alt="vue" /> Vue2 APIs

## 一、全局 API

### Vue.nextTick

:::tip 用法

`Vue.nextTick([callback, context])`

:::

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

```js{4}
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})
```

### Vue.set

:::tip 用法

`Vue.set(object, propertyName, value)`

:::

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 `this.myObject.newProperty = 'hi'`)。

### Vue.extend

## 内置组件

### keep-alive


## 参考资料

- [Vue2 APIs 参考](https://v2.cn.vuejs.org/v2/api/)