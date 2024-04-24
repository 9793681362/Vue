<template>
  <div class='english-sentence'>
    <div class="sentence">
      <div class="example">
        <h1 class="article-title">Lesson 11 - 礼尚往来 (One good turn deserves another)</h1>
        <div class="article">
            <p class="acticle-chinese" v-for="(item,index) in newConceptEnglish" :key="index">{{item.text}}</p>
</div>
      </div>
      <textarea action="" class="inp-sentence" v-model="inputAnswer" @input="answer">
      </textarea>
    </div>
    <div class="solution">
      <div>
        <p class="acticle-english" v-for="(item,index) in newConceptEnglish" :key="index">{{item.answer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newConceptEnglish:[
        {id:1,text:'我正在一家饭馆吃饭，托尼.斯蒂尔走了进来.',answer:'I was having dinner at a restaurant when Tony Steele came in. '},
        {id:1,text:'托尼曾在一家律师事务所工作，而现在正在一家银行上班。',answer:'Tony worked in a lawyer‘s office years ago, but he is now working at a bank. '},
        {id:1,text:'他的薪水很高，但他却总是向朋友借钱，并且从来不还.',answer:'He gets a good salary, but he always borrows money from his friends and never pays it back. '},
        {id:1,text:'托尼看见了我，就走过来和我坐到一张桌子前。他从未向我借过钱。',answer:'Tony saw me and came and sat at the same table. '},
        {id:1,text:'托尼看见了我，就走过来和我坐到一张桌子前。.',answer:'He has never borrowed money from me. '},
        {id:1,text:'当他吃饭时，我提出向他借20英镑。',answer:'While he was eating, I asked him to lend me twenty pounds. '},
        {id:1,text:'令我惊奇的是，他立刻把钱给了我。',answer:'To my surprise, he gave me the money immediately. '},
        {id:1,text:'我还从未向你借过钱，”托尼说道，“所以现在你可以替我付饭钱了！',answer:'I have never borrowed any money from you,’Tony said‘, ‘so now you can pay for my dinner!'}
    ],
      inputAnswer:''

    }
  },
  computed: {},
  methods: {
    answer(){
      console.log(this.inputAnswer);
    }
}
}
</script>

<style lang='less' scoped>


.english-sentence{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  height: 100%;
}

.sentence{
  position: relative;
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
    text-indent: 2em;
    margin-top: 40px;
    padding: 0 100px;
    font-size: 20px;
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


.inp-sentence{
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform:translateX(-50%);
  height: 300px;
  width: 1000px;
  background-color: #F8F7F4;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 40px;
  border: 2px solid #222;
}


.solution{
  div{
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px ;
  .acticle-english{
    font-size: 20px;
  }
  }
}
</style>





