<template>
    <div class="wrapper-nuxtlink" >
        <div class="wrapper-post" v-for="(post,index) in post" :key="index" >
                <nuxt-link :to="`/post/${post.id}?userId=${post.userId}`" class="link-post" >
                    <div class="post">
                        <div class="title">
                            <p>{{post.title}}</p> 
                        </div>
                        <hr>
                        <div class="body">
                            <p>{{post.body}}</p> 
                        </div>
                    </div>
                </nuxt-link>
        </div>
        <div class="loadingContainer" v-if="invisible">
            <div class="loading" id="itShowLoding"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseUrl from '@/baseUrl/baseUrl'

export default {
    data(){
        return{
            users:[],
            post:[],
            invisible: true
        }
    },
    methods:{
        getPost(){
            axios.get(`${baseUrl}/posts`).then(response =>{
                this.post = response.data
                this.invisible = false
            })
        },
        getUsers(){
            axios.get(`${baseUrl}/users`).then(response =>{
                this.users = response.data
            })
        },
    },
    mounted(){
        this.getPost()
        this.getUsers()
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';
@import '@/assets/scss/responsive.scss';
.wrapper-nuxtlink{
    .wrapper-post{
        margin: 10px 0;
        .link-post{
            text-decoration: none;
            .post{
                background: $background-color;
                padding: 15px 15px;
                margin-bottom: 10px;
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
                        height: 1.3em;
                        margin: 0 0 10px 0;
                        text-overflow: ellipsis;
                        font-size: 18px;
                        @include respond-to($phone){
                            font-size: 12px
                        }
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
                        @include respond-to($phone){
                            font-size: 10px
                        }
                    }
                }
    
            }
        }
    }
}
.loadingContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: rgba(0,0,0,0.9);
    .loading {
        border: 5px solid $primary;
        border-top: 5px solid transparent;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
}
</style>

