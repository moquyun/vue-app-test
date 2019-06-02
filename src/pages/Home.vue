<template>
  <div class="container">
    <mt-header  class="header" title="固定在顶部"></mt-header>
    <div class="content" @scroll="topscroll" id="content">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div>
          <div class="banner" >
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,index) of bannerlist" :key="index">
                <img :src="item" alt="">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <loading :isShow="isLoadingShow" />
          <Prolist :itemArr=" itemlist "/>
        </div>
      </mt-loadmore>
    </div>
    <GoTop :ishow="ishow"></GoTop>
  </div>
</template>

<script>
import axios from 'axios'
import Prolist from '@/components/Prolist'
import loading from '@/components/loading/loading'
import GoTop from '@/components/GoTop'
// import { Indicator } from 'mint-ui'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      // itemlist: [],
      bannerlist: [],
      allLoaded: false,
      pageNum: 2,
      ishow: false,
      isLoadingShow: false
    }
  },
  components: {
    Prolist,
    loading,
    GoTop
  },
  created () {
    // this.isLoadingShow = true
  },
  beforeRouteLeave (to, from, next) {
    // document.getElementById('content').removeEventListener('scroll', this.test)
    const position = document.getElementById('content').scrollTop
    this.$store.commit('ChanghomePosition', position)
    next()
  },
  mounted () {
    // axios.get('/tkzs/api/v1/top_hour?app_key=788b0742738a0d79')
    //   .then(
    //     res => {
    //       this.isLoadingShow = false
    //       this.itemlist = res.data.data
    //     }
    //   )
    //   .catch(
    //     err => console.log(err)
    //   )
    // this.$store.dispatch('homeItemList')
    this.homelistData()
    axios.get('/data/banner.json')
      .then(
        res => {
          let arr = []
          res.data.map(img => {
            // arr.push('http://www.daxunxun.com' + img)
            arr.push(img)
          })
          this.bannerlist = arr
        }
      )
      .catch(
        err => console.log(err)
      )
  },
  methods: {
    ...mapActions({
      homelistData: 'homeItemList'
    }),
    topscroll (e) {
      if (e.target.scrollTop > 800) {
        this.ishow = true
      } else {
        this.ishow = false
      }
    },
    loadTop () {
      axios.get('/tkzs/api/v1/top_day?app_key=788b0742738a0d79')
        .then(
          res => {
            this.$refs.loadmore.onTopLoaded()
            this.$store.commit('ChangeHomeItemList', res.data.data)
            this.allLoaded = false
            this.pageNum = 1
          }
        )
        .catch(
          err => console.log(err)
        )
    },
    loadBottom () {
      axios.get(`/tkzs/api/v1/top_day?app_key=788b0742738a0d79&page=${this.pageNum}`)
        .then(
          res => {
            if (res.length === 0) {
              //
              this.allLoaded = true
            } else {
              let arrItemlist = [...this.itemlist, ...res.data.data]
              this.$store.commit('ChangeHomeItemList', arrItemlist)
              this.pageNum++
            }
            this.$refs.loadmore.onBottomLoaded()
          }
        )
        .catch(
          err => console.log(err)
        )
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'home') {
        document.getElementById('content').scrollTop = this.$store.state.homePosition
      }
    }
  },
  computed: {
    ...mapState({
      itemlist: ({ homeItemList }) => homeItemList
    })
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
.content{
  @include rect(auto,7.58rem);
  overflow: auto;
  /*-webkit-overflow-scrolling: touch;*/
  .banner{
    /* @include rect(100%)*/
    height:1.9rem;
    img{
      width:100%;
    }
  }
}
</style>
