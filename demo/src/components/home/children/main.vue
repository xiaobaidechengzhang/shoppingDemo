<<template>
    <div>
        <div class="main">
            <LeftSlide class="main_left"></LeftSlide>
            <ScrollImages class="main_middle"></ScrollImages>
            <RightSlide class="main_right"></RightSlide>
        </div>
    </div>
</template>

<<script>

import LeftSlide from './main_children/left_slide_lists'
import ScrollImages from './main_children/scroll_images'
import RightSlide from './main_children/right_slide'
export default {
    components:{
        LeftSlide,
        ScrollImages,
        RightSlide
    }
}
</script>
<style>

    .main{
        padding-top:2px;
        
    }
    .main_left{
        width:20%;
        float:left
    }
    .main_middle{
        width:60%;
        float:left
    }
    .main_right{
        width:20%;
        float:left
    }
</style>