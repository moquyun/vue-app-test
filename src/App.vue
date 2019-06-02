<template>
  <div id="app">
<!--    <transition enter-active-class="animated rubberBand">-->
    <!--<router-view ></router-view>-->
      <keep-alive>
        <transition enter-active-class="animated rubberBand">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>
      <transition enter-active-class="animated rubberBand">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
<!--    </transition>-->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  //
}
</script>
<style lang="scss">
  @import '@/lib/reset.scss';
  html,body,#app,.detail{
    @include rect(100%,100%)
  }

  #app,.detail{
    @include flexbox();
    @include flex-direction(column);
    .container{
      @include flex();
      @include rect(100%,auto);

      @include flexbox();
      @include flex-direction(column);
      .header{
        @include rect(100%,.44rem);
        @include background-color(#f66);
      }
      .content{
        @include flex();
        @include rect(100%,auto);
      }
    }
    footer{
      @include rect(100%,.5rem);
      @include background-color(#efefef);
      ul{
        @include rect(100%,100%);
        @include flexbox();
        li{
          @include rect(auto,100%);
          @include flexbox();
          @include flex-direction(column);
          @include flex();
          @include justify-content();
          @include align-items();
          &.active{
            @include color(#f66);
          }
          span{
            @include font-size(.24rem);
          }
          p{
            @include font-size(.12rem);
          }
        }
      }
    }
  }
</style>
