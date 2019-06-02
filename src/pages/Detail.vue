<template>
  <div class="goods">
    <van-nav-bar :title="item.goods_title" @click-left="goback" left-text="返回" left-arrow>
    </van-nav-bar>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(thumb,index) in item.arrImg" :key="index">
        <img :src="thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ item.goods_title }}</div>
        <div class="goods-price">¥{{ item.buy_price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">优惠券：{{ item.coupon_amount }}</van-col>
        <van-col span="14">原价：{{ item.coupon_apply_amount }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">{{ item.is_tmall ? '天猫' : '淘宝' }}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon
        icon="gift-o"
        text="分享"
      />
      <van-goods-action-icon
        icon="like-o"
        @click="getCartState"
        text="收藏"
      />
      <van-goods-action-button
        type="warning"
        text="分享淘口令"
      />
      <van-goods-action-button
        type="danger"
        text="复制淘口令"
      />
    </van-goods-action>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  data () {
    return {
      item: [],
      show: false
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    getCartState () {
      this.$store.commit('AddCartState')
      console.log(this.cartNum)
    },
    // yz
    formatPrice () {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },
    onClickCart () {
      this.$router.push('cart')
    },
    sorry () {
      console.log('暂无后续逻辑~')
    }
  },
  mounted () {
    const { id } = this.$route.params
    axios.get('/tkzs/api/v1/detail?app_key=788b0742738a0d79&goods_id=' + id)
      .then(
        res => {
          if (res.data.code === 200) {
            this.show = true
            this.item = res.data.data
            this.item.arrImg = [res.data.data.goods_long_pic, res.data.data.goods_pic]
            // console.log(this.item)
          } else {
            this.show = true
            console.log('tkzs-error', res.data.msg)
          }
        }
      )
  },
  computed: {
    ...mapState({
      cartNum (state) {
        return state.cartState
      }
    })
  }
}
</script>

<style lang="scss">
  .goods {
    padding-bottom: 50px;
    &-swipe {
      img {
        width: 100%;
        display: block;
      }
    }
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    &-tag {
      margin-left: 5px;
    }
  }
  .goods-swipe.van-swipe{
    width:100%;height:30%;
    .van-swipe__track{
      width:100%;overflow: hidden;
      img{
        width:100%;height:100%;
      }
    }
  }
</style>
