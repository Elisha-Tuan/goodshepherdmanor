<template>
  <div id="app">
    <p class="path">
      首頁 / <span>會員中心</span>
    </p>
    <div class="container d-flex">
      <UserTabs />
      <div class="main">
        <p class="account">
          帳號：{{ user.email }}
        </p>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import UserTabs from '../components/UserTabs.vue'
const dummyUser = {
  id: 1,
  name: 'Tony',
  email: 'tony123@gmail.com'
}
export default {
  components: {
    UserTabs
  },
  data () {
    return {
      user: {
        id: Number,
        name: '',
        email: ''
      }
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      const { id, name, email } = dummyUser
      this.user.id = id
      this.user.name = name
      this.user.email = email
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
#app {
    padding: 26px 120px 0;
}
.path {
    padding-left: 9px;
    margin-bottom: 40px;
    text-align: left;
    @include font-setting('Noto Serif TC', normal, 700, 16px, 23px, #9AA0A9);
    letter-spacing: 0.025em;
    span {
      color: #3B485B;
    }
}
.main {
    padding-left: 23px;
    margin-left: 24px;
    border-left: 1px solid #E4E8EB;
    height: 632px;
}
.account {
    width: 945px;
    height: 46px;
    border-bottom: 1px solid #E4E8EB;
    text-align: left;
    @include font-setting('Noto Serif TC', normal, 700, 16px, 46px, #56675F)
}
</style>
