import type { NavData } from '../../.vitepress/theme/types'

export const CODE_LINT_DATA: NavData[] = [
  {
    title: '',
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
  }
]