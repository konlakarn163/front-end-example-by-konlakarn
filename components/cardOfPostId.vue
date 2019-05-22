<template>
    <div class="wrapper-card-id">
        <div class="wrapper-post" >
            <div class="title-post">
                {{post.title}}
            </div>
            <div class="body">
               {{post.body}}
            </div>
            <label @click="deletePost">delete</label>
            <div class="Commentator"  v-for="(user,index) in user" :key='index'>
                <div class="Commentator-email" v-if="$route.query.userId == user.id">
                    <i class="material-icons">
                        portrait
                    </i>
                    <p class="email">
                        {{user.email}}
                    </p>
                </div>
            </div>
        </div>

        <h2>
            <i class="material-icons">
                forum
            </i>
            <span>Comments</span>
        </h2> 
        <div class="wrapper-comment" v-for="(each,index) in comment" :key="index">
            <div class="body">
                <p class="number-comment">
                    Comment {{index = index + 1}}
                </p>
                <p class="text-body">
                    {{each.body}}
                </p>
            </div>
            <div class="Commentator" >
                <i class="material-icons">
                    portrait
                </i>
                <p class="email">
                    {{each.email}}
                </p>
                delete
            </div>
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
            user: '',
        }
    },
    methods:{
        getPostById(){
            axios.get(`${baseUrl}/posts/${this.$route.params.idPost}`).then(response =>{
                this.post = response.data
            })
        },
        getCommentByPostId(){
            axios.get(`${baseUrl}/comments?postId=${this.$route.params.idPost}`).then(response =>{
                this.comment = response.data
            })
        },
        getEmailByuserId(){
            axios.get(`${baseUrl}/users`).then(response=>{
                this.user = response.data
            })
        },
        deletePost(){
            axios.delete(`${baseUrl}/post/${this.$route.params.idPost}`).then(response =>{
                this.$router.push('/post')
                alert('Delete Success')
            })
        }
    },
    mounted(){
        this.getPostById()
        this.getCommentByPostId()
        this.getEmailByuserId()
        // this.getUserByPostId()
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
        }
        .body{
            color: $text-colorC;
            font-size: 18px;
            margin: 20px 0;
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
    .wrapper-comment{
        background: $background-color;
        padding: 10px;
        margin-bottom: 20px;
        p{
                margin: 0;
            }
        .body{
            .number-comment{
                color: $text-colorA;
            }
            .text-body{
                margin: 20px 0;
                color: $text-colorB;
            }
        } 
        
    }
    .Commentator{
            display: flex;
            align-items: center;
            color: $text-colorC;
            .Commentator-email{
                display: flex;
                align-items: center;
                
            }
            .email{
                    margin-left: 10px;
                    font-size: 12px;
                    letter-spacing: 1px;
                    color: $st-color;
                }
        }

}
</style>
