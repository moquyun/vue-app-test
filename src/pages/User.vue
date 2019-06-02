<template>
  <div class="container">
    <header class="header">会员中心</header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(to.name)
      if (to.name === 'user') {
        if (vm.isLogin === 'ok') {
          next('/user/login')
        } else {
          next('/login')
        }
      } else {
        next()
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    if (to.name === 'user') {
      if (this.isLogin === 'ok') {
        next('/user/login')
      } else {
        next('/login')
      }
    } else {
      next()
    }
  },
  computed: {
    ...mapState({
      isLogin: ({ isLogin }) => isLogin
    })
  },
  mounted () {
    // console.log(this.$route)
  },
  methods: {
    Logout () {
      this.isLogin = ''
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }
    &-group {
      margin-bottom: 15px;
    }
    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
