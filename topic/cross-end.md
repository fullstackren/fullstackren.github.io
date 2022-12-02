# 跨端

## [从头开发一个多平台应用，大家会考虑哪种技术栈？](https://cn.v2ex.com/t/859150)

推荐 [flutter][1] + [rust][2] 方案：

- [flutter][1] 只做 UI 层, 跨平台。
- [rust][2] 做 core lib 层跨平台。

**优点**:

1. [flutter][1] UI 开发效率高, 现在已经是  [flutter][1] 3.0 版本了. 兼容性做的已经非常好. 放心使用。
2. 主要功能层, 尽量下沉到 [rust][2] 来实现. (可以分 2 步走, 第一阶段是 [flutter][1] 原生, 后续逐步用 [rust][2] 替换)。
3. [rust][2] 实现 core lib, 好处是, 以后 UI 层, 不使用  [flutter][1], 也可以改造其他方案( iOS/Android 原生, or 其他方案)。
4. [rust][2] 的性能和跨平台能力优秀. (上手门槛略高, 不过是值得的)。

**PS**:

1. 有条件就 [flutter][1] + [rust][2], 没条件用 [flutter][1]。
2. 不过建议从项目结构设计早期, 就做好拆分。
3. 区分 UI 层 和 core lib 层，方便后续改造。

[1]: https://flutter.dev/
[2]: https://www.rust-lang.org/zh-CN/
