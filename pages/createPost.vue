<template>
    <div class="container-create">
        <div class="title-create">
            Create Post
        </div>
        <div class="wrapper-create">
            <div class="create-title">
                <input type="text" placeholder="Title">
            </div>
            <div class="create-body">
                <textarea name="body" id="body" placeholder="Post Detail"></textarea>
            </div>
            <div class="btn-create-cancel">
                <nuxt-link to="/post" class="btn cancel">
                    Cancel
                </nuxt-link>
                <button class="btn submit">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     layout : 'navBarLayout',
}
</script>
<style lang="scss">
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/style.scss';

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
            }
        }
        .create-body{
            textarea{
                width: 99%;
                padding: 5px;
                color: $text-colorB;
                outline: none;
                min-height: 200px;
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
}
</style>


