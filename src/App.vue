<script >

import navbarComponent from './components/navbarComponent.vue';
import productComponent from './components/productComponent.vue';
import cartComponent from './components/cartComponent.vue';
import userForm from './components/userForm.vue';

export default{
  components:{
    navbarComponent,
    productComponent,
    cartComponent,
    userForm
  }
}
</script>

<template>

<navbarComponent></navbarComponent>
<div class="container">
  <cartComponent></cartComponent>
  <productComponent></productComponent> 
  <userForm></userForm>
  
  
</div>

  <!-- <RouterView /> -->
</template>

<style lang="scss">
@import "./assets/all.scss";

// $primary: red;

// div{
//   color: $primary;
// }
</style>
