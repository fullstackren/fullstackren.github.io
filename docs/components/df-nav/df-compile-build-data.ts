import type { NavData } from '../../.vitepress/theme/types'

// 编译构建
export const COMPILE_BUILD_DATA: NavData[] = [
  {
    title: '',
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
  }
]