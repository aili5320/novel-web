<template>
  <div>
    <Wrap></Wrap>
    <div class="container">
      <div class="book-meta">
        <h1>{{ bookInfo.bookName }}</h1>
        <p>
          <span>
            <i>作者：</i>
            <a href="javascript:;">{{ bookInfo.autName }}</a>
          </span>
          <span>
            <i>更新时间：</i>
            <a href="javascript:;">{{ bookInfo.createTime }}</a>
          </span>
          <span>
            <i>最新章节：</i>
            <a href="javascript:;">{{ bookInfo.newChapter }}</a>
          </span>
        </p>
      </div>
      <div>
        <div class="section_title">
          <p>
            您已读至

            <router-link
                  :to="{
                    path: '/chapter',
                    query: {
                      chapterId: this.chapterId,
                      autName: bookInfo.autName,
                    },
                  }"
                  >
                  <span>{{ chapterName }}</span>
                </router-link>
          </p>
          <button class="sort_button">倒序</button>
          <span class="all">
            <a href="javascript">[全文阅读]</a>
          </span>
        </div>
        <div class="volume-list">
          <div>
            <div class="volume">
              <div class="arrow-box">
                <b class="top">
                  <i class="arrow1"></i>
                  <i class="arrow2"></i>
                </b>
              </div>
              <a class="subscri" href="javascript:;">
                <em class="btn">[分卷阅读]</em>
              </a>
              <em class="v-line">作品目录</em>
            </div>
            <div
              class="chapter-list"
            >
            <div v-for="(item, index) in chapterList"
              :key="index">
              <div class="col">
                <router-link
                  :to="{
                    path: '/chapter',
                    query: {
                      chapterId: item.chapterId,
                      autName: bookInfo.autName,
                      pageIndex:index,
                    },
                  }"
                  >{{ item.chapterName }}</router-link
                >
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
import { getChapterList } from "@/utils/apiBook";
import { queryBookInfo } from "@/utils/apiBook";
export default {
  name: "contentsList",
  data() {
    return {
      bookId: "",
      chapterList: [],
      bookInfo: {},
      chapterName:"",
      chapterId:""
    };
  },
  components: {
    Wrap,
  },
  async created() {
    this.bookId = this.$route.query.bookId;
    this.chapterName = this.$route.query.chapterName;
    this.chapterId = this.$route.query.chapterId;
    const req = {
      bookId: this.bookId,
    };
    this.chapterList = await getChapterList(req);
    this.bookInfo = await queryBookInfo(req);
  },
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  .book-meta {
    margin-top: 30px;
    text-align: center;
    padding-bottom: 30px;
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    span {
      margin-right: 20px;
      color: #999;
      i {
        color: #999;
        a:link {
          text-decoration: none;
        }
      }
    }
  }

  .section_title {
    padding: 12px 0;
    background: #f5f5f5;
    border-radius: 2px;
    margin-bottom: 25px;
    position: relative;
    height: 50px;
    zoom: 1;
    p {
      font-size: 12px;
      color: #333;
      text-align: center;
      a {
        color: #151515;
        span {
          font-size: 14px;
          color: #a11313;
          padding: 0 20px 1px 10px;
        }
      }
    }
    .sort_button {
      position: absolute;
      top: 14px;
      right: 0;
      margin-left: 15px;
      padding-left: 15px;
      width: 80px;
      background: url(@/assets/images/icon_flashback.png) no-repeat 15px center;
      border: none;
      outline: 0;
      color: #333;
    }
    .all {
      position: absolute;
      top: 14px;
      right: 90px;
      color: #151515;
      a:hover {
        color: #e84848;
      }
    }
    .sort_button:hover {
      color: #e84848;
    }
  }
  .volume-list {
    background: #fff;
    padding: 0 0 60px 0;
    text-align: left;
    .volume {
      color: #333;
      font: 700 18px/24px PingFangSC-Regular, HelveticaNeue-Light,
        "Helvetica Neue Light", "Microsoft YaHei", sans-serif;
      overflow: hidden;
      height: 50px;
      position: relative;
      line-height: 100%;
      padding: 15px 0 0 0;

      .arrow-box {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 0;
        top: 23px;
        .top {
          width: 8px;
          height: 8px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          .arrow1 {
            border-bottom: 4px #999 solid;
          }
          .arrow2 {
            top: 1px;
            border-bottom: 4px #fff solid;
          }
        }
      }
      .subscri {
        position: relative;
        z-index: 2;
        float: right;
        .btn {
          font: 12px/28px PingFangSC-Regular, "-apple-system", Simsun;
          position: absolute;
          z-index: 2;
          right: 18px;
          display: block;
          width: 100px;
          transition: background-color 0.5s;
          text-align: center;
          color: #a11313;
          font-weight: 400;
          font-style: normal;
        }
        .btn:hover {
          color: #e84848;
        }
      }
      .v-line {
        border-left: 4px solid #fc7403;
        padding-right: 8px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin-bottom: -2px;
      }
    }
    .chapter-list {
      display: flex ;
      flex-direction: row;
      flex-flow: wrap;
      overflow: hidden;
      margin-bottom: 45px;
      margin-top: 20px;
      color: #333;
      
      div {
       display: inline;
       width: 30%;
       height: 60px;
       border-bottom: 1px #ccc dotted;
        .col  {
        text-align: left;
        padding: 11px 0;
        border-bottom: none;
        a {
          line-height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        a:hover {
          color: #e84848;
        }
      }
      }
      
    }
  }
}
</style>