# Rust语言基础

## 学习建议

- 从整体出发，不要让自己陷入到细节中去；
- 抛弃一次性学会的念头，分层次递进式学习；
- 和已知的知识建立联系；
- 学会阅读源码，从源码中学习（看到哪学到哪）；
- 通过主题式阅读填补知识空白；
- 时刻把握 Rust 哲学；
- 有意识地构建 Rust 语言的心智模型；
- 多分享、多提问、多交流；
- 为开源项目做贡献，锻炼自己；
- 阅读《Rust编程之道》；

## 解决什么问题

安全、性能、开发体验与高效。

## 编译过程

Rust是编译型语言， 编译器是 Rustc。 Rustc是一个多道编译器，编译过程要经历多道工序，编译过程如下：

Rust code [分词]-> Rust parser（Tokens）[解析]-> Rust AST [降级]-> Rust HIR（高级中间语言） [降级]-> Rust MIR（中级中间语言）[优化]-> Rust LLVMIR（LLVM中间语言） [优化]-> 机器语言

## 词法结构

- 关键字 Keywords
  - 严格关键字
  - 保留字
  - 弱关键字
- 标识符 Identifier
  - 支持 ASCII 码字符串
  - 变量名、函数名、参数名、类型名等
- 注释 Comment
  - `//!`
- 空白 Whitespace
  - `\n`、`\t`、`tab`
- 词条 Tokens，写宏非常有用
  - 语言项 item
  - 块 block
  - 语句 Stmt
  - 表达式 Expr
  - 模式 Pattern
  - 关键字 Keyword
  - 标识符 Ident
  - 字面量 Literal
  - 生命周期 Lifetime
  - 可见性 Vis
  - 标点符号 Punctuation
  - 分隔符 delimiter
  - 词条树 Token Tree
  - 属性 Attribute
- 路径 Path
  - 是由名称空间限定符 `::`

