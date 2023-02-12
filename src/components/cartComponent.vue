<template>
  
<div class="bg-light p-4 my-3">
    <div v-if="!cart" >購物車沒有任何品項</div>
    <table class="table align-middle" v-else>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <td width="100"><a href="#" class="text-dark" @click.prevent="delCart(item)" >X<i class="fas fa-times"
          ></i></a></td>
          <td width="100"><img :src="item.product.imageUrl" class="table-image" alt="" style="width:100px"></td>
          <td>{{item.product.title}} {{item.qty}}</td>
          <td>{{item.product.price}}</td>

          <td width="200">
            <select name="" id="" class="form-select" v-model="item.qty" 
            @change="setCartQty(item)" :disabled="loading===item.id">
              <option :value="i" v-for="i in 20" :key="i+123" >{{i}}</option>
            </select>
          </td>
          <td width="200" class="text-end">$ {{item.total}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" class="text-end">
            總金額 NT$ {{cart.total}}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
// import produceStore from "../store/produceStore.js";
import cartStore from "../stores/cartStore.js";
import { mapState , mapActions} from "pinia";

export default {
  computed:{
    ...mapState(cartStore,['cart','loading'])
  },
  methods:{
    ...mapActions(cartStore,['delCart','setCartQty','getCart',])
  },
  mounted() {
    this.getCart()
  }
}
</script>