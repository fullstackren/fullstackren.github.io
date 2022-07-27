---
title: GraphQL
dateline: 320101-220102
order: 99998
---

# GraphQL

[GraphQL](https://github.com/graphql/graphql-spec)是facebook开源的应用层查询语言。它很超前，时髦，可适用于包括nodejs，java,php等绝大都数后台语言。

它超前到什么程度？举个例子，我们只需要使用一个 GraphQL 的接口，即可满足一个简单博客网站的所有需求。有没有觉得很神奇？准确地说graphql是为接替RESTful而生的。

RESTful是当下非常流行的，主流的一套前后端API交互设计规范。几乎绝大都数互联网公司都在使用。那么为什么还需要graphql来接替RESTful呢？

其实，现在谈graphql替代RESTful还为时尚早，因为graphql还有很多问题需要解决，而即使真到了那一天，RESTful也仍有一定的市场空间。

RESTful本身存在的一些缺点和不足，比如，当需求或数据发生变化时，需要建立新的接口来适应变化，而不断添加的接口，会造成服务器代码的不断增长，即使通过增加接口版本，也并不能够完全限制服务器代码的增长。另外不断地增加接口，意味着将带来更多的开发工作，而且每个接口基本都无法复用等一系列问题。

下面来看看一个简单的GraphQL请求:

```json
{
  latestPost {
    _id,
    title,
    content,
    author {
      name
    },
    comments {
      content,
      author {
        name
      }
    }
  }
}
```

而请求的结果是这样:

```json
{
  "data": {
    "latestPost": {
      "_id": "03390abb5570ce03ae524397d215713b",
      "title": "New Feature: Tracking Error Status with Kadira",
      "content": "Here is a common feedback we received from our users ...",
      "author": {
        "name": "Pahan Sarathchandra"
      },
      "comments": [
        {
          "content": "This is a very good blog post",
          "author": {
            "name": "Arunoda Susiripala"
          }
        },
        {
          "content": "Keep up the good work",
          "author": {
            "name": "Kasun Indi"
          }
        }
      ]
    }
  }
}
```

很明显，GraphQL是从客户端业务维度出发的，当客户端需要某些字段的数据时，只需要发出这些字段的GraphQL请求即可。按需索取，可复用，可定制化，灵活性很强。

## 学习教程

- [graphql官方文档](http://facebook.github.io/graphql/)
- [Apollo Client官方文档](http://dev.apollodata.com/)
- [relay官方文档](https://facebook.github.io/relay/)
- [graphql学习资料收集](https://github.com/chentsulin/awesome-graphql)
- [Node.js 服务端实践之 GraphQL 初探](http://taobaofed.org/blog/2015/11/26/graphql-basics-server-implementation/)
- [深入理解 GraphQL](http://taobaofed.org/blog/2016/03/10/graphql-in-depth/)