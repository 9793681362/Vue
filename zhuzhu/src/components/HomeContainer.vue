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




<script>
// src/components/ExampleComponent.vue
<template>
  <div>
    <h2>Auth</h2>  <!-- 显示身份验证模块 -->
    <p>Authenticated: {{ isAuthenticated }}</p>  <!-- 显示用户是否已验证 -->
    <button @click="login()">Login</button>  <!-- 登录按钮 -->
    <button @click="logout()">Logout</button>  <!-- 注销按钮 -->
    <p>User: {{ currentUser?.name }}</p>  <!-- 显示当前用户的名字 -->

    <h2>Cart</h2>  <!-- 显示购物车模块 -->
    <p>Cart Items: {{ cartCount }}</p>  <!-- 显示购物车中的商品数量 -->
    <button @click="addItem()">Add Item</button>  <!-- 添加商品到购物车的按钮 -->
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">  <!-- 遍历购物车中的商品 -->
        {{ item.name }}  <!-- 显示商品名字 -->
        <button @click="removeItem(index)">Remove</button>  <!-- 移除商品的按钮 -->
      </li>
    </ul>
  </div>
</template>



</script>