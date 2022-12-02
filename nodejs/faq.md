# Nodejs 常见问题

## 单线程的弱点

- 无法利用多核 CPU
- 错误会引起整个应用退出，应用的健壮性值得考验
- 大量计算占用 CPU 导致无法继续调用异步 I/O

解决方案

Node 采用了与 Web Workers 相同的思路来解决单线程中大计算量的问题：**child_process**。

- **子进程**的出现，意味着 Node 可以从容地应对**无法利用多核 CPU 方面**和**单线程在健壮性**的问题。
- 通过**将计算分发到各个子进程，可以将大量计算分解掉**，然后再通过**进程之间的事件消息**来传递结果，这可以很好地保持应用模型的简单和低依赖。
- 通过 **Master-Worker** 的管理方式，也可以很好地管理各个工作进程，以达到更高的健壮性。

## 跨平台

起初，Node只可以在Linux平台上运行。如果想在Windows平台上学习和使用Node，则必须通过Cygwin或者MinGW。随着Node的发展，微软注意到了它的存在，并投入了一个团队帮助Node实现Windows平台的兼容，在v0.6.0版本发布时，Node已经能够直接在Windows平台上运行了。下图是 Node 基于 libuv 实现跨平台的架构示意图。

<img src="./images/libuv.png" class="article-img" />
<p class="article-text">Node 基于 libuv 实现跨平台的架构示意图</p>

## I/O 密集型和 CPU 密集型
