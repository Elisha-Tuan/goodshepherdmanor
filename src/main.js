import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FunctionalCalendar from 'vue-functional-calendar'
import VShowSlide from 'v-show-slide'

Vue.use(FunctionalCalendar, {
  dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
})
Vue.use(VShowSlide)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
