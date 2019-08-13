<<template>
    <div >
        <Login class="login" id="login"
                @close='closeLogin'></Login>
        <div style="background-color :#E3E4E5;height:20px">
            <router-link to="/itemList/page/1">homeToItemList</router-link>
            <button @click="showModal" style="cursor:pointer">登录</button>
            
        </div>
        
        

        <div>
            <LogoAndSearch class="logoAndSearch"></LogoAndSearch>
            
        </div>
        <div>
            <Main class="main"></Main>
        </div>
        <div>
            <Multi_Scrolling_images class="multi_scroll_images"></Multi_Scrolling_images>
        </div>
    </div>
    
</template>

<<script>

import Login from '../LoginOrRegister/Login'
import LogoAndSearch from './children/logoAndSearch'
import Main from './children/main'
import Multi_Scrolling_images from './children/mul_scrolling_items'


export default {
    name:'Home',
    components:{
        Login,
        LogoAndSearch,
        Main,
        Multi_Scrolling_images
    },
    data(){
        return{
            isShowModal:false
        }
    },
    methods: {
        showModal(){
            document.getElementById("login").style.display='block'
        },
        closeLogin(){
            document.getElementById("login").style.display='none'
        }
    },
}
</script>

<style>

    
    .multi_scroll_images{
        margin-top:10px;
    }
    .login{
        
        display:none;
        z-index:1;
        position:fixed;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.4);
        overflow:auto;
        
    }
    
    .logoAndSearch{
        border-bottom:2px solid gray
    }
</style>