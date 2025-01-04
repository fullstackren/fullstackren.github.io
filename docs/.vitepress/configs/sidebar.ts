import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/web/': [
    { text: 'JavaScript', collapsed: false,
      items: [
        { text: 'this', link: '/fe/web/javascript/this' },
      ]
    },
  ],
  '/fe/': [
    { text: '工程化',
      items: [
        { text: 'npm', link: '/fe/engineering/npm'},
      ]
    }
  ],
}
