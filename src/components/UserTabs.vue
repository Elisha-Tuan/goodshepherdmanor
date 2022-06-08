<template>
  <div class="container">
    <ul class="tabs">
      <li
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-item"
      >
        <router-link
          :to="tab.path"
          :class="['tab-link', { 'high-light': keyword === tab.path }]"
        >
          {{ tab.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          id: 1,
          title: '個人資料',
          path: '/user/personal-info'
        },
        {
          id: 2,
          title: '租借記錄',
          path: '/user/record'
        },
        {
          id: 3,
          title: '修改密碼',
          path: '/user/change-password'
        }
        // {
        //   id: 4,
        //   title: '其他',
        //   path: '/user/others'
        // },
      ],
      keyword: String
    }
  },
  watch: {
    '$route.path' (newValue) {
      this.keyword = newValue.toString()
    }
  },
  created () {
    this.keyword = this.$route.path
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
 .tabs {
    width: 207px;
    .tab-item {
        width: 100%;
        height: 46px;
        border-bottom: 1px solid #E4E8EB;
    }
 }
.tab-link {
    @include font-setting('Noto Serif TC', normal, 400, 16px, 46px, #9AA0A9)
}
 .high-light {
    @include font-setting('Noto Serif TC', normal, 700, 16px, 46px, #56675F)
 }
</style>
