<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- 头部导航栏 -->
    <Headerbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <!-- <div class="sidebar-mask" @click="toggleSidebar(false)"></div> -->

    <!-- 侧边菜单栏 -->
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <div :style="{ paddingLeft: '1.5rem' }">
          <QR />
        </div>
      </template>
      <!-- <slot name="sidebar-bottom" #bottom /> -->
    </Sidebar>

    <!-- 首页 -->
    <div class="container" v-if="$page.frontmatter.home">
      <RoadmapCard :dataSource="homeRoadmaps" />
    </div>

    <!-- 前端 -->
    <div class="container" v-if="$page.frontmatter.frontend">
      <RoadmapCard :dataSource="frontendRoadmaps" />
    </div>

    <!-- 后端 -->
    <div class="container" v-if="$page.frontmatter.backend">
      <RoadmapCard :dataSource="backendRoadmaps" />
    </div>

    <!-- <Archive v-if="$page.frontmatter.archive" /> -->

    <!-- 内容区域 -->
    <Page
      v-if="!$page.frontmatter.home
        && !$page.frontmatter.frontend
        && !$page.frontmatter.backend"
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <div
          :style="{ marginTop: '3.6rem', paddingTop: 0, paddingBottom: 0 }"
          class="theme-default-content"
        >
          <Bar />
        </div>
      </template>
    </Page>

    <!-- {{$page}} -->

    <!-- <slot name="page-bottom" #bottom /> -->
    <Footerbar v-if="$page.frontmatter.home
      || $page.frontmatter.frontend
      || $page.frontmatter.backend"
     />
  </div>
</template>

<script>
import Headerbar from "@theme/components/Headerbar.vue";
import Footerbar from "@theme/components/Footerbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import QR from "@theme/components/QR.vue";
import Bar from "@theme/components/Bar.vue";
import Archive from "@theme/components/Archive.vue";
import RoadmapCard from "@theme/components/RoadmapCard.vue";
import { resolveSidebarItems } from "../util";
import { homeRoadmaps } from '../../data/home-roadmaps.js';
import { frontendRoadmaps, backendRoadmaps } from '../../data/developer-roadmaps.js';

export default {
  components: { RoadmapCard, Page, Sidebar, Headerbar, Footerbar, QR, Bar, Archive },

  data() {
    this.homeRoadmaps = homeRoadmaps;
    this.frontendRoadmaps = frontendRoadmaps;
    this.backendRoadmaps = backendRoadmaps;

    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    src() {
      return require(this.$page.frontmatter.thumbnail);
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
