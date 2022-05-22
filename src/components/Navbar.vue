<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarSupportedContent"
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="#"
          class="text-white mr-3"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <!-- 登入過後 管理員&使用者都會看到 -->
        <template v-if="isAuthenticated">
          <router-link
            to="faq"
            class="faq-btn"
          >
            常見問題
          </router-link>
          <router-link
            to="#"
            class="mr-3"
          >
            {{ currentUser.name || '使用者' }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
        <template v-else>
          <router-link
            to="faq"
            class="faq-btn"
          >
            常見問題
          </router-link>
          <router-link
            to="signin"
            class="signIn-btn"
          >
            登入
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// seed data
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: false
  },
  isAuthenticated: false
}

export default {
  // Vue 會在沒有資料時使用此預設值
  data () {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created () {
    this.fetchUser()
  },
  methods: { // 把dummyUser 蓋過 currentUser
    fetchUser () {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
.faq-btn {
  margin-right: 16px;
  width: 110px;
  height: 46px;
  background: #F2F5F4;
  border: 1px solid #7E9791;
  border-radius: 4px;
  @include font-setting('Noto Serif TC', normal, 600, 18px, 46px, #7E9791);
}
.signIn-btn {
  width: 110px;
  height: 46px;
  background: #7E9791;
  border: 1px solid #7E9791;
  border-radius: 4px;
  @include font-setting('Noto Serif TC', normal, 600, 18px, 46px, #F8F9FA);
}
</style>
