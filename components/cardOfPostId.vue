<template>
    <div class="wrapper-card-id">
        <div class="wrapper-post" >
            <div class="title-post">
                {{post.title}}
            </div>
            <div class="body">
               {{post.body}}
            </div>
        </div>

        <h2>
            <i class="material-icons">
                forum
            </i>
            <span>Comments</span>
        </h2> 
        <div class="wrapper-comment" v-for="(each,index) in comment" :key="index">
            {{each.name}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseUrl from '@/baseUrl/baseUrl'
export default {
    data(){
        return{
            post:'',
            comment:'',
        }
    },
    methods:{
        getPostById(){
            axios.get(`${baseUrl}/posts/${this.$route.params.idPost}`).then(response =>{
                this.post = response.data
            })
        },
        getCommentByPostId(){
            axios.get(`${baseUrl}/posts/${this.$route.params.idPost}/comments`).then(response =>{
                this.comment = response.data
            })
        }
    },
    mounted(){
        this.getPostById()
        this.getCommentByPostId()
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
.wrapper-card-id{
    .wrapper-post{
        background: $background-color;
        padding: 10px;
        margin-bottom: 20px;    
        .title-post{
            color: $st-color;
            font-size: 34px;
            margin-bottom: 20px;
        }
        .body{
            color: $text-colorC;
            font-size: 18px;
        }
    }
    h2{
        font-size: 20px;
        color: $text-colorC;
        display: flex;
        width: 100%;
        align-items: center;
        span{
            padding:0 10px;
        }
    }
    hr{
        border: 0;
        height: 2px;
        background: $background-color;
        margin: 5px 0;
    }
}
</style>
