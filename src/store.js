import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: '',
    homeItemList: [],
    cartState: 0,
    homePosition: 0,
    // cart
    checkedGoods: ['1', '2', '3'],
    cartGoods: [{
      id: '1',
      title: '进口香蕉',
      desc: '约250g，2根',
      price: 200,
      num: 1,
      thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
    }, {
      id: '2',
      title: '陕西蜜梨',
      desc: '约600g',
      price: 690,
      num: 1,
      thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
    }, {
      id: '3',
      title: '美国伽力果',
      desc: '约680g/3个',
      price: 2680,
      num: 1,
      thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
    }]
  },
  getters: {
    //
  },
  mutations: {
    ChangLoginState (state, playload) {
      state.isLogin = playload.data
    },
    ChanghomePosition (state, data) {
      state.homePosition = data
    },
    AddCartState (state) {
      state.cartState++
    },
    ChangeHomeItemList (state, data) {
      state.homeItemList = data
      // console.log(state.homeItemList)
    }
  },
  actions: {
    homeItemList (context) {
      axios.get('/tkzs/api/v1/top_hour?app_key=788b0742738a0d79').then(
        res => {
          // this.itemlist = res.data.data
          context.commit('ChangeHomeItemList', res.data.data)
        }
      ).catch(err => {
        console.log(err)
      })
    }
  }
})
