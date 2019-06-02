<template>
  <div class="container">
    <van-nav-bar title="登录" @click-left="goback" left-text="返回" left-arrow>
      <van-icon name="edit" @click="goReg" slot="right" />
    </van-nav-bar>
    <div class="content">
      <div class="from-groun">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            placeholder="请输入手机号"
            @click-right-icon="$toast('question')"
          >
          </van-field>

          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            clearable
          >
          </van-field>

        </van-cell-group>

        <div class="submit-box">
          <van-button @click="sendLogin" class="submit-btn" :loading="btnSubType" :loading-text="loadingText" type="primary" size="large">登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      password: '',
      username: '',
      //
      btnSubType: false,
      loadingText: ''
    }
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.isLogin
    })
  },
  mounted () {
    if (this.isLogin === 'ok') {
      this.$router.push('/user/login')
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goReg () {
      this.$router.push('/reg')
    },
    sendLogin () {
      this.btnSubType = true
      this.loadingText = '正在登录中...'
      this.postLogin()
    },
    postLogin () {
      axios.post('http://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(
        res => {
          this.btnSubType = false
          this.loadingText = '登录'
          if (res.data === 0) {
            Toast.fail('登录失败')
          } else if (res.data === 1) {
            // success
            Toast.success('登录成功')
            this.$store.commit('ChangLoginState', {
              data: 'ok'
            })
            this.$router.push('/user')
          } else if (res.data === -1) {
            Toast.fail('密码错误')
          } else if (res.data === 2) {
            Toast.fail('没有该用户')
          } else {
            Toast.fail('意外错误')
          }
        }
      ).catch(
        err => {
          Toast.fail(err)
        }
      )
    }
  }
}
</script>

<style lang="scss">
  .content{
    background-color: #f8f8f8;
    .from-groun{
      margin-top:.2rem;
      .form-title{
        font:.18rem/2 "";
        padding-left:.2rem;
        color:#f66;
        /*line-height*/
      }
      .sendBtn{
        background-color: #f66;
        border: 1px solid #f66;
      }
      .sendBtn-end{
        background-color: #b7abab;
        border: 1px solid #b7abab;
      }
      .submit-box{
        margin:.2rem .1rem;
        .submit-btn{
          background-color: #f66;
          border: 1px solid #f66;
        }
      }
    }
  }
</style>
