<template>
  <div id="recharge">
    <div id="recharge-title">
      <router-link to="/">
        <img src="@/assets/images/logo.jpg" alt="" />
      </router-link>
    </div>

    <div id="recharge-nav">
      <ul>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe69b;</span>免费小说</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe612;</span>完结小说</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xf00f5;</span>奇幻·玄幻</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe634;</span>武侠·仙侠</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe615;</span>历史·军事</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe665;</span>都市·娱乐</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe645;</span>竞技·同人</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe664;</span>科幻·游戏</router-link
          >
        </li>
        <li>
          <router-link to="#"
            ><span class="iconfont">&#xe688;</span>悬疑·灵异</router-link
          >
        </li>
      </ul>
    </div>

    <div id="recharge-content">
      <div id="content-left">
        <div id="left-top">
          <!-- 未登录 -->
          <div id="login-out">
            <p><span class="iconfont">&#xe697;</span>用户登录</p>
            <i>亲，登陆后才可以充值哦！</i>
            <router-link to="/login">
              <button type="button" class="btn btn-default">
                <strong>立即登录</strong>
              </button>
            </router-link>
            <router-link to="/userRegister">
              <div id="to-register">没有账户？立即注册！</div>
            </router-link>
          </div>
        </div>
        <div id="left-bottom">
          <span class="iconfont left-bottom-title">&#xe660;24小时客服中心</span>
          <span class="iconfont"
            >&#xe740;在线客服> <a href="">点击质询</a></span
          >
          <span class="iconfont">&#xe94b;客服电话> 4006289988</span>
          <span class="iconfont"
            >&#xe917;客服邮箱>
            <a href="mailto:zhkf@hx.com">zhkf@hx.com</a>
          </span>
        </div>
      </div>
      <div id="content-right">
        <el-tabs type="border-card">
          <el-tab-pane label="支付宝充值">
            <Zfb></Zfb>
          </el-tab-pane>
          <el-tab-pane label="微信充值">
            <Wx></Wx>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>
import ZFB from'@/components/recharge/zfb.vue';
import WX from'@/components/recharge/wx.vue';
import Zfb from '../components/recharge/zfb.vue';
import Wx from '@/components/recharge/wx.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "recharge",
    data() {
        return {
            radio1: "",
        };
    },
    comments: {
        ZFB,
        WX
    },
    components: { Zfb, Wx }
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
#recharge {
  background-image: linear-gradient(to top, #ffffff, #6a80a9);
  #recharge-title {
    width: 10%;
    height: 60px;
    img {
      float: left;
      width: 100px;
      display: inline;
      margin-left: 20%;
    }
  }
  #recharge-nav {
    margin: 80px auto;
    width: 80%;
    background: url(@/assets/images/recharge-nav.png);
    border-radius: 15px;
    block-size: 100%;
    height: 80px;
    li {
      float: left;
      margin: 10px;
      a {
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
      }
    }
  }

  #recharge-content {
    margin: 0 auto;
    width: 75%;
    height: 40%;
    #content-left {
      width: 20%;
      float: left;
      #left-top {
        width: 250px;
        height: 270px;
        border-radius: 5px;
        background: url(@/assets/images/card.png) no-repeat;
        border: 1px solid #cccccc;
        #login-out {
          float: left;
          font-size: 12px;
          margin: 15px;
          position: relative;
          #to-register {
            position: absolute;
            bottom: -110px;
            right: -10px;
            color: #303030;
          }
        }
      }
      #left-bottom {
        border-radius: 5px;
        margin-top: 20px;
        height: 150px;
        width: 250px;
        background-color: #d9dbe1;
        border: 1px solid #cccccc;
        span {
          float: left;
          margin: 5px;
          color: #85848c;
          a {
            color: #7488ae;
          }
        }
        .left-bottom-title {
          float: left;
          font-size: 16px;
          font-weight: 700;
          margin: 5px;
          color: #303030;
        }
      }
    }
    #content-right {
      float: left;
      margin-left: 65px;
      width: 60%;
    }
  }
}



</style>