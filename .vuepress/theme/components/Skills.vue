<template>
  <div class="onboarding-tags">
    <div
      class="onboarding-tags__item"
      v-for="skill in skills"
      :key="skill.id"
      :style="{
        color: skill.text_color_hex,
        backgroundColor: skill.bg_color_hex,
      }"
    >
      {{ skill.name }}
    </div>
  </div>
</template>

<script>
import { data } from "./skills.js";
export default {
  name: "Skills",
  data() {
    this.skills = data;
    return {};
  },
};
</script>

<style scoped>
.onboarding-tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
}
</style>