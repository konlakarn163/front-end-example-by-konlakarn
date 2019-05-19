<template>
    <div class="container-posts">
        <div class="wrapper-post">
            <div class="title-topic">
                <p>Topic</p>
            </div>
            <div class="wrapper-card-post">
                    <cardOfPost/>
            </div>
        </div>
    </div>
</template>

<script>
import cardOfPost from '@/components/cardOfPost'
import axios from 'axios'

export default {
    layout : 'navBarLayout',
    components:{
        cardOfPost,
    },
    data(){
        return{
            post: [],
            receive: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';

.container-posts{

    .wrapper-post{
        background:$background-color-in-wrap ;
        .title-topic{
            height: 30px;
            background-image: linear-gradient(to right, $st-color, $rd-color);
            padding: 5px 10px;
            color: $white;
            font-weight: bold;
            font-size: 18px;
            display: flex;
            align-items: center;
        }
        .wrapper-card-post{
        }
    }
}
</style>


