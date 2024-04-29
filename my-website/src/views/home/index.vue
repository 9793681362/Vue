<template>
  <div class='header'>
    <Header></Header>
    <NavBar></NavBar>
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

</style>
