# 入门

## 安装

```sh
npm install --global lerna
```

## 创建一个新的 git 代码仓库

```sh
git init lerna-repo && cd $_
```

## 将上述仓库转变为一个 Lerna 仓库

```sh
lerna init
```

## 代码仓库结构

```tree
lerna-repo/
  packages/
  package.json
  lerna.json
```