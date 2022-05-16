<template>
  <div
    id="app"
    class="d-flex flex-column justify-content-start align-items-center"
  >
    <Header />
    <div id="main-container">
      <div class="path">
        首頁/場地租借/教室AAAAA
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import axios from 'axios'
export default {
  name: 'Room',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/_base.scss";
@import "../../assets/scss/reset.scss";
#main-container {
  flex-grow: 1;
  margin-top: 96px;
  margin-bottom: 30px;
}
</style>
