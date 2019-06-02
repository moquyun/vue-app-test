import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // alias: '/home',
      components: {
        default: () => import('./pages/Home'),
        footer: () => import('./components/Footer.vue')
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/reg',
      name: 'reg',
      components: {
        default: () => import('./pages/Registers'),
        footer: () => import('./components/Footer.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./pages/Login'),
        footer: () => import('./components/Footer.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./pages/Kind.vue'),
        footer: () => import('./components/Footer.vue')
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./pages/Cart.vue'),
        footer: () => import('./components/Footer.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./pages/User.vue'),
        footer: () => import('./components/Footer.vue')
      },
      children: [
        // {
        //   path: '*',
        //   redirect: {
        //     name: 'home'
        //   }
        // },
        {
          path: 'nologin',
          name: 'nologin',
          component: () => import('./components/user/NoLogin')
        },
        {
          name: 'userlogin',
          path: 'login',
          component: () => import('./components/user/Login.vue')
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('./pages/Detail.vue')
      }
    }
  ]
})
export default router
