import type { NavData } from '../../.vitepress/theme/types'

export const CSS_DATA: NavData[] = [
  {
    title: '',
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
  }
]