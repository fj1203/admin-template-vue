<template>
    <Layout class="layout">
        <Sider collapsible v-model="collapsed" :style="{background: '#fff'}">
            <title-bar :collapsed="collapsed"/>
            <template v-if="menus.length">
                <side-menu v-show="!collapsed" :activeNames="activeName" :menus="menus"></side-menu>
                <collapsed-menu v-show="collapsed" v-for="item in menus" :menu="item" :key="item.menuId" is-first></collapsed-menu>
            </template>
        </Sider>
        <Layout>
            <header-bar />
            <Content class="content">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import axios from '@/libs/axios'
import sideMenu from './side-menu'
import collapsedMenu from './collapsed-menu'
import titleBar from './title-bar'
import headerBar from './header-bar'
export default {
    data () {
        return {
            activeName: '',
            menus: [],
            collapsed: false
        }
    },
    components: {
        sideMenu,
        titleBar,
        collapsedMenu,
        headerBar
    },
    watch: {
        $route (route) {
            this.activeName = route.name
        }
    },
    beforeRouteEnter (to, from, next) {
        axios.post('/menus', { baseURL: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASEURL : '' }).then(res => {
            next(vm => {
                vm.setMenu(res.data.data.menuList)
            })
        })
    },
    methods: {
        setMenu (list) {
            let coverList = list.filter(item => item.parentId == '0')
            this.coverData(coverList, list)
            this.menus = coverList
        },
        coverData (list, allList) {
            list.forEach(el => {
                el.children = allList.filter(_el => _el.parentId == el.menuId)
                if (el.children.length > 0) {
                    this.coverData(el.children, allList)
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.layout{
    height: 100%;
    /deep/ .ivu-menu-vertical.ivu-menu-light:after{
        background: #ffffff;
    }
    /deep/ .ivu-layout-sider-trigger{
        color: #515a6e;
        background: #fff;
    }
}

</style>
