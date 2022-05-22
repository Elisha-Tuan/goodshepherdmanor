<template>
  <div
    id="app"
    class="d-flex flex-column justify-content-start align-items-center"
  >
    <div id="main-container">
      <SearchBar />
      <a href="/room">HHHHHHHHHHH</a>
      <div class="wrapper-card">
        <Card
          v-for="room in rooms"
          :key="room.index"
          :initial-room="room"
        />
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.053119457709!2d121.60187201599136!3d25.100063141791864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442add9a2c10a43%3A0xc7c0a2ded7d590d3!2z5aW954mn5Lq66I6K5ZyS!5e0!3m2!1szh-TW!2stw!4v1652838585532!5m2!1szh-TW!2stw"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import SearchBar from '@/components/searchBar.vue'
// import axios from 'axios'
const dummyData = {
  rooms: [
    {
      title: '教室一',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室二',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室三',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室四',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室五',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室六',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室七',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室八',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室九',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    },
    {
      title: '教室十',
      headCount: '6-10',
      usage: ['會議', '小組', '聚餐']
    }
  ],
  categories: [
    // ... 請複製貼上 Postman 的回傳內容
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: ''
}
export default {
  name: 'Home',
  components: {
    Card,
    SearchBar
  },
  data () {
    return {
      rooms: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created () {
    this.fetchRooms()
  },
  methods: {
    fetchRooms () {
      const {
        rooms,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.rooms = rooms
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>

<style lang="scss">
// @import "./assets/scss/_base.scss";
// @import "./assets/scss/reset.scss";
#app {
  height: 100%;
}
#main-container {
  height: 100%;
  width: 100%;
  // margin-top: 96px;
  // margin-bottom: 30px;
}
.wrapper-card {
  padding: 0 120px;
  margin-bottom: 69px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-gap: 16px;
}
iframe {
  width: 100%;
  min-height: 500px;
}
</style>
