import axios from 'axios'  
// import store from '@/store/index.js'
import baseURL from './baseUrl'
import {
    Message
} from 'element-ui' //ElementUI 消息提示组件Message
const http = {}
//axios.create()是添加了自定义配置的新的axios
var instance = axios.create({
  baseURL,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 请求头添加token
        // if (store.state.UserToken) {
        //     config.headers.Authorization = store.state.UserToken
        // }
        return config
    },
    function (error) {
        //romise.reject(reason)方法返回一个带有拒绝原因（reason参数）的Promise对象。
        return Promise.reject(error)
    }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求出错'
                    break
                case 401:
                    Message.warning({
                        message: '授权失败，请重新登录'
                    })
                    // store.commit('LOGIN_OUT') //传值给vuex的mutation改变state
                    setTimeout(() => {
                        window.location.reload() //浏览器刷新当前页面
                    }, 1000)

                    return
                case 403:
                    err.message = '拒绝访问'
                    break
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break
                case 500:
                    err.message = '服务器端出错'
                    break
            }
        } else {
            err.message = '连接服务器失败'
        }
        Message.error({
            message: err.message
        })
        return Promise.reject(err.response)
    }
)

http.get = function (url, options) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, options)
            .then(response => {
                if (response.code === 0) {
                    resolve(response.data)
                    Message.success({
                        message: response.message
                    })
                } else {
                    Message.error({
                        message: response.message
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

http.post = function (url, data, options) {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data, options)
            .then(response => {
                if (response.result === 0) {

                    resolve(response.data)
                    // Message.success({
                    //     message: response.message
                    // })
                } else if (response.result === 1) {
                    Message.info({
                        message: response.message
                    })
                }else{
                    Message.error({
                        message: response.message
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

export default http
