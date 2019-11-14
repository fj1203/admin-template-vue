import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './index.less'
import axios from '@/libs/axios'
import './assets/icons/iconfont.css'
Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.prototype.$http = axios
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
