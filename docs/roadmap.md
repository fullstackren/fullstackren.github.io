---
description: 开发者路线是由江湖制作并收录了大量高质量的全栈开发技术，为开发工程师提供最简单、便捷的设计与编程服务
layoutClass: df-single-page-layout
outline: [2, 3, 4]
---

<script setup>
import DfRoadmapLatest from './components/df-roadmap/DfRoadmapLatest.vue'
import DfRoadmap from './components/df-roadmap/DfRoadmap.vue'

import { BLOG_DATA } from './components/df-roadmap/df-blog-data.ts'
import { LANGUAGE_RULE_DATA } from './components/df-roadmap/df-language-rule-data.ts'
import { REACT_DATA } from './components/df-roadmap/df-react-data.ts'
import { VUE_DATA } from './components/df-roadmap/df-vue-data.ts'
import { OTHER_WEB_FRAMEWORK_DATA } from './components/df-roadmap/df-other-framework-data.ts'
import { CSS_DATA } from './components/df-roadmap/df-css-data.ts'
import { COMPILE_BUILD_DATA } from './components/df-roadmap/df-compile-build-data.ts'
import { ENGINEERING_DATA } from './components/df-roadmap/df-engineering-data.ts'
import { CODE_LINT_DATA } from './components/df-roadmap/df-code-lint-data.ts'
import { TEST_DATA } from './components/df-roadmap/df-test-data.ts'
</script>

# 开发者路线

<ClientOnly>
  <DfRoadmapLatest />
</ClientOnly>

## 高质量博客

<ClientOnly>
  <DfRoadmap v-bind:data="BLOG_DATA" />
</ClientOnly>

## 语言文档和规范

<ClientOnly>
  <DfRoadmap v-bind:data="LANGUAGE_RULE_DATA" />
</ClientOnly>

## React 生态

<ClientOnly>
  <DfRoadmap v-bind:data="REACT_DATA" />
</ClientOnly>

## Vue 生态

<ClientOnly>
  <DfRoadmap v-bind:data="VUE_DATA" />
</ClientOnly>

## 其他 Web 开发框架

<ClientOnly>
  <DfRoadmap v-bind:data="OTHER_WEB_FRAMEWORK_DATA" />
</ClientOnly>

## CSS 生态

<ClientOnly>
  <DfRoadmap v-bind:data="CSS_DATA" />
</ClientOnly>

## 编译构建

<ClientOnly>
  <DfRoadmap v-bind:data="COMPILE_BUILD_DATA" />
</ClientOnly>

## 工程化

<ClientOnly>
  <DfRoadmap v-bind:data="ENGINEERING_DATA" />
</ClientOnly>

## 代码检查

<ClientOnly>
  <DfRoadmap v-bind:data="CODE_LINT_DATA" />
</ClientOnly>

## 测试工具

<ClientOnly>
  <DfRoadmap v-bind:data="TEST_DATA" />
</ClientOnly>
