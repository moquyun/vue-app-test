<template>
    <div class="detail">
      <div class="container">
        <header class="header">
          <div class="header-l" @click="goBlack">
            <i class="iconfont icon-iconfontzhizuobiaozhun023126"></i>
          </div>
          <div class="header-c">商品主图{{ item.goods_title }}</div>
          <div class="header-r">
            <i class="iconfont icon-biaogeweibucaidan_"></i>
          </div>
        </header>
        <div class="content">
          <div class="goods-img">
            <img :src="item.goods_pic" alt="">
          </div>
          <div class="good-c">
            <h3 class="title">{{ item.goods_title }}</h3>
            <div class="desc">{{ item.goods_intro }}</div>
            <div>券后：{{ item.buy_price }}</div>
            <div>月销：{{ item.goods_sale_num }}</div>
            <div>天猫：{{ item.is_tmall }}</div>
            <div>剩余券：{{ item.goods_sale_num }}</div>
            <div>优惠券：{{ item.coupon_amount }}</div>
            <div>价格{{ item.goods_price }}</div>
            <div>优惠券Id：{{ item.coupon_id }}</div>
            <div>优惠券：满{{ item.coupon_apply_amount }}减{{ item.coupon_amount }}</div>
          </div>
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
        />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
      <footer class="footer">footer</footer>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      item: []
    }
  },
  methods: {
    goBlack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    const { id } = this.$route.params
    axios.get('/tkzs/api/v1/detail?app_key=788b0742738a0d79&goods_id=' + id)
      .then(
        res => {
          if (res.data.code === 200) {
            this.item = res.data.data
            console.log(this.item)
          } else {
            console.log('tkzs-error', res.data.msg)
          }
        }
      )
  }
}
</script>

<style lang="scss">
  @import '@/lib/reset.scss';
  .detail{
    /*@include rect(100%,100%);*/
  }
  .header{
    position:relative;display: flex;justify-content: space-between;
    align-items: center;color:#fff;
    .header-l{
      margin-left:.1rem;
    }
    .header-c{
      position:absolute;
      left:0;right:0;top:0;bottom:0;margin:auto;width:75%;height:.28rem;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      font:700 .14rem/2 "";color:#fff;text-align: center;
    }
    .header-r{
     margin-right:.1rem;
      /*margin-right:.2rem;*/
    }
  }
  //content
  .content{
    overflow: auto;
    .goods-img{
      @include flexbox();
      @include justify-content();
      @include margin(.2rem 0);
      img{
        @include rect(80%,80%);
      }
    }
    .good-c{
      @include rect(90%,auto);
      @include margin(0 auto);
      .title{
        font:.14rem/.18rem "";color:#000;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
      .desc{
        @include font-size(.12rem);
        line-height:.14rem;
        @include color(#999);
      }
    }
  }
</style>
