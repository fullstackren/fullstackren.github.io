# 内存

## 内存泄漏

## 内存泄漏场景

- 被忽视的全局变量引用
- 被遗忘的定时器（setInterval）或回调（resize）
- DOM 引用丢失（就是 dom 被移除了，但是绑定在其身上的各类事件还在）
- ES6 的一些语法的使用：WeakMap、WeakSet 等
- console导致的内存泄漏 因为打印后的对象需要支持在控制台上查看，所以传递给console.log方法的对象是不能被垃圾回收的。我们需要避免在生产环境用console打印对象。
- 第三方库的引用与销毁
  - 比如在 Vue 项目中引入第三方库的示例：避免内存泄漏
  - 比如一些音视频的播放器，在不使用时，要及时的 destory 而非简单的移除其 DOM 元素

## 如何检测内存泄漏

- Chrome DevTools Performance Panel 概览 Heap 查看线性走势图。
