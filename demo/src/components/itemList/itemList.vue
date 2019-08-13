<<template>
    <div class='itemlist'>
        <ItemList_Item @add_to_cart='addToCart'
                    v-for='(item,index) in itemLists_count'
                    :itemData=item 
                    class="itemVuex"></ItemList_Item>
        <ul class="pages">
            <li class="page_count"  v-for="(item,index) in [1,1]"  @click="choosPage(index+1)"  :class="{'active' : $route.params.id === index+1 || pageId === index}">
                <router-link class="page_count_link" :to="{ params: { id: index+1 }}" >{{index+1}}</router-link>
                
            </li>
            
           
        </ul>
       
        
    </div>
</template>

<<script>

import  ItemList_Item from './children/itemList_item'
import {mapState, mapActions} from 'vuex'

export default {
    name:'ItemList',
    data(){
        return{
            id:1,
            itemLists_count:[],
            pageId:0
            
        }
    },
    
    components:{
        ItemList_Item,
        
    },
    computed: mapState({
        itemLists:state=>state.products.items
    }),
    methods: {
        ...mapActions('shoppingcart',[
            'addProductToCart'
        ]),
        addToCart(product)
        {
            console.log("addaddadd");
            
            this.addProductToCart(product)
        },
        choosPage(num){
           
           
        
            if(num === this.$route.params.id)
            {
                 this.pageId=100
                this.itemLists_count=[]
                 for(let i=(this.$route.params.id-1)*4;i<this.$route.params.id*4;i++){
                this.itemLists_count.push(this.itemLists[i])
            }
            }
        }
        
    },
    mounted() {
        console.log(this.$route.params.id);
        
       for(let i=(this.$route.params.id-1)*4;i<this.$route.params.id*4;i++){
           this.itemLists_count.push(this.itemLists[i])
       }
       
        
    },
    
    
    
}
</script>

<style>

    
    .itemVuex{
        width:25%;
        float:left;
        
    }
    .pages{
        margin-left:400px;
        
        

    }
    
    .page_count{
        
        
        width:40px;
        
        text-align:center;
        border:1px solid gray;
        list-style:none;
    }
    
    
    .page_count.active{
        
        border:2px solid red
    }
    
</style>