<template>
    <div class="container-create">
        <div class="title-create">
            Create Post
        </div>
        <div class="wrapper-create" @submit.prevent="createPost" v-if="checkLogin == null?'':'disabled'">
            <div class="create-title">
                <input type="text" placeholder="Title" v-model="title">
            </div>
            <div class="create-body">
                <textarea name="body" id="body" placeholder="Post Detail" v-model="body"/>
            </div>
            <div class="btn-create-cancel">
                <nuxt-link to="/post" class="btn cancel">
                    Cancel
                </nuxt-link>
                <button class="btn submit" type="submit" @click="createPost">
                    Submit
                </button>
            </div>
        </div>
        <div class="wrapper-empty" v-if="checkLogin != null?'':'disabled'">
            Please login before create post.
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import baseUrl from '@/baseUrl/baseUrl';
export default {
     layout : 'navBarLayout',
     data(){
         return{
             post:[],
             title:'',
             body:''
         }
     },
     methods:{
         createPost(){
             axios.post(`${baseUrl}/posts`,
             {
                title : this.title,
                body : this.body
             }).then(response => {
                 this.post = response.data
                 this.$router.push('/post')
                 alert('Create Post Success!')
             })
         }
     },
     computed:{
        checkLogin() {
            return this.$store.state.loginStore.statusLogin
        },
    },
}
</script>
<style lang="scss">
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';
@import '@/assets/scss/responsive.scss';

.container-create{
    .title-create{
            height: 30px;
            background-image: linear-gradient(to right, $st-color, $rd-color);
            padding: 5px 10px;
            color: $white;
            font-weight: bold;
            font-size: 18px;
            display: flex;
            align-items: center;
        }
    .wrapper-create{
        background: $background-color;
        padding: 10px;
        margin-top: 10px;
        .create-title{
            margin-bottom: 10px;
            input{
                width: 30%;
                padding: 5px;
                color: $text-colorB;
                outline: none;
                @include respond-to($phone){
                    width: auto;
                }
            }
        }
        .create-body{
            margin: 0 auto;
            display: flex;
            textarea{
                padding: 5px;
                color: $text-colorB;
                outline: none;
                min-height: 200px;
                width: 100%;
                resize: none;
            }

        }
        .btn-create-cancel{
            display: flex;
            justify-content: center;
            margin: 10px 0 0 0;
            .btn{
                color: $white;
                padding: 4px;
                border-radius: 4px;
                width: 60px;
            }
            .cancel{
                text-decoration: none;
                background: $danger;
                text-align: center;
                margin-right: 40px;
                &:hover{
                    background: $danger-shade;
                    border-color: $danger-shade;
                }
            }
            .submit{
                border: none;
                background: $success;
                cursor: pointer;
                &:hover{
                    background: $success-shade;
                    border-color: $success-shade;
                }
            }
        }
    }
    .wrapper-empty{
        background: $background-color;
        padding: 10px;
        margin-top: 10px;
        font-weight: bold;
        font-size: 28px;
        text-align: center;
        color:$text-colorA;
    }
}
</style>


