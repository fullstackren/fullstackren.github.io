# single-spa 如何运行的？


## 注册子应用

- 基座应用改造（配置子应用信息）
  - 子应用名称
  - 子应用加载方法
  - 子应用路由激活方法
  - 子应用的属性
- 子应用改造
  - 入口文件导出子应用生命周期，使用 single-spa 提供的 bootStrap、mount 和 unmount
  - 构建更改
    - webpack 打包：更改 webpack 构建的名称和类型
    - 无打包：入口文件 js entry



## 参考

- [single-spa是如何运行的？](https://juejin.cn/post/7123861138164432926)