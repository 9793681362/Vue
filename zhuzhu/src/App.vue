<template>
  <div class='app'>
    <!-- PageHeader首页头部 -->
    <PageHeader></PageHeader>
    <router-view></router-view>
    <!-- 英语句子 -->
    <!-- <EngSentence></EngSentence> -->
    <HomeContainer></HomeContainer>

  </div>
</template>

<script>

import PageHeader from './components/PageHeader.vue';
import HomeContainer from './components/HomeContainer.vue';


import 'bootstrap-icons/font/bootstrap-icons.css';   // 使用bootstarp的字体图标必须导入这个



export default {
  components: {
    PageHeader,
    HomeContainer
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang='less'>
  *{
    margin: 0;
    padding: 0;
    outline: none;
  }
  body{
    background-color: #F8F7F4;
    font-weight: 400;
    font-family: Roboto;
  }
  .app{
    padding: 0 40px;
  }
  ul{
    list-style-type: none; 
  }
  a{
    color: black;
    text-decoration: none;
  }
  input{
    border: none;
  }
  input:focus{
    outline:none;
  }

</style>
