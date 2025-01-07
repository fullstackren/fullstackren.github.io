<script setup lang="ts">
import DfCourseLink from './DfCourseLink.vue'
import type { CourseData } from './types'

const props = defineProps<{
  data: CourseData[]
}>()
</script>

<template>
  <div class="df-course-links">
    <DfCourseLink
      v-for="item in data"
      :key="item.link"
      v-bind="{ ...item, ...$attrs }"
    />
  </div>
</template>

<style src="../df-common/index.scss" />

<style lang="scss" scoped>
.df-course-links {
  --df-course-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--df-course-gap);
  grid-column-gap: var(--df-course-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--df-course-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .df-course-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .df-course-links {
    --df-course-gap: 20px;
  }
}
</style>
