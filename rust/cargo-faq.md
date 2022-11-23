# cargo 常见问题

## MacOS 编译失败

使用 `cargo build` 或 `cargo run` 编译报错 `error: linking with`cc`failed: exit status: 1`，大概率原因是 MacOS 升级导致缺少一些工具依赖项，只需：

```sh
xcode-select --install
```

参考：[stackoverflow.com](https://stackoverflow.com/questions/28124221/error-linking-with-cc-failed-exit-code-1)
