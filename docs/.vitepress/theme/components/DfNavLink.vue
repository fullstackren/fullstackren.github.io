<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

import { NavLink } from '../types'

const props = defineProps<{
  noIcon?: NavLink['noIcon']
  icon?: NavLink['icon']
  badge?: NavLink['badge']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
}>()

const emits = defineEmits<{
  (event: 'nav-click', data: Partial<NavLink>): void
}>()

const formatTitle = computed(() => {
  if (!props.title) {
    return ''
  }
  return slugify(props.title)
})

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})

const formatBadge = computed(() => {
  if (typeof props.badge === 'string') {
    return { text: props.badge, type: 'info' }
  }
  return props.badge
})

const handleClick = () => emits('nav-click', props)
</script>

<template>
  <a
    v-if="link"
    class="df-nav-link"
    :href="link"
    :target="link.includes('http') ? '_blank' : ''"
    rel="noreferrer"
    @click="handleClick"
  >
    <article class="box" :class="{ 'has-badge': formatBadge }">
      <div class="box-header">
        <template v-if="!noIcon">
          <div v-if="svg" class="icon" v-html="svg"></div>
          <div v-else-if="icon && typeof icon === 'string'" class="icon">
            <img
              :src="withBase(icon)"
              :alt="title"
              loading="lazy"
              onerror="this.parentElement.style.display='none'"
            />
          </div>
        </template>
        <h5 v-if="title" :id="formatTitle" class="title" :class="{ 'no-icon': noIcon }">
          {{ title }}
        </h5>
      </div>
      <Badge v-if="formatBadge" class="badge" :type="formatBadge.type" :text="formatBadge.text" />
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.df-nav-link {
  --df-nav-icon-box-size: 40px;
  --df-nav-icon-size: 24px;
  --df-nav-box-gap: 12px;

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

  .box {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: var(--df-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    &.has-badge {
      padding-top: calc(var(--df-nav-box-gap) + 2px);
    }
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--df-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--df-nav-icon-box-size);
    height: var(--df-nav-icon-box-size);
    font-size: var(--df-nav-icon-size);
    // background-color: var(--vp-c-default-soft);
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--df-nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      height: 100%;
      width: 100%
      // width: var(--df-nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    &:not(.no-icon) {
      line-height: var(--df-nav-icon-box-size);
    }
  }

  .badge {
    position: absolute;
    top: 2px;
    right: 0;
    transform: scale(0.8);
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--df-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .df-nav-link {
    --df-nav-icon-box-size: 36px;
    --df-nav-icon-size: 20px;
    --df-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>