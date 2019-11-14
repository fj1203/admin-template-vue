<template>
    <Submenu v-if="menu.children && menu.children.length > 0" :name="menu.name">
        <template slot="title">
            <Icon :type="menu.icon" />
            {{ menu.title }}
            </template>
        <side-menu-item v-for="el in menu.children" :key="el.path" :menu="el" />
  </Submenu>
  <MenuItem v-else :name="menu.name"> <Icon :type="menu.icon" />{{ menu.title }}</MenuItem>
</template>
<script>
export default {
    name: 'SideMenuItem',
    props: {
        menu: {
            type: Object,
            default () {
                return {}
            }
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            onlyOneChild: ''
        }
    },
    methods: {
    }
}
</script>
