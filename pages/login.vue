<template>
    <div class="container-login">
        <div class="wrapper">
            <div class="title-login">
                Login
            </div>
            <div class="wrapper-login">
                <input type="email" placeholder="email">
                <input type="text" placeholder="username">
            </div>
            <div class="btn-login">
                <button>
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
export default {
    layout : 'navBarLayout',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';
.container-login{
    margin: 5% auto;
    .wrapper{
        background: #1c262f;
        width: 40%;
        margin: 0 auto;
        margin-top: 20px;
        padding: 20px;
        border-radius: 4px;
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


