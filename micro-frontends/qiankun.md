# qiankun

qinkun 是基于 single-spa 的一套微前端架构方案。

## 子应用加载

### 注册加载方式

qiankun 加载子应用的方式是 HTML Entry，即通过 url 来获取子应用 HTML 内容进而加载子应用。这与 signle-spa 有本质的不同，single-spa 加载子应用的方式是 JS Entry，即通过引入 js 文件地址来加载子应用。

HTML Entry 相对 JS Entry 的优势在于：**主应用不用频繁更新**。微应用项目大多是已经上线的项目，url 基本是固定的，即使子应用重新迭代发版了，也不需要更改主应用中子应用的配置信息。下面是两种注册方式核心代码：

```js
// HTML Entry
registerMicroApps([{
  activeRule: '/microAppActiveRule',
  name: 'react app',
  entry: 'https://www.example.com/microAppA',
  container: '#microAppContainer'
}]);
```

```js
// JS Entry
singleSpa.registerApplication({
  'appName',
  () => System.import('appName'),
  lication => location.pathname.startsWith('appName')
});
```

### 加载执行步骤

- 通过配置信息 container 创建容器
- 通过 url（配置信息 entry）获取子应用 HTML 文件，并解析出 html、css 和 js 文本
- 动态创建 style 和 script 标签，将解析后的 CSS 和 JS 内容赋值到标签中
- 将 html 文本和创建的标签放置到容器中
- 将容器放置到主应用中

```js
// 创建容器
const $container = document.querySelector(container);

// 解析 HTML，获取 html，js，css 文本
const { htmlText, cssText, jsText } = importHTMLEntry('https://www.example.com/microAppA');

// 动态创建 style 和 script 标签
const $style = createElement('style', cssText)
const $script = createElement('script', jsText)

// 将 html 文本和创建的标签放置到容器中
$container.innerHTML = htmlText;
$container.appendChild([$style, $script]);
```

#### 如何解析 html 文本？

- 通过 url 请求到子应用的 index.html 文本
- 用正则匹配到其中的 css 和 js 标签，记录下来后删除标签
- 再删去 html > head + body 等标签
- 返回 html 文本

#### 如何解析 js？

- 使用正则匹配 `<script/>` 标签
- 对于外链 js 使用 fetch 请求到内容，记录到对象中
- 对于内联 js 的内容记录到这个对象中
- 加载子应用时将存在对象中的内容存放到动态构建的 script 中

#### 如何解析 css？

- 正则匹配 `<style>`、`<link>`标签。
- 内联`<style>` 标签的内容会记录到一个对象中
- 外链 `<link>` 标签使用 fetch 请求到内容，记录到这个对象中，执行时将内容放到 `<style>` 标签中，再插入到页面，子应用卸载时移除这些 `<style>` 标签，这样会把外链的 css 变成内联 css，好处是在切换子应用后，就不用重复请求 css 内容了，直接应用 css 样式，让子应用加载得更快。

## js 隔离

## 应用路由

对于路由的劫持，qiankun 是基于 single-spa 来做的。