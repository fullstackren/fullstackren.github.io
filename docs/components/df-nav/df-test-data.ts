import type { NavData } from '../../.vitepress/theme/types'

export const TEST_DATA: NavData[] = [
  {
    title: '',
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
]