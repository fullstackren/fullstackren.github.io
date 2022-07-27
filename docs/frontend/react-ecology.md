---
title: React 生态
dateline: 320101-220702
order: 99399
---

# React 生态

- [reactjs](https://github.com/facebook/react)，代码仓库。
- [reactjs官方文档](https://reactjs.org/)

## Web端

- 路由
  - [react-router](https://github.com/remix-run/react-router)
  - [react-router-redux](https://github.com/reactjs/react-router-redux)
- 状态管理
  - [redux](https://github.com/reduxjs/redux)
  - [mobx](https://github.com/mobxjs/mobx)
  - [react-redux](https://github.com/reduxjs/react-redux)
  - [flux架构](http://www.ruanyifeng.com/blog/2016/01/flux.html)
  - [refluxjs](https://github.com/reflux/refluxjs)
- UI框架
  - [antd](https://ant.design/index-cn)
  - [bfd-ui](http://ui.baifendian.com/)
  - [semi](https://semi.design/)，抖音UI
  - [material-ui](https://github.com/mui/material-ui)
  - [react-toolbox](http://react-toolbox.com/)
  - [material](https://material.io/guidelines/)
- 前端框架
  - [dva](https://github.com/dvajs/dva)
- 一些工具
  - [immutable-js]()，facebook推出的完全独立的一个js库，侧重函数式编程中不可变数据结构，使用Immutable可使你的react应用性能上会有很大的提升。
  - [draft-js](https://github.com/facebook/draft-js)是由facebook开源的编辑器语言。它提供了众多API可用于定制化开发你想要的react编辑器。
  - [css-modules](https://github.com/css-modules/css-modules)不是为react而生的，它是css模块化的一种解决方案，但它和react配合使用非常的契合。
  - [React Devtools](https://http://github.com/facebook/react-devtools)是facebook推出的一款调试工具。可有助于提高你的react应用开发效率。

## 移动端

- [react-native](https://http://github.com/facebook/react-native)，是目前最优秀的非原生开发移动框架，一处开发，多端使用。同时具有出色的性能，支持热更新等超强的优势，使得 react-native 顿时站在风口浪尖。

- UI框架
  - [ant-design-mobile](https://mobile.ant.design/index-cn)，ant design的mobile版。
  - [响应式的material-ui](https://github.com/callemall/material-ui)

## 服务器端

- 服务器端渲染，react提供了两个API来实现服务器端渲染，分别是——renderToString 和 renderToStaticMarkup。
  - [next-js](https://github.com/zeit/next.js)，基于react可实现服务器和浏览器都能渲染的框架。
  - [react-server](https://github.com/redfin/react-server)，它同样实现了React 框架在服务器和浏览器中进行快速渲染和无缝切换。
  - [express-react-views](https://github.com/reactjs/express-react-views)
  - [react-view](https://github.com/koajs/react-view)
- 应用层查询语言
  - [graphql](https://github.com/graphql/graphql-spec)是facebook开源的应用层查询语言。它很超前，时髦，可适用于包括nodejs，java,php等绝大都数后台语言。
  - [Relay](https://github.com/facebook/relay)，是facebook出品的一个前端数据框架。
  - [apollo](http://dev.apollodata.com/react/)

## VR领域

目前，VR(虚拟现实)是科技界的新生事物，也是一大革命，在未来，VR将很大程度地改变人类的生活方式。
试想一下，VR将为你呈现一个虚拟现实世界，你将可以使用VR身临其境般地玩游戏，看新闻，购物，社交娱乐，看世界名景等等，这将是一个全新的世界。
那么，react难道有涉足VR领域吗？

##  全平台

[reactxp][1] 是微软Skype团队开源的一个基于react和react native开发的全平台框架，它不仅支持Android和iOS，还支持web和windows，目前还尚不支持mac。是眼下跨平台最广的一个框架，准确来说是一个js库。

[reactxp][1] 的出现算是微软在wp跨平台计划失败后的又一次跨平台实践。是否也预示着前端终将会实现大一统呢？
拭目以待。

[reactxp][1] 目前还很嫩，还有很多问题需要解决，比如它的某些API只有ios能用，并不能做到全兼容，像浏览器一样存在兼容性问题，这只是其一。

[reactxp][1] 真正要火起来还有很长的路要走，但不妨碍我们可以继续关注它。也许它能超越RN，成为最前沿的跨平台应用框架也说不定。

- [react-vr](https://github.com/facebookarchive/react-360)


## 参考

- [揭秘react生态体系](https://zhuanlan.zhihu.com/p/26270621)


[1]: https://microsoft.github.io/reactxp/