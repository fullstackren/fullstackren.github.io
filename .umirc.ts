import { defineConfig } from 'dumi';

export default defineConfig({
  description: '全栈工程师的攻坚之路',
  logo: '/images/logo.png',
  title: '全栈人',
  base: '/',
  publicPath: '/',
  mode: 'site',
  locales: [
    ['zh-CN', '中文']
  ],
  themeConfig: {},
  favicon: '/images/favicon.ico',
  navs: [
    {
      title: '前端',
      path: '/frontend',
    },
  ],
  metas: [
    {
      name: 'keywords',
      content: '全栈工程师',
    },
    {
      name: 'description',
      content: '全栈工程师的攻坚之路',
    },
  ],
  theme: {
    '@c-primary': '#C641EB',
  },
  styles: [
    `.markdown h3 a { color: #454d64; }
     .markdown blockquote p { margin: 5px  0; }
     .cat-animation {
        position: fixed;
        height: 300px;
        width: 500px;
        margin-top: 2em;
        margin-left: 2em;
        z-index: 11;
        transform: scale(.4);
        -webkit-animation: sprite-animation 1.2s steps(16) infinite;
        animation: sprite-animation 1.2s steps(16) infinite;
     }
     @-webkit-keyframes sprite-animation {
        0% {
          background-position: 0 0
        }

        to {
          background-position: -8120px 0
        }
      }

      @keyframes sprite-animation {
        0% {
          background-position: 0 0
        }

        to {
          background-position: -8120px 0
        }
      }
`,
  ],
  404: true,
  // more config: https://d.umijs.org/config
});
