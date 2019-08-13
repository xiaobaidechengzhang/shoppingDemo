<template>
    <div>
        <div class='items'>
            <div class="item_image">
                <img :src=itemData.imageUrl>

            </div>
            <div>
                <p class="item_des">{{itemData.des}}</p>
            </div>
            <div class="item_detail">
                <div class="item_price">
                    <span>{{itemData.singlePrice}}</span>
                </div>
                <div class="add_to_cart">
                    <button @click="addToCart(itemData)">加入购物车</button>
                </div>
            </div>
            <div class="to_checkout">
                <router-link to="/shoppingcart">去结算</router-link>
            </div>
        </div>
        
    </div>
</template>

<<script>

import {mapState , mapActions} from 'vuex'
export default {

    name:'ItemList_Item',

    data(){
        return{
        
        }
    },
    props:{
        itemData:Object
    },
    methods: {
        addToCart(product){
            this.$emit('add_to_cart',product)
        }
    },
    
}
</script>

<style>
    .items{
        width:100%;
        height:380px;
    }
    .items:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)
    }
    .item_image{
        text-align:center
    }
    .item_des{
        color:gray;
        margin:0 auto
    }
    .item_des:hover{
        color :red
    }

    .item_detail{
        height:40px;
        vertical-align:middle;
        margin-top:5px
        
    }
    .item_price{
        float:left;
        height:40px;
        line-height:40px;
        text-align:center;
        font-weight:bold;
        margin-left:5px;
    }
    .add_to_cart{
        height:40px;
        line-height:40px;
        float : right;
        margin-right:5px
    }
    .to_checkout{
        float:right;
        margin-top:5px;;
        margin-right:5px;
    }
    a{
        text-decoration:none
    }
    a:hover{
        text-decoration:underline
    }
</style>