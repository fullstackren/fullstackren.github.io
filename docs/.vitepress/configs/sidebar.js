export const sidebar = {
  '/developer-roadmap/': [
    { 
      items: [
        { text: '前端开发者路线图', link: '/developer-roadmap/frontend-develop-roadmap' },
        { text: '后端开发者路线图', link: '/developer-roadmap/backend-develop-roadmap' },
        { text: '运维开发者路线图', link: '/developer-roadmap/devops-develop-roadmap' },
      ]
    }
  ],
  '/web-develop/': [
    { text: 'Web 基础',
      items: [
        { text: 'HTML', link: '/web-develop/web-basic/html' },
        { text: 'CSS', link: '/web-develop/web-basic/csss' },
        { text: 'JavaScript', link: '/web-develop/web-basic/javascript' },
        { text: 'Web APIs', link: '/web-develop/web-basic/web-apis' }
      ]
    },
    { text: 'Web 框架',
      items: [
        { text: 'Vue', 
          items: [
            { text: 'Vue', link: '/web-develop/web-framework/vue' },
            { text: 'Vue2 APIs', link: '/web-develop/web-framework/vue2-apis' },
          ]
        },
      ]
    }
  ],
  '/frontend-engineering/': [
    { text: '前端工程化', link: '/frontend-engineering' },
    { text: 'NVM', link: '/frontend-engineering/nvm' }
  ]
}