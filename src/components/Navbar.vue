<template>
  <nav class="navbar d-flex justify-content-end">
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
            to="/faq"
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
            to="/faq"
            class="faq-btn"
          >
            常見問題
          </router-link>
          <!-- <router-link
            to="/signin"
            class="signIn-btn"
          >
            登入
          </router-link> -->
          <div
            class="signIn-btn"
            @click="toggleSignin"
          >
            登入
          </div>
        </template>
        <template v-if="isSignin === true">
          <div class="signIn-container">
            <div class="blank" />
            <form
              class="form-table d-flex flex-column align-items-center"
              @submit.stop.prevent="handleSubmit"
            >
              <div class="brand d-flex justify-content-center align-items-center">
                <div class="logo">
                  <img
                    src="../../public/logo-header.png"
                    alt=""
                  >
                </div>
                <h1 class="title">
                  GOOD SHEPHERD<br><small>MANOR</small>
                </h1>
              </div>
              <div
                class="cancel-btn"
                @click="toggleSignin"
              >
                &times;
              </div>
              <div class="d-flex flex-column align-items-start justify-content-start mt-5">
                <label for="email">帳號</label>
                <input
                  id="email"
                  v-model="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="請輸入Email"
                  autocomplete="username"
                  required
                  autofocus
                >
              </div>
              <div class="d-flex flex-column align-items-start justify-content-start mt-5">
                <label for="password">密碼</label>
                <input
                  id="password"
                  v-model="password"
                  name="password"
                  type="password"
                  class="form-control"
                  placeholder="請輸入密碼"
                  autocomplete="current-password"
                  required
                >
              </div>

              <div class="forgot-password mt-6">
                忘記密碼？
              </div>

              <button
                class="signIn-btn"
                type="submit"
              >
                登入
              </button>

              <div class="text-center mb-3">
                還沒有會員嗎？<strong>註冊新帳號</strong>
              </div>
            </form>
          </div>
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
      isSignin: false,
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
    },
    toggleSignin () {
      if (this.isSignin === false) {
        this.isSignin = true
      } else if (this.isSignin === true) {
        this.isSignin = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
.navbar {
  width: 100%;
}
.faq-btn {
  margin-right: 16px;
  width: 110px;
  height: 46px;
  // background: #F2F5F4;
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
  cursor: pointer;
  @include font-setting('Noto Serif TC', normal, 600, 18px, 46px, #F8F9FA);
}
//sign in
.blank {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: #3B485B;
  opacity: 0.9;
  z-index: 201;
}
.cancel-btn {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 35px;
  font-weight: 400;
  line-height: 41px;
  z-index: 203;
  cursor: pointer;
  width: 41px;
  height: 41px;
  transform: translate(50%, -50%);
  border-radius: 50%;
  background-color: #fff;
}
.form-table {
  z-index: 202;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 685px;
  height: 705px;
  background: #FFFFFF;
  border-radius: 8px;
  label {
    @include font-setting('Noto Serif TC', normal, 400, 16px, 23px, #3B485B);
  }
  .form-control {
    padding-left: 1rem;
    margin-top: 0.25rem;
    width: 396px;
    height: 48px;
    border: 1px solid #D1D5DB;
    border-radius: 8px;
    @include font-setting("Noto Serif TC", normal, 400, 16px, 23px, #D1D5DB);
  }
  .forgot-password {
    @include font-setting('Noto Serif TC', normal, 400, 14px, 20px, #6B7280);
  }
  .signIn-btn {
    width: 199px;
    height: 55px;
    margin-top: 1.5rem;
    @include font-setting('Noto Serif TC', normal, 400, 16px, 23px, #fff);
    background: #56675F;
    border-radius: 4px;
  }
}
.brand {
  z-index: 2;
  height: 118px;
  width: 100%;
  background: #F2F5F4;
  border-radius: 8px 8px 0px 0px;
  opacity: 1;
  .logo {
    margin-right: 9px;
    width: 101px;
    height: 45px;
  }
  .title {
    text-align: left;
    @include font-setting('Noto Serif TC', normal, 800, 20px, 20px, #7E9791);
    small {
      @include font-setting('Noto Serif TC', normal, 400, 18px, 18px, #7E9791);
    }
  }
}
</style>
