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
                        <input type="text" placeholder="Search">
                        <i class="material-icons">
                            search
                        </i>
                        <div class="top">
                            <nuxt-link to="/register" class="register">
                                <span>Register</span>
                            </nuxt-link>
                            <nuxt-link to="/login" class="login">
                                <span>Login</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';

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
            h1{
                font-size: 60px;
                margin: 0;
            }
            p{
                font-size: 18px;
            }
        }
        .menu-bar{
            width: 100%;
            display: flex;
            margin: 0 auto;
            background: $background-color;
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
                .title-nav{
                align-items: center;
                display: flex;
                height: 47px;
                    p{
                        margin: 0;
                        font-weight: bold;
                        font-size: 16px;
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
                    input{
                        background: $white;
                        padding: 4px 10px;
                        height: 18px;
                        width: 200px;
                        border: none;
                        outline: none;
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
                    .top{
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        color:$white;
                        margin-left: 10px;
                        height: 100%;
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
                            &:hover{
                            background: $background-color;
                            border-right: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>


