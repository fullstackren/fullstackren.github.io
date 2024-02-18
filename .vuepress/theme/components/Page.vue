<template>
  <main
    class="page"
    :class="$page.frontmatter.single ? 'page-single' : ''">
    <slot name="top" />

    <div :class="{ 'theme-default-content': true }">
      <Content />
      <!-- <Skills /> -->
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

:not(.custom) div.content__default {
  margin-top: 0;
}
.day-say {
  margin: 2rem 0 4rem;
  border-left: 0.2rem solid #dfe2e5;
  padding: 0.25rem 0 0.25rem 1rem;
  line-height: 24px;
  transition: all 0.6s ease;
  &:hover {
    transform: translateX(-3px);
  }
  .day-say-content {
    color: #2c3e50;
    font-weight: normal;
    &:hover {
      color: #be49df;
    }
  }
  .day-say-from {
    margin: 10px 0 0;
    text-align: right;
    color: #666;
  }
  .day-say-tag {
    margin-left: 12px;
  }
}
.content-card {
  flex: 1
  margin-top: 60px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0 24px 24px;
  transition: all 0.6s ease;
  &:hover {
    transform: translateX(-3px);
  }
  ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  h1, h2 {
    border: 0 none;
    margin: 0 0 0 -6px;
    padding: 0 6px;
    display: inline-block;
    position: relative;
    top: -16px;
    background-color: white;
    height 34px
    overflow hidden
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
</style>
