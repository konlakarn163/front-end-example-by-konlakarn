<template>
    <div class="wrapper-card-id">
        <div class="wrapper-post" v-if="edit == true ? '':'false'">
            <div class="btn" >
                <div class="btn-edit" @click="isEdit" >
                    <i class="material-icons edit">  
                            edit
                    </i>
                    <div class="edit">
                        Edit
                    </div>
                </div>
                <div @click="itShowModal">
                    <i class="material-icons">  
                        delete
                    </i>
                    <label class="delete">Delete</label> 
                </div>
            </div>
            <div class="title-post">
                {{post.title}}
            </div>
            <div class="body">
                {{post.body}}
            </div>
            <div class="Commentator"  v-for="(user,index) in user" :key='index'>
                <div class="Commentator-email" v-if="$route.query.userId == user.id">
                    <i class="material-icons">
                        portrait
                    </i>
                    <p class="email">
                        {{user.username}}
                    </p>
                </div>
            </div>
        </div>
        <div class="wrapper-post" v-if="edit">
            <div class="title-post" >
                <input 
                    type="text"  
                    v-model="title"
                >
            </div>
            <div class="body">
                <textarea 
                    name="body" 
                    id="body" 
                    v-model="body"
                >
                </textarea>
            </div>
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
            <div class="btn-success" @click="editSuccess">
                <button @click="isEditPost">
                    Save
                </button>
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
                    {{each.commentbody}}
                </p>
            </div>
        </div>
        <div class="input-comment" @submit.prevent="Comment">
            <div class="comment">
                <textarea 
                    name="comment" 
                    id="comment" 
                    placeholder="Comment Here"
                    v-model="commentbody"
                />
                <button @click="Comment" >
                    Send
                </button>
            </div>
        </div>
        <div class="showModal" v-if="modal" @click="itCloseModal">
            <div class="detail">
                <i class="material-icons">
                        add_circle_outline
                </i>
                <label>Are you sure to delete this post?</label>
                <div class="btn">
                    <button class="close" @click="itCloseModal">
                        Cancel
                    </button>
                    <button class="delete" @click="deletePost">
                        Delete
                    </button>
                </div>
            </div>
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
            post:'',
            userId: '',
            comment:'',
            user: '',
            modal: false,
            edit: false,
            editPost: [],
            createComment: [],
            body: '',
            title: '',
            commentbody:'',
            postId: null,
            invisible: true
        }
    },
    methods:{
        isEditPost(){
            const id = parseInt(this.$route.params.idPost)
            axios.put(`${baseUrl}/posts/${id}`,
                {
                    title : this.title,
                    body : this.body,
                    id : this.id,
                    userId : this.userId
                }).then(response=>{
                    this.editPost = response.data
                    console.log(response.data)
                    this.$router.push(`/post/${this.$route.params.idPost}`)
                    setInterval(this.getPostById, 0);
                })
        },
        getPostById(){
            axios.get(`${baseUrl}/posts/${this.$route.params.idPost}`).then(response =>{
                this.post = response.data
                this.title = response.data.title
                this.body = response.data.body
                this.invisible = false
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
            axios.delete(`${baseUrl}/posts/${this.$route.params.idPost}`).then(response =>{
                this.$router.push('/post')
            })
        },
        Comment(){
            const postId = parseInt(this.$route.params.idPost)
            axios.post(`${baseUrl}/comments`,
            {
                commentbody : this.commentbody,
                postId : postId
            }).then(response =>{
                this.createComment = response.data
                this.$router.push(`/post/${this.$route.params.idPost}`)
                this.commentbody = null
                setInterval(this.getCommentByPostId, 0);
            })
        },
        itShowModal(){
            this.modal = true
        },
        itCloseModal(){
            this.modal = false
        },
        isEdit(){
            if(this.edit == false){
                this.edit = true
            }
        },
        editSuccess(){
            if(this.edit == true){
                this.edit = false
            }
        }
    },
    mounted(){
        this.getPostById()
        this.getCommentByPostId()
        this.getEmailByuserId()
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/responsive.scss';
.wrapper-card-id{
    .wrapper-post{
        background: $background-color;
        padding: 20px;
        margin-bottom: 20px; 
        .btn-success{
            margin-bottom: 5px;
            display: flex;
            justify-content: flex-end;
            button{
                cursor: pointer;
                padding: 4px 10px;
                border-radius: 4px;
                color: $white;
                border: none;
                background: $success;
            }
        }
        .btn{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 12px;
            letter-spacing: 0.7px;
            @include respond-to($phone){
                font-size: 10px;
                margin-bottom: 10px;
            }
            .btn-edit{
                margin-right: 10px;
                cursor: pointer;
            }
            .delete{
                color: $danger;
                cursor: pointer;
            }
            div{
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .material-icons{
                font-size: 16px !important;
                margin-right: 3px !important;
                color: $danger;
                cursor: pointer;
            }
            .edit{
                color: $success !important;
            }
        }   
        .title-post{
            color: $st-color;
            font-size: 24px;
            display: block;
            width: 99%;
            @include respond-to($phone){
                font-size: 14px
            }
            input{
                background: $background-color-in-wrap;
                border: 0;
                color: $st-color;
                outline-color: $st-color;
                padding: 4px 10px;
                font-size: 18px;
                width: 70%;
                margin-top: 10px;
                @include respond-to($phone){
                font-size: 14px
                }
            }
        }
        .body{
            color: $text-colorC;
            font-size: 16px;
            margin: 20px 0;
            width: 99%;
            @include respond-to($phone){
                font-size: 12px
            }
            textarea{
                width: 100%;
                background: $background-color-in-wrap;
                border: none;
                outline-color: $st-color;
                height: 100px;;
                color: $text-colorC;
                padding: 5px;
                resize: none;
                @include respond-to($phone){
                    font-size: 12px
                }
            }
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
    .input-comment{
        margin-bottom: 20px;
        .comment{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            background: #1c262f;
            padding: 20px 20px 0 20px;
            textarea{
                width: 98%;
                padding: 10px;
                font-size: 16px;
                height: 100px;
                outline: none;
                resize: none;
            }
            button{
                border: none;
                padding: 4px 10px;
                width: 60px;
                border-radius: 4px; 
                cursor: pointer;
                display: block;
                right: 0;
                outline: none;
                background: $success;
                color: $white;
                margin: 10px 0;
            }
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
                @include respond-to($phone){
                font-size: 10px;
                }
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
                    @include respond-to($phone){
                        font-size: 10px
                    }
                }
        }
    .showModal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        background: rgba(0,0,0,0.6);
        .detail{
            background: $white;
            width: 400px;
            height: 180px;
            border-radius: 4px;
            padding: 20px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            box-shadow: 2px 2px 12px $text-colorA;
            .material-icons{
                font-size: 60px;
                transform: rotate(45deg);
                color: $danger;
            }
            label{
                text-align: center;
                margin: 20px 0;
                font-size: 22px;
            }
            .btn{
                display: flex;
                justify-content: space-around;
                width: 80%;
                .close{
                    border: none;
                    padding: 8px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    color: $white;
                    background: $text-colorC;
                    font-size: 16px;
                }
                .delete{
                    border: none;
                    padding: 8px 20px;
                    border-radius: 4px;
                    background: $danger;
                    cursor: pointer;
                    color: $white;
                    font-size: 16px;
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
