<template>
    <div class="container-login">
        <div class="wrapper">
            <div class="title-login">
                Login
            </div>
            <div class="wrapper-login">
                <input type="text" placeholder="username" v-model="username">
                <input type="password" placeholder="password" v-model="password">
            </div>
            <div class="btn-login">
                <button @click="login">
                    Login
                </button>
                <hr>
                <div class="text-to-register">
                    <span>You dont't have an account?
                        <nuxt-link to="/register" class="btn-register">
                        Register
                    </nuxt-link>
                    here.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    layout : 'navBarLayout',
    data(){
        return{
                username: '',
                password: '',
                checkLogin: false
        }
    },
    methods:{
        login(){
            if(this.username != '' && this.password != ''){
                axios.get('http://localhost:4321/users').then(response =>{
                    if(this.username == response.data.username && this.password == response.data.password){
                        console.log(response.data.username)
                        alert('Success')
                    }
                    else{
                        alert('Username and Password do not match.')
                        console.log(response.data)
                    }
                    // for(let i=0;i<response.data.length;i++){
                    //     if(this.username == response.data[i].username && this.password == response.data[i].password){
                    //         // this.$state.commit('store/statusLogin',response.data)
                    //         console.log(response.data)
                    //         alert('Login success')
                    //     }
                    //     else{
                    //         alert('Username and Password do not match.')
                    //         console.log(response.data)
                    //     }
                    // }
                })
            }
            else{
                alert('Please insert you account!')
            }
        } 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';
@import '@/assets/scss/responsive.scss';
.container-login{
    margin: 5% auto;
    .wrapper{
        background: #1c262f;
        width: 40%;
        margin: 0 auto;
        margin-top: 20px;
        padding: 20px;
        border-radius: 4px;
        @include respond-to($phone){
            width: auto;
        }
        .title-login{
            color: $white;
            font-weight: bold;
            font-size: 36px;
            text-align: center;
            margin-bottom: 20px;
        }
        
        .wrapper-login{
            display: flex;
            flex-direction: column;
            align-items: center;
            input{
                margin-bottom: 10px;
                padding: 4px;
                outline: none;
                width: 60%;
                @include respond-to($phone){
                    width: auto;
                }
            }
        }
        .btn-login{
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
            .text-to-register{
                display: flex;
                justify-content: center;
                @include respond-to($phone){
                    font-size: 12px;
                }
                .btn-register{
                    color: $st-color;
                    display: inline-block;
                }
            }
            hr{
                border: 0;
                height: 2px;
                background: $background-color-in-wrap;
            }
        }

    }
}
</style>


