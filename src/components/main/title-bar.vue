<template>
    <section class="title">
        <!-- <Icon custom="iconfont icon-bank" size="21" color="red"/> -->
        <!-- <Icon type="md-outlet" size="20" /> -->
        <Icon custom="iconfont icon-house-add" size="20" />

        <h2 v-show="!collapsed">管理平台</h2>
    </section>
</template>
<script>
export default {
    name: 'titleBar',
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="less">
    .title{
        height: 60px;
        line-height: 60px;
        text-align: center;
        i{
            vertical-align: middle;
        }
        h2{
            display: inline-block;
        }
    }
</style>
