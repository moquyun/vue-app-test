<template>
    <div class="Score">
      <div class="score-main">
        <div class="bot">
          <i class="iconfont icon-icon-test"></i>
          <i class="iconfont icon-icon-test"></i>
          <i class="iconfont icon-icon-test"></i>
          <i class="iconfont icon-icon-test"></i>
          <i class="iconfont icon-icon-test"></i>
        </div>
        <div class="top" :style="scoreStyle">
          <i class="iconfont icon-icon-test1"></i>
          <i class="iconfont icon-icon-test1"></i>
          <i class="iconfont icon-icon-test1"></i>
          <i class="iconfont icon-icon-test1"></i>
          <i class="iconfont icon-icon-test1"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Score',
  props: ['score'],
  data () {
    return {
      scoreStyle: 'width: 0%;'
    }
  },
  computed: {
    comScore () {
      let scoreInt = Math.ceil(this.score)
      return scoreInt * 10
    }
  },
  mounted () {
    this.scoreStyle = 'width: ' + this.comScore + '%;'
  }
}
</script>
<style lang="scss">
  .score-main{
    position:relative;display: inline-block;color:orangered;
    .bot{}
    .top{
      position:absolute; font-weight: bold; left:0;top:0;width: 80%; overflow: hidden;text-overflow: clip;white-space: nowrap;
    }
  }
</style>
