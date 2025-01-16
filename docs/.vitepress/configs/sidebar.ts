import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/web/': [
    { text: 'Web 开发者路线', link: '/web/',
      items: [
        { text: '前端框架', collapsed: false,
          items: [
            { text: '前端框架', link: '/web/framework' },
            { text: 'React', link: '/web/framework/react' },
            { text: 'Vue2', link: '/web/framework/vue2' },
            { text: 'Vue3', link: '/web/framework/vue3' },
            { text: 'Svelte', link: '/web/framework/svelte' },
            { text: 'Angular', link: '/web/framework/angular' },
            { text: 'Solid', link: '/web/framework/solid' },
          ]
        },
        { text: 'ES6', collapsed: false,
          items: [
            { text: 'ES6', link: '/web/es6' },
          ]
        },
        { text: 'JavaScript', collapsed: false,
          items: [
            { text: '总览', link: '/web/javascript' },
            { text: '基础知识', link: '/web/javascript/basic' },
          ]
        },
        { text: 'HTML', link: '/web/html' },
        { text: 'CSS', collapsed: false,
          items: [
            { text: '总览', link: '/web/css' },
            { text: 'CSS', link: '/web/css/css' },
            { text: 'Less', link: '/web/css/less' },
            { text: 'Sass', link: '/web/css/sass' },
          ]
        },
        { text: 'Web API', collapsed: false,
          items: [
            { text: '总览', link: '/web/web-api' },
          ]
        },
        { text: 'TypeScript', collapsed: false,
          items: [
            { text: '总览', link: '/web/typescript' },
          ]
        },
      ]
    },
  ],
  '/engineering/': [
    { text: '工程化', collapsed: false,
      items: [
        
      ]
    }
  ],
  '/thinking/': [
    { text: '工作模式', link: '/thinking/working-mode'},
    { text: '博客打造品牌影响力', link: '/thinking/blog-influence'},
  ]
}
