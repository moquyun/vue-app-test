<template>
  <div class="container">
    <header class="header">分类</header>
    <div class="content">
      <van-tree-select
        :items="items"
        class="kind-con"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
      >
      </van-tree-select>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Kind',
  data () {
    return {
      items: [],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    }
  },
  mounted () {
    axios.get('/data/kind.json').then(
      res => {
        this.items = res.data
      }
    )
  },
  methods: {
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      this.activeId = data.id
    }
  }
}
</script>

<style scoped>
.kind-con{
  height: 100% !important;
}
</style>
