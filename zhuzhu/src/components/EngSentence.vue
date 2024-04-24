<template>
  <div class='english-sentence'>
    <div class="sentence">
      <div class="example">
        <h3 class="article-title">Lesson 11 - 礼尚往来 (One good turn deserves another)</h3>
        <div class="article">我正在一家饭馆吃饭，托尼.斯蒂尔走了进来。
托尼曾在一家律师事务所工作，而现在正在一家银行上班。
他的薪水很高，但他却总是向朋友借钱，并且从来不还。
托尼看见了我，就走过来和我坐到一张桌子前。
他从未向我借过钱。
当他吃饭时，我提出向他借20英镑。
令我惊奇的是，他立刻把钱给了我。
“我还从未向你借过钱，”托尼说道，“所以现在你可以替我付饭钱了！”</div>
      </div>
      <div class="inp-sentence">
      </div>
    </div>
    <div class="solution"></div>
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


.english-sentence{
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 100%;
}

.sentence{
  display: flex;
  flex-direction: column;
  height: 750px;
  width: 1200px;
  background-color: #ECF5FF;
  border: 3px solid #222;
  border-radius: 15px;
  .article-title{
    margin-top: 30px;
    text-align: center;   // 可以让文本自动居中
    
  }
  .article{
    background-color: pink;
    
  }
}

.solution{
  height: 750px;
  width: 600px;
  border: 3px solid #222;
  border-radius: 15px;
  background-color: pink;
  margin-left: 30px;
}


</style>





