import {defineStore} from "pinia";
import axios from "axios";
import {url,path} from "./api.js";
import { Modal } from 'bootstrap'



export default defineStore('produceStore',{
    state: ()=>{

        return {
          datas:[],
          // product:{},
          // modal:'',
        }


      },
    getters:{
        sortProducts:({datas})=>{
            return datas.sort((a,b)=>a.price - b.price);
        },
 
    },
    actions:{
      getProducts(){
        axios.get(`${url}/api/${path}/products/all`)
        .then((res)=>{

         this.datas = res.data.products;
        
        })
        .catch((error)=>{
          alert(error)
        })
      },
      // getDetail(id){
      //   console.log(this.$refs.modal)
      //   const modal = new Modal(this.$refs.modal)
      //   modal.show()
      //   this.product = id
      //   console.log(this.product)

      // }
    }


})