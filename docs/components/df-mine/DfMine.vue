<script setup lang="ts">
import DfMineLink from './DfMineLink.vue'
import type { MineData } from './types'

defineProps<{
  data: MineData[]
}>()
</script>

<template>
  <DfMineLink
    v-for="item in data"
    :key="item.title"
    v-bind="{ ...item, ...$attrs }"
  />
</template>

<style src="../df-common/index.scss" />