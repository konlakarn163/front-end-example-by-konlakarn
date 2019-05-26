<template>
    <div class="container-navbar">
        <div class="color-overlay"/>
        <div class="wrapper-nav">
            <div class="title">
                <h1>Example</h1>
                <p>Front-end Delveloper by Konlakarn</p>
            </div>
            <div class="menu-bar">
                <div class="menu-title">
                    <div class="title-nav">
                        <nuxt-link to="/post" class="home btn" >
                            <p>Home</p> 
                        </nuxt-link>
                        <nuxt-link to='/createPost' class="btn-create btn">
                            <p>Create Post</p> 
                        </nuxt-link>
                    </div>
                    <div class="search-bar">
                        <div>
                            <input type="text" placeholder="Search" disabled>
                            <i class="material-icons">
                                search
                            </i>
                        </div>
                        <div class="top">
                            <nuxt-link to="/register" class="register" v-if="checkLogin == null">
                                <span>Register</span>
                            </nuxt-link>
                            <a to="/userInformation" v-if="checkLogin !== null" class="register username">
                                <span class="hi">Hi</span>
                                <span>{{$store.state.loginStore.statusLogin.username}}</span>
                            </a>
                            <nuxt-link to="/login" class="login" v-if="checkLogin== null">
                                <span>Login</span>
                            </nuxt-link>
                                <span v-if="checkLogin !== null" class="login logout" @click="logout">Logout </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        checkLogin() {
            return this.$store.state.loginStore.statusLogin
            console.log('User :',this.$store.state.loginStore.userLogin.username)
        },
    },
    methods:{
        logout() {
            this.$store.commit('loginStore/userLogout')
            this.$router.push('/')
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/responsive.scss';

.container-navbar{
    background: url('/Molecules.jpg') no-repeat;
    height: 240px;
    background-size: cover;
    display: flex;
    position: relative;
    width: 100%;
    .color-overlay {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right,#C11CB5,black);
        opacity: .7;
        position: absolute;
    }
    .wrapper-nav{
        padding: 10px 0 0 0;
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        
        .title{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: $white;
            margin: 30px 0;
            letter-spacing: 1px;
            font-weight: bold;
            text-shadow: 1px 1px 10px $rd-color;
            @include respond-to($phone){
                margin: 15px 0;
            }
            
            h1{
                font-size: 60px;
                margin: 0;
                @include respond-to($phone){
                font-size: 36px;
                }
            }
            p{
                font-size: 18px;
                @include respond-to($phone){
                font-size: 12px;
                }
            }
        }
        .menu-bar{
            width: 100%;
            display: flex;
            margin: 0 auto;
            background: $background-color;
            height: 47px;
            @include respond-to($large-desktop){
                justify-content: flex-end;
                height: auto;
            }
            @include respond-to($phone){
                height: auto;
            }
            
            .menu-title{
                display: flex;
                justify-content: space-between;
                margin: 0 47px;
                background: $background-color-in-wrap;
                border: 1px solid $background-color;
                border-left: none;
                border-right: none;
                width: 100%;
                align-items: center;
                @include respond-to($phone){
                    margin: 0;
                    flex-wrap: wrap-reverse;
                }
                @include respond-to($tablet-landscape){
                    margin: 0
                }
                @include respond-to($large-desktop){
                    width: auto;
                    margin-right: 52px
                }
                .title-nav{
                align-items: center;
                display: flex;
                height: 100%;
                @include respond-to($phone){
                    margin: 0 auto;
                    height: auto;
                }
                    p{
                        margin: 0;
                        font-weight: bold;
                        font-size: 16px;
                        @include respond-to($phone){

                        }
                    }
                    .btn{
                        text-decoration: none;
                        color: $white;
                        padding: 0 10px;
                        border: 1px solid $background-color;
                        border-left: none;
                        height: 100%;
                        width: 80px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        @include respond-to($phone){
                            height: 40px;
                            margin: 0 auto;
                            border: 1px solid $background-color;
                        }
                        &:hover{
                            background: $background-color;
                            border-left: none;
                        }
                    }
                }
                .search-bar{
                    padding: 0 0 0 20px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    @include respond-to($phone){
                    margin: 0;
                    flex-wrap: wrap-reverse;
                    height: auto;
                    padding: 0;
                    }
                    div{
                        display: flex;
                        @include respond-to($phone){
                        margin: 10px auto;
                        
                        }
                        input{
                            background: $white;
                            padding: 4px 10px;
                            height: 18px;
                            width: 200px;
                            border: none;
                            outline: none;
                            cursor: not-allowed ;
                        }
                        .material-icons{
                            background: $white;
                            color: $background-color;
                            padding: 4px ;
                            height: 18px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    .top{
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        color:$white;
                        margin-left: 10px;
                        height: 100%;
                        background: $background-color-in-wrap;
                        @include respond-to($phone){
                            height: 40px;
                            margin: 0 auto
                        }
                        
                        .register,.login{
                            padding: 0 20px;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            text-decoration: none;
                            justify-content: center;
                            color: $white;
                            cursor: pointer;
                            padding: 0 10px;
                            border: 1px solid $background-color;
                            border-right: none;
                            width: 80px;
                            @include respond-to($phone){
                                border: 1px solid $background-color;
                                
                            }
                            &:hover{
                            background: $background-color;
                            border-right: none;
                            
                            }
                        }
                        .username{
                            display: flex;
                            align-items: center;
                            text-overflow: ellipsis;
                            cursor: pointer;
                            span{
                                margin-right: 5px;
                                font-size: 12px;
                            }
                            .hi{
                                color: $st-color;
                            }
                        }
                        .logout{
                            &:hover{
                                color: $danger;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>


