<template>
  <div v-show="false" class="pageLoadTipBg nobg show">
    <div class="pageLoadTipBox">
      <div class="pageLoadTipLoader pageLoaddiv">
          <div class="pageLoaddiv pageLoad-image" style="background-image:url(https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg);">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'couponList'
}
</script>

<style lang="scss">
  /**loading**/
  .pageLoadTipBg {
    background: #D8D8D8;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    opacity: .8
  }
  .pageLoadTipBg.nobg {
    background: none;
  }
  .pageLoadTipBox {
    width: 220px;
    height: 220px;
    background: rgba(0, 0, 0, 0.59);
    border-radius: 5px;
    box-shadow: 0 0 12px #333;
    -webkit-box-shadow: 0 0 12px #333;
    position: fixed;
    margin: auto;
    left:0;right: 0;
    top: 0;bottom: 0;
    z-index: 9999;
  }
  .pageLoadTipLoader {
    display: inline-block;
    width: 70px;
    height: 70px;
    position: relative;
    /*margin: 20px;*/
  }
  .pageLoadTipLoader:before {
    content: "";
    display: block;
    position: absolute;
    margin: auto;
    left:0;right: 0;
    top: 0;bottom: 0;
    width: 70%;
    height: 70%;
    line-height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.0);
    border-radius: 100%;
    border: none;
    border-bottom: #06c1ae solid 20px;
    border-top: rgba(6, 193, 174, 0.35) solid 20px;
    border-right: rgba(6, 193, 174, 0.35) solid 20px;
    border-left: rgba(6, 193, 174, 0.35) solid 20px;
    -webkit-animation-name: pageLoader;
    -moz-animation-name: pageLoader;
    -o-animation-name: pageLoader;
    animation-name: pageLoader;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    z-index: 1;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
  }
  .pageLoaddiv {
    position: absolute;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: dodgerblue;
    z-index: 2;
    width: 100%;
    height: 100%;
    line-height: 70px;
    font-size: 20%;
    border-radius: 100%;
    /*margin-left: 7px;
    margin-top: 7px;*/
    background-repeat: no-repeat;
    background-size: 80px;
    background-position: 50%;
  }

  .pageLoad-image {
    /*margin-top: 60px;
    margin-left: -50px;*/
    margin: auto;
    left:0;right: 0;
    top: 0;bottom: 0;
    width: 80px;
    height: 80px;
  }

  @-webkit-keyframes pageLoader {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes pageLoader {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /*旋转*/
  .load-animate {
    display: block !important;
    -webkit-animation: circleAnimation 1s infinite;
    animation: circleAnimation 1s infinite; }
  @-webkit-keyframes circleAnimation {
    0% {
      transform-origin: center;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    100% {
      transform-origin: center;
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg); } }
  @keyframes circleAnimation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg); } }
</style>
