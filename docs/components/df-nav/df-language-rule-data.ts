import type { NavData } from '../../.vitepress/theme/types'

export const LANGUAGE_RULE_DATA: NavData[] = [
  {
    title: '',
    items: [
      {
        title: 'HTML',
        desc: '超文本标记语言（HyperText Markup Language），定义了网页内容的含义和结构。',
        link: 'https://www.fullstack.ren/fe/web/html/',
        icon: '/icons/html.png',
      },
      {
        title: 'CSS',
        desc: 'CSS 规范说明。',
        link: 'https://www.w3.org/Style/CSS/specs.en.html',
        icon: '/icons/w3c.svg'
      },
      {
        title: 'ECMAScript',
        desc: '提供 Web 技术文档，学习 Web 开发的最佳实践。',
        link: 'https://tc39.es/ecma262/',
        icon: '/icons/ecma.svg'
      },
      {
        title: 'MDN',
        desc: 'ECMAScript 标准',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web',
        icon: '/icons/mdn.jpg'
      },
      {
        title: 'TypeScript',
        desc: 'TypeScript 是带有类型语法的 JavaScript。',
        link: 'https://www.typescriptlang.org/',
        icon: '/icons/typescript.png'
      },
      {
        title: 'JSON Schema',
        desc: 'JSON Schema 是一个词汇表，可以验证、注释和操作 JSON 文档。',
        link: 'https://json-schema.org/',
        icon: '/icons/json-schema.svg'
      },
      {
        title: 'Go',
        desc: 'Build simple, secure, scalable systems with Go。',
        link: 'https://go.dev/',
        icon: '/icons/go.png'
      },
      {
        title: 'Rust',
        desc: '一门帮助每个人构建可靠且高效软件能力的语言。',
        link: 'https://www.rust-lang.org/',
        icon: '/icons/rust.svg'
      },
    ]
  }
]