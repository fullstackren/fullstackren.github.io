<template>
  <main class="page">
    <slot name="top" />
    <div :class="{ 'theme-default-content': true }">
      <Content />

      <!-- <Skills /> -->

      <div class="connect">
        <img
          src="../assets/wechat-run-kit.jpeg"
          alt="全栈孤勇者"
          width="120"
          height="120"
          loading="lazy"
        />
        <div>
          <p class="connect-intro">
            加我微信请备注<span class="highlight">全栈孤勇者</span
            >，一起「侃」大事。
          </p>
          <p class="connect-intro">
            <a
              href="https://github.com/fullstackren"
              target="_blank"
              rel="noopener noreferrer"
              class="item"
              >Github</a
            >
            <a
              href="https://juejin.cn/user/1046390799881463"
              target="_blank"
              class="item"
              rel="noopener noreferrer"
              >掘金</a
            >
            <a
              href="https://dev.to/fullstackren"
              target="_blank"
              class="item"
              rel="noopener noreferrer"
              >Dev.to</a
            >
            <a
              href="https://www.v2ex.com/?r=fullstackren"
              target="_blank"
              class="item"
              rel="noopener noreferrer"
              >V2ex</a
            >
            <a
              href="https://medium.com/@fullstackren"
              target="_blank"
              class="item"
              rel="noopener noreferrer"
              >Medium</a
            >
            <a
              href="https://www.zhihu.com/people/fedlib"
              target="_blank"
              rel="noopener noreferrer"
              >知乎</a
            >
          </p>
        </div>
      </div>
    </div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
// import Skills from "@theme/components/Skills.vue";

export default {
  components: { PageEdit, PageNav },
  data() {
    return {};
  },
  async mounted() {},
  computed: {},
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

.theme-default-content:not(.custom) div.content__default {
  margin-top: 0;
}
.content-card {
  margin-top: 60px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0 24px;
  h1, h2 {
    border: 0 none;
    margin: 0 0 0 -6px;
    padding: 0 6px;
    display: inline-block;
    position: relative;
    top: -18px;
    background-color: white;
  }
  h3 {
    padding: 0 6px;
    margin-top: 36px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 6px;
  }
}
.red {
  color: red;
}
.green {
  color: green;
}
.connect {
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  margin-top: 4rem;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
}

.connect .connect-intro {
  margin-left: 12px;
  color: #999;
  line-height: 24px;
  margin: 0;
  padding: 0.5rem;
}

.connect .connect-intro .item {
  margin-right: 0.8rem;
}
</style>
