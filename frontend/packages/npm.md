# npm

npm 是由[网站](https://www.npmjs.com/)、注册表（registry）和命令行工具（CLI）组成。

- 网站为开发者提供查找包；
- 注册表是一个巨大的数据库，保存每个包的信息；
- 命令行工具通过终端运行，使 cli 和 npm 打交道；

## 常去地址

- [npm 官网](https://www.npmjs.com/)
- [npm 中文文档](https://www.npmjs.cn/)

## 常用工具

- [npm 库在线运行](https://npm.devtool.tech/)

## 常用命令

### 安装

局部安装

```sh
$ npm install <package_name>
```

全局安装

```sh
$ npm install -g <package>
```

### 卸载

局部卸载

```sh
$ npm uninstall <package>
```

全局卸载

```sh
$ npm uninstall -g <package>
```


### 更新

更新 npm 包版本

```sh
$ npm install npm@latest -g
```

更新项目所有包版本

```sh
$ npm update
```


### 查看

查看是否过期

```sh
$ npm outdated
```

## 常用命令参数

- devDependency 中新增或删除加上 `--save-dev`；
- dependency 中新增或删除加上 `--save`；
- 层级 `--depth=0`，如 `$ npm outdated -g --depth=0`；

## 如何发布包

- 用户登录
    - 创建用户帐户 `npm adduser`；
    - 登录用户账户 `npm login`；
    - 测试用户是否登录 `npm whoami` 或 `https://npmjs.com/~username`（检查用户名是否已添加到注册表中）；
- 包内容
- 包发布
  - 发布命令 `npm publish`; 
  - 发布作用域包 `npm publish --access=public`；
  - 发布标签包 `npm publish --tag beta`；

## 如何更新包

[关于语义版本控制](https://docs.npmjs.com/about-semantic-versioning)

- 更新版本号
  - 更改 package.json 中的版本号 `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]`；