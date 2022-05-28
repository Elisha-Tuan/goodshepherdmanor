<template>
  <div
    id="app"
    class="d-flex flex-column justify-content-start align-items-center"
  >
    <div id="main-container">
      <SearchBar @after-search="handleAfterSearch" />
      <div class="wrapper-card">
        <Card
          v-for="room in renderRoom"
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
      id: 1,
      name: '教室一',
      headCount: '1-3',
      usage: ['會議', '小組', '聚餐', '娛樂', '親子'],
      img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171'
    },
    {
      id: 2,
      name: '教室二',
      headCount: '1-5',
      usage: ['親子'],
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958'
    },
    {
      id: 3,
      name: '教室三',
      headCount: '1-7',
      usage: ['娛樂'],
      img: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387'
    },
    {
      id: 4,
      name: '教室四',
      headCount: '3-5',
      usage: ['露營'],
      img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 5,
      name: '教室五',
      headCount: '2-7',
      usage: ['會議'],
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106'
    },
    {
      id: 6,
      name: '教室六',
      headCount: '8-10',
      usage: ['小組'],
      img: 'https://images.unsplash.com/photo-1486304873000-235643847519?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332'
    },
    {
      id: 7,
      name: '教室七',
      headCount: '3-6',
      usage: ['聚餐'],
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 8,
      name: '教室八',
      headCount: '2-8',
      usage: ['會議', '小組'],
      img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 9,
      name: '教室九',
      headCount: '5-10',
      usage: ['小組', '特會'],
      img: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 10,
      name: '教室十',
      headCount: '1-4',
      usage: ['會議', '聚餐'],
      img: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171'
    },
    {
      id: 11,
      name: '教室十一',
      headCount: '1-3',
      usage: ['會議', '親子'],
      img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171'
    },
    {
      id: 12,
      name: '教室十二',
      headCount: '1-5',
      usage: ['小組', '聚餐', '娛樂'],
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958'
    },
    {
      id: 13,
      name: '教室十三',
      headCount: '1-7',
      usage: ['會議', '露營', '親子'],
      img: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387'
    },
    {
      id: 14,
      name: '教室十四',
      headCount: '3-5',
      usage: ['特會', '露營', '聚餐'],
      img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 15,
      name: '教室十五',
      headCount: '2-7',
      usage: ['親子', '小組', '親子'],
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106'
    },
    {
      id: 16,
      name: '教室十六',
      headCount: '8-10',
      usage: ['會議', '小組', '聚餐'],
      img: 'https://images.unsplash.com/photo-1486304873000-235643847519?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332'
    },
    {
      id: 17,
      name: '教室十七',
      headCount: '3-6',
      usage: ['會議', '親子', '娛樂'],
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 18,
      name: '教室十八',
      headCount: '2-8',
      usage: ['露營', '親子', '特會'],
      img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 19,
      name: '教室十九',
      headCount: '5-10',
      usage: ['娛樂', '小組', '練團'],
      img: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    },
    {
      id: 20,
      name: '教室二十',
      headCount: '1-4',
      usage: ['親子', '練團', '聚餐'],
      img: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171'
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
      filteredRooms: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  computed: {
    renderRoom () {
      return this.filteredRooms.length > 1 ? this.filteredRooms : this.rooms
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
    },
    handleAfterSearch (searchKeyword) {
      console.log(searchKeyword.usage)
      this.filteredRooms = this.rooms.filter((room) =>
        room.usage.some(item => item === searchKeyword.usage)
      )
      console.log(this.filteredRooms)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
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
  padding: 54px 120px;
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
