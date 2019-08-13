<<template>
    <div>
        <div class="right_slide">
            <ul>
                <li class='right_slide_li' @mouseover="changeShow(1)"
                            v-bind:class="{'active' :activeIndex === 1 }"><p>登录</p></li>
                <li class='right_slide_li'@mouseover=changeShow(2)
                            v-bind:class="{'active' :activeIndex === 2 }"><p>注册</p></li>
            </ul>
            <keep-alive>
                <Huafei class="huafei" v-show='isShow'></Huafei>
            </keep-alive>
            <keep-alive>
                <News class='news' v-show='!isShow'></News>
            </keep-alive>
        </div>
    </div>
</template>



<script>

    import Huafei from './right_slide_children/huafei.vue'
    import News from './right_slide_children/news.vue'

    export default{
        name:"RightSlide",
        data(){
            return{
                isShow:true,
                activeIndex:1
            }
        },
        components:{
            Huafei,
            News
        },
        methods: {
            changeShow(id){
                if(id === 1){
                    this.isShow=true,
                    this.activeIndex =1
                }
                else{
                    this.isShow=false,
                    this.activeIndex = 2
                }
            }
        },
    }
</script>

<style>
    .right_slide{
        border:1px solid gray;
        width:100%;
        height:300px;
        
    }
    .right_slide ul{
        padding-left:0;
        margin-left:0px;
        margin-top:0px;
        margin-bottom:5px;
    }
    .right_slide_li{
        width:49.5%;
        height:40px;
        text-align:center;
        padding:0;
        margin:0;
        float:left;
        
        border:0.2px solid gray
    }
    .right_slide_li.active{
        border-bottom:3px solid blue
    }
    .right_slide_li a{
        height:50px;
    }
    
    .huafei{
        width:100%;
        height:240px;
        padding-top:20px;
        
    }
    .news{
        width:100%;
        height:240px;
        padding-top:12px;
    }
</style>