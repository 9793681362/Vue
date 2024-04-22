<template>
  <div class='app'>
    <!-- PageHeader 头部 -->
    <PageHeader></PageHeader>
    
  </div>
</template>

<script>

import PageHeader from './components/PageHeader.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default {
  components: {
    PageHeader, 
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
  }
  body{
    background-color: #F8F7F4;
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
</style>
