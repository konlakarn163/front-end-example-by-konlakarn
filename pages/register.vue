<template>
    <div class="container-register">
        <div class="wrapper" @submit.prevent="register">
            <div class="title-register">
                Register
            </div>
            <div class="wrapper-register">
                <input type="text" placeholder="username" v-model="username">
                <input type="email" placeholder="email" v-model="email">
                <input type="text" placeholder="name" v-model="name">
            </div>
            <div class="btn-register">
                <button @click="register">
                    Register
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseUrl from '@/baseUrl/baseUrl'
export default {
    layout : 'navBarLayout',
    data(){
        return{
            user:[],
            username:'',
            email:'',
            name:''
        }
    },
    methods:{
        register(){
            axios.post(`${baseUrl}/users`,{
                username : this.username,
                email : this.email,
                name : this.name
            }).then(response => {
                this.user = response.data
                this.$router.push('/post')
                console.log(this.user)
                alert('API จำกัดการเพิ่มข้อมูล ไม่สามารถสมัครสมาชิกได้')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';

.container-register{
    margin: 5% auto;
    .wrapper{
        background: #1c262f;
        width: 40%;
        margin: 0 auto;
        margin-top: 20px;
        padding: 20px 20px 10px 20px;
        border-radius: 4px;
        .title-register{
            color: $white;
            font-weight: bold;
            font-size: 36px;
            text-align: center;
        }
        .wrapper-register{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 20px 0 20px;
            input{
                margin-bottom: 10px;
                padding: 4px;
                outline: none;
                width: 60%;
            }
        }
        .btn-register{
            button{
                display: block;
                margin: 0 auto;
                border: none;
                width: 60px;
                border-radius: 4px;
                background: $success;
                outline: none;
                cursor: pointer;
                color: $white;
                padding: 4px;
                &:hover{
                    background: $success-shade;
                    border-color: $success-shade;
                }
            }
        }
    }
}
</style>


