<template>
  <nav class="navbar d-flex justify-content-end">
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
        <div
          v-if="isSignin === true"
          class="blank"
        />
        <transition name="fade">
          <template v-if="isSignIn === true">
            <SignIn @after-toggleSignin="toggleSignin" />
          </template>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import authorizationAPI from '../../apis/authorization'
import Swal from 'sweetalert2'
import SignIn from '../components/SignIn.vue'
// seed data
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    isAdmin: false
  },
  isAuthenticated: false
}

export default {
  components: {
    SignIn
  },
  data () {
    return {
      isSignIn: false,
      isSignUp: false,
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
      if (this.isSignIn === false) {
        this.isSignIn = true
      } else if (this.isSignIn === true) {
        this.isSignIn = false
      }
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
