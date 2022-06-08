<template>
  <div class="container">
    <table>
      <tr>
        <th>租借日期</th>
        <th>租借場地</th>
        <th>場地借用時間</th>
        <th>小組</th>
        <th>狀態</th>
        <th>編輯</th>
      </tr>
      <tr
        v-for="record in records"
        :key="record.index"
      >
        <td>{{ record.date }}</td>
        <td>{{ record.roomName }}</td>
        <td>{{ record.duration }}</td>
        <td>{{ record.group }}</td>
        <td>{{ record.status }}</td>
        <td>
          <button class="cancel-btn">
            取消租借
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
const dummyData = {
  records: [
    {
      date: '2022-04-01',
      roomName: '會議室一',
      duration: '8:00-9:00',
      group: 'LED',
      status: '已使用'
    },
    {
      date: '2022-04-01',
      roomName: '會議室三',
      duration: '8:00-9:00',
      group: 'LED',
      status: '使用中'
    },
    {
      date: '2022-04-01',
      roomName: '會議室二',
      duration: '8:00-9:00',
      group: 'LED',
      status: '未使用'
    },
    {
      date: '2022-04-01',
      roomName: '會議室四',
      duration: '8:00-9:00',
      group: 'LED',
      status: '未使用'
    }
  ]
}
export default {
  name: 'Record',
  data () {
    return {
      records: []
    }
  },
  created () {
    this.fetchRecords()
  },
  methods: {
    fetchRecords () {
      const { records } = dummyData
      this.records = records
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
tr {
  height: 46px;
  td {
    padding: 21px;
    @include font-setting('Noto Serif TC', normal, 400, 16px, 46px, #6B7280);
  }
  .cancel-btn {
    min-width: 80px;
    height: 36px;
    background-color: #EB5757;
    color: #F8F9FA;
    border-radius: 2px;
  }
}
</style>
