# SPA架构下路由模式

浏览器导航栏中的 URL 通常由四个部分组成，如 `http://www.fullstack.ren/path/?q=val#hash`，其中：

| URL 字段 | 监听浏览器 API |
|:-|:-|
| fullstack.ren | hostname |
| path | `pathname` |
| q=val | query |
| hash | `hash` |


## 路由分类

| 模式 | 场景 | 描述 | 路由关系映射储存 |
|:-|:-|:-|:-|
| Browser History | `浏览器运行时`，借助 URL 进行路由定位与追踪 | `监听 pathname`，点击事件触发时，pathname 发生了改变 | 浏览器提供的原生历史记录 API 来管理浏览器的导航 |
| Hash History | `浏览器运行时`，借助 URL 进行路由定位与追踪 | `监听 hash`，点击事件触发时，hash 发生了改变 | 依赖于浏览器哈希路由机制 |
| Memory History | `非浏览器运行时` | | 内存中 |

- 路由映射（即URL路径与组件的对应关系）实际上是由开发者在应用程序代码中定义和配置的。

## 浏览器原生历史记录 API

## 浏览器哈希路由机制

哈希路由机制是使用 URL 中的哈希部分（`#后的部分`）来模拟路由导航的一种技术。当 URL 中的哈希部分发生变化时，`浏览器不会向服务器发送请求`，因为哈希部分的变化`不会触发页面的重新加载`。因此，哈希路由通常用于`单页面应用程序（SPA）`中。


## History API