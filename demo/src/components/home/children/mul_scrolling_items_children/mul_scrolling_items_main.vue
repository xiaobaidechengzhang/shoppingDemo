<<template>
    <div class="main" >
        
        <div class='block_img' v-for="image in imageurl.url">
            <img :src='image'>
        </div>
        
        
        
    </div>
</template>

<<script>
export default {
    data(){
        return{
            count:0,
            
        }
    },
    props:{
        imageurl:{
            url:Array
        }
    },
    methods: {
        scroll(){
            window.onscroll=()=>{
                let bottomofwindow=document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 10
                if(bottomofwindow  ){
                    
                    this.imageurl.url.push('https://img01.sogoucdn.com/app/a/100520024/cd661d2474eadf2b6c1b4c8aef0b8333',
                                            'https://img01.sogoucdn.com/app/a/100520024/68dde786bceb806d12a454f9e9a0acc4',
                                            'https://img02.sogoucdn.com/app/a/100520024/782a6b298d1510f060b36cb3883a6c6b',
                                            'https://img03.sogoucdn.com/app/a/100520024/e7fb3b22171d56ab3fb4a30598268a5c')
                }
                
            }
        },
        
    },
    created() {
        console.log("created");
        
    },
    
    mounted() {
        console.log("mounted");
        
        if(this.count<5){this.scroll();}
        
 
    },
    updated() {
        console.log("update");
        
        
    },
    destroyed() {
        console.log('destroy')
    },
}
</script>

<style>
    
    .block_img{
        float:left;
        margin:2px;
        width:24%;
        
    }
    .block_img img{
        width:100%;
        height:250px;
    }
    .block_img:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);
        z-index:1
    }
</style>