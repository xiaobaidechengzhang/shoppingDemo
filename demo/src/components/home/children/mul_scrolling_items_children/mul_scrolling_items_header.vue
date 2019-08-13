<<template>
   
    <div class="header" id="header" v-bind:class="{'isFixed':headerFixed == true}">
        <button class="header_col" v-for="(item,index) in [1,1,1,1]"
                     @click="changeMain(index)"
                    v-bind:class="{'active' : index===activeId }"                    
                    >
            <p>header</p>
            
        </button>
    </div>

</template>

<<script>

    
export default {
    data(){
        return{
            activeId:0,
            headerFixed:false
        }
    },
    
    created() {
        
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        changeMain(id){
            this.activeId=id;
            this.$emit('changemainurl',id)
        },
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            /* var offsetTop = document.querySelector('#header').offsetTop */
            if (scrollTop > 500) {
                this.headerFixed = true
            } else {
                this.headerFixed = false

            }
        }
    },
}
</script>

<style>
    .header{
        
        
        

    }
    .header_col{
        cursor:pointer;
        width:24.9%;
        border:0.1px solid red;
        text-align:center;
        float:left
    }
    .header_col:hover{
        background-color:gray;
        color:white;
    }
    .header_col.active{
        background-color:blue
    }
    .isFixed{
            position:fixed;
            z-index:1;
            width:100%;
            top:0
        }
    
</style>
