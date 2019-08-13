
export default{
    //加入购物车
    addProductToCart({commit , state} , product){

        const cartItem=state.items.find(item => item.id === product.id)
        if(!cartItem)
        {
            commit("add_product_to_cart",product)
        }
        else{
            commit("add_product_count",product)
        }
        /* commit("add_product_to_cart",product) */
        /* for(let i=0;i<state.items.length;i++)
        {
            if(state.items[i].id === product.id)
            {
                commit('add_product_count',product)
            }else{
                commit("add_product_to_cart",product)
            }
        } */
        
    },
    //商品数量-1
    decreCartProductCount({commit,state},id){
        
        
        commit("decre_product_count" , id)
    },
    increCartProductCount({commit,state} , id)
    {
        commit('incre_product_count', id)
    },
    deleteProduct({commit , state} , id){
        commit('delete_product' , id)
    },
}