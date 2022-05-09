import axios from "axios";
import { Message } from 'element-ui';
import router from '../router'


//请求拦截器
axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token')
    // console.log(config)
    return config
})
// 响应拦截器
axios.interceptors.response.use(success => {
    // 业务逻辑错误
    // http协议调到接口返回200
    if (success.status && success.status == 200) {
        // 500 401 403
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            Message.error({ message: success.data.message })
            return
        }
        if (success.data.message) {
            Message.success({ message: success.data.message })
        }
    }
    return success.data
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({ message: '找不到页面!' })
    } else if (error.response.code == 403) {
        Message.error({ message: '权限不足,请联系管理员!' })
    }
    else if (error.response.code == 401) {
        Message.error({ message: '您没有登录!请先登录' })
        router.replace('/')
    } else {
        if (ErrorEvent.response.data.message) {
            Message.error({ message: error.response.data.message })
        }
        else {
            Message.error({ message: '未知错误' })
        }
    }
    return;
})


let base = 'http://127.0.0.1:3007'
// 传送json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        //data就是body
        data: params,
    })
}