<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { CourseData } from './types'

const props = defineProps<{
  noImage?: CourseData['noImage']
  image?: CourseData['image']
  title?: CourseData['title']
  badge?: CourseData['badge']
  desc?: CourseData['desc']
  link: CourseData['link']
}>()

const emits = defineEmits<{
  (event: 'nav-click', data: Partial<CourseData>): void
}>()

const svg = computed(() => {
  if (typeof props.image === 'object') return props.image.svg
  return ''
})
</script>

<template>
  <a
    v-if="link"
    :title="title"
    class="df-course-link"
    :href="link"
    :target="link.includes('http') ? '_blank' : ''"
    rel="noreferrer">
    <div class="df-course-link-item">
      <div v-if="svg" v-html="svg"></div>
      <img
        v-else-if="image && typeof image === 'string'"
        :src="withBase(image)"
        :alt="title"
        class="df-course-link-image"
        loading="lazy"
        onerror="this.parentElement.style.display='none'"
      />
      <div class="df-course-link-content">
        <div v-if="title" class="df-course-link-title">{{ title }}</div>
        <div v-if="desc" class="df-course-link-desc">{{ desc }}</div>
      </div>
    </div>
  </a>
</template>

<style src="../df-common/index.scss" />
<style lang="scss" scoped>
.df-course-link {
  --df-nav-icon-box-size: 40px;
  --df-nav-icon-size: 24px;
  --df-nav-box-gap: 14px;
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  box-shadow: rgba(163, 177, 191, 0.35) 0px 8px 24px;
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: var(--vp-c-bg-alt);
  transition: all 0.25s;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg);
    transform: scale(1.1);
  }
  &-item {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.03);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
    box-sizing: border-box;
    transition: transform 0.4s;
  }
  &-image {
    height: 140px;
    border-radius: 8px 8px 0 0;
  }
  &-content {
    padding: 20px;
  }
  &-title {
    font-weight: 500;
    font-size: 22px;
  }
  &-desc {
    margin-top: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    height: 44px;
  }
}

@media (min-width: 992px) {
  .df-course {
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 0px;
    grid-template-columns: repeat(auto-fill, 260px);
  }
}
</style>
