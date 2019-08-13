<<template>
    <div class="slide_lists">
        
        <div class="dropdown" v-for="i in [1,1,1,1,1,1]">
            <!--左侧栏-->
            <div class="dropdown_left" v-for="(i,index) in [1,1,1]"> 
                <span><router-link to="/itemList">手机 </router-link></span>  
                <span v-if="index-([1,1,1].length-1)"> / </span> 
            </div>
            <!--左侧栏hover-->
            <div class="dropdown_content">
                <div class="content">
                    <div  v-for="i in [1,1,1,1,1]">
                        <div class="content_header">玩3C</div>
                        
                    </div>
                    <div class="content_main" v-for="i in [1,1,1,1,1]">
                        <div class="content_main_content" >
                            <div class="main_content_left">
                                <router-link to="/itemList">频道></router-link>
                            </div>
                            <div class="main_content_right" >
                                <div class="main_content_right_p" v-for="i in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]">
                                    <router-link to="/itemList"  >苹果</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
               
                
                
                
                
            </div>
        </div>
        
        
    </div>
    <!--轮播图-->
</template>

<style>

    .slide_lists{
        
        width:20%;
        height:300px;
    }
    
    .dropdown{
        position:relative;
        display:block;
        width:100%;
        height:50px;
        vertical-align:center;
        border:0.2px solid gray;
        
    }

    .dropdown_left{
        
    }

    span{
       
       padding-top:15px;
       padding-left:5px;
        float:left;
        display:inline;
        
    }

    
    a{
        text-decoration:none
    }
    a:hover{
        color : red;
        text-decoration:underline
    }
    
    
    .dropdown_content{
        display:none;
        position:absolute;
        background-color:white;
        left:101%;
        width:600px;
        height:400px;
        border:0.1px solid gray;
        border-left:0;
        padding-left:0px;
        top:-2px;
        z-index:1;
        
    }
    .dropdown:hover{
        border-right:0
    }
    .dropdown:hover .dropdown_content{
        display:block
    }

    .content{
        width:600px;
        height:400px;
        border:2px solid gray
    }

    .content_header{
        display:inline;
        float:left;
        background-color:black;
        font-weight:bold;
        border:1px solid gray;
        color:white;
        width:80px;
        
        margin-top:10px;
        margin-left:20px;
        text-align:center;

    }

    .content_main{
        margin-top:50px;
        width:600px;
        height:auto;
        margin-bottom:10px;
       
    }
    
    .content_main_content{
        height:auto;
        width:100%;
        border-bottom:0.2px solid gray
        
    }
    .main_content_left{
        margin-right:5px;
        margin-top:5px;
        text-align:center;
        float:left;
        width:100px;
        height:100%;
        font-weight:bold
        
    }

    .main_content_right{
        position:absolute;
        left:100px;
        margin-left:5px;
        margin-top:5px;
        
        
       
    }

    .main_content_right_p{
        display:inline-block;
        margin-left:10px;
        
    }
    

</style>