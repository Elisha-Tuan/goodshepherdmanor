import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Rooms from '../views/Rooms.vue'
import User from '../views/UserCenter.vue'
// import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/rooms'
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'personal-info',
        name: 'personal-info',
        component: () => import ('../views/UserInfo.vue')
      },
      {
        path: 'record',
        name: 'record',
        component: () => import ('../views/UserRecord.vue')
      },
      {
        path: 'change-password',
        name: 'change-password',
        component: () => import ('../views/UserChangePassword.vue')
      }
    ]
  },
  {
    path: '/rooms/:id',
    name: 'room',
    component: () => import('../views/Room.vue')
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '*', // * 是萬用字元，代表所有網址。由於vue router路由會由上往下進行匹配，當所有的路由都無法匹配時最後就會匹配到path: '*'
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach -- dispatch fetCurrentUser', {
//     to, from
//   })
//   const url = new URLSearchParams(window.location.search)
//   console.log(url.get('code'))
//   // fetch access token =>
//   // 呼叫actions方法的關鍵字dispatch，表示分發、指派的意思。在網路開發框架的語境中，dispatch
//   store.dispatch('fetchCurrentUser')
//   next()
// })
export default router
