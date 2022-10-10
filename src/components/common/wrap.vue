<template>
  <div class="head">


    

    <div class="wrap">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" alt="" />
        </router-link>
      </div>
      <div class="floatNav">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-menu-item index="2-1">
              <router-link to="/fantasy">奇幻玄幻</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/martial">武侠仙侠</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/military">历史军事</router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
              <router-link to="/urban">都市娱乐</router-link>
            </el-menu-item>
            <el-menu-item index="2-5">
              <router-link to="/competitive">竞技同人</router-link>
            </el-menu-item>
            <el-menu-item index="2-6">
              <router-link to="/science">科幻游戏</router-link>
            </el-menu-item>
            <el-menu-item index="2-7">
              <router-link to="/suspense">悬疑灵异</router-link>
            </el-menu-item>
            <el-menu-item index="2-8">
              <router-link to="/secondary">二次元</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3"> 
            排行 
          </el-menu-item>
          <el-menu-item index="4">
            书库
          </el-menu-item>
          <el-menu-item index="5">
            完本
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/authorlogin">作者专区</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- <router-link to="/bookLists"> -->
        <div class="search-box">
          <input
            class="search-text"
            type="text"
            placeholder="请输入内容"
            autocomplete="off"
            disableautocomplete
            v-model="searchBook"
          />
          <input type="submit" @click="searchBtn" value="" class="search-btn fr" />
        </div>
      <!-- </router-link> -->

      <div class="right-wrap-login">
        <!-- 未登录显示 -->
        <div class="unlogin" v-if="!userInfo">
          <div class="login fl">
            <router-link to="/login">登录</router-link>
          </div>
          <div class="regist fl">
            <router-link to="/userRegister">注册</router-link>
          </div>
        </div>


        <!-- 登录显示 -->
        <div class="logon" v-if="userInfo">
          <div class="imgbox" style="height: 100%">
            <img
              class="ud_avatar"
              :src="userInfo.userPic"
              ref="magnifyImg"
              @mouseleave="Mouseleave()"
              @mouseenter="enter()"
            />
            <div
              class="user-blank"
              @mouseleave="Mouseleave()"
              @mouseenter="enter()"
            >
              <router-link to="/userSetting" class="set"> 设置</router-link>
              <a href="javascript:;" class="quit ud_logout" @click="exit()"
                >退出</a
              >
              <div class="user-name">
                <span>{{ userInfo.realName }}</span>
                <em class="level_moon"></em>
              </div>
              <div class="user-info">
                <div class="user-info-cell ud_money">
                  <span class="count">
                    <b>100</b>
                  </span>
                  <span class="nature">幻想币</span>
                </div>
                <div class="user-info-cell ud_ticket">
                  <span class="count">
                    <b>40</b>
                    张
                  </span>
                  <span class="nature">推荐票</span>
                </div>
                <div class="user-info-cell ud_mticket">
                  <span class="count">
                    <b>200</b>
                    张
                  </span>
                  <span class="nature">月票</span>
                </div>
                <router-link to="/recharge" class="btn"> 立即充值 </router-link>
              </div>
            </div>
          </div>
          <div class="message">
            <a href="javascript" class=".mes">
              消息(
              <span class="ud_umessage">0</span>
              )
            </a>
          </div>
          <div class="shelf">
            <a href="javascript:;">书架</a>
          </div>
          <div class="foot-mark" style="height: 100%">
            <span class="mark">
              历史
              <em class="icon"></em>
            </span>
          </div>
        </div>
      </div>
      <!-- 充值按钮 -->
      <div class="user_pay">
        <router-link to="/recharge">
          <span class="iconfont" style="color: #f9cf88; font-size: 12px"
            >&#xe696;</span
          >
          充值
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "wrap",
  props:{
   parentSearchBook:{
    type:String,
    default:""
   }
  },
  data() {
    return {
      dispalyFlag: true,
      userInfo: {},
      searchBook:""
    };
  },
  methods: {
    searchBtn(){
      this.$router.push({
            path: '/bookLists',
            query: {
            searchBook: this.searchBook
         }
        })
    },

    enter() {
      this.$refs.magnifyImg.style.width = "64px";
      this.$refs.magnifyImg.style.height = "64px";
    },
    Mouseleave() {
      this.$refs.magnifyImg.style.width = "32px";
      this.$refs.magnifyImg.style.height = "32px";
    },
    exit() {
      this.userInfo = null;
      window.localStorage.removeItem("userInfo");
    },
  },
  created() {
    var str = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(str);
  },
};
</script>
<style lang="less" scoped>
/deep/ .el-menu.el-menu--horizontal {
  border-bottom: solid 1px transparent;
}

/deep/ .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 1px solid transparent;
  color: #303133;
}

/deep/ .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 1px solid transparent;
  color: #303133;
}

/deep/ .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #d32f2f;
}

/deep/ .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #d32f2f;
}

.head {
  display: inline-flex;
  width: 100%;
  height: 50px;
  background: #fff;
  position: relative;
  z-index: 99;
  .wrap {
    width: 95%;
    margin: 0 auto;
    .logo {
      margin-top: 7px;
      float: left;
      img {
        width: 60px;
      }
    }
    .floatNav {
      float: left;
      width: 480px;
    }
    .search-box {
      position: absolute;
      left: 550px;
      top: 15px;
      width: 270px;
      height: 34px;
      .search-text {
        width: 216px;
        border: 1px solid #e0e0e0;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        height: 32px;
        line-height: 30px;
        border-right: 0 none;
        padding-left: 14px;
        font-size: 14px;
        letter-spacing: 1px;
        color: #333;
        position: relative;
        right: -1px;
        vertical-align: 10px;
        outline: none;
      }
      .search-text:focus {
        border: 1px solid #d32f2f;
        border-right: 0 none;
        background: #fff;
      }

      .search-btn {
        border: 1px solid #e0e0e0;
        border-left: 0 none;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        width: 38px;
        height: 32px;
        background: url(@/assets/images/search1.png) no-repeat center center
          #fff;
      }

      .search-text:focus + .search-btn {
        border: 1px solid #d32f2f;
        border-left: 0 none;
        background: #fafafa;
        background: url(@/assets/images/search-have.png) no-repeat center center
          #fff;
      }
    }

    .right-wrap-login {
      position: absolute;
      right: 120px;
      .unlogin {
        margin-top: 20px;
        div {
          margin-left: 20px;
          font-size: 13px;
        }
        div:hover {
          color: #d32f2f;
          cursor: pointer;
        }
        .fl {
          float: left;
        }
      }
      .logon {
        margin-top: 6px;
        font-size: 13px;
        zoom: 1;
        .imgbox {
          float: left;
          position: relative;
          letter-spacing: 1px;
          margin-right: 20px;
          .ud_avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 20%);
            position: relative;
            z-index: 10;
            cursor: pointer;
          }
          // .ud_avatar:hover {
          //   width: 64px;
          //   height: 64px;
          // }

          .ud_avatar:hover + .user-blank {
            display: block;
            margin-right: 0;
          }
          .user-blank {
            display: none;
            width: 340px;
            height: 225px;
            background: rgba(250, 250, 250, 0.98);
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%);
            position: absolute;
            left: -138px;
            top: 36px;
            z-index: 8;

            .set {
              position: absolute;
              right: 60px;
              top: 30px;
              color: #666;
              font-size: 12px;
              letter-spacing: 1px;
            }
            .set:hover {
              color: red;
            }
            .quit {
              position: absolute;
              right: 20px;
              top: 30px;
              color: #666;
              font-size: 12px;
              letter-spacing: 1px;
            }
            .quit:hover {
              color: red;
            }
            .user-name {
              color: #333;
              font-size: 18px;
              position: absolute;
              left: 0;
              top: 45px;
              line-height: 24px;
              width: 100%;
              text-align: center;
              span {
                margin-right: 10px;
              }
              em {
                width: 17px;
                height: 18px;
                display: inline-block;
                background: url(@/assets/images/points.png) no-repeat;
                vertical-align: -2px;
                margin-right: 3px;
                // background-position: -30px 0;
              }
            }
            .user-info {
              position: absolute;
              left: 0;
              bottom: 90px;
              height: 40px;
              padding: 0 19px;
              zoom: 1;
              .user-info-cell {
                float: left;
                width: 100px;
                text-align: center;
                height: 40px;
                .count {
                  display: block;
                  line-height: 17px;
                  font-size: 13px;
                  text-align: center;
                  b {
                    font-size: 16px;
                    font-weight: 700;
                  }
                }
                .nature {
                  display: block;
                  line-height: 17px;
                  font-size: 13px;
                }
              }
              .user-info-cell:nth-child(-n + 2) {
                border-right: 1px solid #e6e6e6;
              }
              .btn {
                position: absolute;
                left: 105px;
                top: 80px;
                width: 130px;
                height: 30px;
                line-height: 15px;
                background: #d32f2f;
                border-radius: 2px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                letter-spacing: 1px;
              }
            }
          }
          .user-blank:hover {
            display: block;
            margin-right: 0;
          }
          // .user-blank:hover + .ud_avatar {
          //   width: 64px;
          //   height: 64px;
          // }
        }
        .message {
          float: left;
          margin-top: 10px;
          margin-left: 5px;
          position: relative;
          .mes {
            letter-spacing: 1px;
            color: #333;
            cursor: pointer;
          }
        }
        .shelf {
          float: left;
          margin: 10px 20px 0;
          a {
            color: #333;
            letter-spacing: 1px;
          }
        }
        .foot-mark {
          float: left;
          margin: 10px 5px 0;
          cursor: pointer;
          .mark {
            zoom: 1;
            .icon {
              background: url(@/assets/images/icon01.png) no-repeat center
                center;
              width: 5px;
              height: 3px;
              display: inline-block;
              margin: 0 0 0 5px;
              -moz-transition: transform 0.3s ease-in;
              -webkit-transition: transform 0.3s ease-in;
              -o-transition: transform 0.3s ease-in;
              transition: transform 0.3s ease-in;
              vertical-align: middle;
              overflow: hidden;
            }
          }
        }
      }
    }
    .user_pay {
      position: absolute;
      right: 60px;
      margin-top: 18px;
    }
  }
}
</style>