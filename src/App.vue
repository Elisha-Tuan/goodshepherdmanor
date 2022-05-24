<template>
  <div
    id="good-shepherd-manor"
    class="d-flex flex-column scrollbar"
  >
    <Header />
    <router-view class="main" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_base.scss";
@import "./assets/scss/reset.scss";
#good-shepherd-manor {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  min-height: 100%;
  // overflow-y: scroll;
}
.main {
  flex: 1;
  height: 100%;
}
.scrollbar {
  padding-left: 6px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .1);
  }
}
</style>
