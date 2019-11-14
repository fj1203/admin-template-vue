import Axios from 'axios'
import Vue from 'vue'
import router from '@/router'
import { removeCookie, getCookie } from '@/libs/utils'
Axios.defaults.baseURL = process.env.VUE_APP_BASEURL
Axios.interceptors.request.use(config => {
    config.header = {
        token: getCookie('token')
    }
    Vue.prototype.$Loading.start()
    return config
}, error => {
    return Promise.reject(error)
})

Axios.interceptors.response.use(response => {
    if (response.data.code && response.data.code !== '0000') {
        Vue.prototype.$Loading.start()
        if (response.data.code === '9977') {
            removeCookie('token')
            router.replace({ name: 'login' })
        }
        Vue.prototype.$Message.error(response.data.message)
        return Promise.reject(new Error(response.data.code))
    }
    Vue.prototype.$Loading.finish()
    return response
}, error => {
    let message = error.response.status === 404 ? '出错啦，您访问的地址不存在' : '出错啦，服务端错误'
    Vue.prototype.$Message.error(message)
    return Promise.reject(error)
})
export default Axios
