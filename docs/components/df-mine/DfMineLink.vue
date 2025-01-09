<script setup lang="ts">
import { withBase } from 'vitepress'
import { MineData } from './types'

const props = defineProps<{
  noIcon?: MineData['noIcon']
  icon?: MineData['icon']
  image?: MineData['image']
  title: MineData['title']
  badge?: MineData['badge']
  desc?: MineData['desc']
  link?: MineData['link']
  time?: MineData['time']
}>()
</script>

<template>
  <a
    v-if="link"
    class="df-mine-link"
    :href="link"
    :target="link.includes('http') ? '_blank' : ''"
    rel="noreferrer"
    >
    <div class="df-mine-link-content">
      <div v-if="title" class="df-mine-link-title">{{ title }}</div>
      <div v-if="time" class="df-mine-link-time">{{ time }}</div>
      <div class="df-mine-link-desc">{{ desc }}</div>
      <div v-if="image" class="df-mine-link-image">
        <img
          :src="withBase(image)"
          :alt="title"
          loading="lazy"
          onerror="this.parentElement.style.display='none'"
        />
      </div>
    </div>
    <div v-if="icon" class="df-mine-link-icon">
      <img
        :src="withBase(icon)"
        :alt="title"
        loading="lazy"
        onerror="this.parentElement.style.display='none'"
      />
    </div>
  </a>
  <div v-else class="df-mine-link">
    <div class="df-mine-link-content">
      <div v-if="title" class="df-mine-link-title">{{ title }}</div>
      <div v-if="time" class="df-mine-link-time">{{ time }}</div>
      <div class="df-mine-link-desc" v-html="desc"></div>
      <div v-if="image" class="df-mine-link-image">
        <img
          :src="withBase(image)"
          :alt="title"
          loading="lazy"
          onerror="this.parentElement.style.display='none'"
        />
      </div>
    </div>
    <div v-if="icon" class="df-mine-link-icon">
      <img
        :src="withBase(icon)"
        :alt="title"
        loading="lazy"
        onerror="this.parentElement.style.display='none'"
      />
    </div>
  </div>
</template>

<style src="../df-common/index.scss" />
<style lang="scss" scoped>
.df-mine-link {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  text-decoration: inherit;
  background-color: #f6f7ff;
  transition: all 0.25s;
  margin-bottom: 15px;
  display: flex;
  &:hover {
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    transform: scale(1.01);
  }
  &-content {
    flex-grow: 1;
    padding: 15px;
  }
  &-icon {
    width: 80px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    img {
      height: 30px;
      border-radius: 8px 8px 0 0;
    }
  }
  &-image {
    width: 150px;
    margin-top: 5px;
    img {
      border-radius: 5px;
      box-shadow: rgba(163, 177, 191, 0.35) 0px 8px 24px;
    }
  }
  &-title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
    &:not(.no-icon) {
      line-height: var(--df-nav-icon-box-size);
    }
  }

  &-time, &-desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--df-nav-box-gap) - 2px) 0 0;
    line-height: 2;
    font-size: 14px;
    color: #333;
  }
  &-time {
    line-height: 1;
    color: rgb(170, 176, 192)
  }
}
</style>
