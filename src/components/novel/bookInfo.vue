<template>
  <div>
    <Wrap></Wrap>
    <div class="book-info">
      <!-- 书籍详情信息 -->
      <div class="book-top">
        <div class="book">
          <div class="breadcrumbs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>武侠</el-breadcrumb-item>
              <el-breadcrumb-item> {{ bookInfo.bookName }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="bookInfo">
            <div class="bookImg">
              <img :src="bookInfo.bookPic" />
            </div>
            <div class="bookData">
              <div class="book-name">
                {{ bookInfo.bookName }}
                <span class="iconfont" style="color: #f8c063; font-size: 18px"
                  >&#xf00b0;</span
                >
              </div>
              <div class="book-label">
                <router-link to="#" class="state">连载中</router-link>
                <router-link to="#" class="state label">{{
                  bookInfo.genre
                }}</router-link>
                <router-link to="#" class="state link">{{
                  bookInfo.theme
                }}</router-link>
              </div>
              <div class="nums">
                <span
                  >字数
                  <i>{{ bookInfo.wordNum }}</i>
                </span>
                <span
                  >总推荐
                  <i>0</i>
                </span>
                <span>
                  总点击
                  <i>0</i>
                </span>
                <span>
                  周推荐
                  <i>0</i>
                </span>
              </div>
              <div class="book-dec">
                <p>
                  {{ bookInfo.intro }}
                </p>
              </div>
              <div class="btn-group">
                <router-link
                  replace
                  class="btn"
                  :to="{
                    path: '/chapter',
                    query: {
                      bookId: bookInfo.bookId,
                      autName: bookInfo.autName,
                    },
                  }"
                >
                  开始阅读
                </router-link>
                <div class="stored">已在书库</div>
                <div class="link-group">
                  <a href="javascript:;">
                    <span class="iconfont">&#xe625;</span>
                    全部目录
                  </a>
                  <a href="javascript:;">
                    <span class="iconfont">&#xe64a;</span>
                    投推荐票
                  </a>
                  <a href="javascript:;">
                    <span class="iconfont">&#xe607;</span>
                    章节订阅
                  </a>
                  <a href="javascript:;">
                    <span class="iconfont">&#xe62f;</span>
                    作品百科
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="side">
          <div class="book-author">
            <div class="au-head">
              <a href="javascript:;">
                <img :src="authorInfo.autPic" alt="" />
              </a>
              <em>签约作家</em>
            </div>
            <div class="au-name">
              <a href="javascript:;">
                {{ authorInfo.autName }}
              </a>
            </div>
            <div class="go-author-baike">
              <a href="javascript:;">
                <span class="iconfont">&#xe6a2;</span>
                作者百科
              </a>
            </div>
            <div class="au-words">
              <span>作品总数<i>5</i></span>
              <span>累计字数<i>1748.6万</i></span>
              <span>本月更新<i>6天</i></span>
            </div>
            <div class="au-says">
              <h4>作者有话说</h4>
              <div class="empty">作者大大正在奋力码字哦~~~</div>
            </div>
          </div>
          <div class="app-in">
            <div class="ewm">
              <img src="@/assets/images/app.png" alt="" />
            </div>
            <div class="txt">
              <h3>手机看幻想</h3>
              <p>新用户免费看10年</p>
            </div>
          </div>
        </div>
        <div class="news">
          <h4>最新章节</h4>
          <div class="tit">
            <a href="javascript:;"> {{ bookInfo.newChapter }} </a>
          </div>
          <div class="con">
            月儿弯弯照九洲。大骊禺州境内那座律宗寺庙内，月光透窗如阅书，桌上，一张材质微涩的纸张上边，...
          </div>
          <div class="time">
            · 2天前
            <br />
            · 今日更新0章
          </div>
        </div>
      </div>
      <!-- 书籍结束信息 -->
      <!-- 月票 -->
      <div class="book-main">
        <div class="book-bill">
          <h3>捧场送月票</h3>
          <a href="javascript:;">
            <span class="iconfont">&#xe69b;</span>月捧场百万幻想币包机拉横幅
          </a>
        </div>
        <div class="donate">
          <div class="rank">
            <h4>
              月票榜排名
              <a href="javascript:;">
                <em class="rk_ic"></em>
              </a>
            </h4>
            <div class="rank-r">
              <span>
                第
                <i class="a1">3</i>
                名
              </span>
              <br />
              <span>
                共
                <i class="a2"> 530 </i>
                票
              </span>
            </div>
          </div>
          <div class="honor">
            <h4>
              本书荣誉
              <em class="ho_ic"></em>
            </h4>
            <div class="honor-r">
              <span>
                <i> 7月月票榜</i>
                第
                <i class="a1">14</i>
                名
              </span>
              <br />
              <span>
                <i>6月月票榜</i>
                第
                <i class="a1">12</i>
                名
              </span>
            </div>
          </div>
        </div>
        <div class="donate-fr">
          <h4>
            打赏
            <a class="more-link" href="javascript:;">更多捧场></a>
          </h4>
          <ul class="donate-list">
            <li>
              <div class="li-box">
                <span class="fl">捧</span>
                <span class="fl">
                  <i>1</i>
                  张月票
                </span>
              </div>
              <div class="txt">500幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">赞</span>
                <span class="fl">
                  <i>11</i>
                  张月票
                </span>
              </div>
              <div class="txt">5000幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">赏</span>
                <span class="fl">
                  <i>22</i>
                  张月票
                </span>
              </div>
              <div class="txt">10000幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">盟</span>
                <span class="fl">
                  <i>220</i>
                  张月票
                </span>
              </div>
              <div class="txt">10万幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">尊</span>
                <span class="fl">
                  <i>2200</i>
                  张月票
                </span>
              </div>
              <div class="txt">100万幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">壕</span>
                <span class="fl">
                  <i>22000</i>
                  张月票
                </span>
              </div>
              <div class="txt">1000万幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">RP</span>
                <span class="fl">
                  <i>人品月票</i>
                </span>
              </div>
              <div class="txt">100幻想币</div>
            </li>
            <li>
              <div class="li-box">
                <span class="fl">月</span>
                <span class="fl">
                  <i>投月票</i>
                </span>
              </div>
              <div class="txt">
                <a href="/loging">登录</a>
                查看剩余月票
              </div>
            </li>
          </ul>
        </div>
        <div class="forum">
          <div class="items" v-for="(item,index) in forumInfo" :key="index">
            <div class="user-head">
              <a href="javascript:;">
                <img :src="item.userPic"/>
                <em class="lv1"></em>
                <span>
                  <i class="star star2"></i>
                </span>
              </a>
            </div>
            <div class="for-rp-con">
              <div class="name"></div>
              <div class="dec">
                <a href="javascript:;">
                  <em> {{ item.comment }} </em>
                </a>
              </div>
              <div class="for-quote">
                评论来自：
                <b> {{ item.chapterName }} </b>
              </div>
              <div class="other">
                <div class="date">
                  {{ item.createTime }}
                </div>
                <div class="for-list">
                  
                  <a href="javascript:;" class="for-praise">
                    <em></em>
                    <b>0</b>
                  </a>
                  
                  <!-- 追评 -->
                  <router-link to="" class="for-comment">
                    <em></em>
                    <b>10</b>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wrap from "@/components/common/wrap.vue";
import { queryBookInfo } from "@/utils/apiBook";
import { queryAutIdByAuthor } from "@/utils/api";
import { queryForumByBookId } from "@/utils/apiBook";
export default {
  name: "bookInfo",
  data() {
    return {
      bookId: "",
      bookInfo: {},
      authorInfo: {},
      forumInfo:[]
    };
  },
  components: {
    Wrap,
  },
  async created() {
    this.bookId = this.$route.query.bookId;
    const reqData = {
      bookId: this.bookId,
    };
    this.bookInfo = await queryBookInfo(reqData);

    const autId = this.bookInfo.autId;
    const reqData2 = {
      autId: autId,
    };
    this.authorInfo = await queryAutIdByAuthor(reqData2);
    this.forumInfo = await queryForumByBookId(reqData);
  },
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  font-size: 12px;
}
a:hover {
  color: #e84848;
}
.book-info {
  margin: 40px auto;
  width: 90%;
  .book-top {
    .book {
      border-bottom: 1px dotted #d6d6d6;
      padding-bottom: 15px;
      float: left;
      width: 70%;
      .breadcrumbs {
        margin: 20px;
      }
      .bookInfo {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .bookImg {
          width: 200px;
          height: 275px;
          margin-right: 25px;
          border-radius: 5px;
          img {
            width: 100%;
          }
        }
        .bookData {
          .book-name {
            font-size: 20px;
            font-weight: 700;
            text-align: left;
          }
          .book-label {
            margin-bottom: 20px;
            text-align: left;
            .state {
              background: #02b389;
              border-radius: 2px;
              color: #fff;
              font-size: 12px;
              display: inline-block;
              padding: 0 5px;
              height: 20px;
              line-height: 20px;
              margin-right: 4px;
            }
            .label {
              background: #d32f2f;
              margin-right: 4px;
            }
            .link {
              color: #999;
              background: transparent;
              display: inline-block;
              font-size: 12px;
              border: 1px solid #cdd0d6;
              border-radius: 2px;
              letter-spacing: 1px;
              padding: 0 5px;
              height: 20px;
              line-height: 20px;
              margin-right: 4px;
            }
          }
          .nums {
            text-align: left;
            margin-bottom: 25px;
            color: #999;
            font-size: 12px;
            span {
              margin-right: 15px;
              i {
                font-size: 16px;
                color: #333;
                font-family: Arial, Helvetica, sans-serif;
              }
            }
          }
          .book-dec {
            position: relative;
            min-height: 96px;
            p {
              text-align: left;
              font-size: 14px;
              font-weight: 400;
              color: #333;
              line-height: 25px;
              margin-bottom: 5px;
            }
          }
          .btn-group {
            float: left;
            .btn {
              width: 180px;
              height: 36px;
              color: #fff;
              font-size: 14px;
              text-align: center;
              background: #d32f2f;
              border-radius: 2px;
              letter-spacing: 1px;
              cursor: pointer;
              margin-right: 15px;
            }
            .stored {
              border: 1px solid #cdd0d6;
              color: #aaa;
              width: 100px;
              height: 36px;
              font-size: 14px;
              font-weight: 400;
              line-height: 34px;
              margin-right: 10px;
            }
            .link-group {
              float: left;
              a {
                text-align: left;
                width: 100px;
                display: inline-block;
                padding: 0 0 0 18px;
                color: #999;
                font-size: 12px;
                font-weight: 400;
                border-right: 1px solid #e6e6e6;
              }
              a:nth-child(4) {
                border-right: none;
              }
              a:hover {
                color: #ea5656;
              }
            }
          }
        }
      }
    }
    .news {
      position: relative;
      width: 70%;
      float: left;
      padding-bottom: 15px;
      border-bottom: 1px dotted #d6d6d6;
      h4 {
        text-align: left;
        color: #999;
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        margin-bottom: 4px;
      }
      .tit {
        text-align: left;
        margin-bottom: 10px;
        a {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 1.17px;
        }
      }
      .con {
        text-align: left;
        font-size: 12px;
        color: #a2a2a2;
        font-weight: 400;
      }
      .time {
        position: absolute;
        right: 0;
        top: 35px;
        font-size: 12px;
        font-weight: 400;
        color: #999;
        line-height: 25px;
      }
    }

    .side {
      width: 20%;
      float: right;
      margin-top: 50px;
      .book-author {
        background: #f5f5f5;
        border: 1px solid #f0f0f0;
        padding: 13px 0 0;
        margin-bottom: 2px;
        .au-head {
          width: 60px;
          height: 60px;
          position: relative;
          margin: 0 auto 24px;
          img {
            height: 60px;
            width: 60px;
            aspect-ratio: auto 60 / 60;
            border-radius: 30px;
          }
          em {
            position: absolute;
            background: #fc7403;
            border-radius: 3px;
            display: block;
            width: 60px;
            height: 20px;
            font-weight: 400;
            font-size: 12px;
            text-align: center;
            color: #fff;
            line-height: 20px;
            left: 0;
            bottom: -16px;
          }
        }
        .au-name {
          a {
            color: #e84848;
          }
        }
        .go-author-baike {
          margin-bottom: 15px;
          a,
          span {
            font-size: 12px;
            font-weight: 400;
            color: #999;
          }
          a:hover {
            color: #e84848;
          }
        }
        .au-words {
          margin-bottom: 19px;
          span {
            width: 33%;
            display: inline-block;
            font-weight: 400;
            font-size: 12px;
            text-align: center;
            color: #999;
            border-right: 1px solid #e6e6e6;
          }
          i {
            display: block;
            color: #666;
            letter-spacing: 1.17px;
            font-size: 14px;
            padding-top: 5px;
            font-family: Arial;
          }
        }
        .au-says {
          padding: 0 20px 18px;
          h4 {
            color: #999;
            font-size: 12px;
            margin-bottom: 6px;
          }
          .empty {
            line-height: 66px;
            text-align: center;
            color: #999;
            font-weight: 400;
            font-size: 12px;
            overflow: hidden;
          }
        }
      }
      .app-in {
        background: #f5f5f5;
        border: 1px solid #f0f0f0;
        padding: 16px 10px 16px 20px;
        height: 120px;
        .ewm {
          float: left;
          margin-right: 10px;
          img {
            width: 80px;
            aspect-ratio: auto 80 / 79;
            height: 79px;
          }
        }
        .txt {
          h3 {
            font-size: 14px;
            color: #999;
            letter-spacing: 1.17px;
            margin-bottom: 11px;
            font-weight: 700;
          }
          p {
            font-size: 13px;
            color: #333;
            font-weight: 400;
            letter-spacing: 1.17px;
          }
        }
      }
    }
  }
}

.book-main {
  width: 70%;
  float: left;
  .book-bill {
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    h3 {
      flex: 1;
      width: 50%;
      line-height: 60px;
      text-align: left;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 700;
    }
    a {
      flex: 1;
      width: 50px;
      line-height: 60px;
      font-size: 12px;
      text-align: right;
      font-weight: 400;
      color: #999;
    }
  }
  .donate {
    width: 316px;
    float: left;
    height: 244px;
    .rank {
      margin-top: 20px;
      background: #f5f5f5;
      border: 1px solid #f0f0f0;
      padding: 15px 0;
      height: 100px;
      margin-bottom: -1px;
      h4 {
        font-weight: 400;
        float: left;
        font-size: 14px;
        width: 104px;
        text-align: center;
        color: #333;
        a {
          display: block;
          .rk_ic {
            background: url(@/assets/images/book_ic1.png) no-repeat;
            width: 50px;
            height: 52px;
            display: block;
            margin: 6px auto 0;
          }
        }
      }
      .rank-r {
        float: right;
        color: #999;
        text-align: center;
        width: 208px;
        position: relative;
        min-height: 77px;
        span {
          display: inline-block;
        }
        .rank-r span:first-child {
          font-size: 14px;
          margin: 5px 0;
        }
        .a1 {
          font-size: 30px;
          color: #a11313;
          letter-spacing: 2.14px;
          min-width: 80px;
          display: inline-block;
          font-family: Arial;
        }
        .a2 {
          color: #a11313;
          font-size: 14px;
          min-width: 80px;
          display: inline-block;
          font-family: Arial;
        }
      }
    }
    .honor {
      margin-top: 4px;
      background: #f5f5f5;
      padding: 15px 0;
      height: 100px;
      margin-bottom: -1px;
      h4 {
        float: left;
        font-size: 14px;
        width: 104px;
        text-align: center;
        color: #333;
        .ho_ic {
          background: url(@/assets/images/book_ic1.png) no-repeat;
          background-position: 3px -65px;
          width: 50px;
          height: 52px;
          display: block;
          margin: 6px auto 0;
        }
      }
      .honor-r {
        float: right;
        width: 188px;
        padding-top: 7px;
        padding-left: 20px;
        min-height: 77px;
        span {
          font-size: 14px;
          color: #999;
          letter-spacing: 1.17px;
          line-height: 33px;
          text-align: left;
          i {
            color: #333;
            font-weight: 400;
            font-style: normal;
          }
          .a1 {
            color: #a11313;
            font-family: Arial;
          }
        }
      }
    }
  }
  .donate-fr {
    width: 600px;
    margin-top: 20px;
    float: right;
    h4 {
      font-size: 14px;
      margin-bottom: 12px;
      line-height: 22px;
      text-align: left;
      .more-link {
        font-size: 12px;
        color: #999;
        letter-spacing: 1px;
        float: right;
        line-height: 22px;
      }
    }
    .donate-list {
      li {
        float: left;
        width: 138px;
        margin-right: 7px;
        margin-bottom: 24px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        .li-box {
          font-size: 18px;
          color: #d32f2f;
          text-align: center;
          border: 1px solid #edacac;
          border-radius: 2px;
          margin-bottom: 8px;
          line-height: 55px;
          height: 55px;

          span:first-child {
            font-size: 18px;
            color: rgba(211, 47, 47, 0.67);
            background: rgba(211, 47, 47, 0.1);
            display: table-cell;
            width: 38px;
            border-right: 1px dotted rgba(211, 47, 47, 0.4);
            letter-spacing: 2.14px;
          }

          span:first-child:hover {
            color: #e84848;
            background: rgba(211, 47, 47, 0.2);
          }
          span:last-child {
            letter-spacing: 0;
            color: #d32f2f;
            display: table-cell;
            width: 96px;
            vertical-align: middle;
            line-height: 21px;
            height: 55px;
            overflow: hidden;
          }
        }
        .txt {
          color: #999;
          a {
            color: #999;
          }
          a:hover {
            color: #e84848;
          }
        }
      }
    }
  }
  .forum {
    min-height: 800px;
    width: 100%;
    line-height: 48px;
    padding-left: 40px;
    color: #333;
    position: relative;
    overflow: hidden;
    text-align: left;
    .items {
      padding: 30px 0 0;
      .user-head {
        position: relative;
        width: 50px;
        float: left;
        margin-right: 20px;
        text-align: center;
        img {
          border-radius: 25px;
          margin-bottom: 6px;
          width: 50px;
          aspect-ratio: auto 50 / 50;
          height: 50px;
        }
        em {
          background: url(@/assets/images/lv5.gif) no-repeat;
          width: 16px;
          height: 16px;
          display: inline-block;
          position: absolute;
          right: 2px;
          top: 33px;
        }
        span {
          display: block;
          font-size: 12px;
          color: #999;
          .star,
          .star_ic {
            background: url(@/assets/images/book_ic3.png) no-repeat;
            width: 56px;
            height: 22px;
            display: inline-block;
          }
          // .star2 {
          //   background-position: 0 -355px;
          // }
        }
      }
      .for-rp-con {
        overflow: hidden;
        border-bottom: 1px dotted #d6d6d6;
        .name {
          font-size: 14px;
          color: #999;
          margin-bottom: 16px;
          position: relative;
          font-weight: 700;
          line-height: 25px;
        }
        .dec {
          margin-bottom: 10px;
          color: #333;
          line-height: 25px;
          font-size: 16px;
          position: relative;
          a {
            max-height: 76px;
            overflow: hidden;
            color: #333;
            display: block;
            em {
              margin-left: 20px;
            }
          }
        }
        .for-quote {
          font-size: 12px;
          float: right;
          margin-left: 20px;
          color: #999;
          b {
            font-weight: 700;
            padding-left: 8px;
          }
        }
        .other {
          overflow: hidden;
          .date {
            color: #999;
            font-size: 14px;
            float: left;
          }
          .for-list {
            float: right;
            .for-praise {
              margin-left: 30px;
              em {
                width: 20px;
                height: 18px;
                display: inline-block;
                background: url(@/assets/images/book_ic2.png) no-repeat;
                vertical-align: -3px;
              }
              b {
                color: #bbbcbe;
              }
              em:hover {
                background-position: -53px 0;
              }
              em:hover + b {
                color: #e84848;
              }
            }
            .for-comment {
              cursor: pointer;
              display: inline-block;
              margin-left: 15px;
              // font-size: 14px;
              em {
                width: 20px;
                height: 18px;
                display: inline-block;
                background: url(@/assets/images/book_ic2.png) no-repeat;
                background-position: 0 -32px;
              }
              b {
                color: #bbbcbe;
              }
              em:hover {
                background-position: -53px -32px;
              }
              em:hover + b {
                color: #e84848;
              }
            }
          }
        }
      }
    }
  }
}
</style>