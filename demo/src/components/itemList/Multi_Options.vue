<template>
    <div >

        <ul class='item'>
            <li class='item_header'>
                <ul class='header'>
                    <li  v-for="(item , index) in header_arr"
                        v-show="item">
                        <p  class='header_p' @click="closeHeaderP(index)">{{item}}<p v-show='index' class='header_close' @click="closeHeaderP(index)">x</p></p>
                        
                    </li>
                </ul>
                <!-- <ul class="header" v-for="(item,index) in header_arr"
                            v-show='item'>
                    <li class="header_p">{{item}}</li>
                    <li class="header_close"
                            @click='closeHeaderP(index)'
                            v-show="index">x</li>

                </ul> -->
            </li>
            <li class="item_options" v-for="(item,id) in options">
                <ul class="options" v-show="!header_arr[id+1]"
                    >
                    <li class="options_name">{{item.name}} ></li>
                    <li class="options_p" @click='addOptionToHeader(id,index)'
                            v-for='(item_sub,index) in item.option'>{{item_sub}}</li>
                
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

    export default{
        name:'Multi_Options',
        data(){
            return{
                header_arr:['分类>','','','',''],
                options:[
                    {id:1,name:"价格",option:[100,200,300]},
                    {id:2,name:"水果",option:['apple','banana']},
                    {id:3,name:"材质",option:['纯棉','化纤']},
                    {id:4,name:"适用人群",option:['成人','儿童']}
                ],
                
            }
        },
        methods: {
            closeHeaderP(index){
                console.log(index);
                if(index >0){
                    this.header_arr.splice(index,1,'')
                }
                
                
                
            },
            addOptionToHeader(id,index){
                
                    const arr_id=id+1
                this.header_arr.splice(arr_id,1,this.options[id].option[index])
                
                
                
            }
        },

    }
</script>

<style>
    .item{
        list-style:none;
        width:100%;
        border-top:2px solid gray;
        
        
        padding-left:5px;
        margin-left:5px;
        
    }
    .item_options{
        width:100%;
        max-height:auto;

    }
    
    .item_header{
        width:100%;
        height:50px;
        padding-left:0;
        margin-left:0;
        
    }
    
    .header{
       
        margin-left:0;
        padding-left:0;
        list-style:none
   
    }
    .header_p{
        float:left;
        border:1px solid gray;
        cursor:pointer;
        font-size:13px;
        color :gray;
        width:auto;
        height:20px;
        line-height:20px;
        min-width:50px;
        margin-left:0;
        padding-left:0;
        margin-top:15px;
        text-align:center;
    }
    .header_p:hover{
        color : red
    }
    .header_close{
        float:left;
        border:1px solid gray;
        
        margin-right:5px;
        margin-top:15px;
        width:20px;
        height:20px;
        line-height:20px;
        text-align:center;
        color:red
    }
    .header_close:hover{
        background-color:red;
        color:white;
        cursor:pointer
    }
    .options{
        list-style:none;
        padding-left:0;
        width:100%;
        border-bottom:2px solid gray;
        height:50px;
        display:inline-block
        
        
    }
    .options_name{
         height:50px;
        float:left;
        line-height:50px;
        margin-left:10px;
        margin-right:10px;
        font-weight:bold
    }
    .options_p{
        color:gray;
        cursor:pointer;
        height:50px;
        float:left;
        line-height:50px;
        margin-left:10px;
        margin-right:10px;
        
    }
    .options_p:hover{
        color :red
    }
</style>