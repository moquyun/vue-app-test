<template>
    <div class="gotop" @click="test" v-show="ishow">
      <van-icon name="arrow-up" size="30px" color="#fff" />
      <!--<i size="30px" color="#fff" class="van-icon van-icon-arrow-up"></i>-->
    </div>
</template>

<script>
export default {
  name: 'GoTop',
  props: ['ishow'],
  methods: {
    test () {
      document.querySelector('.content').scrollTop = 0
    }
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
/*@import '@/lib/reset.scss';*/
.gotop{
  @include rect(.5rem,.5rem);
  @include background-color(#f66);
  @include border-radius(50%);
  //@include posi
  position:fixed;right:.2rem;bottom:.8rem;text-align: center;
  .van-icon-arrow-up{
    /*@include font-size(.3rem);*/
    @include line-height(.5rem);
    /*color:#fff;*/
  }
}
</style>
