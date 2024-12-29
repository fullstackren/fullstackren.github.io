import type { NavData } from '../../.vitepress/theme/types'

export const ROADMAP_DATA: NavData[] = [
  // {
  //   title: '',
  //   desc: '',
  //   link: '',
  //   icon: '',
  // },
  {
    title: '高质量博客',
    items: [
      {
        title: 'Fresh Frontend Links',
        desc: '新鲜的前端链接。',
        badge: "每周更新",
        link: 'https://frontender-ua.medium.com/',
        icon: '/icons/medium.png',
      },
      {
        title: '科技爱好者周刊',
        desc: '阮一峰的科技爱好者周刊。',
        badge: "每周五更新",
        link: 'https://www.ruanyifeng.com/blog/archives.html',
        icon: '/icons/ruanyifeng.jpeg',
      },
      {
        title: '冴羽的博客',
        desc: 'github issue维护的博客文章。',
        link: 'https://github.com/mqyqingfeng/Blog',
        icon: 'https://avatars.githubusercontent.com/u/11458263?s=64&v=4',
      },
      {
        title: '前端精读',
        desc: 'github issue维护的博客文章。',
        link: 'https://github.com/ascoders/weekly',
        icon: 'https://avatars.githubusercontent.com/u/7970947?s=48&v=4',
      },
      {
        title: '小林coding',
        desc: '小林 x 图解计算机基础（计算机网络、操作系统、计算机组成、数据库）。',
        link: 'https://xiaolincoding.com/',
        icon: 'https://xiaolincoding.com/logo.webp',
      },
      {
        title: '峰华前端工程师',
        desc: '致力于帮助你以最直观、最快速的方式学会前端开发，并希望我的个人经历对你有所启发。。',
        link: 'https://zxuqian.cn/videos',
        icon: 'https://zxuqian.cn/img/logo.webp',
      },
      {
        title: '茂茂物语',
        desc: '知识是进步的阶梯，争取每天都有知识点更新。',
        link: 'https://notes.fe-mm.com/',
        icon: 'https://notes.fe-mm.com/logo.png',
      },
      {
        title: 'antfu.me',
        desc: 'Vue, Vite, Nuxt 核心团队成员 | VueUse, Slidev, Vitest, UnoCSS 作者。',
        link: 'https://antfu.me/posts',
        icon: 'https://notes.fe-mm.com/icons/antfu.svg',
      },
      {
        title: '鑫空间-鑫生活',
        desc: '张鑫旭的博客。',
        link: 'https://www.zhangxinxu.com/',
        icon: 'https://cdn.zhangxinxu.com/wordpress/wp-content/themes/default/images/index_logo.gif',
      },
      {
        title: '奇舞周刊',
        desc: '领略前端技术 阅读奇舞周刊（360 前端团队）。',
        link: 'https://weekly.75.team/',
        icon: 'https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico',
      },
    ]
  },
  {
    title: '语言文档和规范',
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
  },
  {
    title: 'React 生态',
    items: [
      {
        title: 'React',
        desc: '构建用户界面的 JavaScript 库。',
        link: 'https://react.dev/',
        icon: '/icons/react.svg',
      },
      {
        title: 'Redux',
        desc: 'React 状态管理',
        link: 'https://redux.js.org/',
        icon: '/icons/redux.svg',
      },
      {
        title: 'Next.js',
        desc: 'React 零配置一站式解决方案。',
        link: 'https://nextjs.org/',
        icon: '/icons/nextjs.png',
      },
      {
        title: 'Create React App',
        desc: 'React 官方维护的创建 React 单页面应用的工具。',
        link: 'https://create-react-app.dev/',
        icon: '/icons/create-react-app.svg',
      },
      {
        title: 'Preact',
        desc: 'React 的 3kb 轻量化方案，拥有同样的 ES6 API',
        link: 'https://preactjs.com/',
        icon: '/icons/preact.png',
      },
      {
        title: 'React-Router',
        desc: 'React 导航组件',
        link: 'https://reactrouter.com/',
        icon: '/icons/react-router.svg',
      },
      {
        title: 'Nerv',
        desc: 'Nerv 是一款基于虚拟 DOM 技术的 JavaScript（TypeScript）库，它提供了与 React 16 一致的使用方式与 API，并且拥有更高的性能表现、更小的包大小以及更好的浏览器兼容性',
        link: 'https://nerv.aotu.io/',
        icon: '/icons/nerv.png',
      },
      {
        title: 'Blitz',
        desc: '基于 Next.js 构建的全栈 React 框架，灵感来源于 Ruby on Rails，具有零 API 的数据层抽象，无需 REST/GraphQL',
        link: 'https://blitzjs.com/',
        icon: '/blitz.svg',
      },
      {
        title: 'Gatsby',
        desc: '基于 React 实现构建快速、现代的应用程序及网站',
        link: 'https://www.gatsbyjs.com/',
        icon: '/icons/Gatsby.svg',
      },
      {
        title: 'Redwood',
        desc: '将全栈引入 Jamstack，基于 React、GraphQL 和 Prisma 实现',
        link: 'https://redwoodjs.com/',
        icon: '/icons/redwood.svg',
      },
      {
        title: 'ice.js',
        desc: '基于 React 的渐进式研发框架',
        link: 'https://ice.work/',
        icon: '/icons/icework.png',
      },
      {
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org/',
        icon: '/icons/umi.png',
      },
      {
        title: 'Ant Design',
        desc: '基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品',
        link: 'https://ant-design.antgroup.com/index-cn',
        icon: '/icons/antd.svg'
      }
    ]
  },
  {
    title: 'Vue 生态',
    items: [
      {
        title: 'Vue3',
        desc: '渐进式 JavaScript 框架。',
        link: 'https://cn.vuejs.org/',
        icon: '/icons/vue.svg',
      },
      {
        title: 'Vue2',
        desc: '渐进式 JavaScript 框架。',
        link: 'https://v2.cn.vuejs.org/',
        icon: '/icons/vue.svg',
      },
      {
        title: 'vue-cli',
        desc: 'Vue.js 官方指定的脚手架工具。',
        link: 'https://cli.vuejs.org/',
        icon: '/icons/vue.svg',
      },
      {
        title: 'Vue Router V4.x',
        desc: 'Vue 3 官方路由。',
        link: 'https://router.vuejs.org/',
        icon: '/icons/vue.svg',
      },
      {
        title: 'Vuex',
        desc: 'Vue 官方状态管理工具。',
        link: 'https://vuex.vuejs.org/',
        icon: '/icons/vue.svg',
      },
      {
        title: 'Nuxt.js',
        desc: '基于 Vue.js 的一站式解决方案。',
        link: 'https://nuxt.com/',
        icon: '/icons/nuxt.svg',
      },
    ]
  },
  {
    title: '其他 Web 开发框架',
    items: [
      {
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码。',
        link: 'https://svelte.dev/',
        icon: '/icons/svelte.svg?t=1',
      },
      {
        title: 'Angular',
        desc: '应用程序设计框架和开发平台，用于创建高效且复杂的单页应用程序。',
        link: 'https://angular.dev/',
        icon: '/icons/angular.svg',
      },
      {
        title: 'Solid',
        desc: '用于构建声明式、高效且灵活 UI 界面的 JavaScript 库。。',
        link: 'https://www.solidjs.com/',
        icon: '/icons/solid.svg',
      },
    ]
  },
  {
    title: 'CSS 生态',
    items: [
      {
        title: 'Less',
        desc: 'Less 是 CSS 预处理语言，使 CSS 更易维护和扩展。',
        link: 'https://lesscss.cn/',
        icon: '/icons/less.svg',
      },
      {
        title: 'Sass',
        desc: 'Sass 是 CSS 的一个扩展，它使 CSS 的使用起来更加优雅和强大。',
        link: 'https://sass-guidelin.es/zh/',
        icon: '/icons/sass.svg',
      },
      {
        title: 'PostCSS',
        desc: '通过 JavaScript 来转换 CSS，并且提供强大的插件系统。',
        link: 'https://postcss.org/',
        icon: '/icons/postcss.svg',
      },
      {
        title: 'Stylus',
        desc: '富有表现力、动态、健壮的 CSS。',
        link: 'https://www.stylus-lang.cn/',
        icon: '/icons/stylus.svg',
      },
    ]
  },
  {
    title: '编译构建',
    items: [
      {
        title: 'Rollup',
        desc: '新一代 JavaScript 模块打包器。',
        link: 'https://www.rollupjs.com/',
        icon: '/icons/rollup.svg'
      },
      {
        title: 'Webpack',
        desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
        link: 'https://webpack.js.org/',
        icon: '/icons/webpack-offical.svg'
      },
      {
        title: 'turborepo',
        desc: 'Webpack创始人下一代构建工具。',
        link: 'https://turbo.build/',
        icon: 'https://turbo.build/images/docs/pack/turbopack-hero-logo-dark.svg'
      },
      {
        title: 'Vite',
        desc: '下一代前端开发与构建工具。',
        link: 'https://cn.vitejs.dev/',
        icon: 'https://vitejs.dev/logo.svg'
      },
      {
        title: 'Gulp',
        desc: '基于流的自动化构建工具。',
        link: 'https://www.gulpjs.com.cn/',
        icon: '/icons/gulp.svg'
      },
      {
        title: 'Parcel',
        desc: '零配置打包工具。',
        link: 'https://zh.parceljs.org/',
        icon: '/icons/parcel.png'
      },
      {
        title: 'Babel',
        desc: '一个编译工具，让你可以项目中直接使用下一代 JavaScript。',
        link: 'https://babeljs.io/',
        icon: '/icons/babel.png'
      },
      {
        title: 'Lerna',
        desc: '用于管理有多个包的 JavaScript 项目的工具。',
        link: 'https://lerna.js.org/',
        icon: '/icons/lerna.svg'
      }
    ]
  },
  {
    title: 'Node.js & Deno 生态',
    items: [
      {
        title: 'Node.js',
        desc: '基于 V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.cn/',
        icon: '/icons/node.svg',
      },
      {
        title: 'Deno',
        desc: 'Deno 是一个 JavaScript/TypeScript 的运行时',
        link: 'https://manual.deno.js.cn/introduction',
        icon: '/icons/deno.svg',
      },
      {
        title: 'bun',
        desc: 'JavaScript新一代一站式运行时',
        link: 'https://bun.sh/',
        icon: 'https://bun.sh/logo.svg',
      },
      {
        title: 'Koa',
        desc: '新一代的 Web 后台框架',
        link: 'https://koajs.com/',
        icon: '/icons/koa.svg',
      },
      {
        title: 'Express',
        desc: '快速极简的 Web 框架',
        link: 'https://expressjs.com/zh-cn/',
        icon: '/icons/express.png',
      },
      {
        title: 'Nest.js',
        desc: '渐进式 Node.js 框架，构建高效、可靠和可扩展的 server 应用程序',
        link: 'https://nestjs.com/',
        icon: '/icons/nest.png',
      },
      {
        title: 'ThinkJS',
        desc: '能够使用完整 ES6/7 特性进行开发的 Node.js 应用程序',
        link: 'https://thinkjs.org/',
        icon: '/icons/think.png',
      },
      {
        title: 'npm',
        desc: 'npm 是 JavaScript package 管理工具，在这里可以找到可复用代码，并以强大的全新方式进行聚合',
        link: 'https://docs.npmjs.com/',
        icon: '/icons/npm.png',
      },
      {
        title: 'yarn',
        desc: '快速、可靠和安全的依赖管理',
        link: 'https://classic.yarnpkg.com/zh-Hans/',
        icon: '/icons/yarn.png',
      },
    ]
  },
  // {
  //   title: '计算机基础',
  //   items: [
      
  //   ]
  // },
  {
    title: '代码检查',
    items: [
      {
        title: 'Standard JS',
        desc: 'JavaScript 风格指南、检查工具和格式化工具。',
        link: 'https://standardjs.com/',
        icon: '/icons/standardjs.svg',
      },
      {
        title: 'StyleLint',
        desc: '强大的现代 CSS 检测工具，帮助样式表遵循一致的约定和避免错误。',
        link: 'https://stylelint.io/',
        icon: '/icons/stylelint.svg',
      },
      {
        title: 'ESLint',
        desc: '可组装的、用于 JavaScript 和 JSX 的代码检查工具。',
        link: 'https://zh-hans.eslint.org/',
        icon: '/icons/eslint.svg',
      },
    ]
  },
  {
    title: '测试工具',
    items: [
      {
        title: 'Jest',
        desc: 'Facebook 开发的零配置测试平台，让代码库更加稳定和健壮。',
        link: 'https://jestjs.io/',
        icon: '/icons/jest.png',
      },
      {
        title: 'Mocha',
        desc: 'Mocha 是运行在 Node.js 和浏览器上的功能丰富的 JavaScript 测试框架，使异步测试变得简单而有趣。Mocha 串行运行测试，提供灵活精准的报告，同时将未捕获的异常映射到正确的测试用例。',
        link: 'https://mochajs.org/',
        icon: '/icons/mocha.svg',
      },
      {
        title: 'Chai',
        desc: 'Chai 是一个用于 Node.js 和浏览器的 BDD/TDD 断言库，可以与任何 JavaScript 测试框架便捷配对。',
        link: 'https://www.chaijs.com/',
        icon: '/icons/chai.png',
      },
      {
        title: 'Mock.js',
        desc: '生成随机数据，拦截 Ajax 请求。',
        link: 'http://mockjs.com/',
        icon: '/icons/mockjs.svg',
      },
      {
        title: 'Puppeteer',
        desc: 'Puppeteer 可以通过 DevTools 协议控制 headless Chrome 或 Chromium。',
        link: 'https://pptr.dev/',
        icon: '/icons/puppeteer.png',
      },
    ]
  }
  
  // {
  //   title: '桌面开发',
  //   items: [
  //     {
  //       icon: 'https://caniuse.com/img/favicon-128.png',
  //       title: 'Can I use',
  //       desc: '前端 API 兼容性查询',
  //       link: 'https://caniuse.com'
  //     },
  //   ]
  // },
  // {
  //   title: '移动开发',
  //   items: [
  //     {
  //       icon: 'https://caniuse.com/img/favicon-128.png',
  //       title: 'Can I use',
  //       desc: '前端 API 兼容性查询',
  //       link: 'https://caniuse.com'
  //     },
  //   ]
  // },
  // {
  //   title: '跨端开发',
  //   items: [
  //     {
  //       icon: 'https://caniuse.com/img/favicon-128.png',
  //       title: 'Can I use',
  //       desc: '前端 API 兼容性查询',
  //       link: 'https://caniuse.com'
  //     },
  //   ]
  // },
  // {
  //   title: '工程化',
  //   items: [
  //     {
  //       icon: 'https://caniuse.com/img/favicon-128.png',
  //       title: 'Can I use',
  //       desc: '前端 API 兼容性查询',
  //       link: 'https://caniuse.com'
  //     },
  //   ]
  // },
  // {
  //   title: '测试',
  //   items: [
  //     {
  //       icon: 'https://caniuse.com/img/favicon-128.png',
  //       title: 'Can I use',
  //       desc: '前端 API 兼容性查询',
  //       link: 'https://caniuse.com'
  //     },
  //   ]
  // },
  // {
  //   title: '职场',
  //   items: [
  //     {
  //       icon: 'https://caniuse.com/img/favicon-128.png',
  //       title: 'Can I use',
  //       desc: '前端 API 兼容性查询',
  //       link: 'https://caniuse.com'
  //     },
  //   ]
  // }
]