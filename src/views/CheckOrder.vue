<template>
  <div id="app">
    <div class="main-container">
      <div class="path">
        首頁 / 場地租借 /
        <span>
          {{ room.name }}
        </span>
      </div>
      <div class="wrapper-main d-flex">
        <div class="room-img">
          <img
            :src="room.img"
            alt=""
          >
        </div>
        <div
          class="
            detail
            d-flex
            flex-column
            justify-content-start
            align-items-start
          "
        >
          <h1 class="room-name originalFontStyle">
            教室名稱
            {{ room.name }}
          </h1>
          <p class="room-headCount originalFontStyle mb-4">
            適合人數：
            {{ room.headCount }}
            人
          </p>
          <div class="room-usage originalFontStyle d-flex mb-4">
            適合用途：
            <div
              v-for="usage in room.usages"
              :key="usage.index"
            >
              {{ usage }}
            </div>
          </div>
          <div class="room-equipment originalFontStyle d-flex mb-4">
            場地設備：
            <div>
              {{ room.equipment }}
            </div>
          </div>
          <p class="room-introduction originalFontStyle mb-4">
            介紹：
            {{ room.introduction }}
          </p>
        </div>
      </div>
      <div class="horizon mb-4" />
      <div class="wrapper-order-info">
        <div class="item d-flex flex-column text-left justify-content-between">
          <label for="">租借人姓名（必填）</label>
          <input
            id="renter-name"
            type="text"
          >
        </div>
        <div class="item d-flex flex-column text-left justify-content-between">
          <label for="">租借人電話（必填）</label>
          <input
            id="renter-phone"
            type="number"
          >
        </div>
        <div class="item d-flex flex-column text-left justify-content-between">
          <label for="">租借人Email</label>
          <input
            id="renter-email"
            type="Email"
          >
        </div>
        <div class="item d-flex flex-column text-left justify-content-between">
          <label for="">所在小組（必填）</label>
          <select
            id="group"
            name="group"
          >
            <option value="">
              請選擇所在小組
            </option>
            <option value="">
              和平一
            </option>
            <option value="LED">
              和平二
            </option>
            <option value="LED">
              青橄欖
            </option>
          </select>
        </div>
        <div class="wrapper-calendar">
          <div class="accommodation d-flex justify-content-between align-items-center">
            <p class="originalFontStyle">
              租借時間：
            </p>
            <div class="d-flex align-items-center">
              <input type="checkbox">
              <p class="originalFontStyle">
                需要住宿
              </p>
              <p class="chechInOut-time originalFontStyle">
                （請選擇入住與退房時間）
              </p>
            </div>
          </div>
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
        <div class="item d-flex justify-content-between align-items-center">
          <label for="">租借目的：</label>
          <select class="rental-purpose">
            <option value="">
              請選擇租借目的
            </option>
            <option value="">
              目的一
            </option>
            <option value="">
              目的二
            </option>
            <option value="">
              目的三
            </option>
            <option value="">
              目的四
            </option>
          </select>
        </div>
        <div class="rental-period">
          <div class="time d-flex align-items-center">
            <p class="originalFontStyle">
              租借時段：
            </p>
            <label
              for="morning"
              class="mr-3"
              @click="changePeriod('morning')"
            >
              <input
                id="morning"
                type="radio"
                name="variety"
              >
              <span class="round button">上午</span>
            </label>
            <label
              for="noon"
              class="mr-3"
              @click="changePeriod('noon')"
            >
              <input
                id="noon"
                type="radio"
                name="variety"
              >
              <span class="round button">下午</span>
            </label>
            <label
              for="night"
              @click="changePeriod('night')"
            >
              <input
                id="night"
                type="radio"
                name="variety"
              >
              <span class="round button">晚上</span>
            </label>
          </div>
          <div
            v-if="rentalPeriod === 'morning'"
            class="during d-flex"
          >
            <label for="8-9">
              <input
                id="8-9"
                type="checkbox"
                name="variety"
              >
              <span class="round button">8:00 - 9:00</span>
            </label>
            <label for="9-10">
              <input
                id="9-10"
                type="checkbox"
                name="variety"
              >
              <span class="round button">9:00 - 10:00</span>
            </label>
            <label for="10-11">
              <input
                id="10-11"
                type="checkbox"
                name="variety"
              >
              <span class="round button">10:00 - 11:00</span>
            </label>
            <label for="11-12">
              <input
                id="11-12"
                type="checkbox"
                name="variety"
              >
              <span class="round button">11:00 - 12:00</span>
            </label>
          </div>
          <div
            v-if="rentalPeriod === 'noon'"
            class="during d-flex"
          >
            <label for="12-13">
              <input
                id="12-13"
                type="checkbox"
                name="variety"
              >
              <span class="round button">12:00 - 13:00</span>
            </label>
            <label for="13-14">
              <input
                id="13-14"
                type="checkbox"
                name="variety"
              >
              <span class="round button">13:00 - 14:00</span>
            </label>
            <label for="14-15">
              <input
                id="14-15"
                type="checkbox"
                name="variety"
              >
              <span class="round button">14:00 - 15:00</span>
            </label>
            <label for="15-16">
              <input
                id="15-16"
                type="checkbox"
                name="variety"
              >
              <span class="round button">15:00 - 16:00</span>
            </label>
            <label for="17-18">
              <input
                id="17-18"
                type="checkbox"
                name="variety"
              >
              <span class="round button">17:00 - 18:00</span>
            </label>
          </div>
          <div
            v-if="rentalPeriod === 'night'"
            class="during d-flex"
          >
            <label for="18-19">
              <input
                id="18-19"
                type="checkbox"
                name="variety"
              >
              <span class="round button">18:00 - 19:00</span>
            </label>
            <label for="19-20">
              <input
                id="19-20"
                type="checkbox"
                name="variety"
              >
              <span class="round button">19:00 - 20:00</span>
            </label>
            <label for="20-21">
              <input
                id="20-21"
                type="checkbox"
                name="variety"
              >
              <span class="round button">20:00 - 21:00</span>
            </label>
            <label for="21-22">
              <input
                id="21-22"
                type="checkbox"
                name="variety"
              >
              <span class="round button">21:00 - 22:00</span>
            </label>
          </div>
          <div class="d-flex align-items-center justify-content-start mt-4">
            <input
              type="checkbox"
              class="rental-terms"
            >
            <p class="originalFontStyle">
              我同意租借條款
            </p>
          </div>
          <router-link
            v-if="rentalPeriod"
            to="/confirm"
            class="confirm-btn"
          >
            完成租借
          </router-link>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.053119457709!2d121.60187201599136!3d25.100063141791864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442add9a2c10a43%3A0xc7c0a2ded7d590d3!2z5aW954mn5Lq66I6K5ZyS!5e0!3m2!1szh-TW!2stw!4v1652838585532!5m2!1szh-TW!2stw"
      style="border: 0; margin: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<script>
const dummyData = {
  room: {
    id: 1,
    name: '教室一',
    headCount: '1-3',
    headCountMin: 1,
    headCountMax: 3,
    usages: ['會議', '小組', '聚餐', '娛樂', '親子'],
    equipment: '音響',
    introduction: '介紹介紹',
    img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171'
  }
}
export default {
  data () {
    return {
      room: {},
      rentalPeriod: ''
    }
  },
  created () {
    this.fetchRoom()
  },
  methods: {
    fetchRoom () {
      const { room } = dummyData
      this.room = {
        ...this.room,
        id: room.id,
        name: room.name,
        usages: room.usages,
        equipment: room.equipment,
        headCount: room.headCount,
        introduction: room.introduction,
        img: room.img
      }
    },
    changePeriod (period) {
      this.rentalPeriod = period
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base";
@import "../assets/scss/reset";
.main-container {
  height: 100%;
  padding: 26px 120px 0;
}
.path {
  margin-bottom: 26px;
  text-align: left;
  letter-spacing: 0.025em;
  @include font-setting("Noto Serif TC", normal, 700, 16px, 23px, #9aa0a9);
  span {
    color: #3b485b;
  }
}
.wrapper-main {
  .room-img {
    img {
      width: 184px;
      height: 184px;
      object-fit: contain;
    }
  }
}
.originalFontStyle {
  @include font-setting("Noto Serif TC", normal, 400, 16px, 20px, #3b485b);
}
.detail {
  padding-left: 38px;
  flex: 1;
  // height: 100%;
  .room-name {
    margin-bottom: 19px;
    @include font-setting("Noto Serif TC", normal, 700, 24px, 20px, #3b485b);
  }
  .room-usage,
  .room-equipment {
    div {
      padding: 4px 8px;
      margin-right: 8px;
      background: #f8f9fa;
      border-radius: 4px;
      @include font-setting("Noto Serif TC", normal, 600, 14px, 20px, #6b7280);
    }
  }
}
.horizon {
  width: 1200px;
  height: 0.3px;
  background-color: #e4e8eb;
  border: 0.3px solid #e4e8eb;
}
.wrapper-order-info {
  display: grid;
  grid-template-columns: 372px 372px;
  grid-template-rows: repeat(7, 76px);
  grid-gap: 19px 39px;
  .item {
    height: 100%;
    label {
      height: 20px;
      @include font-setting('Noto Serif TC', normal, 400, 16px, 20px, #3B485B);
    }
    input, select {
      height: 48px;
      padding: 14px 11px 14px;
      border: 1px solid #D1D5DB;
      border-radius: 4px;
      @include font-setting('Noto Serif TC', normal, 400, 14px, 28px, #6B7280);
    }
    .rental-purpose {
      width: 232px;
    }
  }
  .wrapper-calendar {
    .accommodation {
      margin-bottom: 10px;
      & > p {
        margin-left: 7px;
      }
      .chechInOut-time {
        display: none;
      }
      input[type=checkbox]:checked ~ p {
        color: #7E9791;
      }
      input[type=checkbox]:checked ~ .chechInOut-time {
        display: block;
      }
    }
  }
  .rental-period {
    grid-column: 2 / 3;
    grid-row: 4 / 8;
    input[type=radio], input[type=checkbox] {
      display: none;
    }
    input[type=checkbox].rental-terms {
      display: block;
    }
    input[type=radio]:checked + .button, input[type=checkbox]:checked + .button {
      background-color: #EB5757;
      color: #FFFFFF;
    }
    .round {
      border: 1px solid #E4E8EB;
      border-radius: 4px;
    }
    .time {
      .button {
        width: 84px;
        height: 43px;
        display: inline-block;
        background: #fff;
        color: #333;
        cursor: pointer;
        @include font-setting('Noto Serif TC', normal, 600, 16px, 43px, #6B7280);
      }
      .button:hover {
        background: #bbb;
        color: #fff;
      }
    }
    .during {
      flex-flow: row wrap;
      .button {
        margin-top: 13px;
        margin-right: 17px;
        width: 137px;
        height: 43px;
        display: inline-block;
        background: #fff;
        color: #333;
        cursor: pointer;
        @include font-setting('Noto Serif TC', normal, 600, 16px, 43px, #6B7280);
      }
      .button:hover {
        background: #bbb;
        color: #fff;
      }
    }
    .confirm-btn {
      margin-top: 34px;
      width: 256px;
      height: 46px;
      display: block;
      background: #56675F;
      border-radius: 4px;
      @include font-setting('Noto Serif TC', normal, 600, 18px, 46px, #F8F9FA);
    }
  }
}
input[type=checkbox]:after {
  position: absolute;
  transform: translate(-30%,-15%);
  width: 20px;
  height: 20px;
  content: '';
  color: #fff;
  display: inline-block;
  visibility: visible;
  box-sizing: border-box;
  background-color: #FFFFFF;
  border: 2px solid #D1D5DB;
  border-radius: 4px;
}
input[type=checkbox]:checked:after {
  background-image: url("data:image/svg+xml,%3Csvg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.5L4.27273 8L7.13636 4.5L10 1' stroke='%237E9791' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  background-color: #FFFFFF;
  background-repeat: no-repeat;
  background-size: 15px 12px;
  background-position: center;
  border: 2px solid #7E9791;
}
</style>
