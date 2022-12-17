<template>
  <div class="roadmap-card-wrap">
    <h1 v-if="dataSource.title">{{dataSource.title}}</h1>
    <div class="roadmap-description" v-if="dataSource.description">{{dataSource.description}}</div>
    <div
      class="content-card"
      v-for="(cate, cateIndex) in dataSource.list"
      :key="`cate-${cateIndex}`">
      <h2>{{cate.title}}</h2>
      <div class="clearfix roadmap-list">
        <div
          class="roadmap-card"
          v-for="(item, index) in cate.list"
          :key="`item-${cateIndex}-${index}`">
          <a
            class="roadmap-card-inner"
            :style="{
              backgroundColor: item.bg || '#E0C9F0'
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
  &-card
    float left
    width 25%
    padding 6px
    &-inner
      display block
      cursor pointer
      border-radius 3px
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
      height 44px
      font-weight 700
      line-height 36px
      padding 8px 18px 0
      overflow hidden
      text-overflow ellipsis
    &-description
      line-height 24px
      height 60px
      padding 0 18px
      overflow hidden
</style>
