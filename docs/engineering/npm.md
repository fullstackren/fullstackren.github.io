# npm

## 常用命令及参数

经常会忘记一些常用命令，在这里进行汇总记录。

### 初始化命令

|<div style="width: 120px;">命令</div>|说明|
|:--|:--|
|npm init|初始化项目，生成`package.json`文件，参数`--yes`、`--force`可跳过询问过程，直接生成配置|

### 安装命令

|<div style="width: 320px;">命令</div>|说明|
|:--|:--|
| npm install pkg -g | 全局安装，`-g` 是简写，全称 `--global` |
| npm install pkg -S | 安装依赖并添加到`dependencies`，`-S` 是简写，全称 `--save`|
| npm install pkg -D |安装并添加到`devDependencies`，`-D` 是简写，全称 `--save-dev`|
| npm config set cache "D:\xxx\xxx\node_global" | 设置安装路径 |

安装三方包时的版本控制说明：

- **无符号**: 仅接受指定的特定版本（例如 `1.2.1`）。
- **latest**: 使用可用的最新版本。
- **^**: 只会执行不更改最左边非零数字的更新。如果写入的是 `^1.13.0`，则当运行 `npm update` 时，可以更新到 `1.13.1`、`1.14.0` 等，但不能更新到 `2.0.0` 或更高版本。
- **~**: 如果写入的是 `〜0.13.0`，则当运行 npm update 时，会更新到补丁版本：即 `0.13.1` 可以，但 `0.14.0` 不可以。
- **>**: 接受高于指定版本的任何版本。
- **>=**: 接受等于或高于指定版本的任何版本。
- **<=**: 接受等于或低于指定版本的任何版本。
- **<**: 接受低于指定版本的任何版本。
- **=**: 接受确切的版本。
- **-**: 接受一定范围的版本。例如：`2.1.0` - `2.6.2`。
- **||**: 组合集合。例如 `< 2.1` || `> 2.6`。可以合并其中的一些符号，例如 `1.0.0` || `>=1.1.0 <1.2.0`，即使用 `1.0.0` 或从 `1.1.0` 开始但低于 `1.2.0` 的版本。

### 查看命令

|<div style="width: 120px;">命令</div>|说明|
|:--|:--|
| npm list | 查看当前目录下安装的所有安装包及其依赖包 |
| npm list --depth 0 | 查看当前目录下安装的所有安装包，其中 `--depth` 参数后面的数字表示的需要列出依赖包的层级 |
| npm -g list --depth 0 | 查看全局已安装的依赖包 |
| npm view pkg | 查看 pkg 的详细信息 |
| npm list pkg<br/> 或<br/> npm view pkg version | 查看 pkg 这个安装包的版本 | 
| npm view pkg versions | 查看 pkg 这个安装包的所有版本 |
| npm config get xxx | 查看具体配置 |

### 清除缓存
|<div style="width: 120px;">命令</div>|说明|
|:--|:--|
| npm cache clean --force | 清除 npm 缓存 |

### 配置命令

|<div style="width: 420px;">命令</div>|说明|
|:--|:--|
| npm config list | 查看基本配置，后面增加参数 `-l` 能查看所有配置 |
| npm config set registry https://registry.npmmirror.com/ | 设置淘宝镜像 |
| npm --registry https://registry.npmmirror.com/ install pkg -S | 临时使用指定的下载地址 |
| npm config set prefix "D:\xxx\xxx\npm_cache" | 设置缓存路径 |

### 升级

|<div style="width: 120px;">命令</div>|说明|
|:--|:--|
| npm update pkg | 只升级指定的pkg |
| npm update | 会检查云端的版本信息，对比本地安装包的版本规则，然后更新到对应规则的最新版本 |
| npm update -g | 升级全局安装的依赖包 |

### 卸载

|<div style="width: 200px;">命令</div>|说明|
|:--|:--|
| npm uninstall pkg | 卸载pkg，并从 package.json、package-lock.json 中删除掉 |
| npm uninstall pkg --no-save | 卸载 pkg，但是不会从 package.json、package-lock.json 中删除，仍保留 |

## 参考地址

- [npmjs文档](https://docs.npmjs.com/)