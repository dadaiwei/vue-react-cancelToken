<template>
  <div class="main">
    <div class="tabs">
      <div :class="['tab', {'active': this.inDataPage}]" @click="handleClick('data')">数据管理</div>
      <div :class="['tab', {'active': this.inMessagePage}]" @click="handleClick('message')">信息管理</div>
      <div class="line"></div>
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeName: 'data'
    }
  },
  computed: {
    inDataPage () {
      return this.activeName === 'data'
    },
    inMessagePage () {
      return this.activeName === 'message'
    }
  },
  methods: {
    handleClick (tab) {
      this.activeName = tab
      this.$router.push({
        name: tab
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.main {
  width: 80%;
  margin: 0 auto;
}
.tabs {
  height: 40px;
  line-height: 40px;
  display: flex;
  font-weight: bold;
  font-size: 14px;
}
.tab {
  width: 100px;
  border: 1px solid #eee;
  cursor: pointer;
}
.line {
  border-bottom: 1px solid #eee;
  flex-grow: 1;
}
.tab:hover {
  color: #409eff;
}
.tab:nth-child(1) {
  border-right: none;
}
.tab:nth-child(1).active {
  border-color: #409eff;
  border-right: 1px solid #409eff;
}
.tab:nth-child(2).active {
  border-color: #409eff;
}
.contents {
  margin-top: 20px;
}
</style>