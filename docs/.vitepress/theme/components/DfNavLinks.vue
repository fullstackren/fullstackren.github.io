<script setup lang="ts">
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'

import DfNavLink from './DfNavLink.vue'
import type { NavLink } from '../types'

const props = defineProps<{
  tag?: string
  title: string
  noIcon?: boolean
  items: NavLink[]
}>()

const component = computed(() => props.tag ?? 'h2')

const formatTitle = computed(() => {
  return slugify(props.title)
})
</script>

<template>
  <component :is="component" v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </component>
  <div class="df-nav-links">
    <DfNavLink
      v-for="item in items"
      :key="item.link"
      :noIcon="noIcon"
      v-bind="{ ...item, ...$attrs }"
    />
  </div>
</template>

<style lang="scss" scoped>
.df-nav-links {
  --df-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--df-nav-gap);
  grid-column-gap: var(--df-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--df-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .df-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .df-nav-links {
    --df-nav-gap: 20px;
  }
}
</style>