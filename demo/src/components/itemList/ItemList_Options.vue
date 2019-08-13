<template>
    <div>
        <router-link to='/shoppingcart'>/shoppingcart</router-link>
        <Multi_Options class='multi_options'></Multi_Options>
        <!-- <ItemList class="itemlist"></ItemList> -->
        <router-view class="child"></router-view>
        
    </div>
</template>

<<script>
import ItemList from './itemList'
import Multi_Options from './Multi_Options'
export default {
    name:'ItemList_Options',
    components:{
        ItemList,
        Multi_Options
    }
}
</script>

<style>
    .multi_options{
        
    }

    
    
    
</style>