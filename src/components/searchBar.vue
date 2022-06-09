<template>
  <div class="searchBar-wrapper d-flex">
    <div class="during d-flex align-items-center justify-content-end">
      <label
        for="date"
        class="pointer"
      >日期</label>
      <input
        id="date"
        v-model="date"
        class="pointer"
        name="a-time-start"
        type="date"
        placeholder="新增租借日期"
      >
    </div>
    <div class="headCount d-flex align-items-center justify-content-center">
      <label
        for="headCount"
        class="pointer"
      >人數</label>
      <i
        class="las la-minus pointer"
        @click="reduceNum"
      />
      <input
        id="headCount"
        v-model="headCount"
        class="pointer"
        type="number"
        placeholder="1~9"
      >
      <i
        class="las la-plus pointer"
        @click="increaseNum"
      />
    </div>
    <div class="usage d-flex align-items-center justify-content-center">
      <label
        for="sort"
        class="pointer"
      >用途</label>
      <select
        id="sort"
        v-model="usage"
        class="pointer"
        name="usage"
        placeholder="請選擇"
      >
        <option
          value=""
          disabled
          selected
        >
          Select your usage
        </option>
        <option>會議<i class="las la-caret-down" /></option>
        <option>小組<i class="las la-caret-down" /></option>
        <option>聚餐<i class="las la-caret-down" /></option>
        <option>娛樂<i class="las la-caret-down" /></option>
        <option>親子<i class="las la-caret-down" /></option>
        <option>露營<i class="las la-caret-down" /></option>
        <option>特會<i class="las la-caret-down" /></option>
        <option>練團<i class="las la-caret-down" /></option>
      </select>
    </div>
    <button
      class="searchBtn"
      @click="handleSearch"
    >
      <i class="las la-search" />
    </button>
  </div>
</template>

<script>
// import { toNamespacedPath } from 'path'
import Swal from 'sweetalert2'

export default {
  name: 'SearchBar',
  data () {
    return {
      date: '',
      headCount: '',
      usage: ''
    }
  },
  methods: {
    increaseNum () {
      if (!this.headCount) {
        this.headCount = 1
      } else {
        this.headCount++
      }
    },
    reduceNum () {
      if (this.headCount > 1) {
        this.headCount--
      } else if (!this.headCount) {
        this.headCount = 1
      }
    },
    handleSearch (e) {
      if (!this.date) {
        Swal.fire({
          title: '請填寫日期',
          icon: 'warning'
        })
        return
      }
      if (!this.headCount) {
        Swal.fire({
          title: '請填寫人數',
          icon: 'warning'
        })
        return
      }
      if (!this.usage) {
        Swal.fire({
          title: '請填寫用途',
          icon: 'warning'
        })
        return
      }
      const seachKeyword = {
        date: this.date,
        headCount: this.headCount,
        usage: this.usage
      }
      this.$emit('after-search', seachKeyword)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
.searchBar-wrapper {
  margin: 46px auto 0;
  border: 1px solid #D1D5DB;
  box-sizing: border-box;
  border-radius: 100px;
  overflow: hidden;
  background: #F8F9FA;
  width: 800px;
}
.during {
  padding: 18px 27px 18px 41px;
  border-right: 1px solid #D1D5DB;
  box-sizing: border-box;
  label {
    margin-right: 18px;
    @include font-setting('Noto Serif TC', normal, 700, 16px, 23px, #3B485B);
    letter-spacing: 0.025em;
  }
  input {
    width: 128px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #D1D5DB;
    box-sizing: border-box;
    border-radius: 4px;
    color: #9AA0A9;
  }
}
.headCount {
  padding: 18px 26px 18px 27px;
  border-right: 1px solid #D1D5DB;
  box-sizing: border-box;
  label {
    margin-right: 22px;
    @include font-setting('Noto Serif TC', normal, 700, 16px, 23px, #3B485B);
    letter-spacing: 0.025em;
  }
  input {
    text-align: center;
    margin: 0 9px;
    width: 61px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #D1D5DB;
    box-sizing: border-box;
    border-radius: 4px;
    color: #3B485B;
  }
}
.usage {
  padding: 18px 18px 18px 20px;
  box-sizing: border-box;
  label {
    margin-right: 18px;
    @include font-setting('Noto Serif TC', normal, 700, 16px, 23px, #3B485B);
    letter-spacing: 0.025em;
  }
  select {
    padding: 0;
    width: 146px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #D1D5DB;
    box-sizing: border-box;
    border-radius: 4px;
    color: #9AA0A9;
  }
}
.searchBtn {
  margin: auto 13px auto 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #7E9791;
  i {
    font-size: 24px;
    line-height: 20px;
    color: #F8F9FA;
  }
}
.pointer {
  cursor: pointer;
}
</style>
