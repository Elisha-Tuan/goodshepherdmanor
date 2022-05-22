<template>
  <header>
    <div class="container d-flex justify-content-center align-items-center">
      <router-link
        to="/rooms"
      >
        <div class="brand d-flex">
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
      </router-link>
      <!-- <nav class="nav">
        <label class="navbar-toggle-label hamburger d-flex align-items-center justify-content-center" for="navbar-toggle">
        </label>
        <input type="checkbox" id="navbar-toggle" />
        <ul class="nav-list d-flex flex-column align-items-start">
          <a href="/about"><li class="nav-item"><p>常見問題</p></li></a>
          <a href="/about"><li class="nav-item"><p>會員中心</p></li></a>
        </ul>
      </nav> -->
      <Navbar />
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'Header',
  components: { Navbar }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
%hamburger {
  width: 22px;
  height: 1px;
  background-color: #56675F;
  border: 1px solid #F9F9F9;
}
header {
  // position: fixed;
  position: static;
  background-color: rgba($color: #7E9791, $alpha: 0.1);
  padding: 0;
  margin: 0;
  height: 96px;
  width: 100%;
  .container {
    height: 100%;
    width: 100%;
    padding: 0 120px;
  }
}
.brand {
  // margin: 0 auto;
  // width: 294px;
  height: 45px;
  .logo {
    margin-right: 9px;
    img {
      width: 101px;
      height: 45px;
      object-fit: cover;
    }
  }
  .title {
    @include font-setting('Noto Serif TC', normal, 800, 20px, 20px, $main-green);
    letter-spacing: 0.025em;
    small {
      @include font-setting('Noto Serif TC', normal, 400, 18px, 18px, $main-green);
      letter-spacing: 0.025em;
    }
  }
}
.nav {
  position: absolute;
  margin: 0 auto;
  height: 100%;
  max-width: 375px;
  align-items: center;
}
.nav-list {
  position: absolute;
  transform: scale(1, 0);
  width: 100%;
  padding: 8px;
  padding-top: 0;
  top: 100%;
  left: 0;
  z-index: 2;
  .nav-item {
    margin: 1px 0;
    width: 136px;
    height: 35px;
    opacity: 0;
    cursor: pointer;
    background-color: $primary-color;
    align-items: center;
    p {
      text-align: center;
      @include font-setting('Noto Sans TC', normal, 400, 18px, 35px, #F9F9F9);
    }
  }
}
.navbar-toggle-label {
  grid-column: 1/2;
  cursor: pointer;
  margin-left: 13px;
  align-items: center;
}
#navbar-toggle {
  position: absolute;
  top: 0;
  display: none;
  /* navbar hamburger */
  &:checked ~ .nav-list {
    transform: scale(1, 1);
    transform-origin: top;
    transition: transform 0.3s ease-out;
  }
  &:checked ~ * .nav-item {
    transition: opacity 0.2s ease-out 0.1s;
    opacity: 1;
  }
}
.hamburger {
    position: absolute;
    top: 30px;
    left: 0;
    @extend %hamburger;
    width: 24px;
    &::before {
        @extend %hamburger;
        position: absolute;
        content: '';
        top: 6px;
        // width: 22px;
    }
    &::after {
        @extend %hamburger;
        position: absolute;
        content: '';
        bottom: 6px;
        // width: 22px;
    }
}

</style>
