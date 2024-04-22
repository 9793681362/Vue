<template>
  <div class='header'>
    <div class="nav-head">
      <div class="nav-left">
        <ul>
        <li class="lear English"><a href="#">lear english</a></li>
        <li class="Javascript"><a href="#">Javascript</a></li>
        <li class="Vue"><a href="#">Javascript</a></li>
        <li class="Python"><a href="#">Javascript</a></li>
        <li class="Django"><a href="#">Django</a></li>
        <li class="Duolingo"><a href="#">Duolingo</a></li>
        </ul>
      </div>
      <div class="nav-main">
        R
      </div>
      <div class="nav-right">
        <input type="text" class="search" value="Search...">
        <i class="bi bi-search"></i>
        <a href="#" class="log-in">Log in</a>
        <a href="#" class="sign-up">Sign Up</a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>



<style lang='less' scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");



.header{
  position: relative;
}


.nav-head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

}

.nav-left{
  ul{
    display: flex;
    li{
      padding-right: 16px;
    }
  }
}

.nav-main{
  position: absolute; /* 使用绝对定位 */
  left: 50%; /* 将其移动到水平中央 */
  transform: translateX(-50%); /* 确保内容在中央 */
}

.nav-right{
  display: flex;
  align-items: center;
}

.search{
  position: relative;
  width: 300px ;
  height: 48px;
  border-radius: 999px;
  padding-left: 20px; /* 为图标留出空间 */

}



.log-in{
  height: 48px;
  line-height: 48px;
}

.sign-up{
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
  background-color: #0D0C22;
  border-radius: 999px;
  color: #fff;
  font-size: 14px;
}

.sign-up::before {
  content: "\F62C"; /* 使用Unicode值插入Bootstrap图标 */
}



</style>
