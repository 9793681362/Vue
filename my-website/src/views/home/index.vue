<template>
  <div class='home-container'>
    <Header></Header>
    <NavBar v-show="false"></NavBar>
  </div>
</template>

<script>
import Header from './header.vue';
import NavBar from './nav.vue'
export default {
  name: 'HomePage',
  components: {
    Header,
    NavBar
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='less' scoped>
.home-container{
  position: relative;
}

</style>
