<template>
  <div>
    <Wrap></Wrap>
  <div class="search-box">
    
    <div class="search-main">
      <div class="search-tips">
       <span v-if="counts">共搜索到{{counts}}部与“</span>
       <span v-if="!counts">共搜索到0部与“</span>
        <span id="queryword">{{searchBook}}</span>”相关的作品
      </div>
      <div class="search-nav">
        <a href="javascript:;"><span>默认</span></a>
        <a href="javascript:;"><span>总字数</span></a>
        <a href="javascript:;"><span>总推荐</span></a>
        <a href="javascript:;"><span>总收藏</span></a>
        <a href="javascript:;"><span>用户总点击</span></a>
        <a href="javascript:;"><span>更新时间</span></a>
      </div>
      <div class="search-tab">
        <div class="search-list" v-for="(item, index) in bookList" :key="index">
          <div class="imgbox">
            <a href="javascript:;">
              <img :src="item.bookPic"  />
            </a>
          </div>
          <div class="result-infos">
            <h2 class="tit">
              <a href="javascript:;">
                <span>{{item.bookName}}</span>
              </a>
            </h2>
            <div class="bookinfo">
              <a href="javascript:;">
                {{item.autName}} 
              </a>
              <em>|</em>
              <a href="javascript:;">
                {{item.genre}}
              </a>
              <em>|</em>
              <span>连载</span>
              <em>|</em>
              <span v-if="item.wordNum">
                总字数：{{item.wordNum}}
                </span>
              <span v-if="!item.wordNum">总字数：0</span>  
            </div>
            <p>
             {{item.intro}}
            </p>
            <div class="key-word">关键词：{{item.theme}}</div>
          </div>
          <div class="btn">
            <router-link class="bkinfo" :to="{path:'/bookInfo',query :{bookId:item.bookId}}"> 书籍详情 </router-link>
            <router-link to="#" class="addshelf">加入书架</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="search-side">
      <div class="search-side-con">
        <div class="se-side-tit">大家都在搜</div>
        <div class="se-side-cell" v-for="(item,index) in 5" :key="index">
          <div class="imgbox">
            <a href="javascript:;">
              <img src="@/assets/images/BookPic.jpg" alt="" />
            </a>
          </div>
          <div class="se-side-info">
            <div class="bookname">
              <a href="javaxscript:;">剑来</a>
            </div>
            <div class="bookinfo">
              <a href="javascript:;">烽火戏诸侯</a>
              <em>|</em>
              <a href="javascript:;">玄幻武侠</a>
            </div>
            <p class="b-infos">
              我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！我是一名剑客。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Wrap from '@/components/common/wrap.vue'
import { queryBookList } from "@/utils/apiBook"
export default {
  name: "bookLists",
  data(){
    return {
     searchBook:"",
     bookList:[],
     counts:""
    }
  },
  components : {
    Wrap
  },


 async created() {
    this.searchBook = this.$route.query.searchBook;
    const reqData = {
       searchBook:this.searchBook
    }
    const result = await queryBookList(reqData);
    this.bookList = result.bookList
    this.counts= result.count;

    
  },
};
</script>

<style lang="less" scoped>
.search-box {  
  width: 80%;
  margin: 80px auto;
  .search-main {
    width: 80%;
    float: left;
    .search-tips {
      text-align: left;
      color: #666;
      letter-spacing: 0.93px;
      line-height: 1;
      font-size: 14px;
    }
    .search-nav {
      margin-top: 16px;
      height: 36px;
      width: 85%;
      line-height: 36px;
      background: #f7f7f7;
      text-align: left;
      span {
        font-size: 13px;
        color: #666;
        margin: 0 20px;
        cursor: pointer;
      }
      span:active {
        color: #d32f2f;
        font-weight: 700;
      }
    }
    .search-tab {
      margin-top: 20px;
      .search-list {
        padding: 20px 0;
        height: 180px;
        width: 85%;
        border-bottom: 1px dotted #ccc;
        .imgbox {
          float: left;
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 100px;
            height: 132px;
          }
        }
        .result-infos {
          float: left;
          width: 590px;
          margin-left: 20px;
          text-align: left;
          .tit a {
            font-size: 20px;
            color: #d32f2f;
            letter-spacing: 1px;
            font-weight: 400;
          }
          .bookinfo {
            padding: 10px 0 15px 0;
            color: #999;
            a {
              color: #999;
            }
            em {
              margin: 0 7px;
            }
          }
          p {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 13px;
            color: #666;
            line-height: 20px;
            letter-spacing: 0.93px;
            height: 40px;
          }
          .key-word {
            line-height: 24px;
            color: #888;
            letter-spacing: 0.86px;
          }
        }
        .btn {
          width: 100px;
          a {
            display: block;
            width: 100px;
            height: 30px;
            margin-bottom: 9px;
            text-align: center;
            line-height: 30px;
            overflow: hidden;
            font-size: 14px;
          }
          .bkinfo {
            background: #d32f2f;
            border-radius: 2px;
            color: #fff;
          }
          .addshelf {
            border: 1px solid #e6e6e6;
            border-radius: 2px;
            color: #333;
          }
        }
      }
    }
  }
  .search-side {
    float: left;
    width: 20%;
    border-radius: 5px;
    border: 2px solid #e6e6e6;
    .search-side-con {
      padding: 20px 10px 20px 20px;
      .se-side-tit {
        font-weight: 700;
        font-size: 14px;
        text-align: left;
      }
      .se-side-cell {
        margin-top: 25px;
        display: block;
        .imgbox {
          margin-bottom: 25px;
          float: left;
          width: 51px;
          height: 68px;
          margin-right: 13px;
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 51px;
            height: 68px;
          }
        }
        .se-side-info {
          margin-bottom: 25px;
          float: left;
          width: 136px;
          .bookname {
            font-size: 14px;
            text-align: left;
            color: #333;
            letter-spacing: 1px;
            width: 136px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bookinfo {
            padding: 5px 0 11px;
            color: #e6e6e6;
            overflow: hidden;
            a {
              color: #888;
            }
            a:nth-child(1) {
              max-width: 70px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .bookinfo > * {
            float: left;
          }
          .b-infos {
            color: #999;
            width: 136px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>