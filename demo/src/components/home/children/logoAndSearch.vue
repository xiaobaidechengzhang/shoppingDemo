<<template>
    <div>
        <div class='logoAndSearch'>
            <div class="logo_left">
                <div ><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4078628968,3226244566&fm=26&gp=0.jpg"
                            class="logo_img"></div>
            </div>
            <div class="search_middle">
                
                <ul class="searchInput">
                    <li class="searchInput_input"><input type="search" placeHolder="百雀羚套装"></li>
                    <li class="searchInput_a"><a>搜索</a></li>
                </ul>
  
            </div>
            <div class="shoppingcart">
                <div><a>购物车</a></div>
            </div>
            
            <div class='bottom_title'>
                <ul>
                    <li class="bottom_title_p" style="color : red"><b>秒杀</b></li>
                    <li class="bottom_title_p" style="color : red"><b>优惠券</b></li>
                    <li class="bottom_title_p">PLUS会员</li>
                    <li class="bottom_title_p">品牌闪购</li>
                    <li class="bottom_title_p">拍卖</li>
                    <li class="bottom_title_p">京东时尚</li>
                    <li class="bottom_title_p">京东超市</li>
                    <li class="bottom_title_p">京东生鲜</li>
                    <li class="bottom_title_p">海豚全球</li>
                    <li class="bottom_title_p">京东数科</li>
        
                </ul>
            </div>
            
        </div>
    </div>
</template>

<<script>
export default {
    name:'LogoAndSearch'
}
</script>

<style>
    .logoAndSearch{
        width:100%;
        height:130px;
        display:inline-block
    }
    .logo_left{
        width:20%;
       float:left;
       

    }
    .logo_img{
        margin-top:10px;
       margin-left:40px;
        width:50%;
        height:60%
    }
    .search_middle
    {
        width:60%;
        height:50px;
        
        float:left;
        display:block;
        
        
    }
    .searchInput{
        margin-top:10px;
        margin-left:0px;
        padding-left:0;
        
        width:98%;
        height:50px;
        float :left;
        
        list-style:none;
        display:inline-block
        
    }
    
    .searchInput_input{
        float:left;
        padding-left:0;
        width:75%;
        height:40px;
        border:2px solid #E31E18
    }
    .searchInput_input input{
        width:100%;
        height:100%
    }
    .searchInput_a{
        width:20%;
        height:44px;
        line-height:44px;
        text-align:center;
        margin-left:0;
        float:left;
        background-color:#E31E18;
        color:white
    }

    
   .bottom_title{
       
       width:80%;
       height:50px;
       
       margin-left:20%;
       margin-top:77px;
   }
   .bottom_title ul{
       
       width:100%;
       height:50px;
       padding:0;
       margin:0;
       display:inline-block;
   }
   
    .bottom_title_p{
        width:auto;
        margin-top:15px;
        font-size:16px;
        height:30px;
        margin-left:15px;
    }
    
    
    /* .searchInput input{
        float:left;
        padding-left:0;
        width:75%;
        height:40px;
        border:2px solid #E31E18
        
    }
    .searchInput a{
        width:20%;
        height:40px;
        line-height:40px;
        float:left;
        background-color:#E31E18;
        color:white
    } */

    
    
    .shoppingcart
    {
        float:left;
        width:20%;
        height:50px;
        margin-top:10px;
        margin-left:0;
        padding-left:0
        
    }
    .shoppingcart div a{
        float :left;
        margin-left:0;
        padding-left:0;
        
        width:100px;
        height:30px;
        line-height:30px;
        border:1px solid #E31E18
    }
    
</style>