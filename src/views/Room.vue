<template>
  <div id="app">
    <div class="main-container">
      <div class="path">
        首頁/場地租借/
      <!-- {{ room.name || '教室名稱' }} -->
      </div>
      <div class="wrapper-main d-flex">
        <div class="slides">
          <!-- 配置slider组件 -->
          <slider
            ref="slider"
            :options="options"
            @slide="slide"
            @tap="onTap"
            @init="onInit"
          >
            <!-- 直接使用slideritem slot -->
            <slideritem
              v-for="( item, index ) in someList"
              :key="index"
              :style="item.style"
            >
              <img
                :src="item.html"
                alt=""
              >
            </slideritem>
            <!-- 设置loading,可自定义 -->
            <div slot="loading">
              loading...
            </div>
          </slider>
        </div>
        <!-- // right -->
        <div class="detail d-flex flex-column justify-content-start align-items-start">
          <h1 class="room-name originalFontStyle">
            教室名稱
          <!-- {{ room.name || '教室名稱' }} -->
          </h1>
          <p class="room-headCount originalFontStyle mb-4">
            適合人數：
            <!-- {{ room.headCount || '1-3' }} -->
            人
          </p>
          <p class="room-usage originalFontStyle mb-4">
            適合用途：
            <span>
            <!-- {{ room.usage }} -->
            </span>
          </p>
          <p class="room-equipment originalFontStyle mb-4">
            場地設備：
            <span>
            <!-- {{ room.equipment }} -->
            </span>
          </p>
          <p class="room-introduction originalFontStyle mb-4">
            介紹：
          <!-- {{ room.introduction || '介紹：介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字介紹文字' }} -->
          </p>
          <div class="horizon mb-4" />
          <div class="accommodation d-flex align-items-center">
            <p class="originalFontStyle mr-5">
              租借時間：
            </p>
            <input type="checkbox">
            <p>需要住宿（請選擇入住與退房時間）</p>
          </div>
          <div class="calendar">
            <FunctionalCalendar
              ref="Calendar"
              v-model="calendarData"
              :sunday-start="true"
              :is-date-range="true"
              :transition="true"
              :is-layout-expandable="true"
              :change-month-function="true"
              :change-year-function="true"
              :marked-dates="markedDates"
              class="calendar multiple"
              @changedMonth="changedMonth"
              @changedYear="changedYear"
            />
          </div>
          <div class="rental-period">
            <div class="time d-flex">
              <p class="originalFontStyle">
                租借時段 (可複選)：
              </p>
              <label
                for=""
                class="mr-3"
                @click="changePeriod(morning)"
              >
                <input
                  type="checkbox"
                  name="variety"
                >
                <span class="round button">上午</span>
              </label>
              <label
                for=""
                class="mr-3"
                @click="changePeriod(noon)"
              >
                <input
                  type="checkbox"
                  name="variety"
                >
                <span class="round button">下午</span>
              </label>
              <label
                for=""
                @click="changePeriod(night)"
              >
                <input
                  type="checkbox"
                  name="variety"
                >
                <span class="round button">晚上</span>
              </label>
            </div>
            <template v-if="rentalPeriod = 'morning'">
              <label for="">
                <input type="checkbox">
                <span>晚上</span>
              </label>
            </template>
          </div>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.053119457709!2d121.60187201599136!3d25.100063141791864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442add9a2c10a43%3A0xc7c0a2ded7d590d3!2z5aW954mn5Lq66I6K5ZyS!5e0!3m2!1szh-TW!2stw!4v1652838585532!5m2!1szh-TW!2stw"
      style="border: 0; margin: 0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar'
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: {
    FunctionalCalendar,
    slider,
    slideritem
  },
  data () {
    return {
      rentalPeriod: '',
      calendarData: {},
      // Image list
      someList: [
        {
          html: 'https://images.unsplash.com/photo-1616627434852-097e535878d5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419',
          style: ''
        },
        {
          html: 'https://images.unsplash.com/photo-1571387384064-ed3f73470065?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387',
          style: ''
        },
        {
          html: 'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880',
          style: ''
        },
        {
          html: 'https://images.unsplash.com/photo-1556022363-5187bfa13ad9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
          style: ''
        },
        {
          html: 'https://images.unsplash.com/photo-1606654810639-76ed5d12737b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
          style: ''
        },
        {
          html: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
          style: ''
        },
        {
          html: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400',
          style: ''
        }
      ],
      // Sliding configuration [obj]
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 1000,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 300,
        effect: 'fade'
      }
    }
  },
  mounted () {
    // let that = this
    // setTimeout(function () {
    //   that.someList = [
    //     {
    //       html: 'slide1',
    //       style: {
    //         'background': '#1bbc9b'
    //       }
    //     },
    //     {
    //       html: 'slide2',
    //       style: {
    //         'background': '#4bbfc3'
    //       }
    //     },
    //     {
    //       html: 'slide3',
    //       style: {
    //         'background': '#7baabe'
    //       }
    //     }
    //   ]
    // }, 2000)
  },
  methods: {
    changePeriod (period) {
      this.rentalPeriod = period
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
#app {
  height: 100%;
  padding: 0;
}
.main {
  padding: 0;
}
.main-container {
  height: 100%;
  padding: 26px 120px 0;
}
.path {
  margin-bottom: 26px;
  text-align: left;
  letter-spacing: 0.025em;
  @include font-setting('Noto Serif TC', normal, 700, 16px, 23px, #9AA0A9);
}
.wrapper-main {
  padding-bottom: 98px;
  height: 100%;
  .slides {
    width: 686px;
    height: 686px;
  }
  .detail {
    padding-left: 38px;
    flex: 1;
    // height: 100%;
    .originalFontStyle {
      @include font-setting('Noto Serif TC', normal, 400, 16px, 20px, #3B485B);
    }
    .room-name {
      margin-bottom: 19px;
      @include font-setting('Noto Serif TC', normal, 700, 24px, 20px, #3B485B);
    }
    .horizon {
      width: 474px;
      height: 0.3px;
      background-color: #E4E8EB;
      border: 0.3px solid #E4E8EB;
    }
    .accommodation {
      margin-bottom: 10px;
    }
  }
}
.rental-period {
  .time {
    input[type=checkbox] {
      display: none;
    }
    input[type=checkbox]:checked + .button {
      background-color: green;
      color: #FFFFFF;
    }
    .button {
      width: 84px;
      height: 43px;
      display: inline-block;
      background: #fff;
      color: #333;
      cursor: pointer;
    }
    .button:hover {
      background: #bbb;
      color: #fff;
    }
    .round {
      border: 1px solid #E4E8EB;
      border-radius: 4px;
    }
  }
}
// checkbox style
input[type=checkbox] {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
input[type=checkbox]:after {
  position: absolute;
  width: 16px;
  height: 16px;
  // content: '';
  // color: #fff;
  // display: inline-block;
  // visibility: visible;
  box-sizing: border-box;
  background-color: #FFFFFF;
  border: 2px solid #7E9791;
  border-radius: 2px;
}
input[type=checkbox]:checked:after {
  background-image: url("data:image/svg+xml,%3Csvg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.5L4.27273 8L7.13636 4.5L10 1' stroke='%237E9791' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #FFFFFF;
  color: #FFFFFF;
  background-repeat: no-repeat;
  background-size: cover;
}
.calendar {
  // margin: 0 auto !important;
  width: 372px;
  height: 337px;
}
.main-container.calendar.multiple {
  width: 100%;
}
</style>
