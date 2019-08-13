<<template>
    <div>
        <ShoppingCart_Item :checkData=checkedItem
                            :itemData=itemList
                            @itemChecked="item_check"
                            @decreCount="dec_count"
                            @increCount="incre_count"
                            @deleItem="delete_item"></ShoppingCart_Item>
        
        <!-- <div v-for="(item,index) in checkedItem">
            <input type="checkbox" v-model="item.isChecked" @change="changeItemChecked(index)">
            <label>
                单选
            </label>
        </div> -->
        <div class="checkMoney" id="checkMoney">
            <div class="checkMoney_allChecked">
                <input type="checkbox" v-model="checked" @change="changeAllChecked()">
                <label>全选</label>
            </div>
            <div class="checkMoney_prices">
                <p>{{total_prices}}</p>
            </div>
        </div>
    </div>
</template>

<<script>

import { mapGetters , mapActions } from 'vuex'
import ShoppingCart_Item from './children/ShopingCart_Item'
export default {
    name:'ShoppingCart',
    data(){
        return{
            checkedItem:[
                
            ],
            checked:false,
            count:0,
            
            
            
            
        }
    },
    computed: {
        ...mapGetters('shoppingcart',{
            itemList:'getCartProducts'
        }),
        total_prices:function(){
            //监听总价格
            var total=0
            for(let i=0;i<this.itemList.length;i++)
            {
                if(this.checkedItem[i].isChecked)
                {
                    total+=this.itemList[i].singlePrice * this.itemList[i].count
                }
            }
            return total
            
        }
        

    },
    methods: {
        ...mapActions('shoppingcart',[
            'decreCartProductCount',
            'increCartProductCount',
            'deleteProduct',
            
        ]),
        
        changeAllChecked(){
            
            if(this.checked){
                
                
                for(let i=0;i<this.checkedItem.length;i++)
                {
                    this.checkedItem[i].isChecked=true;
                    
                }
                this.count=this.checkedItem.length
                
            }
            else{
                for(let i=0;i<this.checkedItem.length;i++)
                {
                    this.checkedItem[i].isChecked=false;
                    
                }
                this.count=0
                
   
            }
        },
       /*  changeItemChecked(index){
            
            if(this.checkedItem[index].isChecked)
            {
                this.count+=1
            }    
            else{
                this.count-=1
            }
            if(this.count === this.checkedItem.length)
                {
                    this.checked=true;
                    
                    
                }
                else{
                    this.checked=false
                }      
        } , */
        item_check(index){
            if(this.checkedItem[index].isChecked)
            {
                this.count+=1
            }    
            else{
                this.count-=1
            }
            if(this.count === this.checkedItem.length)
                {
                    this.checked=true;
                    
                    
                }
                else{
                    this.checked=false
                } 
        },
        dec_count(index){
           //商品数量-1
            
            this.decreCartProductCount(index)
            
        },
        incre_count(index){
            //商品数量+1
            this.increCartProductCount(index)
        },
        delete_item(index){
            //取消订单
            this.deleteProduct(index)
            this.checkedItem.splice(index,1)
            this.count-=1
            if(this.count === 0)
            {
                this.checked=false
            }
            if(this.checkedItem.length ===1 && this.checkedItem[0].isChecked ===true)
            {
                this.checked=true
            }
            
            
        },
    
        
    },

    mounted() {
        
       
    
        
        for(let i=0;i<this.itemList.length;i++)
        {
            this.checkedItem.push({isChecked:false})
        }
       
        
        
    },
    beforeUpdate() {
        console.log("before"+this.itemList.length)
    },
    updated() {
        console.log("update"+this.itemList.length)
        
        
    },
    components:{
        ShoppingCart_Item
    }
}
</script>   

<style>
    .checkMoney{
        border:1px solid gray;
        height:80px;
        width:100%;
        background-color:lightgray
    }
    .checkMoney_allChecked{
        float:left;
        
    }
    .checkMoney_prices{
        float:right
    }
</style>