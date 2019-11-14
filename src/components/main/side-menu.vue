<template>
     <Menu width="auto" mode="vertical" ref="menu" :open-names="openNames" :active-name="activeNames" @on-select="toPage">
        <side-menu-item v-for="(item, index) in menus" :key="index" :menu="item">
        </side-menu-item>
     </Menu>
</template>
<script>
import sideMenuItem from './side-menu-item'
import { getRoutesOfMeta } from '@/libs/utils'
export default {
    props: {
        menus: {
            type: Array,
            default () {
                return []
            }
        },
        activeName: {
            type: String,
            default: ''
        }
    },
    watch: {
        activeName (name) {
            this.setMenuActive(name)
        }
    },
    data () {
        return {
            openNames: [],
            activeNames: ''
        }
    },
    created () {
        this.menuMap = {}
        this.routes = getRoutesOfMeta()
        console.log(this.routes)
        this.setMenuNameMap(this.menus)
        console.log(this.menuMap)
        this.setMenuActive(this.activeName)
    },
    components: {
        sideMenuItem
    },
    methods: {
        toPage (name) {
            this.$router.push({ name })
        },
        setMenuActive (name) {
            let openNames = this.menuMap[name] || (this.routes[name] ? this.menuMap[this.routes[name].active] : [])
            this.openNames = openNames
            this.activeNames = this.menuMap[name] ? name : (this.routes[name] ? this.routes[name].active : '')
            this.$nextTick(() => {
                this.$refs.menu.updateOpened()
                this.$refs.menu.updateActiveName()
            })
        },
        setMenuNameMap (menus, menu) {
            menus.forEach(item => {
                if (item.parentId === '0') {
                    menu = [item.name]
                } else {
                    menu.push(item.name)
                }
                if (item.children.length) {
                    this.setMenuNameMap(item.children, menu)
                } else {
                    this.menuMap[menu.pop()] = menu.reverse()
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
