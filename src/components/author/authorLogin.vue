<template>
  <div id="authorLogin">
    <div class="author_title">
      <div class="title_left">
        <router-link to="/"
          ><img src="@/assets/images/logo.jpg" alt=""
        /></router-link>
      </div>
      <div class="title_right">
        <ul>
          <li><a href="/">幻想首页</a></li>
          <li><span>|</span></li>
          <li><a href="javascript:;">编辑介绍</a></li>
          <li><span>|</span></li>
          <li style="color: #eb4c3c"><a href="javascript:;">作者福利</a></li>
        </ul>
      </div>
    </div>
    <div class="authorContent">
      <div class="dispalyLog" v-if="!userInfo">
        <div class="tip">
          <span>亲爱的用户，请先登录幻想中文网，才能创作！</span>
        </div>
        <div class="authorLog">
          <router-link replace to="/login">
            <p style="text-align: left; color: #409eff; padding: 30px;">
              请先登录
            </p>
            <p style="font-size: 16px; margin-top: 30px">
              您现在还处于未登录状态，请先登录幻想中文网，才能进入作者专区创作。
            </p>
         
          
            <el-button type="primary" style="margin-top: 40px;width: 220px;"
              >立即登录</el-button
            >
          </router-link>
          <div class="switchlogtype"></div>
        </div>
      </div>

      <div class="dispalyLog" v-if="userInfo">
        <div class="tip">
          <span>HI，{{ userInfo.realName }}，您已登录纵横，快去写作吧！</span>
        </div>
        <div class="authorLog">
          <p
            style="
              text-align: left;
              color: #409eff;
              margin: 10px;
              padding: 30px 0 0 10px;
            "
          >
            输入登录作者专区密码
          </p>

          <div class="authorPsw">
            <p class="phone">
              <i class="iconfont">&#x3448;</i>
              短信验证</p>
            <el-input
            class="authorInput"
              placeholder="请输入作者密码"
              v-model="authorPsw"
              show-password
            ></el-input>
            <div class="form_sup">
            <div class="apply">
              <router-link to="/authorRegister">
              还未申请？立即申请作者忘记密码?
              </router-link>
              </div>
            <div class="forget">
              <a href="javascript:;">忘记密码？</a>
              </div>
            </div>  
          </div>

         
            <el-button type="primary" style="margin-top: 40px;width: 220px;"
             @click="loginAut">立即登录</el-button
            >
          
          <div class="switchlogtype"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginAut } from "@/utils/api"
export default {
  name: "authorLogin",
  data() {
    return {
      userInfo: {},
      authorPsw: "",
    };
  },
  methods: {

     async loginAut(){
        const reqdata = {
          userId:this.userInfo.userId,
          autId:this.userInfo.autId,
          password:this.authorPsw,
        }
         const result = await loginAut(reqdata);
          this.$router.push({
            path: '/authorIndex',
            query: {
            params: JSON.stringify(result)
        }
          }) 
      }
  },
  created() {
    var str = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(str);
    this.sex = this.userInfo.sex;
    // this.userInfo.phone = this.replacePhone(this.userInfo.phone);
  },
};
</script>
   
<style lang="less" scoped>
a:hover {
  color: #7595cc;
}
.author_title {
  width: 100%;
  height: 80px;
  position: relative;
  background-color: #e6f1f9;
  .title_left {
    position: absolute;
    left: 60px;
    zoom: 1;
    img {
      width: 100px;
    }
  }

  .title_right {
    position: absolute;
    right: 10px;
    zoom: 1;
    margin-right: 80px;
    li {
      float: left;
      margin: 30px 10px 0 20px;
      font-size: 14px;
      font-weight: 700;
    }
  }
}

.authorContent {
  display: block;
  margin-top: -10px;
  width: 100%;
  height: 700px;
  background: url(@/assets/images/authorBg.jpg) no-repeat;
  background-size: 100%;
  .dispalyLog {
    position: relative;
    display: inline-block;
    top: 120px;
    width: 100%;

    .tip {
      position: absolute;
      left: 60%;
      span {
        font-weight: 700;
        font-size: 16px;
        color: #333;
      }
    }

    .authorLog {
      position: absolute;
      top: 30px;
      left: 60%;
      width: 350px;
      height: 350px;
      background-color: #e6f1f9;
      box-shadow: 5px 5px 5px #5a9dd2;
      border-radius: 5px;
      position: relative;
      .authorPsw {
        width: 80%;
        margin-top: 40px;
        margin-left: 30px;
        .phone {
          text-align: right;
          margin-right: 20px;
          color: #409eff;
        }
        .authorInput {
          margin: 20px 0 30px 0;
        }
        .form_sup{
          .apply {
            float: left;
          text-align: left;
          font-size: 10px;
        }
        .forget {
          float: right;
          a {
            color: #a3a3a3;
          }
         }
        }
        
        
      }
      .switchlogtype {
        position: absolute;
        left: -40%;
        margin-left: 449px;
        top: 310px;
        background-image: url(@/assets/images/qrcode.png);
        background-position: -60px -60px;
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
      .switchlogtype:hover {
        background-position: -60px -120px;
      }
    }
  }
}
</style>