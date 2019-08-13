<<template>
    <div>
        <div class='item' v-for="(item,index) in checkData">
            <ul class="item_checkbox">
                <li><input type="checkbox" v-model="item.isChecked"
                                            @change="changeItemChecked(index)"></li>
            </ul>
            <ul class="left_img">
                <li><img :src=itemData[index].smallImageUrl></li>
            </ul>
            <ul class="right_detail_des">
                <li><p class="des_p">{{itemData[index].des}}</p></li>
                <li><img src='https://assets.alicdn.com/sys/common/icon/trade/xcard.png'></li>
                <li><img src='https://gtd.alicdn.com/tps/i7/T1g9BqXoJfXXXXXXXX-16-16.png'></li>
            </ul>
            <ul class='right_detail_options'>
               <li><button>选择样式</button></li>
            </ul>
            <ul class='right_detail_single_price'>
                <li><p>{{itemData[index].singlePrice}}</p></li>
            </ul>
            <ul class='right_detail_count'>
                <li><button :disabled="!(itemData[index].count - 1)"
                            @click="decreItemCount(index)">-</button></li>
                <li>{{itemData[index].count}}</li>
                <li><button @click="increItemCount(index)">+</button></li>

            </ul>
            <ul class='right_detail_prices'>
                <li><p>{{itemData[index].singlePrice * itemData[index].count}}</p></li>
            </ul>
            <ul class="delete_item">
                <li><button @click="deleteItem(index)">取消订单</button></li>
            </ul>
        </div>
    </div>
</template>

<<script>
export default {
    name:'ShoppingCart_Item',
    props:{
        checkData:Array,//选中item数组
        itemData:Array//商品列表
    },
    
    methods: {
        //改变选中状态
        changeItemChecked(id){
            this.$emit('itemChecked',id)      
        },
        decreItemCount(id){
            
            //商品数量-1
            this.$emit('decreCount',id)
        },
        increItemCount(id)
        {
            //商品数量+1
            this.$emit('increCount' , id)
        },
        deleteItem(id)
        {
            //取消订单
            this.$emit('deleItem' , id)
        }
    },
}
</script>

<style>

    .item{
        border-top:1px solid gray;
        border-bottom:1px solid gray;
        
    }
    .item:after{
        content:'';
        display:table;
        clear:both
    }
    .item_checkbox{
        float:left;
        width:30px;
        height:100px;
        list-style:none;
        
        padding-left:2px;
        margin-left:0

        
    }
    
    
    .left_img{
        float:left;
        
        width:80px;
        height:100px;
        
        padding-left:0;
        margin-left:0;
        list-style:none
    }
    .left_img li{
        
        margin-top:10px


    
        
    }
    
    .right_detail_des{
        float:left;
        
        width:150px;
        height:100px;
        
        list-style:none;
        padding-left:0;
        margin-left:0
        
        
       
    }
    .right_detail_des li{
        display :inline-block;
        font-size:12px;
        color:red;
        padding-left:10px;
        
        
    }
   
    
    .right_detail_options{
        float:left;
        
        width:100px;
        height:100px;
        padding-left:10px;
        list-style:none;
       
        
       
    }
    .right_detail_options li{
       margin-top:20px;
    }
    .right_detail_single_price{
        float:left;
        
        width:60px;
        height:100px;
        padding-left:10px;
        list-style:none;
      

    }

    .right_detail_single_price li{
        
        margin-top:20px;
        
        
        
    }

    .right_detail_count{
        float:left;
       vertical-align:middle;
        width:100px;
        height:100px;
        padding-left:10px;
        list-style:none;
  
        
        
        
       
    }
    .right_detail_count li{
        display:inline-block;
        margin-top:20px;
        
        
        
        
        
        
    }
    .right_detail_count:after{
        content:"";
        display:table;
        clear:both
    }
    .right_detail_prices
    {
        float:left;
        padding-left:0;
        margin-left:0;
        
        width:60px;
        
        height:100px;
    
        list-style:none;
        
       
    }
    .right_detail_prices li{
            margin-top:20px;
            
            padding-left:5px;
        }
    .delete_item{
        float:left;
        width:100px;
        height:100px;
        list-style:none
       
    }
    .delete_item li{
        margin-top:20px;
    }
</style>