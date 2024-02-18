<template>
  <div class="roadmap-card-wrap">
    <div v-if="dataSource.title" class="day-say">
      <a
        :href="dataSource.path"
        rel="noopener noreferrer"
        class="day-say-content">
      {{dataSource.title}}
      </a>
      <p class="day-say-from">
        <span class="day-say-tag">{{dataSource.description || ''}}</span>
        <span class="day-say-tag">{{dataSource.date || ''}}</span>
      </p>
    </div>
    <!-- <div class="roadmap-description" v-if="dataSource.description">{{dataSource.description}}</div> -->
    <div class="roadmap-description" v-if="dataSource.description">{{dataSource.color}}</div>
    <div
      class="content-card"
      v-for="(cate, cateIndex) in dataSource.list"
      :key="`cate-${cateIndex}`">
      <h2 class="content-card-title">{{cate.title}}</h2>
      <div class="clearfix roadmap-list">
        <div
          class="roadmap-card"
          v-for="(item, index) in cate.list"
          :key="`item-${cateIndex}-${index}`">
          <a
            class="roadmap-card-inner"
            rel="noopener noreferrer"
            :target="item.target || '_self'"
            :style="{
              backgroundColor: item.bg || '#E0C9F0',
              color: item.color || '#333'
            }"
            :href="item.link">
            <div class="roadmap-card-title">{{item.title}}</div>
            <div class="roadmap-card-description">{{item.description}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadmapCard',
  props: {
    dataSource: {
      default: {
        category: '',
        list: []
      }
    }
  }
}
</script>

<style lang="stylus">
.roadmap
  &-card-wrap
    h1
      margin-top 2.5rem
  &-description
    font-size 18px
    line-height 24px
    padding 0 24px
  &-card
    float left
    padding 6px
    &-inner
      display block
      cursor pointer
      // border-radius 3px
      color #333
      font-weight normal
      transition all 0.4s ease
      opacity 0.8
      &:hover
        opacity 1
        border-radius 9px
        transform translateY(-5px)
        box-shadow 0 5px 10px -3px rgba(0, 0, 0, 0.3)
    &-title
      font-size 16px
      height 44px
      font-weight 500
      line-height 36px
      padding 8px 18px 0
      overflow hidden
      text-overflow ellipsis
    &-description
      line-height 24px
      height 40px
      padding 0 8px 0 18px
      overflow hidden

@media (min-width: 320px)
  .roadmap
    &-card
      width 100%

@media (min-width: 768px)
  .roadmap
    &-card
      width 50%

@media (min-width: 992px)
  .roadmap
    &-card
      width 33.3%

@media (min-width: 1200px)
  .roadmap
    &-card
      width 25%
</style>
