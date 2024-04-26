


<template>
  <div class='english-sentence'>
    <div class="sentence" >
      <div class="example">
        <h1 class="article-title">{{article_title}}</h1>
        <div class="article">
            <p class="acticle-chinese" v-for="item in disPlayData" :key="item.id"> {{item.text}}</p>
      </div>
      </div>
      <textarea action="" class="inp-sentence" v-model="inputAnswer"  @input="checkAnswer">
      </textarea>
    </div>
    <div class="solution">
      <div v-for="(item,index) in newConceptEnglish" :key="index">
        <p class="acticle-english">{{item.answer}}</p>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      article_title:'Lesson 11 - 礼尚往来 (One good turn deserves another)',
      newConceptEnglish: [
        {id:1,text:'我正在一家饭馆吃饭，托尼.斯蒂尔走了进来.',answer:'I was having dinner at a restaurant when Tony Steele came in.'},
        {id:2,text:'托尼曾在一家律师事务所工作，而现在正在一家银行上班。',answer:'Tony worked in a lawyer‘s office years ago, but he is now working at a bank.'},
        {id:3,text:'他的薪水很高，但他却总是向朋友借钱，并且从来不还.',answer:'He gets a good salary, but he always borrows money from his friends and never pays it back. '},
        {id:4,text:'托尼看见了我，就走过来和我坐到一张桌子前。他从未向我借过钱。',answer:'Tony saw me and came and sat at the same table.'},
        {id:5,text:'托尼看见了我，就走过来和我坐到一张桌子前。.',answer:'He has never borrowed money from me.'},
        {id:6,text:'当他吃饭时，我提出向他借20英镑。',answer:'While he was eating, I asked him to lend me twenty pounds.'},
        {id:7,text:'令我惊奇的是，他立刻把钱给了我。',answer:'To my surprise, he gave me the money immediately.'},
        {id:8,text:'我还从未向你借过钱，”托尼说道，“所以现在你可以替我付饭钱了！',answer:'I have never borrowed any money from you,’Tony said‘, ‘so now you can pay for my dinner!'}
    ],
      inputAnswer: '',
      currentId:0 // 当前显示的数据索引
    }
  },
  computed: {
    disPlayData() {
      // 根据currentId 控制显示数据
      return this.newConceptEnglish.slice(0,this.currentId + 1)
    }
  },
  methods: {
    checkAnswer() { 
      const answer = this.inputAnswer.trim(); // 去掉首位空格
      const currentData = this.newConceptEnglish[this.currentId]

      // 检查输入答案是否匹配当前数据的答案

      console.log(answer);
      console.log(currentData.answer);
      if (answer === currentData.answer) { 
        // 如果匹配，则增加 `currentId`，显示下一条数据
        if (this.currentId < this.newConceptEnglish.length - 1) { 
          this.currentId++;
          this.inputAnswer = ''; // 清空输入框
        }
      }
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



