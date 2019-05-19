<template>
    <div class="container-id">
        <div class="wrapper-card">
            <cardOfPostId/>
        </div>
    </div>
</template>

<script>
import cardOfPostId from '@/components/cardOfPostId'
export default {
    layout : 'navBarLayout',
    components:{
        cardOfPostId,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';

.container-id{

}
</style>

