<template>
    <div class="wrapper-footer">
        <span>Example Front-end Developer by</span>
        <span class="name-footer">Konlakarn</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
@import '@/assets/scss/responsive.scss';
.wrapper-footer{
    padding: 15px;
    background: #2D3039;
    margin-top: 5px;
    text-align: center;
    color: $text-colorC;
    @include respond-to($phone){
        min-width: 300px;
        font-size: 10px;
        letter-spacing: 0.5px;
    }
    .name-footer{
        color: $st-color;
        @include respond-to($phone){
        font-size: 10px;
        letter-spacing: 0.5px;
    }
    }
}
</style>


