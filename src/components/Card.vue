<template>
  <div class="card d-flex flex-column align-items-center">
    <a href="/room">
      <div class="card-img">
        <img
          src="../../public/room.jpg"
          alt=""
        >
      </div>
    </a>
    <div class="card-info d-flex flex-column justify-content-start">
      <a href="/room">
        <p class="title">{{ room.title }}</p>
      </a>
      <div class="room-description">
        <div class="headCount">
          <p>適合人數：{{ room.headCount }}人</p>
        </div>
        <div class="usage">
          <p>
            適合用途：
            <span
              v-for="item in room.usage"
              :key="item.index
              "
            >
              {{ item }}
            </span>
          </p>
        </div>
      </div>
      <button class="rental">
        租借場地
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    initialRoom: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      room: this.initialRoom
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
.card {
    width: 288px;
    height: 495px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #E4E8EB;
    box-shadow: 0px 4px 4px rgba(86, 103, 95, 0.06);
    .card-img {
        width: 288px;
        height: 288px;
        border-radius: 8px 8px 0px 0px;
        overflow: hidden;
        img {
            object-fit: cover;
        }
    }
    .card-info {
        width: 100%;
        height: 100%;
        .title {
            padding: 16px 16px 7px 16px;
            @include font-setting('Noto Serif TC', normal, 700, 24px, 20px, #3B485B);
            @include text-rows(1)
        }
        .room-description {
            .headCount {
                padding: 7px 16px 7.5px 16px;
                @include font-setting('Noto Serif TC', normal, 400, 16px, 20px, #6B7280);
            }
            .usage {
                padding: 7.5px 16px 7px 16px;
                @include font-setting('Noto Serif TC', normal, 400, 16px, 20px, #6B7280);
            }
        }
        .rental {
            margin: 30px auto 0;
            width: 256px;
            height: 46px;
            background-color: #7E9791;
            border-radius: 4px;
            @include font-setting('Noto Serif TC', normal, 600, 18px, 26px, #F8F9FA);
            letter-spacing: 0.025em;
        }
    }
}
</style>
