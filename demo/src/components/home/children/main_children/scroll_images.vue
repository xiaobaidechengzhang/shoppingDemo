<template>
    <div class="sliders">
        <div class="slide_image" v-for='(item,index) in imagelist'
                v-show="index === nowindex" :key="index"
                @mouseover="stopScroll()" @mouseout="reScroll()">
                <img :src="item.url"class="img_scroll">
        </div>
        <ul class="dot_image" >
                <li v-for="(i,index) in imagelist" :key="index" @click="dot_choose_image(index)">dot</li>
                
        </ul>
        <div class="pre_next_image">
            <img class="pre" @click="preimage" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1284708439,1639100774&fm=26&gp=0.jpg">
            <img class="next" @click="nextimage" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1027779787,3180268914&fm=15&gp=0.jpg">
        </div>
       
    </div>
</template>

<script>

    export default{
        name:"scrollImages",
        data(){
            return{
                nowindex:0,
                imagelist:[
                    {id:0,url:"https://img14.360buyimg.com/pop/s1180x940_jfs/t1/80553/27/6521/61419/5d4a497cE0beeec11/f0b98a79a7250a41.jpg.webp"},
                    {id:1 ,url :"https://img14.360buyimg.com/pop/s1180x940_jfs/t1/72532/2/6659/100249/5d4ce7c0Ecafd257c/ccb76ff80d343b55.jpg.webp"},
                    {id:2,url :"https://img11.360buyimg.com/pop/s1180x940_jfs/t1/54012/38/7135/89299/5d4d436cE59a008c1/6d16c58ab3248369.jpg.webp"}
                ],
                isScrolling:true,
                timeInterval:2500
            }
        },
        methods: {
            beginScroll(){
                
                    if(this.timer){
                        window.clearInterval(this.timer);
                        this.timer=null
                    }
                    this.timer=window.setInterval(() => {
                        this.nowindex++;
                        if(this.nowindex === this.imagelist.length){
                            this.nowindex=0
                        }
                    }, this.timeInterval);
                
            },
            stopScroll(){
                window.clearInterval(this.timer);
                this.timer=null
            },
            reScroll(){
                this.beginScroll()
            },

            preimage(){
                
                if(this.nowindex >0)
                {
                    this.nowindex-=1
                }else{
                    this.nowindex=this.imagelist.length-1
                }
                window.setInterval(() => {
                    this.isScrolling=true;
                }, this.timeInterval);
            },
            nextimage(){
                
                if(this.nowindex <this.imagelist.length-1)
                {
                    this.nowindex+=1
                }else{
                    this.nowindex=0
                }
                
            },
            dot_choose_image(index){
                
                this.nowindex=index;
                

            }
        },
        created() {
            this.beginScroll()
        },
    }
</script>

<style>
    .sliders{
        width:500px;
        height:300px;
        overflow:hidden;
        position:relative;
        border:2px solid gray
    }
    .slide_image{
        width:100%;
        height:100%;
        
    }

    .img_scroll{
        width:100%;
        height:100%
    }
    .dot_image{
        position:absolute;
        left:20px;
        bottom:20px;
        list-style-type:none;
        
        
    }
    li{
        display:inline-block;
        float:left;
        margin-left:5px;
        background-color:white
    }
    .pre_next_image{
        position:absolute;
        width:100%;
        height:50px;
        top:50%;
        
        img{
            display:inline-block;
            
            
            
        }
        
    }

    .pre{
        height:50px;
        float:left;
    }
    .next{
        
       height:50px;
        float:right
    }
    
    
    
    
    
    
</style>