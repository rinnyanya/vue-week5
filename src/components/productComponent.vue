<template>
  <div class="d-flex flex-wrap">
    <div v-for="product in datas" :key="product.id" class="card" style="width: 18rem;">
      <img :src="product.imageUrl" class="card-img-top" alt="product.title">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">$ {{ product.price }} 元</p>
        
        <button type="button" class="btn btn-warning me-2" @click.prevent="getDetail(product)"  >查看更多資訊</button>

        <button type="button" class="btn btn-primary" @click.prevent="addToCart(product.id)">加入購物車</button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div>

          <div>
            <img v-bind:src="product.imageUrl" class="card-img-top primary-image" alt="主圖">
            <div class="ps-5">
              <h5 class="card-title">
                {{ product.title }}
                <span class="badge bg-primary ms-2">{{ product.category }}</span>
              </h5>
              <p class="card-text">商品描述：{{ product.description }}</p>
              <p class="card-text">商品內容：{{ product.content }}</p>
              <div class="d-flex">
                <p class="card-text me-2">{{ product.price }}</p>
                <p class="card-text text-secondary"><del>{{ product.origin_price }}</del></p>
                {{ product.unit }} / 元
              </div>
            
            </div>
          </div>
          <template v-for="(item, key) in product.imagesUrl" :key="key">
            <img :src="item" alt="" class="images m-2" style="width: 50%;">
          </template>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click.prevent="addToCart(product.id)"> 加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
import produceStore from "../stores/produceStore.js";
import cartStore from "../stores/cartStore.js";
import { Modal } from "bootstrap"

import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      product:{},
    }
  },

  computed: {
    ...mapState(produceStore, ['datas','sortProducts'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(produceStore, ['getProducts','getDetail']),
    getDetail(id){
       
        const modal = new Modal(this.$refs.modal)
        modal.show()
        this.product = id
        

      }
  },
  mounted() {
  
    this.getProducts();
  }
};

</script>