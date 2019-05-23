<template>
    <div class="container-layout">
        <navBarTop/>
        <div class="wrapper-nuxt">
            <nuxt/>
        </div>
        <footerNav/>
    </div>
</template>

<script>
import navBarTop from '@/components/navBarTop'
import footerNav from '@/components/footerNav'
export default {
    components: {
        navBarTop,
        footerNav,
    } 
        
}
</script>

<style lang="scss" scope>
@import '@/assets/scss/_colors.scss';


html, body, #__nuxt , #__layout{
    margin: 0;
    height: 100%;
    background: $background-color;
}
.wrapper-nuxt{
    width: 90%;
    margin: 0 auto;
    background: $background-color-in-wrap;
    padding: 20px 20px 10px 20px;
    margin-bottom: 3%;
}
.container-layout{
    height: 100%;
}
</style>
