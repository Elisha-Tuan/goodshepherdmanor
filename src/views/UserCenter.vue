<template>
  <div id="app">
    <p class="path">
      首頁 / <span>會員中心</span>
    </p>
    <div class="container d-flex">
      <UserTabs />
      <div class="main">
        <p>帳號：</p>
        <div class="horizon" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import UserTabs from '../components/UserTabs.vue'
export default {
  components: {
    UserTabs
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
</style>
