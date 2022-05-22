import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Rooms from '../views/Rooms.vue'

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

export default router
