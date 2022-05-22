<template>
  <ul class="nav nav-tabs mb-4">
    <li
      v-for="tab in tabs"
      :key="tab.index"
      class="nav-item"
    >
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          title: '首頁',
          path: '/restaurants'
        },
        {
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/top'
        },
        {
          title: '美食達人',
          path: '/users/top'
        }
      ]
    }
  }
}
</script>
