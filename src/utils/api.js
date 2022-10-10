import axios from "../utils/http"

// 作者登录
export function loginAut(autInfo){
    return axios.post("/apiUser/loginAut",autInfo)
}

// 注册作者
export function registerAut(autInfo) {
    return axios.post("/apiUser/registerAut",autInfo)
}

// 验证用户名是否被占用
export function updatePsw(userInfo){
    return axios.post("/apiUser/updatePsw", userInfo)
}

// 修改用户信息
export function updateUserInfo(userInfo){
  return axios.post("/apiUser/updateUserInfo", userInfo)
}

// 更新头像
export function updataPic(picInfo) {
    return axios.post("/apiUser/updatePic", picInfo)
}


// 验证用户名是否被占用
export function proveUsername(userInfo){
    return axios.post("/apiUser/proveUsername", userInfo)
}



// 删除用户头像
export function deleteImg(Info) {
    return axios.post("/apiUser/deleteImg", Info)
}

//注册
export function register(userInfo){
    return axios.post("/apiUser/register", userInfo)
}

// 登录
export function login(loginInfo) {
    return axios.post("/apiUser/login",loginInfo)
}

//验证码
export function captchaImgs() {
    return axios.post("/apiUser/captchaImg")
}


//获取作者信息列表
export function queryAutIdByAuthor(authorId){
    return axios.post("/apiUser/queryAutIdByAuthor",authorId)
  }

