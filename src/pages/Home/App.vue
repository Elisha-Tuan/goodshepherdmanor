<template>
  <div
    id="app"
    class="d-flex flex-column justify-content-start align-items-center"
  >
    <Header />
    <div id="main-container">
      <SearchBar />
      <a href="/room">HHHHHHHHHHH</a>
      <Card />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import SearchBar from '@/components/searchBar.vue'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Card,
    SearchBar
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
