<template>
  <div class='home-container'>
    <div class="home-badge">
      <a href="">Over 3 million ready-to-work creatives!</a>
    </div>
    <div>123</div>
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

.home-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    .home-badge{
        border-radius: 999px;
        padding: 10px 16px;
        font-size: 16px;
        background-color: pink;
    }
}


</style>

