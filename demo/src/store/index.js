import Vue from 'vue'
import Vuex from 'vuex'
import shoppingcart from './module/shoppingcart/shoppingcart'
import products from './module/products/products'

Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        shoppingcart,
        products
    }
})
