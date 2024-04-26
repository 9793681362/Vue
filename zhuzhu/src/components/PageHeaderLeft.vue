<template>
            <ul class="lef-list" >
        <li  class='English' @mouseover="showEnglish" @mouseleave="hideEnglish">
       <a href="#" class="down">{{ navInfo[0].name }}</a> 
          <ul class="left-down" v-show="isEnglishVisible">
            <li v-for="(item,index) in navEnglish" :key="index">
                <router-link :to="`/${item.category_title}`">
                  {{item.category_title}}
                  <span>{{item.category_value}}</span>
                </router-link>
            </li>
          </ul>
        </li>
        <li class="Javascript"><a href="#">{{navInfo[1].name}}</a></li>
        <li class="Vue" @mouseover="showVue" @mouseleave="hideVue">
            <a href="#" class="down">{{navInfo[2].name}}</a>
             <ul class="left-down" v-show="isVueVisible">
            <li v-for="(item,index) in navEnglish" :key="index">
                <a href="">
                  {{item.category_title}}
                  <span>{{item.category_value}}</span>
                </a>
            </li>
          </ul>
        </li>
        <li class="Python"><a href="#">{{navInfo[3].name}}</a></li>
        <li class="Django"><a href="#">{{navInfo[4].name}}</a></li>
        <li class="Duolingo"><a href="#">{{navInfo[5].name}}</a></li>
        </ul>
</template>

<script>
export default {
  data() {
    return {
      navInfo: [
        { id:1,name:'English' },
        {id:2,name:'Javascript'},
        {id:3,name:'Vue'},
        {id:4,name:'Python'},
        {id:5,name:'Django'},
        {id:6,name:'Duolingo'},
      ],

      navEnglish: [
        {id:1,category_title:'Sentence',category_value:'English sentence game'},
        { id:2, category_title:'Words', category_value: 'Quick find your words' },
        {id:3,category_title:'PETS 3',category_value:'English past exam paper'},
      ],



      isEnglishVisible: false,
      isVueVisible:false
    }
  },
  computed: {},
  methods: {
    showEnglish() {
      this.isEnglishVisible = true
    },
    hideEnglish() {
      this.isEnglishVisible = false
    },
    showVue() {
      this.isVueVisible = true
    },
    hideVue() {
      this.isVueVisible = false
    }
  }
}
</script>

<style lang='less' scoped>
.nav-left{
  .lef-list{
    display: flex;
    font-weight: 500;
    li{
      padding:0 16px;
    }
  }
}



.down::after{
  content: '\F282';
  font-family: "bootstrap-icons";
  padding-left: 6px;
  font-size: 10px;
  color: #222;
}

.left-down{
  display: flex;
  position: absolute;  //这样一来可以不把其他元素顶上去
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  gap: 20px ;
  z-index: 10; // 让元素在最上层

  li{
  a{
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 14px;
    color: #0d0c22;
    background-color: #fff;
  }
  }
}

  .left-down::before {
  content: ''; // 确保伪元素被创建
  position: absolute;
  height: 18px;
  width: 100%;
  top: 0; // 根据需求调整
  left: 0;
  background-color: #F8F7F4 !important; // 透明，以模拟 margin
}

</style>
