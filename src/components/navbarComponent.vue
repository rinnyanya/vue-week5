<template>
<nav class="navbar bg-light">
      <div class="container-fluid">
      <span class="navbar-brand" href="#">pkmn</span>
      <button type="button" class="btn nav-link">
        購物車
        <span class="badge rounded-pill bg-danger text-white"  >{{ length }}</span>

      </button>
    </div>
  </nav>

</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState , mapActions} from "pinia";


export default {
  // data(){
  //   return{
  //     cart:''
  //   }
  // },
  computed:{
    ...mapState(cartStore,['cart','length'])
  },
  methods:{
    ...mapActions(cartStore,['getCart'])
  },
  mounted() {
    this.getCart()
  }
}


</script>
