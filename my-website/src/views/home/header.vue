<template>
  <div class='header'>
    <div class="header-left">
      <van-icon @click="navButton" name="wap-nav" class="nav-button"/>
      <div class="logo"></div>
      <div class="dashbor"></div>
    </div>
    <div class="header-right">
      <input type="text" class="search">
      <div class="user"></div> 
    </div>
  </div>
</template>

<script>
export default {
    name:'headerNav',
  data() {
    return {}
  },
  computed: {},
  methods: {
    navButton() { 
      
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
