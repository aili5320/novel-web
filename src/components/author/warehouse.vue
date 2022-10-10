<template>
  <div>
    <div class="title">
      <el-radio v-model="radio" label="全部">全部</el-radio>
      <el-radio v-model="radio" label="已完结">已完结</el-radio>
      <el-radio v-model="radio" label="连载中">连载中</el-radio>
    </div>
    <div class="center" v-for="(item,index) in books" :key="index">
      <el-row></el-row>
      <el-row>
        <el-col :span="16"
          ><div class="grid-content bg-purple">
            <div class="pic">
              <div id="Eachword">
                <el-row>
                  <el-col :span="8"
                    ><div class="grid-content bg-purple">
                      <div class="bookbox">
                        <img :src="item.bookPic" alt="" />
                      </div></div
                  ></el-col>
                  <el-col :span="16"
                    ><div class="grid-content bg-purple-light">
                      <div class="bookInfo">
                        <div class="bookname">
                          <a href="javascript:;">{{item.bookName}}</a>
                        </div>
                        <div class="booklink">
                          <a href="javascript:;">{{item.autName}}</a>
                          |
                          <a href="javascript:;">{{item.genre}}</a>
                          |
                          <span>未完结</span>
                          |
                          <span>总收藏数:{{item.favorite}}</span>
                        </div>
                        <div class="bookintro">
                         {{item.intro}}
                        </div>
                        <div class="bookupdate">
                          <a href="javascript:;"> 最新章节:</a>
                          {{item.newChapter}}
                        </div>
                        <div class="bookstate">已审核</div>
                        <div class="book_btns">
                            <router-link class="edit" :to="{path:'/editBook',query :{bookId:item.bookId}}"> 编辑 </router-link>
                        </div>
                      </div>
                    </div></el-col
                  >
                </el-row>
              </div>
            </div>
          </div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple-light">
            <div class="tip">
              <div>
                <span>点击数量</span>
                <br />
                <span>{{item.hit}}</span>
              </div>
              <div>
                <span>收藏</span>
                <br />
                <span>{{item.favorite}}</span>
              </div>
              <div>
                <span>字数</span>
                <br />
                <span>{{item.wordNum}}</span>
              </div>
            </div>
            <div class="bookmanage">
              <!-- 分类 -->
              <div id="head">
                <div id="Collapse">
                  <el-row :gutter="12">
                    <el-col :span="12">
                    <router-link class="edit" :to="{path:'/addChapter',query :{bookId:item.bookId,bookName:item.bookName}}">
                        <el-card shadow="hover">
                          <span class="iconfont">&#xe620;</span>
                          章节管理
                        </el-card>
                      </router-link>
                    </el-col>
                    <el-col :span="12">
                    <router-link to="/drafts">
                      <el-card shadow="hover">
                        <span class="iconfont">&#xe60f;</span>
                        存稿箱
                      </el-card>
                      </router-link>
                    </el-col>
                    <el-col :span="12">
                      <el-card shadow="hover">
                        <span class="iconfont">&#xe611;</span>
                        书评管理
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card shadow="hover">
                        <span class="iconfont">&#xe839;</span>
                        更新情况
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card shadow="hover">
                        <span class="iconfont">&#xe645;</span>
                        作品数据
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card shadow="hover">
                        <span class="iconfont">&#xe60e;</span>
                        福利申请
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "warehouse",
  props:{
    books: {
       type: Array,
       default: () => []
    },
  },

  data() {
    return {
      radio: "全部",
      activeName: "first",
      booklist: {
        // 书名
        bookname: "",
        //  作者
        author: "",
        //  类型
        booktype: "",
        //  状态
        bookstatus: "",
        //  点赞数量
        countNum: "",
        //  最新章节名
        newest: "",
        //  最新章节地址
        newestUlr: "",
        //  小说封面
        bookImg: "@/assets/images/bookImg.jpeg",
      },
    };

    
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #1abc9c;
  background: #1abc9c;
}
/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #000000;
}
/deep/ .el-radio__label {
  font-size: 22px;
}

.title {
  float: left;
}

.center {
  width: 100%;
  height: 350px;
  border-bottom: 2px solid #f2f2f2;
  #Eachword {
    height: 160px;
    //  border-bottom: 1px dotted #cccccc;
    .bookbox {
      margin: 20px;
      width: 200px;
      height: 130px;
      float: left;
      img {
        width: 180px;
        height: 240px;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
      }
    }
    .bookInfo {
      margin: 20px;
      width: 60%;
      .bookname {
        display: block;
      }
      .booklink {
        margin-top: 5px;
        display: block;
        font-size: 12px;
        color: #9999a6;
        a {
          color: #9999a6;
        }
      }
      .bookintro {
        margin-top: 15px;
        font-size: 13px;
        color: #666;
        line-height: 20px;
        max-height: 40px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .bookupdate {
        text-align: left;
        margin-top: 5px;
        display: block;
        font-size: 12px;
        color: #9999a6;
      }
      .bookstate {
        margin-top: 5px;
        float: left;
        color: #939393;
        line-height: 20px;
        max-height: 40px;
        line-height: 28px;
        font-size: 18px;
        padding-top: 10px;
      }
      .book_btns {
        display: block;
        margin-top: 80px;
        .edit {
          background-color: #fff;
          border: 1px solid #eaeaea;
          border-radius: 3px;
          float: left;
          width: 115px;
          height: 45px;
          text-align: center;
          line-height: 45px;
          font-size: 18px;
          margin-right: 16px;
          color: #333;
        }
        .edit:hover {
          color:#f2f2f2;
          background-color: #1abc9c;
        }
      }
    }
  }
  .tip {
    display: flex;
    font-size: 14px;
    margin-bottom: 20px;
    div {
      flex: 1;
    }
  }
}
</style>