<script setup lang="ts">
import { ref } from 'vue'
import { inBrowser } from 'vitepress'

import type { NavLink } from '../../.vitepress/theme/types'

const FULLSTACKREN_ROADMAP_LINKS_KEY = 'fullstackren-roadmap-links'

const getItems = () => {
  if (!inBrowser) {
    return []
  }
  const value = localStorage.getItem(FULLSTACKREN_ROADMAP_LINKS_KEY)
  if (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      return []
    }
  }
  return []
}

const items = ref<NavLink[]>(getItems())

const handleClick = (data: NavLink) => {
  let newData = items.value.filter((item) => item.link !== data.link)
  newData.unshift(data)
  if (newData.length > 4) {
    newData = newData.slice(0, 4)
  }
  localStorage.setItem(FULLSTACKREN_ROADMAP_LINKS_KEY, JSON.stringify(newData))
  items.value = newData
}
</script>

<template>
  <DfNavLinks v-if="items.length" title="最近使用" @nav-click="handleClick" :items="items" />
</template>
