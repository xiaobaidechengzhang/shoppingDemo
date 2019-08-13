import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/home/home.vue'
import ItemList from '../components/itemList/itemList.vue'
import ItemList_Options from '../components/itemList/ItemList_Options.vue'
import ShoppingCart from '../components/shoppingcart/ShoppingCart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      
    },
    {
      path:'/itemList',
      name:'ItemList_Options',
      component:ItemList_Options,
      children:[
        {path:'page/:id?',name:"ItemList",component :ItemList}
      ]
    },
    
    {
      path:'/shoppingcart',
      name:'ShoppingCart',
      component:ShoppingCart
    }
  ]
})
