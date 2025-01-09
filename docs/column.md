---
description: 专栏专讲
layoutClass: df-single-page-layout
outline: [2, 3, 4]
---

<script setup>
import DfCourse from './components/df-course/DfCourse.vue'

import { AI_DATA, LANGUAGE_DATA, ENGINEERING_DATA } from './components/df-course/df-course-data.ts'
</script>

# 专栏专讲

## AI 专栏

<ClientOnly>
  <DfCourse v-bind:data="AI_DATA" />
</ClientOnly>

## 语言专栏

<ClientOnly>
  <DfCourse v-bind:data="LANGUAGE_DATA" />
</ClientOnly>

## 开发环境专栏

<ClientOnly>
  <DfCourse v-bind:data="ENGINEERING_DATA" />
</ClientOnly>