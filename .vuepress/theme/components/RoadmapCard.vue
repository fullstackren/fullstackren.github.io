<template>
  <div class="content-card">
    <h2>{{dataSource.title}}</h2>
    <div class="clearfix roadmap-list">
      <div
        class="roadmap-card"
        v-for="(item, index) in dataSource.list"
        :key="`item-${index}`">
        <a
          class="roadmap-inner"
          :style="{
            backgroundColor: item.bg
          }"
          :href="item.link">
          <div class="roadmap-title">{{item.title}}</div>
          <div class="roadmap-description">{{item.description}}</div>
        </a>
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
        title: '',
        list: []
      }
    }
  }
}
</script>

<style lang="stylus">
.roadmap-list
.roadmap
  &-card
    float left
    width 33.3%
    padding 12px
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
    font-weight 700
    line-height 36px
    padding 8px 18px 0
  &-description
    line-height 24px
    height 60px
    padding 0 18px
    overflow hidden
</style>
