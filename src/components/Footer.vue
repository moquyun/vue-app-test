<template>
  <footer class="footer">
    <ul>
      <router-link to="/" tag="li" exact-active-class="active">
        <span class="iconfont icon-shouye-"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/kind" tag="li" exact-active-class="active">
        <span class="iconfont icon-fenlei-"></span>
        <p>分类</p>
      </router-link>
      <router-link to="/cart" tag="li" exact-active-class="active">
        <span class="iconfont icon-gouwuche-"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li" exact-active-class="active">
        <span class="iconfont icon-wode-"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
