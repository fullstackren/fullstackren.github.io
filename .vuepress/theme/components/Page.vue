<template>
  <main class="page">
    <slot name="top" />
    <div :class="{ 'theme-default-content': true }">
      <Content />

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
              rel="noopener noreferrer"
              >掘金</a
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
  margin-right: 2rem;
}
</style>
