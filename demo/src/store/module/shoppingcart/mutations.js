const DECRE_PRODUCT_COUNT="decre_product_count"
const INCRE_PRODUCT_COUNT="incre_product_count"
const DELETE_ITEM='delete_product'
const ADD_PRODUCT_TO_CART='add_product_to_cart'
const ADD_PRODUCT_COUNT='add_product_count'

export default{
    [ADD_PRODUCT_COUNT](state,product)
    {
        const item=state.items.find(item => item.id === product.id)
        item.count+=1
        
    },
    //加入购物车
    [ADD_PRODUCT_TO_CART](state,product){
        state.items.push(product)
        console.log("add product to cart");
        
        
    },
    //商品数量-1
    [DECRE_PRODUCT_COUNT](state,id){
        const cartItem=state.items[id]
        cartItem.count-=1
 
    },
    [INCRE_PRODUCT_COUNT](state,id){
        //商品数量+1
        const cartItem=state.items[id]
        cartItem.count+=1
    },
    [DELETE_ITEM](state,id){
        //删除选定的订单
        console.log(id);
        
        let cartItem=state.items
        cartItem.splice(id,1)
        console.log(state.items.length);
        
    },
    

}