<template>
  <div class="searchBar-wrapper d-flex">
    <div class="during d-flex align-items-center justify-content-end">
      <label for="">日期</label>
      <input
        id=""
        class=""
        name="a-time-start"
        type="date"
        placeholder="新增租借日期"
      >
    </div>
    <div class="headCount d-flex align-items-center justify-content-center">
      <label for="">人數</label>
      <i class="las la-minus" />
      <input
        id=""
        class=""
        type="number"
        placeholder="1~9"
      >
      <i class="las la-plus" />
    </div>
    <div class="usage d-flex align-items-center justify-content-center">
      <label for="">用途</label>
      <select
        id="sort"
        name="usage"
        placeholder="請選擇"
      >
        <option>usage<i class="las la-caret-down" /></option>
      </select>
    </div>
    <button class="searchBtn">
      <i class="las la-search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
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
}.searchBtn {
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
</style>
