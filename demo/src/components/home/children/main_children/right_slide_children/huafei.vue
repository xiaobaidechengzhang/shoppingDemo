<<template>
    <div>
        <div class="huafei">
            <label><b>UserName</b></bold></label>
            <input type='text' placeholder='用户名'>
            
            <label><b>Password</b></label>
            <input type='text' placeholder='密码'>
            
            <button class='loginButton'>登录</button>
        </div>
    </div>
</template>

<<script>
export default {
    name:'Huafei',
}
</script>

<style>

    .huafei{
        width:100%;
        height:240px;
        

    }

    .huafei input{
        width:98%;
        height:40px;
        margin-top:5px;

    }
    
    .loginButton{
        border:none;
        width:100%;
        padding:5px;
        height:40px;
    }
    .loginButton:hover{
        opacity:0.8
    }
</style>