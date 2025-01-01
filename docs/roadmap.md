---
description: 开发者路线是由江湖制作并收录了大量高质量的全栈开发技术，为开发工程师提供最简单、便捷的设计与编程服务
layoutClass: df-nav-layout
outline: [2, 3, 4]
---

<script setup>
import DfNavRoadmapLatest from './components/df-nav/DfNavRoadmapLatest.vue'
import DfNavRoadmap from './components/df-nav/DfNavRoadmap.vue'

import { BLOG_DATA } from './components/df-nav/df-blog-data.ts'
import { LANGUAGE_RULE_DATA } from './components/df-nav/df-language-rule-data.ts'
import { REACT_DATA } from './components/df-nav/df-react-data.ts'
import { VUE_DATA } from './components/df-nav/df-vue-data.ts'
import { OTHER_WEB_FRAMEWORK_DATA } from './components/df-nav/df-other-framework-data.ts'
import { CSS_DATA } from './components/df-nav/df-css-data.ts'
import { COMPILE_BUILD_DATA } from './components/df-nav/df-compile-build-data.ts'
import { NODEJS_DENO_DATA } from './components/df-nav/df-nodejs-deno-data.ts'
import { CODE_LINT_DATA } from './components/df-nav/df-code-lint-data.ts'
import { TEST_DATA } from './components/df-nav/df-test-data.ts'
</script>

# 开发者路线

<DfNavRoadmapLatest />

## 高质量博客

<DfNavRoadmap v-bind:data="BLOG_DATA" />

## 语言文档和规范

<DfNavRoadmap v-bind:data="LANGUAGE_RULE_DATA" />

## React 生态

<DfNavRoadmap v-bind:data="REACT_DATA" />

## Vue 生态

<DfNavRoadmap v-bind:data="VUE_DATA" />

## 其他 Web 开发框架

<DfNavRoadmap v-bind:data="OTHER_WEB_FRAMEWORK_DATA" />

## CSS 生态

<DfNavRoadmap v-bind:data="CSS_DATA" />

## 编译构建

<DfNavRoadmap v-bind:data="COMPILE_BUILD_DATA" />

## Node.js & Deno 生态

<DfNavRoadmap v-bind:data="NODEJS_DENO_DATA" />

## 代码检查

<DfNavRoadmap v-bind:data="CODE_LINT_DATA" />

## 测试工具

<DfNavRoadmap v-bind:data="TEST_DATA" />
