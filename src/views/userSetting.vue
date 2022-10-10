<template>
  <div>
    <div class="wrap">
      <div class="head">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/images/logo.jpg" alt="" />
          </router-link>
        </div>
        <div class="spcoline"></div>
        <div class="home_tit">个人中心</div>
        <br>
        <br>
        <br>
        <div class="homenav">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="我的书架" name="shelf">
                <Favorite></Favorite>
              </el-tab-pane>
              <el-tab-pane label="账户设置" name="setting"
                >
                <AccountSetVue></AccountSetVue>
                </el-tab-pane
              >
              <el-tab-pane label="我的消息" name="message"
                >
                <Message></Message>
                </el-tab-pane
              >
              <el-tab-pane label="我的动态" name="active"
                >
                <Dynamic></Dynamic>
                </el-tab-pane
              >
            </el-tabs>
          </template>
        </div>
        <div class="home_rbox">
          <ul>
            <li class="home_lnk">
              <router-link to="/">
                <span>返回首页</span>
              </router-link>
            </li>
            <li class="home_user">
              <span class="user-name">
                {{userInfo.realName}}
              </span>
              <div class="home_ulink">
                <router-link to="/userSetting">个人主页</router-link>
                <a href="javascript:;" class="ud_logout" @click="exit()">退出</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
    

<script>
import AccountSetVue from '@/components/setting/accountSet.vue';
import Favorite from "@/components/setting/favorite.vue"
import Dynamic from "@/components/setting/dynamic.vue"
import Message from "@/components/setting/message.vue"

export default {
  name: "userSetting",
  data() {
    return {
      activeName: "setting",
      userInfo:{}
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    exit() {
      this.userInfo=null;
      window.localStorage.removeItem('userInfo');
      this.$router.push('/')
    }
  },
  components:{
    AccountSetVue,Favorite,Dynamic,Message
  },
  created() {
   var str = localStorage.getItem("userInfo");
   this.userInfo = JSON.parse(str);
  },
};
</script>

<style lang="less" scoped>


/deep/ .el-tabs__header {
  padding: 5px;
}
/deep/ .el-tabs__active-bar {
  background-color: #d32f2f;
}

/deep/ .el-tabs__nav-wrap::after  {
  background-color: #ffffff
}

/deep/.el-tabs__item.is-active {
    color: #d32f2f;
}

/deep/.el-tabs__item:hover {
    color: #d32f2f;
}
// /deep/ .el-tabs__content {
//   left:-200px
// }

.wrap {
  width: 1200px;
  margin: 0 auto;
  .head {
    border-bottom: 2px solid #ededed;
    margin: 0;
    padding: 0;
    padding-top: 36px;
    height: 76px;
    position: relative;
    .logo {
      float: left;
      width: 36px;
      margin-top: -15px;
      overflow: hidden;
      img {
        height: 66px;
      }
    }
    .spcoline {
      width: 1px;
      height: 35px;
      background: #e6e6e6;
      float: left;
      margin: 0 13px;
    }
    .home_tit {
      font-family: MicrosoftYaHei-Bold;
      font-size: 24px;
      font-weight: 700;
      color: #a11313;
      letter-spacing: 0;
      float: left;
    }
    .homenav {
      position: absolute;
      // left: 200px;
    }
    .home_rbox {
      position: absolute;
      right: 10px;
      top: 55px;
      .home_lnk {
        display: inline-block;
        padding: 0 13px;
        position: relative;
        height: 40px;
        a {
          color: #999;
        }
      }
      .home_user {
        display: inline-block;
        padding: 0 13px;
        position: relative;
        height: 40px;
        a {
          color: #999;
        }
        .user-name {
          color: #999;
        }
        .user-name:hover + .home_ulink {
          display: block;
        }

        .home_ulink {
          position: absolute;
          z-index: 1;
          background: rgba(60, 61, 71, 1);
          box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
          width: 100px;
          padding: 15px 0;
          top: 20px;
          left: 50%;
          margin-left: -50px;
          display: none;
          transition-duration: 0.5s;
          a {
            display: block;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #fff;
            letter-spacing: 1px;
            line-height: 36px;
            text-align: center;
          }
          a:hover {
            color:#e84848;
          }
        }
        .home_ulink:hover {
          display: block;
        }
      }

      .home_ulink::before {
        position: absolute;
        background: rgba(60, 61, 71, 1);
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
        content: "";
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        left: 50%;
        top: -2px;
        margin-left: -5px;
      }
      .home_user::after {
        content: "";
        width: 5px;
        height: 3px;
        background-image: url(@/assets/images/icons.png);
        background-position: -30px 0;
        position: absolute;
        right: 1px;
        top: 7px;
      }
    }
  }
}
</style>