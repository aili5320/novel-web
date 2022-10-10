<template>
  <div class="center" ref="centerBj">
    <Wrap></Wrap>
    <div class="reader_crumb">
      <span>当前位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>武侠仙侠 </el-breadcrumb-item>
        <el-breadcrumb-item>{{ chapterInfo.bookName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ chapterInfo.chapterName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="reader_box" ref="readerBox">
      <div class="title">
        <div class="iconbox">
          <em class></em>
        </div>
        <div class="title_txtbox">{{ chapterInfo.chapterName }}</div>
      </div>
      <div class="bookinfo">
        作者：<a href="javascript:;">{{ autName }}</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;字数：
        <span>{{ chapterInfo.chapterNum }}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;更新时间：
        <span>{{ chapterInfo.createTime }}</span>
      </div>
      <div class="content">
        <p v-html="chapterInfo.content"></p>
      </div>
      <div class="chap_btnbox">
        <router-link
          :to="{
            path: '/contentsList',
            query: {
              bookId: chapterInfo.bookId,
              chapterName: chapterInfo.chapterName,
              chapterId: chapterInfo.chapterId,
            },
          }"
          >目录</router-link
        >
        <a href="javascript:;" @click="prevBtn">上一章</a>
        <a href="javascript:;" @click="nextBtn">下一章</a>
      </div>
      <div
        class="uiGPReaderAct"
        style=" position: fixed; top: 200px"
        ref="setDis"
      >
        <div class="gpd_btnpal">
          <router-link
            :to="{
              path: '/contentsList',
              query: {
                bookId: chapterInfo.bookId,
                chapterName: chapterInfo.chapterName,
                chapterId: chapterInfo.chapterId,
              },
            }"
            class="chapterList"
          >
            目录
          </router-link>
          <a href="javascript:;" class="bookShelf">书架</a>
            
          <router-link class="bookDetail" :to="{path:'/bookInfo',query :{bookId:this.bookId}}"> 书页 </router-link>
          <a href="javascript:;" class="readerSetting" @click="setBut">设置</a>
          <a href="javascript:;" class="view" @click="openBtn">评论</a>
        </div>
        <div class="gpd_flt_chapterlist"></div>
        <div class="gpd_flt_setting" v-if="setFlag">
          <h4>设置</h4>
          <div class="gpd_setLine gpd_setstyle">
            <div class="gpd_setName">阅读背景</div>
            <div class="gpd_setcon">
              <a href="javascript:;" class="sbs_1 active"></a>
              <a href="javascript:;" class="sbs_2 active"></a>
              <a href="javascript:;" class="sbs_3 active"></a>
              <a href="javascript:;" class="sbs_4 active"></a>
              <a href="javascript:;" class="sbs_5 active"></a>
              <a href="javascript:;" class="sbs_6 active"></a>
              <a href="javascript:;" class="sbs_7 active"></a>
              <a href="javascript:;" class="sbs_8 active"></a>
            </div>
          </div>
          <div class="gpd_setLine gpd_setfont">
            <div class="gpd_setName">正文字体</div>
            <div class="gpd_setcon">
              <a href="javascript:;" class="sbf_1">宋体</a>
              <a href="javascript:;" class="sbf_2">黑体</a>
              <a href="javascript:;" class="sbf_3">微软雅黑</a>
              <a href="javascript:;" class="sbf_4 active">楷体</a>
            </div>
          </div>
          <div class="gpd_setLine gpd_setsize">
            <div class="gpd_setName">字体大小</div>
            <div class="gpd_setcon">
              <div class="sbw_font">
                <a href="javascript:;" class="setfont">A-</a>
                <div class="nowfont">14</div>
                <a href="javascript:;" class="setfont">A+</a>
              </div>
            </div>
          </div>
          <div class="gpd_setLine gpd_setwidth">
            <div class="gpd_setName">页面宽度</div>
            <div class="gpd_setcon">
              <a href="javascript:;" class="sbw_1">640</a>
              <a href="javascript:;" sbw_2="sbw_2">800</a>
              <a href="javascript:;" class="sbw_3 active">默认</a>
              <a href="javascript:;" class="sbw_4">1280</a>
            </div>
          </div>
          <div class="gpd_btnLine">
            <button class="confirm">保存设置</button>
            <button class="reset">恢复默认</button>
          </div>
        </div>
      </div>
    </div>
    <div class="reader_r" v-if="readerOpen">
      <div class="chapter_forum">
        <div class="chapter_forum_close" @click="closeBtn"></div>
        <div class="chapter_forum_tit">
          <h3>章节评论</h3>
        </div>
        <div class="chapter_ipt">
          <div class="ch_form">
            <div class="form_ipt" @click="textBtn" v-if="!textFlag">
              <input type="text" placeholder="想说什么就大胆说出来吧……" />
            </div>
            <div class="form_ipt">
              <input type="text" placeholder="请输入标题……" v-model="forumTitle" maxlength="15" v-if="textFlag"/>
            </div>
            <div class="form_text" v-if="textFlag">
              <textarea placeholder="想说什么就大胆说出来吧……" v-model="comment" maxlength="200" ></textarea>
            </div>
          </div>
          <div class="form_publish" v-if="textFlag">
            <div class="form_code">
              <input type="text" />
              <div class="code">
                <img src="@/assets/images/imgcapt.jpg" alt="" />
                <em class="refresh"></em>
              </div>
            </div>
            <div class="fr">
              <!-- <div class="form_emoji"></div> -->
              <div class="form_btn" @click="sendBtn">发表</div>
            </div>
          </div>
        </div>
        <div class="chapter_thread_list">
          <div class="chapter_thread" v-for="(item,index) in forumInfo" :key="index">
            <ul class="forums-list">
              <li>
                <div class="user-head">
                  <a href="javascript:;">
                    <img
                      :src="item.userPic"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <em class="lv5"></em>
                    <span>
                      <i class="star"></i>
                    </span>
                  </a>
                </div>
                <div class="for-rp-con">
                  <div class="name">{{ item.realName }}</div>
                  <div class="dec">
                    <a href="javascript:;">{{ item.comment }}</a>
                  </div>
                  <div class="other">
                    <div class="date fl"></div>
                    <div class="fr for-list">
                      <a href="javascript:;" class="for-praise for-le">
                        <em></em>
                        0
                      </a>
                      <a href="javascript:;" class="for-comment for-le">
                        <em></em>
                        0
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wrap from "@/components/common/wrap.vue";
import { queryChapter } from "@/utils/apiBook";
import { chapterPage } from "@/utils/apiBook";
import { addForum } from "@/utils/apiBook";
import { queryForumByChapterId } from "@/utils/apiBook";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chapter",
  data() {
    return {
      activeIndex: "3",
      bookId: "",
      chapterId: "",
      chapterInfo: {},
      autName: "",
      pageNumber: 1,
      pageNo: "",
      setFlag: false,
      readerOpen: false,
      textFlag:false,
      forumTitle:"",
      comment:"",
      forumInfo:[]
    };
  },

  methods: {
   async sendBtn() {
      if(this.forumTitle==="") return this.$message.info("评论标题不能为空")
      if(this.comment==="") return this.$message.info("评论内容不能为空")
      var str = localStorage.getItem("userInfo");
      const userInfo = JSON.parse(str);
      const req = {
        bookId:this.bookId,
        chapterId:this.chapterInfo.chapterId,
        chapterName:this.chapterInfo.chapterName,
        userId:userInfo.userId,
        realName:userInfo.realName,
        userPic:userInfo.userPic,
        forumTitle:this.forumTitle,
        comment:this.comment,
      }
      this.forumInfo  = await addForum(req);
      this.comment=""
      this.forumTitle=""
    },
    textBtn(){
      this.textFlag = !this.textFlag
    },

    setBut() {
      this.setFlag = !this.setFlag;
    },
   async openBtn() {
      this.readerOpen = !this.readerOpen;
      if (this.readerOpen){
        this.$refs.readerBox.style.marginLeft = "170px";
        this.$refs.setDis.style.left = "100px";
        const req = {
        chapterId:this.chapterInfo.chapterId,
      }
      this.forumInfo  = await queryForumByChapterId(req);
        return;
      } else {
        this.$refs.readerBox.style.margin = "0 auto";
        this.$refs.setDis.style.left = "210px";
      }
    },
    closeBtn (){
       this.$refs.readerBox.style.margin = "0 auto";
       this.$refs.setDis.style.left = "210px";
       this.readerOpen = !this.readerOpen;
    },
    async nextBtn(){
      this.pageNumber = this.pageNo + 1;
      const req1 = {
        bookId: this.bookId,
        pageNumber: this.pageNumber,
      };
      const data1 = await chapterPage(req1);
      this.chapterInfo = data1.chapterInfo;
      this.pageNo = data1.pageNo;
      const totalCount = data1.totalCount;
      if (this.pageNumber > totalCount) {
        return this.$message.info("已经是最新章节了");
      }
    },
    async prevBtn() {
      this.pageNumber = this.pageNo - 1;
      if (this.pageNumber == 0) {
        return this.$message.info("已经是第一章了");
      }
      const req2 = {
        bookId: this.bookId,
        pageNumber: this.pageNumber,
      };
      const data2 = await chapterPage(req2);
      this.chapterInfo = data2.chapterInfo;
      this.pageNo = data2.pageNo;
    },
  },
  components: {
    Wrap,
  },
  async created() {
    // 设置文本不允许复制
    this.$nextTick(() => {
      // 禁用右键
      document.oncontextmenu = new Function("event.returnValue=false");
      // 禁用选择
      document.onselectstart = new Function("event.returnValue=false");
    });

    this.bookId = this.$route.query.bookId;
    this.chapterId = this.$route.query.chapterId;
    this.autName = this.$route.query.autName;
    if (this.bookId != null) {
      const req1 = {
        pageNumber: this.pageNumber,
        bookId: this.bookId,
      };
      const data = await chapterPage(req1);
      this.chapterInfo = data.chapterInfo;
      this.pageNo = data.pageNo;
    } else if (this.chapterId != "") {
      const req1 = {
        chapterId: this.chapterId,
      };
      this.chapterInfo = await queryChapter(req1);
      const page = this.$route.query.pageIndex;
      this.pageNo = page - 0 + 1;
      this.bookId = this.chapterInfo.bookId;
    }
  },
};
</script>

<style lang="less" scoped>
.center {
  width: 100%;
  background-color: #d9cdb6;
  min-height: 1200px;
  position: relative;
  .head {
    display: inline-flex;
    width: 100%;
    height: 60px;
    background: #fff;
    position: relative;
    z-index: 99;
    .wrap {
      width: 80%;
      margin: 0 auto;
      .logo {
        margin-top: 7px;
        float: left;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .floatNav {
        float: left;
        width: 480px;
      }
      .search {
        float: left;
      }
      .userInfo {
        height: 100%;
        margin-top: 10px;
        .userPic {
          float: left;
          position: relative;
          margin-left: 20px;
          letter-spacing: 1px;
          margin-right: 20px;
          img {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 20%);
            position: relative;
            z-index: 10;
            cursor: pointer;
          }
        }
        .user-blank {
          display: none;
          width: 340px;
          height: 225px;
          background: rgba(250, 250, 250, 0.98);
          box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%);
          position: absolute;
          left: 910px;
          top: 50px;
          z-index: 8;
        }
        .userPic:hover + .user-blank {
          display: block;
        }
        .user-blank:hover {
          display: block;
        }
        .message {
          float: left;
          line-height: 45px;
          margin-left: 10px;
        }
      }
    }
  }
  .el-breadcrumb {
    margin-top: 40px;
    width: 45%;
    display: inline-block;
    font-size: 12px;
    position: relative;
    
  }
  .reader_box {
    padding: 0 100px;
    width: 960px;
    position: relative;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    background-color: #faeed7;
    min-height: 1200px;
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 5%);
    .title {
      padding-top: 80px;
      padding-bottom: 10px;
      text-align: center;
      em {
        font-weight: 400;
        font-style: normal;
      }
      .title_txtbox {
        line-height: 40px;
        font-size: 28px;
        color: #333;
        letter-spacing: 1.08px;
        display: inline;
        font-weight: 700;
      }
    }
    .bookinfo {
      color: #999;
      text-align: center;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      letter-spacing: 0.86px;
      line-height: 23px;
      padding-bottom: 20px;
      position: relative;
      border-bottom: 1px dotted #ccc;
    }
    .content {
      padding: 30px 0 50px;
      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        text-align: left;
        text-indent: 2em;
        color: #333;
        font-family: 宋体, SimSun, STSong;
        letter-spacing: 1px;
        line-height: 2em;
        text-indent: 2em;
        font-size: 14px;
      }
    }
    .chap_btnbox {
      display: table;
      height: 50px;
      width: 100%;
      border-spacing: 5px 0;
      a {
        background: rgba(0, 0, 0, 0.03);
        border-radius: 2px;
        height: 50px;
        display: table-cell;
        border-collapse: separate;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #333;
        letter-spacing: 0.93px;
        width: 180px;
      }
      a:hover {
        background-color: #ccc;
        color: #fff;
      }
    }
  }
  .uiGPReaderAct {
    width: 70px;
    left: 210px;
    .gpd_btnpal {
      position: relative;
      z-index: 11;
      a {
        float: left;
        width: 60px;
        height: 60px;
        background-color: rgba(250, 250, 250, 0.3);
        font-size: 12px;
        color: #999;
        letter-spacing: 0.93px;
        text-align: left;
        padding-left: 17px;
        padding-top: 35px;
        margin-bottom: 2px;
        background-image: url(@/assets/images/reader_ico.png);
        background-repeat: no-repeat;
        position: relative;
      }
      .chapterList {
        background-position: 0 -7px;
      }
      .bookShelf {
        background-position: 0 -127px;
      }
      .bookDetail {
        background-position: 0 -67px;
      }
      .readerSetting {
        background-position: 0 -187px;
      }
      .view {
        background-position: 0 -248px;
      }
      a:hover {
        background-color: rgba(250, 250, 250, 0.5);
      }
    }

    .gpd_flt_setting {
      width: 580px;
      height: 450px;
      background-color: rgba(250, 250, 250, 0.98);
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
      left: 70px;
      position: absolute;
      padding: 0 35px;
      h4 {
        font-size: 16px;
        color: #333;
        letter-spacing: 0.83px;
        height: 50px;
        line-height: 60px;
        font-weight: 700;
        border-bottom: 1px solid #e6e6e6;
        overflow: hidden;
        margin-bottom: 20px;
      }
      .gpd_setLine {
        height: 50px;
        clear: both;
        margin-bottom: 20px;
        .gpd_setName {
          font-size: 14px;
          color: #666;
          letter-spacing: 0.72px;
          width: 85px;
        }
        .gpd_setName,
        .gpd_setcon {
          display: table-cell;
          vertical-align: middle;
        }
        .gpd_setcon {
          .sbw_font {
            border: 1px solid #d6d6d6;
            overflow: hidden;
            background: #fff;
            border-radius: 2px;
            a {
              border: 0;
              font-size: 18px;
              margin: 0;
              padding: 0 20px;
            }
            .nowfont {
              float: left;
              height: 18px;
              border: 2px solid #e6e6e6;
              font-size: 18px;
              line-height: 18px;
              padding: 0 28px;
              border-width: 0 2px;
              margin-top: 8px;
              color: #999;
            }
          }
          a {
            background: #fff;
            border: 1px solid #d6d6d6;
            border-radius: 2px;
            height: 34px;
            line-height: 34px;
            padding: 0 28px;
            float: left;
            margin-right: 9px;
            font-size: 14px;
            color: #333;
          }
          a:hover {
            border-color: #e84848;
            color: #e84848;
          }
          .active {
            border-color: #e84848;
            color: #e84848;
          }
          .sbs_1 {
            background: #faeed7;
          }
          .sbs_2 {
            background: #e9eff5;
          }
          .sbs_3 {
            background: #e7f0e1;
          }
          .sbs_4 {
            background: #f2e4e9;
          }
          .sbs_5 {
            background: #f7f7f7;
          }
          .sbs_6 {
            background: url(@/assets/images/style6.png);
            background-size: cover;
          }
          .sbs_7 {
            background: url(@/assets/images/bg7.png);
          }
          .sbs_8 {
            background-color: #343434;
            background-image: url(@/assets/images/reader_ico.png);
            background-position: -132px -72px;
          }
          .sbf_1 {
            font-family: 宋体, SimSun, STSong;
          }
          .sbf_2 {
            font-family: 黑体, SimHei, STHeiti;
          }
          .sbf_3 {
            font-family: 微软雅黑, Microsoft YaHei, Apple LiGothic Medium;
          }
          .sbf_4 {
            font-family: 楷体, KaiTi, BiauKai;
          }
        }
      }
      .gpd_setLine.gpd_setstyle .gpd_setcon a {
        width: 38px;
        height: 38px;
        border: 1px solid #d6d6d6;
        border-radius: 40px;
        float: left;
        padding: 0;
        margin-right: 10px;
      }

      .gpd_btnLine {
        text-align: center;
        padding: 15px 0;
        button {
          border-radius: 2px;
          width: 130px;
          height: 36px;
          line-height: 36px;
          font-size: 14px;
          display: inline-block;
          margin: 0 30px;
          cursor: pointer;
        }
        .confirm {
          background: #d32f2f;
          border: 1px solid #d32f2f;
          color: #fff;
        }
        .reset {
          background: #fff;
          border: 1px solid #d6d6d6;
          color: #333;
        }
      }
    }
  }
  .reader_r {
    width: 400px;
    position: absolute;
    top: 124px;
    right: -15px;
    z-index: 50;
    .chapter_forum {
      width: 360px;
      padding: 20px 20px 30px;
      position: absolute;
      top: 0;
      background: #faeed7;
      border-left: 1px solid #ccc;
      .chapter_forum_close {
        background: url(@/assets/images/widget_close.png) no-repeat center;
        width: 48px;
        height: 48px;
        position: absolute;
        right: 6px;
        top: 6px;
        cursor: pointer;
      }
      .chapter_forum_tit {
        height: 48px;
        line-height: 48px;
        h3 {
          float: left;
          font-family: MicrosoftYaHei;
          font-size: 18px;
          color: #999;
          letter-spacing: 0.8px;
          margin-right: 15px;
          cursor: pointer;
          color: #333;
          font-weight: 700;
        }
      }
      .chapter_ipt {
        margin-bottom: 20px;
        .ch_form {
          .form_ipt {
            background: #fff;
            border: 1px solid #e0e0e0;
            padding: 0 20px;
            transition: opacity ease 0.2s;
            input {
              height: 50px;
              border: none;
              background: 0 0;
              width: 100%;
              color: #333;
              font-size: 14px;
              line-height: 50px;
              padding: 0;
              outline: 0;
            }
          }
          .form_text {
            transition: height ease 0.2s;
            overflow: hidden;
            margin-bottom: 13px;
            padding: 0 20px;
            height: 154px;
            margin-top: -1px;
            background: #fff;
            border: 1px solid #e0e0e0;
            textarea {
              border: none;
              resize: none;
              outline: 0;
              width: 100%;
              color: #333;
              font-size: 14px;
              height: 138px;
              line-height: 26px;
              display: block;
              padding-top: 12px;
              background: 0 0;
            }
          }
        }
        .form_publish {
          position: relative;
          .form_code {
            float: left;
            input {
              height: 50px;
              border: none;
              border-radius: 2px;
              width: 60px;
              outline: 0;
              height: 32px;
              background: #fff;
              border: 1px solid #e0e0e0;
              margin-right: 4px;
              float: left;
              text-align: center;
            }
            .code {
              height: 30px;
              float: left;
              img {
                width: 60px;
                height: 32px;
                display: inline-block;
                margin-right: 4px;
                vertical-align: baseline;
              }
              .refresh {
                width: 16px;
                height: 32px;
                display: inline-block;
                background: url(@/assets/images/book_ic2.png) no-repeat;
                background-position: 0 -381px;
                font-weight: 400;
                font-style: normal;
              }
            }
          }
          .fr {
            float: right;
            // .form_emoji {
            //   width: 20px;
            //   height: 30px;
            //   vertical-align: middle;
            //   cursor: pointer;
            //   position: relative;
            //   float: left;
            //   background: url(@/assets/images/book_ic2.png) no-repeat;
            //   background-position: 0 -278px;
            //   margin-right: 30px;
            // }
            .form_btn {
              background: #d32f2f;
              cursor:pointer;
              border-radius: 2px;
              width: 60px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              font-size: 14px;
              color: #fff;
              float: left;
              opacity: 0.5;
            }
          }
        }
      }
      .chapter_thread_list {
        min-height: 875px;
        transition: height 0.3s;
        text-align: left;
        .chapter_thread {
          ul {
            margin: 0;
            padding: 0;
            font-size: 12px;
            word-wrap: break-word;
            font-family: PingFangSC-Regular, HelveticaNeue-Light,
              "Helvetica Neue Light", "Microsoft YaHei", sans-serif, Simsun;
            color: #333;
            li {
              padding: 30px 0 0;
              .user-head {
                position: relative;
                width: 50px;
                height: 50px;
                float: left;
                margin-right: 20px;
                text-align: center;
                img {
                  border-radius: 25px;
                  margin-bottom: 6px;
                }
                em {
                  background: url(@/assets/images/lv5.gif) no-repeat;
                  width: 16px;
                  height: 16px;
                  display: inline-block;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                }
                span {
                  display: block;
                  font-size: 12px;
                  color: #999;
                  .star {
                    background: url(@/assets/images/book_ic3.png) no-repeat;
                    width: 56px;
                    height: 22px;
                    display: inline-block;
                  }
                }
              }
              .for-rp-con {
                overflow: hidden;
                padding-bottom: 22px;
                border-bottom: 1px dotted #d6d6d6;
                .name {
                  color: #999;
                  margin-bottom: 12px;
                  position: relative;
                  font-weight: 700;
                  line-height: 25px;
                  font-size: 14px;
                }
                .dec {
                  font-size: 12px;
                  margin-bottom: 15px;
                  color: #333;
                  line-height: 25px;
                  position: relative;
                }
                .other {
                  .date {
                    float: left;
                    color: #999;
                    font-size: 14px;
                  }
                  .for-list {
                    float: right;
                    .for-le {
                      cursor: pointer;
                      display: inline-block;
                      margin-left: 15px;
                      color: #999;
                    }
                    .for-le em {
                      width: 20px;
                      height: 18px;
                      display: inline-block;
                    }
                    .for-comment,
                    .for-praise {
                      color: #999;
                      font-size: 14px;
                      em {
                        background: url(@/assets/images/book_ic2.png) no-repeat;
                        vertical-align: -3px;
                      }
                    }
                    .for-praise {
                      margin-left: 30px;
                    }
                    .for-comment em {
                      background-position: 0 -34px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>