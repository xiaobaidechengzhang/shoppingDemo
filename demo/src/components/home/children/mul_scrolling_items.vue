<<template>
    <div>
        <itemsHeader v-on:changemainurl='change'
                        class="header"></itemsHeader>
        <itemMain :imageurl=images[itemId]
                    class="main"></itemMain>
        
    </div>
</template>

<<script>

import itemsHeader from './mul_scrolling_items_children/mul_scrolling_items_header'
import itemMain from './mul_scrolling_items_children/mul_scrolling_items_main'
export default {
    data(){
        return{
            images:[
                {url:['https://img01.sogoucdn.com/app/a/100520024/cd661d2474eadf2b6c1b4c8aef0b8333',
                                            'https://img01.sogoucdn.com/app/a/100520024/68dde786bceb806d12a454f9e9a0acc4',
                                            'https://img02.sogoucdn.com/app/a/100520024/782a6b298d1510f060b36cb3883a6c6b',
                                            'https://img03.sogoucdn.com/app/a/100520024/e7fb3b22171d56ab3fb4a30598268a5c',
                                            'https://img02.sogoucdn.com/app/a/100520024/782a6b298d1510f060b36cb3883a6c6b']},
                 {url:['https://img03.sogoucdn.com/app/a/100520021/3f21e8ea74ae71212b197ccaba38a81d',
                       'https://img04.sogoucdn.com/app/a/100520021/3d23c68fbbcf51e9e297f505e33cdf5e',
                       'https://img01.sogoucdn.com/app/a/100520021/239aae0a42196a3ad7f13a87b02eba51']},
                {url:['https://img01.sogoucdn.com/app/a/100520024/cd661d2474eadf2b6c1b4c8aef0b8333',
                                            'https://img01.sogoucdn.com/app/a/100520024/68dde786bceb806d12a454f9e9a0acc4',
                                            'https://img02.sogoucdn.com/app/a/100520024/782a6b298d1510f060b36cb3883a6c6b',
                                            'https://img03.sogoucdn.com/app/a/100520024/e7fb3b22171d56ab3fb4a30598268a5c',
                                            'https://img02.sogoucdn.com/app/a/100520024/782a6b298d1510f060b36cb3883a6c6b']},
                {url:['https://img03.sogoucdn.com/app/a/100520021/3f21e8ea74ae71212b197ccaba38a81d',
                       'https://img04.sogoucdn.com/app/a/100520021/3d23c68fbbcf51e9e297f505e33cdf5e',
                       'https://img01.sogoucdn.com/app/a/100520021/239aae0a42196a3ad7f13a87b02eba51']},
            ],
        itemId:0
        
        }
    },
    components:{
        itemsHeader,
        itemMain
    },
    methods: {
        change(id){
            console.log('change');
            this.itemId=id
        }
    },
}
</script>

<style>
    .header{
        width:100%
    }
</style>