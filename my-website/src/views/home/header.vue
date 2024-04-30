<template>
  <div class='header'>
    <div class="header-left">
      <van-icon @click="toggleNavBar" name="wap-nav" class="nav-button"/>
      <div class="logo"></div>
      <div class="dashbor"></div>
    </div>
    <div class="header-right">
      <input type="text" class="search">
      <div class="user"></div> 
    </div>
    <narBar v-if="isNavBarVisible" />
  </div>
</template>

<script>
import narBar from './nav.vue'
export default {

    name:'headerNav',
  data() {
    narBar  
    return {}
  },
  computed: {},
  methods: {
    toggleNavBar() { 
      // 切换 navBar 的显示/隐藏状态
      this.isNavBarVisible = !this.isNavBarVisible
    }
  }
}
</script>

<style lang='less' scoped>

.header{
  display: flex;
  justify-content: space-between;
  padding: 16px;
}


.nav-button{
  border: 1px solid #D0D7DE;
  border-radius: 2px;
  cursor: pointer;
}

</style>
