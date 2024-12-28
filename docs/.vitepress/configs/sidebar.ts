import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/': [
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: 'this', link: '/fe/web/javascript/this' },
      ]
    },
  ]
}
