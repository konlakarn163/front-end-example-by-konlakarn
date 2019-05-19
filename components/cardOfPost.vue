<template>
    <div class="wrapper-nuxtlink" >
        <div class="wrapper-post" v-for="(each,index) in posts" :key="index" >
            <nuxt-link :to="`/post/${each.id}`" class="link-post">
                <div class="post">
                    <div class="title">
                        <p>{{each.title}}</p> 
                    </div>
                    <hr>
                    <div class="body">
                        <p>{{each.body}}</p> 
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseUrl from '@/baseUrl/baseUrl'

export default {
    data(){
        return{
            posts:[],
        }
    },
    methods:{
        getPost(){
            axios.get(`${baseUrl}/posts`).then(response =>{
                this.posts = response.data
            })
        }
    },
    mounted(){
        this.getPost()
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';
.wrapper-nuxtlink{
    .wrapper-post{
        margin: 10px 0;
        .link-post{
            text-decoration: none;
            .post{
                background: $background-color;
                padding: 15px 15px;
                &:hover{
                    box-shadow: 0px 0px 4px $text-colorB;
                }
                 p{
                        overflow: hidden;
                        height: 1em;
                        margin: 0;
                        text-overflow: ellipsis;
                }
                .title{
                    font-size: 20px;
                    color:$st-color;
                    p{
                        overflow: hidden;
                        height: 1em;
                        margin: 0 0 10px 0;
                        text-overflow: ellipsis;
                    }
                }
                hr { 
                    display: block; 
                    height: 1px;
                    border: 0; 
                    border-top: 1px solid $text-colorB;
                    margin: 5px 0;
                }
                .body{
                    color: $text-colorB;
                    p{
                        overflow: hidden;
                        height: 1em;
                        margin: 0;
                        text-overflow: ellipsis;
                    }
                }
    
            }
        }
    }
}
</style>

