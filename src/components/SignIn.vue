<template>
  <div class="signIn-container">
    <div class="blank" />
    <form
      class="form-table d-flex flex-column align-items-center"
      @submit.stop.prevent="handleSubmit"
    >
      <!-- form-header -->
      <div class="form-header">
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
      </div>
      <!-- form-body -->
      <div class="form-body">
        <!-- SIGN IN -->
        <template v-if="isSignUp === false">
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
        </template>
        <!-- SIGN UP -->
        <template v-else>
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
          <div class="d-flex flex-column align-items-start justify-content-start mt-5">
            <label for="password">姓名</label>
            <input
              id="password"
              v-model="password"
              name="name"
              type="text"
              class="form-control"
              placeholder="請輸入姓名"
              autocomplete="current-password"
              required
            >
          </div>
          <div class="d-flex flex-column align-items-start justify-content-start mt-5">
            <label for="password">手機</label>
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
        </template>
        <!-- forgot password only for sign in -->
        <div
          v-if="isSignUp === false"
          class="forgot-password mt-6"
        >
          忘記密碼？
        </div>
        <!-- switch signin or signup btn -->
        <button
          v-if="isSignUp === false"
          class="signIn-btn"
          type="submit"
          @click="toggleSignin"
        >
          登入
        </button>
        <!-- <router-link
          v-if="isSignup === false"
          class="signIn-btn"
          to="/user"
        >
          登入
        </router-link> -->
        <button
          v-else
          class="signIn-btn"
          type="submit"
        >
          注冊
        </button>
      </div>
      <transition name="fade-2">
        <div
          v-if="isSignUp === false"
          class="quick-login"
        >
          <div class="horizon horizon-one" />
          快速登入
          <div class="horizon horizon-two" />
        </div>
      </transition>
      <!-- 第三方登入 -->
      <transition name="fade-2">
        <div
          v-if="isSignUp === false"
          class="btn line-login d-flex"
          @click="lineLogin"
        >
          <img
            src="../../public/line_88.png"
            alt=""
            class="line-logo"
          >
          <div class="vertical" />
          <p>Line綁定登入</p>
        </div>
      </transition>
      <!-- form-footer -->
      <div
        v-if="isSignUp === false"
        class="form-footer"
        @click="toggleSignup"
      >
        還沒有會員嗎？<strong>註冊新帳號</strong>
      </div>
      <div
        v-else
        class="form-footer"
        @click="toggleSignup"
      >
        已經有帳號？<strong>登入會員</strong>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../../apis/authorization'
import Swal from 'sweetalert2'
export default {
  // Vue 會在沒有資料時使用此預設值
  data () {
    return {
      isSignIn: false,
      isSignUp: false,
      isProcessing: false
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    toggleSignin () {
      this.$emit('after-toggleSignin')
    },
    toggleSignup () {
      if (this.isSignUp === false) {
        this.isSignUp = true
      } else if (this.isSignUp === true) {
        this.isSignUp = false
      }
    },
    lineLogin () {
      let clientId = '1657169336'
      // let redirectUri = 'https://elisha-tuan.github.io/goodshepherdmanor/'
      let redirectUri = 'http://localhost:8080/'
      let link = 'https://access.line.me/oauth2/v2.1/authorize?'
      link += 'response_type=code'
      link += '&client_id=' + clientId
      link += '&redirect_uri=' + redirectUri
      link += '&state=123456789'
      link += '&scope=openid%20profile'
      window.location.href = link
    },
    async handleSubmit () {
      try {
        if (!this.email || !this.password) {
          Swal.fire({
            icon: 'warning',
            title: '請輸入Email & password'
          })
          return
        }
        this.isProcessing = true
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })
        const { data } = response
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        localStorage.setItem('token', data.token)
        // 透過setCurrentUser的方法把使用者資料儲存到vuex的state中
        this.$store.commit('setCurrentUser', data.user)
        this.$router.push('/restaurants')
      } catch (error) {
        this.isProcessing = false
        // console.log(error)
        Swal.fire({
          icon: 'warning',
          title: 'wrong accountnumber or password'
        })
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
.form-header {
  width: 100%;
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
.quick-login {
  position: relative;
  margin: 34px 0;
  @include font-setting('Noto Serif TC', normal, 400, 16px, 23px, #6B7280);
  .horizon {
    position: absolute;
    top: 50%;
    width: 198.5px;
    height: 1px;
    background-color: #828282;
  }
  .horizon-one {
    right: 100px;
  }
  .horizon-two {
    left: 100px;
  }
}
// 第三方登入
//line login
.line-login {
  width: 155px;
  height: 41px;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  background-color: #06C755;
  &:hover:after {
    position: absolute;
    width: 155px;
    height: 41px;
    content: '';
    background-color: #000000;
    opacity: 10%;
  }
  &:active:after {
    opacity: 30%;
  }
  .line-logo {
    // display: none;
    width: 41px;
  }
  .vertical {
    // display: none;
    height: 41px;
    width: 1px;
    content: '';
    background-color: #000000;
    opacity: 8%;
  }
  p {
    // display: none;
    width: 100%;
    text-align: center;
    @include font-setting('Noto Serif TC', normal, 400, 14px, 41px, #FFFFFF);
  }
}
.form-footer {
  margin-top: 23px;
  @include font-setting('Noto Serif TC', normal, 400, 16px, 23px, #6B7280);
  strong {
    cursor: pointer;
  }
}
//transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-2-enter-active {
  transition: opacity .3s;
}
.fade-2-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
