<<template>
    <div>
        <div id="modal" class="modal">
            <form class="modalContent">
                <div class='imgContainer'>
                    <span class="close" @click="closeModal">
                        &times;
                    </span>
                <img class="loginImage" src='https://static.runoob.com/images/mix/img_avatar.png'>
                </div>
                <div class="container">
                    <label><b>UserName</b></label>
                    <input type="text"  placeholder="输入姓名" required>

                    <label><b>Password</b></label>
                    <input placeholder="输入密码" type="text" required>

                    <button class="loginButton" type='submit'>登录</button>
                </div>
            </form>
        </div>
    </div>
</template>
<<script>
export default {
    name:'Login',
    methods: {
        closeModal(){
            this.$emit("close")
        }
    },
}
</script>

<style>
    .modal{
        width:40%;
        height:100%;
        margin:auto;
        background-color:white
    }
    .modal_content{
        display:block
    }
    .imgContainer{
        margin:24px 0 12px 0;
        position:relative;
        text-align:center;
    }
    
    .close{
       position:absolute;
       right:25px;
       top:0;
       font-size:35px;
       
       font-weight:bold;

    }
    .close:hover{
        color:red
    }
    .loginImage{
        width:30%;
        border-radius:50%;
    }

    .container{
        display:block;
        padding:16px;
    }
    .container input{
        margin:10px 0 10px 0;
        width:100%;
        height:30px;
    }
    .loginButton{
        border:none;
        width:100%;
        margin-top:16px;
        padding:10px;
        background-color:green;
        color :white
    }
    .loginButton:hover{
        opacity:0.8
    }
</style>