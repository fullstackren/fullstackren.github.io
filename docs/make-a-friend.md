---
description: 交个朋友
layoutClass: df-single-page-layout
outline: [2, 3, 4]
---

<script setup>
import DfMine from './components/df-mine/DfMine.vue'

import { MAKE_A_FRIEND_DATA } from './components/df-mine/df-mine-data.ts'
</script>

# 交个朋友

<ClientOnly>
  <div style="margin-top: 20px;">
    <DfMine v-bind:data="MAKE_A_FRIEND_DATA" />
  </div>
</ClientOnly>
