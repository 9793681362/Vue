<template>
  <div class='narBar'>
    <div class="nav-hone">
        <div class="Overlay-header">
            <div class="nav-title">
                R
            </div>
            <div class="nav-close">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="navigation-bar">
            <ul >
                <li 
                v-for="item in nav_value" :key="item.id"
                :class="item.id === 7 || item.id === 11 ? 'separator' : 'nav-value-container'"
                :data-content="item.content"
                >
                {{item.nav}}
                </li>

            </ul>
        </div>
    </div>
  </div>
</template>

<script>




export default {

  name:'navBar',
    data() { 
        return {
            nav_value: [
                { id: 1, nav: 'English' ,content:"\uF658"},
                { id: 2, nav: 'Master' ,content:"\uF7CD"},
                { id: 3, nav: 'Javascript', content: "\uF74C" },
                { id: 4, nav: 'Vue' ,content:"\uF8C4"},
                { id: 5, nav: 'Python' ,content:"\uF75C"},
                { id: 6, nav: 'Django', content: "\uF7CE" },
                { id: 7, nav: '', content: "" },
                { id: 8, nav: 'GitHub', content: '\uF3ED' },
                { id: 10, nav: 'Plane', content: '\uF1A2' },
                { id: 11, nav: '', content: "" },
                
            ]
        }
    },
    
  methods: {}

}

</script>

<style lang='less' scoped>


.nav-hone{
    background-color: #fff;
    position: absolute;
    border-radius: 0 12px 12px 0;
    top: 0;
    left: 0;
    height: 100vh; // 确保整个视窗高度
    .Overlay-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 8px 0 8px;
        .nav-title{
            font-size: 32px;
            font-weight: 700;
        }
        .nav-close{
            button {
                position: relative; /* 父容器设置为相对定位 */
                cursor: pointer;
                width: 30px;
                height: 30px;
                /* 其他样式可以根据需要添加 */
                svg {
                    position: absolute; /* 绝对定位 */
                    top: 50%; /* 垂直居中 */
                    left: 50%; /* 水平居中 */
                    transform: translate(-50%, -50%); /* 水平和垂直居中 */
                }
            }
            button:hover{
                background-color: #eef1f4;
                border-radius: 5px;
            }
        }
    }
    .navigation-bar{
        padding: 0 8px 16px 8px;
        ul{
            padding: 8px;
            font-size: 14px;
            .nav-value-container{
                display: flex;
                align-items: center;
                padding: 6px 8px;
                color: #636c76;
            }
            .nav-value-container::before {
                    content: attr(data-content); /* 从属性获取Unicode值 */
                    font-family: "bootstrap-icons"; /* 引用字体库 */
                    margin-right: 8px;
                }
            .separator{
                margin: 7px -8px 8px -8px;
                height: 1px;
                width: 100%;
                background-color: #d0d7deb3;
            }
        }
    }
}


    
</style>
