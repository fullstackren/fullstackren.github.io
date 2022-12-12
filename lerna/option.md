# 配置项

## npmClient

指定运行命令的客户端(也可以根据每个命令单独指定)。设定为 "yarn" 则使用 yarn 运行。默认值是 "npm"。

## packages

表示包位置的全局变量数组。

## useWorkspaces

lerna 与 yarn workspace 有很好的相性，设置 useWorkspaces 等价于使用 bootstrap 命令的 `--use-workspaces` 选项

## changelogPreset

预设是常规变更日志的内置或可安装配置的名称。