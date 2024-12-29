
<script setup lang="ts">
import { withBase } from 'vitepress'
import { VPDocAsideSponsors } from 'vitepress/theme'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const data = [
  {
    items: [
      {
        img: withBase('/jianghu-talk-it.jpg')
      }
    ]
  },
  // {
  //   tier: '打赏',
  //   items: [
  //     {
  //       img: withBase('/sponsor/wechat-color.webp')
  //     }
  //   ]
  // },
]
</script>

<template>
  <div class="df-sponsor-container">
    <p class="df-sponsor-title">鼓励作者：<VPLink href="https://github.com/fullstackren/fullstackren.github.io" no-icon>star</VPLink>、关注、打赏
    </p>
    <VPDocAsideSponsors :data="data" />
  </div>
</template>

<style lang="scss">
.df-sponsor-container {
  background-color: #EFF0F3;
  border-radius: 4px;
  padding-bottom: 12px;
}
.df-sponsor-title {
  margin-top: 10px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand);

  .VPLink {
    text-decoration: underline;

    &:hover {
      color: var(--vp-c-brand-2);
    }
  }
}
.vp-sponsor{
  display: flex;
  justify-content: center;
  gap: 16px;
}
.vp-sponsor-section + .vp-sponsor-section {
  margin-top: 0;
}
.vp-sponsor-grid.vp-sponsor-grid {
  .vp-sponsor-grid-link {
    height: 80px;
  }
  .vp-sponsor-grid-image {
    max-width: none;
    max-height: 80px;
    filter: grayscale(0.8);
  }
}

.dark .vp-sponsor-grid-item:hover {
  background: var(--vp-custodf-block-info-bg);
}
.vp-sponsor-grid-item:hover .vp-sponsor-grid-image {
  filter: none;
}
</style>
