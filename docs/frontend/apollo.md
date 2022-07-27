---
title: Apollo
dateline: 320101-210702
order: 109397
---

# Apollo

我们使用graphql，为什么需要用到 relay呢？

首先，graphql是在后端实现的，准确地说是在后端搭起一个graphql服务器，它不会主动推送数据给客户端，也无法像RESTful那样由客户端发起一个ajax请求来请求后端的RESTful API。graphql需要在客户端有一样东西能与它进行交互，但不是ajax或者fetch，而是经过封装的如relay或apollo等能够与graphql服务器进行交互的前端数据框架。

relay就是这样应运而生。但实践中会发现使用relay来配合graphql使用通常会遇到很多坑，relay操作起来并没有想象中的简单，除了比较复杂以外，它同时存在很多局限性。

于是，不得不提到apollo。它是一个全功能的 GraphQL 客户端，用于 React 、Angular 等的交互，允许你轻松通过 GraphQL 获取数据并构建 UI 组件。

使用 apollo+graphql，它并没有relay那样的繁琐，也没有relay那样的局限性。无疑和graphql是最配的。