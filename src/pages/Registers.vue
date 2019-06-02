<template>
  <div class="container">
    <van-nav-bar title="注册" @click-left="goback" left-text="返回" left-arrow>
      <van-icon name="user-circle-o"  @click="goReg" slot="right" />
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
            :error-message="usernameState"
            @click-right-icon="$toast('question')"
          >
            <van-icon slot="button" :name="userIcon" size="24px" color="#07C160" />
          </van-field>

          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            :error-message="passwordState"
            required
            clearable
          >
            <van-icon slot="button" :name="passIcon" size="24px" color="#07C160" />
          </van-field>

          <van-field
            v-model="sms"
            center
            required
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button :class="sendBtn" :disabled="smsDisabled" @click="sendSMS" slot="button" size="small" type="primary">{{ sendMsg }}</van-button>
          </van-field>
        </van-cell-group>

        <div class="submit-box">
          <van-button @click="sendReg" class="submit-btn" :loading="btnSubType" :loading-text="loadingText" type="primary" size="large">注册</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
import axios from 'axios'
import crypto from 'crypto'
Vue.use(Toast)

export default {
  name: 'Registers',
  data () {
    return {
      sms: '',
      password: '',
      username: '',
      smsCode: '1234',
      //
      btnSubType: false,
      loadingText: '',
      sendBtn: 'sendBtn',
      sendMsg: '发送验证码',
      smsDisabled: false,
      SmsTime: 6 // 倒计时发送短信时间
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.username))) {
        return '手机号码错误'
      } else {
        return ''
      }
    },
    userIcon () {
      if (!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.username))) {
        return ''
      } else {
        return 'success'
      }
    },
    passwordState () {
      var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/
      var reg3 = /[a-zA-Z]+/
      var reg4 = /[0-9]+/
      if (this.password === '') {
        return ''
      } else if (!reg2.test(this.password)) {
        return '长度在8位'
      } else if (!reg3.test(this.password)) {
        return '需含有字母'
      } else if (!reg4.test(this.password)) {
        return '需含有数字'
      } else {
        return ''
      }
    },
    passIcon () {
      var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/
      var reg3 = /[a-zA-Z]+/
      var reg4 = /[0-9]+/
      if (!reg2.test(this.password)) {
        return ''
      } else if (!reg3.test(this.password)) {
        return ''
      } else if (!reg4.test(this.password)) {
        return ''
      } else {
        return 'success'
      }
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goReg () {
      this.$router.push('/login')
    },
    sendReg () {
      if (!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.username))) {
        Toast.fail('手机号码有误')
        return
      }
      if (this.passIcon !== 'success') {
        Toast.fail('密码格式有误')
        return
      }
      if (this.sms !== this.smsCode) {
        Toast.fail('验证码错误')
        return
      }
      this.btnSubType = true
      this.loadingText = '正在注册中...'
      this.postReg()
    },
    postReg () {
      axios.post('http://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(
        res => {
          this.btnSubType = false
          this.loadingText = '注册'
          if (res.data === 0) {
            //
            Toast.fail('啥错误')
          } else if (res.data === 1) {
            // success
            Toast.success('注册成功')
            localStorage.setItem('isLogin', 'ok')
            this.$router.push('/')
          } else if (res.data === 2) {
            // 已注册
            Toast.fail('账号已存在')
          } else {
            Toast.fail('意外错误')
          }
        }
      ).catch(
        err => {
          Toast.fail(err)
        }
      )
    },
    sendSMS () {
      if (!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.username))) {
        Toast.fail('手机号码有误')
      } else {
        // 17602904943
        // axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.username}`).then(
        //   res => {
        //     console.log(res)
        //   }
        // )
        const content = '啊啊，注意保密'
        var md5 = crypto.createHash('md5')
        var smsPass = md5.update('dbg8685').digest('hex')
        axios.get(`/sms/sms?u=dbg8685&p=${smsPass}&m=${this.username}&c=${content}`).then(
          res => {
            console.log(res.data)
          }
        )
        this.sendSmsBtnState()
      }
    },
    sendSmsBtnState () {
      this.sendBtn = 'sendBtn-end'
      let Timer = this.SmsTime
      this.sendMsg = `${Timer}秒后在试`
      this.smsDisabled = true
      // axios
      let TimerSms = setInterval(() => {
        Timer--
        this.sendMsg = `${Timer}秒后在试`
        if (!Timer) {
          this.sendBtn = 'sendBtn'
          this.sendMsg = '再次发送'
          this.smsDisabled = false
          clearInterval(TimerSms)
        }
      }, 1000)
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
