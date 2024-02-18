<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">跳往首页</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里什么都没有。`,
  `怎么来这儿的？估计你有一个错误的链接地址。`,
  `看起来我们有一些断开的链接！`,
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>
