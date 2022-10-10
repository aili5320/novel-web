<template>
  <div>
    <div class="wrap">
      <div class="nav-hover">
        <a href="javascript:;" class="mes-active nav-ah">我的发帖 </a>
        <a href="javascript:;">我的回帖</a>
        <a href="javascript:;">我的收藏</a>
        <a href="javascript:;" class="after">我的关注</a>
      </div>
      <div class="replies">
        <div
          class="collect-content"
          v-for="(item, index) in forumList"
          :key="index"
        >
          <p class="collect-img">
            <a href="javascript:;">
              <img :src="item.userPic" />
              <i> {{ item.realName }} </i>
            </a>
          </p>
          <p class="collect-tip">
            <a href="javascript:;">{{ item.forumTitle }}</a>
          </p>
          <p class="collect-p">
            <a class="change-line ellipsis" href="javascript:;">
              {{ item.comment }}
            </a>
          </p>
          <div class="collect-bottom">
            <p class="collect-time">{{ item.createTime }}</p>
            <div class="link">
              <a href="javascript:;">
                <i>0</i>
              </a>

              <i class="del" @click="delBtn(item.forumId)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryForumByUserId } from "@/utils/apiBook";
import { delForumById } from "@/utils/apiBook"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "dynamic",
  data() {
    return {
      userInfo: {},
      forumList: [],
    };
  },
  methods: {
    async delBtn(forumId){
      const req =  {
        forumId:forumId,
        userId: this.userInfo.userId,
      }
      this.forumList = await delForumById(req);
      
    }
  },

  async created() {
    var str = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(str);
    const req = {
      userId: this.userInfo.userId,
    };
    this.forumList = await queryForumByUserId(req);
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  .nav-hover {
    margin-top: 26px;
    margin-bottom: 20px;
    margin-left: -25px;
    font-size: 16px;
    height: 16px;
    color: #999;
    text-align: left;
    a {
      display: inline-block;
      padding: 0 27px;
      border-right: 1px solid #e6e6e6;
      cursor: pointer;
      font-size: 16px;
      height: 16px;
      line-height: 14px;
      position: relative;
      color: #999;
    }
    a:hover {
      color: #333;
      font-weight: 900;
      z-index: 99;
    }
    .mes-active {
      color: #333;
      font-weight: 900;
      z-index: 99;
    }
    .nav-ah::before {
      content: "";
      position: absolute;
      top: 27px;
      left: 55px;
      display: block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-left: 1px solid #e6e6e6;
      border-top: 1px solid #e6e6e6;
      transform: rotate(45deg);
      z-index: 11;
    }
    .after {
      border: 0;
    }
  }
  .replies {
    border: 1px solid #e6e6e6;
    min-height: 390px;
    margin-bottom: 40px;
    text-align: left;
    position: relative;
    .collect-content {
      border-bottom: 1px dashed #ccc;
      font-size: 14px;
      color: #333;
      margin: 0 21px;
      .collect-img {
        padding-top: 15px;
        font-size: 14px;
        color: #999;
        line-height: 25px;
        padding-bottom: 8px;
        position: relative;
        img {
          display: inline-block;
          width: 30px;
          height: 30px;
          border: 1px solid #f0f0f0;
          border-radius: 50% 50%;
          margin-right: 15px;
          vertical-align: top;
        }
        i {
          font-size: 14px;
          color: #999;
          font-weight: 900;
        }
      }
      .collect-tip {
        font-size: 16px;
        color: #333;
        font-weight: 900;
        margin-bottom: 8px;
        line-height: 25px;
        a {
          color: #333;
        }
      }
      .collect-p {
        font-size: 14px;
        color: #333;
        line-height: 25px;
        width: 1110px;
        a {
          color: #333;
          width: 1110px;
        }
      }
      .collect-bottom {
        overflow: hidden;
        margin-top: 17px;
        margin-bottom: 16px;
        .collect-time {
          font-size: 14px;
          color: #999;
          float: left;
        }
        .link {
          float: right;
          a {
            margin-right: 20px;
            display: inline-block;
            cursor: pointer;
            padding-left: 23px;
            color: #999;
            i {
              font-weight: 400;
              font-style: normal;
            }
          }
          a:before {
            content: "";
            background: url(@/assets/images/message_icon.png) no-repeat left top;
            width: 16px;
            height: 16px;
            display: inline-block;
            margin-right: 5px;
            vertical-align: -1px;
          }
          .del {
              width: 15px;
              height: 15px;
              padding-left: 20px;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAMAAAD+iNU2AAAAvVBMVEUAAAD////MzMy5ubmxxMS2tra1v7+1tbWysrm0tLSzs7mwtrazs7Oxtrazs7izs7O0tLSysravs7exsbWwsLSysrWws7Ozs7OytLSysrSxs7WxsbSysrSzs7aysrS1tbewsrS0tLaxsbOytLSwsLKws7OwsrSysrOwsrOxsbSwsrOxsrSxsbSxsrOwsrOvsrSws7SxsbSwsrSxsrWwsbSwsbSxsrSxsrOxsrSxsrOwsbOxsrSxsrSxsrOwsbMkeSH6AAAAPnRSTlMAAQULDRUYHyEiKCovMTI2OkJDRUdTXl5jbXJzdHZ3eHt9g4WLl5iepaeoqbG2ubq+vr/Awc/a2+rr7O709csBwCYAAACASURBVAjXdc7FEsJAFETRxgnuOhA0uLv1/38Wb8KQmiqKs+q7a0D0TtoMX1NqF387SqlOX3NlFdCmbYFE05bHj/q2hO4y6k0Q3wylDxxjT+f+QoVX6REbplM8Sg9YC3r9p3dM3p5W56qhYtl0iytzxuNcOnYO3j78e+F09iMTAd41ahpDxqpa/AAAAABJRU5ErkJggg==)
                no-repeat left top;
              vertical-align: middle;
              cursor: pointer;
              float: right;
            }
        }
      }
    }
  }
}
</style>