---
description: 开发者路线是由江湖制作并收录了大量高质量的全栈开发技术，为开发工程师提供最简单、便捷的设计与编程服务
layoutClass: df-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { ROADMAP_DATA } from './components/df-roadmap/df-roadmap-data.ts'
import DfNav from './components/df-nav/DfNav.vue'
</script>

# 开发者路线

<DfNav v-bind:data="ROADMAP_DATA" />