<template>
    <div class="container-navbar">
        <div class="color-overlay"/>
        <div class="wrapper-nav">
            <div class="top">
                <nuxt-link to="/register" class="register">
                    <i class="material-icons">
                        create
                    </i>
                    <span>Register</span>
                </nuxt-link>
                <nuxt-link to="/login" class="login">
                    <i class="material-icons">
                        power_settings_new
                    </i>
                    <span>Login</span>
                </nuxt-link>
            </div>
            <div class="title">
                <h1>Example</h1>
                <p>Front-end Delveloper by Konlakarn</p>
            </div>
            <div class="menu-bar">
                <nuxt-link to="/post" class="home" >
                    <p>Home</p> 
                </nuxt-link>
                <nuxt-link to='/createPost' class="btn-create">
                    <p>Create Post</p> 
                </nuxt-link>
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
    height: 180px;
    background-size: cover;
    display: flex;
    position: relative;
    .color-overlay {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right,#C11CB5,black);
        opacity: .7;
        position: absolute;
    }
    .wrapper-nav{
        padding: 10px 0;
        width: 99%;
        position: absolute;
        display: flex;
        flex-direction: column;
        .top{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color:$white;
            .register,.login{
                display: flex;
                align-items: center;
                margin-left: 15px;
                text-shadow: 1px 1px 3px $text-colorB;
                text-decoration: none;
                color: $text-colorC;
                cursor: pointer;
                &:hover{
                   color: $st-color; 
                   text-shadow: none;
                }
            }
            .material-icons{
                font-size: 16px !important;
                margin-right: 3px!important;
            }
        }
        .title{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: $white;
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
            display: flex;
            align-items: center;
            width: 90%;
            margin: 0 auto;
            p{
                margin: 0;
                font-weight: bold;
                font-size: 16px;
                &:hover{
                    text-shadow: 0px 1px 1px black;
                    color: $st-color;
                }
            }
            .home{
                text-decoration: none;
                color: $white;
                margin-right: 20px;
            }
            .btn-create{
                text-decoration: none;
                color: $white;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                font-size: 14px;
            }
        }
    }
}
</style>


