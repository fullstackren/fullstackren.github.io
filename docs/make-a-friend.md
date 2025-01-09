---
description: 交个朋友
layoutClass: df-single-page-layout
outline: [2, 3, 4]
---

<script setup>
import DfMine from './components/df-mine/DfMine.vue'
import { CONTACT_DATA, OUTPUT_DATA } from './components/df-mine/df-mine-data.ts'
</script>

# 交个朋友

## 联系方式

<ClientOnly>
  <DfMine v-bind:data="CONTACT_DATA" />
</ClientOnly>

## 内容输出

<ClientOnly>
  <DfMine v-bind:data="OUTPUT_DATA" />
</ClientOnly>
