# JSX

JSX，JavaScript XML， 是对 JavaScript语法的扩展，具有 JavaScript 的全部功能，还可以在 JavaScript 写类似 HTML 的标签，类似于模板语言。

网页是基于 HTML、CSS 和 JavaScript 实现的，HTML 负责内容，CSS 负责样式，JavaScript 负责逻辑，三者各司其职，编码逻辑都维护在各自文件中。随着用户对 Web 交互性需求变高，页面的内容呈现需要依赖逻辑，所以 HTML 就编排到 JavaScript 中了，由 JavaScript 来控制页面内容的呈现。由于 JSX 的编排规则要求只能返回一个根元素，所以根元素的内容就可以看成是一个组件。一个页面可以看成是由多个组件搭建组合而成。

## JSX 规则

虽然可以在 JavaScript 中直接编写 HTML 标签，但有些规则还是要遵守 JSX 规则的。比如：

- 只能返回一个根元素，需要用一个父标签把它们包裹起来；
- 标签必须闭合；
- 使用驼峰式命名法给绝大部分属性命名；

## HTML 标签转 JSX 标签

可以使用在线[转换器](https://transform.tools/html-to-jsx)来将 HTML 标签转换为 JSX 标签。