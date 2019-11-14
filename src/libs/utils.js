
import Cookies from 'js-cookie' // cookie保存天数
import routes from '@/router/routes'
const EXPIRES = 1
export const setCookie = (key, value, params) => {
    Cookies.set(key, value, { expires: EXPIRES, ...params })
}
export const getCookie = (key) => {
    return Cookies.get(key) || false
}
export const removeCookie = (key) => {
    Cookies.remove(key)
}
export const getRoutesOfMeta = (obj = {}, list = routes) => {
    list.forEach(item => {
        if (item.meta) obj[item.name] = item.meta
        if (item.children && item.children.length > 0) getRoutesOfMeta(obj, item.children)
    })
    return obj
}
