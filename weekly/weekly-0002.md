# 周刊（第 2 期）：解决方案

> 作者：[江湖](../about.md)
> 
> 日期：2024年1月8日
>
> 这里记录每周值得分享的兴趣内容，周一发布。
>
> 本周刊[开源](https://github.com/fullstackren/fullstackren.github.io/tree/main/weekly)，欢迎[投稿](https://github.com/fullstackren/fullstackren.github.io/issues)。合作请<a href="mailto:ruizhengyun@gmail.com" target="_blank">邮件联系</a>（ruizhengyun@gmail.com）。


## 解决方案

## 源码解读

## 实战

### 项目指导
- 项目分解
- 项目目标
- 技能目标
- 项目导航
  - 项目指导 -> 项目分析 -> 具体任务 -> 项目回顾


第一个实战是做一套遵循原生态开发模式的 Web UI 组件库，采用自身轻量级模块化规范，易上手，可以更简单快速地构建网页界面，开源地址是：https://github.com/fullstackren/duolong-ui，主要参考 [layui](https://layui.dev/)。

**应用描述**

以表单组件为例，我希望我在页面中 JavaScript 模块是这么使用：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表单 - duolongui</title>
        <!-- 应用正式环境中请使用 duolongui.production.min.css 所部署站点地址 -->
        <link href="//unpkg.com/duolongui@1.0.0/umd/duolongui.production.min.css" rel="stylesheet">
    </head>
    <body>
        <!-- 应用正式环境中请使用 duolongui.production.min.js 所部署站点地址 -->
        <script src="//unpkg.com/duolongui@1.0.0/umd/duolongui.production.min.js"></script>
        <script>
            duolongui.use(['form', 'date'], function(form) {
                const { form, messagebox } = duolongui;
                const date = duolongui.date;
                const { util } = duolong-kit;

                // 定义验证规则
                form.validate({
                   // do something 
                });

                // 提交事件
                form.on('事件名称', function(data) {
                    // do something 
                };
            });
        </script>
    </body>
<html>
```

**目录结构设计**

```tree
.
├── CHANGELOG.md               // 更新日志
├── LICENSE                    // 开源协议
├── README.md                  // 项目介绍
├── examples                   // 示例
│   ├── form.html              // 表单示例
│   └── message-box.html       // 消息框示例
├── packages                   // 组件库
│   ├── form                   // 表单组件
│   └── message-box            // 消息框组件
├── scripts                    // 脚本
├── src                        // 源码
│   ├── index.js               // 入口文件
│   ├── instance               // 实例
│   └── utils                  // 工具
└── test                       // 测试
```


## 文章

## 工具

## 资源

## 热点话题

## 地理

安徽是我的故乡，所以她就是开篇作。

<img src="./weekly-0002/dili-anhui.png" class="article-image" width="70%" />

安徽位于长江中下游平原，平原是个好地方，能种很多粮食，交通也方便。西部有一部分是大别山，南部是黄山山脉及其余脉黄山、九华山、齐云山、天目山。 

<img src="./weekly-0002/dili-anhui-dixing.jpeg" class="article-image" width="70%" />

由于山里面不好种粮食，为了活命就有很多人出去做生意，将做生意赚来的钱用来修祠堂祖宅，比如黄山黟县古村落，村子的通济桥还是南宋时建的。

<img src="./weekly-0002/dili-anhui-yixian.png" class="article-image" width="70%" />

决定安徽命运的两条河流，一个是淮河，一个是长江。

## 影视

## 心得

### 软件的理解

- 软件是被设计和开发出来的，只是人脑的产物，所以她不具有物理特性；
- 软件可以一直用一直用，除非被用户体验淘汰，所以她不会被磨损或老化；
- 软件对计算机系统的依赖性很大，所以软件开发要考虑计算机系统的各种限制；

所以：`软件 = 程序 + 文档 + 数据 + 服务`。

## 趣闻

1、投流，是流媒体技术中的一个概念，是指通过花钱将流媒体内容传输到目标受众的特定位置，以便他们可以观看，进而产生购买行为。本质上就是通过增加人流量，提高商品销量。对于平台来说，投流是一种商业化的行为，对于品牌商来说，投流是一种营销策略。<span style="color: red;">投流影响的是购买</span>。

2、种草，是有一些品牌，你看到后可能不会立刻下单，但你因为看到别人的分享，对这个品牌产生了信任，它影响了你的心智。等你需要的时候，你会第一时间想到它。<span style="color: red;">种草影响的是心智</span>。

（完，祝好！）

:::tip 文档信息
版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</br>
发表日期： 2024年1月8日
:::