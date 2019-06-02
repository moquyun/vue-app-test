<template>
  <ul class="prolist">
    <router-link :to="{name:'detail',params: {id:item.goods_id}}" v-for="(item, index) of itemArr" :key="index">
      <van-card
        :tag="`券${item.coupon_amount}元`"
        :price="item.buy_price"
        :desc="item.goods_intro"
        :title="item.goods_title"
        :thumb="item.goods_pic"
        :origin-price="item.goods_price"
      >
      </van-card>
    </router-link>
  </ul>
</template>

<script>
// import Score from '@/components/Score'
export default {
  name: 'Prolist',
  props: ['itemArr'],
  data () {
    return {
      score: 4.2
    }
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
/*.prolist{
  li{
    float:left;
    @include margin(auto 1%);
    margin-top: .1rem;
    @include rect(48%,2.67rem);
    @include background-color(#ccc);
    .img{
      @include background-color(#fff);
      @include rect(100%,1.76rem);
      img{
        @include rect(100%,100%);
      }
    }
    .info{
      width:90%;margin:.1rem auto;
      h4{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
      span{
        b{
          color:#ef4e41;
        }
      }
    }
  }
}*/
</style>
