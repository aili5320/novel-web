<template>
<div id="login-content">
    <div id="login-head">
      <router-link to="/">
      <img src="../assets/images/logo.jpg" class="img-responsive" alt="Image">
      </router-link>
      <p id="tip">没有账号</p>
      <router-link to="/userRegister"><button>注册</button></router-link>
    </div>
    
    <div id="login-box">
       <div id="login-card">
       <template>
       <el-tabs :tab-position="tabPosition" style="height: 300px; width: 400px;" >
       <el-tab-pane label="账号密码登录">
            <el-input v-model="username" placeholder="请输入账号" ></el-input>
            <el-input placeholder="请输入密码" v-model="password" show-password style="margin-top: 10px;"></el-input>
            <el-button type="warning"  @click="captchaBtn"  v-if="captchaFlag"   plain style="width: 260px; margin-top: 10px;" icon="el-icon-loading">完成验证才能登录</el-button>
            <div v-if="!captchaFlag">
            <img :src="this.captchaImg" @click="newCaptcha"  title="点击刷新验证码"     style="width: 120px; margin-top: 10px; "/>
            <el-input v-model="captcha" placeholder="请输入验证码" style="width: 160px; margin-top: 10px;" ></el-input>
          </div>
            <router-link id="slip" to=""><el-link :underline="false"  style="margin-top: 10px;">忘记密码</el-link></router-link>
            <el-button type="danger" style="width: 260px; margin-top: 5px;" @click="loginbtn">登录</el-button>
       </el-tab-pane>
       <el-tab-pane label="短信快速登录">
            <el-input v-model="phoneNum" placeholder="请输入手机号"></el-input>
            <el-input v-model="auth" placeholder="请输入手机验证码"></el-input>
            <el-button type="warning" plain style=" margin-top: 10px;" icon="el-icon-loading">发送验证码</el-button>
            <el-radio v-model="radio" label="1"  style="float: left; margin-top: 20px;">记住密码</el-radio>
           <el-button type="danger" style="width: 260px; margin-top: 5px;" @click="loginbtn">登录</el-button>
       </el-tab-pane>
       </el-tabs>
       </template>
      </div>
    </div>
   <div>
   
    
    <p id="tip">关于网站| 诚聘英才| 商务合作| 法律声明| 帮助中心| 作者投稿| 联系我们| 友情链接| 客服中心| 谨防诈骗|

Copyright©www.huanxiang.comAll Rights Reserved 版权所有 幻想网络技术有限公司 京ICP证080527号 京ICP备11009265号 京网文[2018]10695-962号

新出发京零字第朝130010号 丨 统一社会信用代码91110105678221683F 丨 京公网安备 11010502030124号 丨 公安部网络违法犯罪举报网站 丨 网上有害信息举报专区

幻想小说网,提供玄幻小说,都市小说,言情小说等免费小说阅读。作者发布小说作品时，请遵守国家互联网信息管理办法规定。

本站所收录小说作品、社区话题、书库评论均属其个人行为，不代表本站立场。</p>
   </div>
 </div>
</template>

<script>
import { login } from '@/utils/api';
import { captchaImgs } from '@/utils/api';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'index',
  data(){
    return {
       tabPosition: 'left',
      //  记住密码
       radio: '0',
       username:'',
       password:'',
       phoneNum:'',
       auth:'',
       captcha:'',
       trueCaptcha:'',
       data:{},
       userInfo:{},
       captchaImg:"",
       captchaFlag:true
    }
  },
  methods: {

   async newCaptcha(){
      const result = await captchaImgs();
      this.captchaImg = result.captchaImg
      this.trueCaptcha = result.captcha
    },

    captchaBtn () {
     this.captchaFlag = !this.captchaFlag;
    },
   async loginbtn () {
     if(this.username ==="" || this.password==="") return this.$message.info("用户名或密码不能为空")
     if (this.captcha==="") return this.$message.info("验证码不能为空！")     
     if (this.captcha !=this.trueCaptcha) return this.$message.info("验证码错误请重新输入！")
    this.data={
    username:this.username,
    password:this.password,
    phoneNum:this.phoneNum,
    captcha:this.captcha,
    auth:this.auth};
    const user = await login(this.data);
    this.userInfo = JSON.stringify(user);
    localStorage.setItem("userInfo",this.userInfo );


    this.userInfo = user;
    if(user!= null){
      this.$router.push('/')
     }
    }
  },
 async created() {
   const result = await captchaImgs();
   this.captchaImg = result.captchaImg
  },

}
</script>

<style lang="less" scoped>
  a {
    text-decoration: none imp;
  }
  #tip {
    font-size: 12px;
  }
  #login-head {
    img {
    float: left;
    width: 100px;
    display: inline;
    margin-left: 20%;
   }
   p {
    float: left;
    margin: 5% 0 0 50%;
    font-size: 12px;
   }
   button {
    float: left;
    display: block;
    margin: 4.5% 0  0 20px;
    width: 60px;
    font-size: 14px;
    color: #e3ffff;
    background-color: #526584;
    border: #526584;
   }
  }

  #login-box {
    display: flex;
    width: 100%;
    height: 600px;
    background: url(../assets/images/loginBG.jpeg) no-repeat ;
    background-size:100%;
    #login-card {
      display: inline-block;
      margin-top: 100px;
      margin-left: 60%;
      width: 300px;
      height: 600px;
    #slip {
      float: right;
    }  
    }
  }
     
</style>