setTimeout(
    () => {
        next(null, {
            code: '0000',
            data: {
                menuList: [
                    { menuId: '9991', parentId: '0', title: '首页', icon: 'ios-home', name: 'home' },
                    { menuId: '9992', parentId: '0', title: 'IDSP管理', icon: 'ios-albums', name: 'idsp' },
                    { menuId: '9993', parentId: '0', title: 'AP管理', icon: 'ios-albums-outline', name: 'ap' },
                    { menuId: '9994', parentId: '0', title: 'eID信息查询', icon: 'ios-search', name: 'eid' },
                    { menuId: '9995', parentId: '0', title: '交易记录查询', icon: 'md-list-box', name: 'record' },
                    { menuId: '9996', parentId: '0', title: '系统设置', icon: 'md-settings', name: 'system' },
                    { menuId: '99961', parentId: '9996', title: '操作日志', icon: 'ios-document', name: 'system_log' },
                    { menuId: '99962', parentId: '9996', title: '参数配置', icon: 'ios-settings', name: 'system_param' },
                    { menuId: '9997', parentId: '0', title: '开发通用', icon: 'ios-construct', name: 'demo' },
                    { menuId: '99971', parentId: '9997', title: '自定义组件', icon: 'ios-flower', name: 'demo_component' },
                    { menuId: '99972', parentId: '9997', title: '自定义过滤器', icon: 'ios-color-filter', name: 'demo_filters' },
                    { menuId: '99973', parentId: '9997', title: '自定义公共样式', icon: 'logo-css3', name: 'demo_css' },
                    { menuId: '99974', parentId: '9997', title: '自定义工具方法', icon: 'ios-hammer', name: 'demo_tools' },
                    { menuId: '99975', parentId: '9997', title: '自定义Vue原型属性', icon: 'logo-vimeo', name: 'demo_vue' },
                    { menuId: '9998', parentId: '0', title: '迭代日志', icon: 'ios-bookmark-outline', name: 'demo_logs' },
                ],
                buttonNames: 'home_query,idsp_query,idsp_export,idsp_register,idsp_info,idsp_apply,idsp_start,idsp_pause,idsp_stop,idsp_key_update,idsp_msg_update'
            }
        })
    }, 0)
