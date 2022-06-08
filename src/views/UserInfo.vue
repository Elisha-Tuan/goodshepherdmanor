<template>
  <div class="container">
    <ul>
      <li :class="['d-flex item', { editing: currentEdit.status === 'name' }]">
        <p class="item-title">
          姓名
        </p>
        <div class="view">
          <label @dblclick="editMode('name')">{{ user.name }}</label>
        </div>
        <input
          v-model="currentEdit.name"
          v-focus="currentEdit.status === 'email'"
          class="edit"
          type="text"
          @keyup.esc="cancelEdit"
          @keyup.enter="doneEdit"
          @blur="doneEdit"
        >
      </li>
      <li :class="['d-flex item', { editing: currentEdit.status === 'email' }]">
        <p class="item-title">
          電子郵件
        </p>
        <div class="view">
          <label @dblclick="editMode('email')">{{ user.email }}</label>
        </div>
        <input
          v-model="currentEdit.email"
          v-focus="currentEdit.status === 'email'"
          class="edit"
          type="text"
          @keyup.esc="cancelEdit"
          @keyup.enter="doneEdit"
          @blur="doneEdit"
        >
      </li>
    </ul>
  </div>
</template>

<script>
const dummyUser = {
  id: 1,
  name: 'Tony',
  email: 'tony123@gmail.com'
}
export default {
  name: 'PersonalInfo',
  directives: {
    'focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },
  data () {
    return {
      currentEdit: {},
      user: {
        id: Number,
        name: '',
        email: ''
      }
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      const { id, name, email } = dummyUser
      this.user.id = id
      this.user.name = name
      this.user.email = email
    },
    editMode (keyword) {
      this.currentEdit = { ...this.user }
      this.currentEdit.status = keyword
    },
    doneEdit () {
      console.log('111')
      if (this.currentEdit.status) {
        this.user = { ...this.currentEdit }
      } else {
        return
      }
      this.currentEdit = {}
    },
    cancelEdit () {
      this.currentEdit = {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
.item.editing {
  .view {
    display: none;
  }
  .edit {
    display: block;
    color: rgb(215, 86, 86);
  }
}
.item {
  width: 100%;
  height: 46px;
  .edit {
    display: none;
    border: none;
  }
  .view, .edit {
    @include font-setting('Noto Serif TC', normal, 700, 16px, 46px, #3B485B);
  }
  .item-title {
    width: 100px;
    text-align: left;
    @include font-setting('Noto Serif TC', normal, 700, 16px, 46px, #3B485B);
  }
}
</style>
