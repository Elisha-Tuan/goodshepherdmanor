import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser()
        if (data.status === 'success') {
          throw new Error(data.message)
        }
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
        console.log('data', data)
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
