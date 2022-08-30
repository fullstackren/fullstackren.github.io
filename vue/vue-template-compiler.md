# vue-template-compiler

## 功能

主要用于将 Vue@2.x 的模板预编译为渲染函数，即 template => ast => render，目的是为了避免在运行时编译产生开销和 CSP 限制。一般在编写特定需求的构建工具时才单独使用，多数场景下是结合 `vue-loader` 一起使用的。

**补充**：CSP 内容安全策略，它是一个附加的安全层，用于帮助检测和缓解某些类型的攻击，比如跨站脚本 (XSS) 和数据注入等。

## 源代码说明

这个包是自动生成的，真正源码存在 [src/platforms/web/entry-compiler.js](https://github.com/vuejs/vue/blob/dev/src/platforms/web/entry-compiler.js) 中。由此可得出以下结论：

vue-template-compiler 的源码是从 vue 中抽离出来的，本质是同一份代码，所以两者的版本**必须一致**。

## API

### compiler.compile(template, [options])

返回

```json
{
  ast: ASTElement,
  render: string,
  staticRenderFns: Array<string>,
  errors: Array<string>,
  tips: Array<string>
}
```

### compiler.compileToFunctions(template)

是简化版的 `compiler.compile()`，方式是 `new Function()`。返回：

```json
{
  render: Function,
  staticRenderFns: Array<Function>
}
```

### compiler.parseComponent(file, [options])

将 SFC （单文件组件或* .vue文件）解析为描述符，所以多数时候是用于 SFC 构建工具，如 vue-loader、vueify 等。

### compiler.generateCodeFrame(template, start, end)

高亮展示 start，end 代码段。

## 参考

- [ast Explorer](https://astexplorer.net/)
- [vue-template-compiler@2.6.10](https://github.com/vuejs/vue/tree/v2.6.10/packages/vue-template-compiler)
- [CSP](https://developer.mozilla.org/zh-CN/docs/Web/Security/CSP)
- [vue-loader](https://github.com/vuejs/vue-loader/blob/master/docs/spec.md)
- [vue-loader&vue-template-compiler详解](https://zhuanlan.zhihu.com/p/114239056)