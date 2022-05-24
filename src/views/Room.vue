<template>
  <div class="container">
    <div class="path">
      首頁/場地租借/
      <!-- {{ room.name || '教室名稱' }} -->
    </div>
    <div class="wrapper-main d-flex">
      <div class="slides" />
      <div class="detail">
        <h1 class="room-name">
          <!-- {{ room.name || '教室名稱' }} -->
        </h1>
        <p class="headCount">
          適合人數：
          <!-- {{ room.headCount || '1-3' }} -->
          人
        </p>
        <p class="usage">
          適合用途：
          <span>
            <!-- {{ room.usage }} -->
          </span>
        </p>
        <p class="equipment">
          <span>
            <!-- {{ room.equipment }} -->
          </span>
        </p>
        <p class="introduction">
          <!-- {{ room.introduction || '介紹：介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字' }} -->
        </p>
        <div class="horizon" />
        <div class="accommodation">
          <input type="checkbox">
          <p>需要住宿（請選擇入住與退房時間）</p>
        </div>
        <div class="calendar">
          <FunctionalCalendar
            v-model="calendarData"
            :sunday-start="true"
            :date-format="'dd/mm/yyyy'"
            :is-date-range="true"
            :is-date-picker="true"
            @changedMonth="changedMonth"
            @changedYear="changedYear"
          />
        </div>
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
import { FunctionalCalendar } from 'vue-functional-calendar'
export default {
  components: {
    FunctionalCalendar
  },
  data () {
    return {
      calendarData: {}
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.wrapper-main {
  height: 100%;
}
.calendar {
    width: 600px;
    height: 500px;
}
</style>
