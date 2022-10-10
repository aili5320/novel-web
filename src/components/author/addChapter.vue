<template>
  <div>
    <div class="pub_nav_bg">
      <div class="au_box">
        <div class="mod_tit">
          <span class="bookname">{{ ruleForm.bookName }}</span>
          <a @click="toBack" class="bookstore">作品库</a>
        </div>
      </div>
    </div>
    <div class="pub_con_bg">
      <div class="manage">
        <div class="listerrbg" style="height: 754px"></div>
        <div class="errlist" id="listerr" v-if="modname">
          <div class="larw">
            <input type="text" value="正文" maxlength="20" class="errcopy" />
          </div>
          <div class="errbtns">
            <a href="javascript:;" class="err_save btn_bg">保存</a>
            <a
              href="javascript:;"
              class="err_cancel btn_fg"
              @click="modname = false"
              >取消</a
            >
            <a href="javascript:;" class="err_del">删除本卷</a>
          </div>
        </div>
        <div class="side" style="height: 654px">
          <div class="side_tit">
            <h2 class="booktome">目录</h2>
          </div>
          <div class="articelist" id="artList" style="height: 615px">
            <div class="tomelist" style="height: 565px">
              <ul>
                <li class="l_tome">
                  <p class="art_tit">
                    <em class="l_name" title="正文">正文</em>
                    <span class="mod_ps"> </span>
                    <em
                      title="修改卷名"
                      @click="modname = true"
                      class="modname"
                    ></em>
                  </p>
                </li>
                <div class="title" v-for="(item, index) in result" :key="index">
                  <ul>
                    <a href="javascritp:;" @click="queryBtn(item.chapterId)">
                      <li>
                        {{ item.chapterName }}
                        <!-- <em
                      title="删除本章节"
                      @click="deteleBtn(item.chapterId)"
                      class="modname"
                    ></em> -->
                        <template>
                          <el-button
                            type="text"
                            title="删除本章节"
                            @click="deteleBtn(item.chapterId)"
                            class="modname"
                          ></el-button>
                        </template></li
                    ></a>
                  </ul>
                </div>
              </ul>
            </div>
            <p class="creat_tome"></p>
          </div>
        </div>
        <div class="wide" style="min-height: 654px">
          <div class="wide_arr">
            <a href="javascript:;" class="pub_ico arr_left"></a>
          </div>
          <div class="sensitive" v-if="false">
            <div class="senspad">
              <p>
                <em class="pub_ico"></em>
                您输入的内容中包含违禁词:
                <span class="strong">展位</span>
              </p>
            </div>
          </div>
          <div class="sensitive" v-if="hint">
            <div class="senspad">
              <p>
                <em class="pub_ico"></em>
                <span class="strong">{{ tips }}</span>
              </p>
            </div>
          </div>

          <div class="bookend">
            <div class="book_tome"></div>
            <h2 class="book_chapter"></h2>
            <div class="book_content"></div>
            <div class="book_summary" style="display: none"></div>
            <div class="book_authorsay"></div>
          </div>
          <div class="coding">
            <div class="w_list">
              <span class="font_c_gray" style="margin-left: 16px"
                >最新章节：</span
              >
              {{ lastchapterName }}
            </div>

            <div class="w_list clear">
              <div class="minstar fl">*</div>
              <div class="w_con">
                <div class="au_input art_name">
                  <em class="font_c_gray">章节名</em>
                  <input
                    type="text"
                    maxlength="20"
                    v-model="ruleForm.chapterName"
                    placeholder="请输入章节名20字以内"
                    class="df_input"
                  />
                </div>
              </div>
            </div>
            <div class="w_list clear">
              <div class="minstar fl">*</div>
              <div class="w_con">
                <div class="textarea">
                  <el-input
                    type="textarea"
                    placeholder="请输入章节内容  50000字以内"
                    v-model="ruleForm.content"
                    maxlength="50000"
                    show-word-limit
                  >
                  </el-input>
                </div>
              </div>
            </div>
            <div class="w_list clear">
              <div class="minstar fl"></div>
            </div>
            <div class="w_list clear">
              <div class="w_con">
                <div class="authorsay">
                  <p class="au_input">
                    <em class="pub_ico arr_drop fr"></em>
                    <input
                      type="text"
                      maxlength="100"
                      v-model="ruleForm.sendWord"
                      placeholder="作者有话说（同步圈子和粉丝交流）"
                      class="df_input"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div class="w_list clear">
              <div class="w_con" v-if="uploadWord">
                <a href="javascript:;" class="upload_c btn_bg" @click="add"
                  >上传章节</a
                >
              </div>
              <div class="w_con" v-if="!uploadWord">
                <a
                  href="javascript:;"
                  class="upload_c btn_bg"
                  style="background: #409eff"
                  @click="update"
                  >更新章节</a
                >
                <br />
                <a
                  href="javascript:;"
                  class="upload_c"
                  style="margin-top: 20px"
                  @click="uploadBtn"
                  >上传章节</a
                >
              </div>
            </div>
            <div class="w_list clear">
              <div class="minstar fl"></div>
              <div class="w_con">
                <div class="upload_warn">
                  <p class="warn_p">
                    <em class="pub_ico ico_err" style="margin-left: 0"></em>
                    上传章节说明
                  </p>
                  <p>
                    1、编辑、移动、删除章节在作品库中的作品列表里该作品的【章节管理】里。
                  </p>
                  <p>
                    2、分卷不能移动，创建分卷、章节的顺序即为分卷、章节在目录中的展示顺序，也就是书的顺序。
                  </p>
                  <p>
                    3、程序能处理绝大多数文本格式的排版，但请不要录入带硬回车换行的作品
                  </p>
                  <p>
                    4、添加的章节会被程序识别为作品或当前卷的最新一章，请注意选择章节所在卷。章节请按顺序输入，不要颠倒。
                  </p>
                  <p>
                    5、章节名字应与内容相符，不具有文学性、故意夸大其词的广告性、政治性以及恶搞性章节名将会被删除。
                  </p>
                  <p>
                    6、上传的章节内容必须与符合收录标准，不符合收录标准的作品将被禁阅或删除。
                  </p>
                  <p>
                    7、凡是六小时内重复上传新章节、单章字数低于2000字将不在首页更新列表，以及分类更新列表内显示更新情况(漫画作品除外)
                  </p>
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
import { addChapter } from "@/utils/apiBook";
import { getChapterList } from "@/utils/apiBook";
import { queryChapter } from "@/utils/apiBook";
import { updateChapter } from "@/utils/apiBook";
import { deteleChapter } from "@/utils/apiBook";

import { newline } from "@/utils/stringUtils"
import { nowrap } from "@/utils/stringUtils"


export default {
  name: "addChapter",
  data() {
    return {
      ruleForm: {
        bookName: "",
        bookId: "",
        chapterName: "",
        content: "",
        sendWord: "",
      },
      modname: false,
      hint: false,
      tips: "",
      result: [],
      lastchapterName: "",
      eachChapter: {},
      uploadWord: true,
      updataId: "",
    };
  },
  methods: {
    deteleBtn(chapterId) {
      const reqData = {
        chapterId: chapterId,
      };

      this.$confirm("此操作将永久删除该章节, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          deteleChapter(reqData);
          this.$router.go(0);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    async queryBtn(chapterId) {
      this.updataId = chapterId;
      const reqData = {
        chapterId: chapterId,
      };
      this.eachChapter = await queryChapter(reqData);
      this.ruleForm.chapterName = this.eachChapter.chapterName;
      this.ruleForm.content = nowrap(this.eachChapter.content); 
      this.ruleForm.sendWord = this.eachChapter.sendWord;
      this.uploadWord = false;
    },

    // 修改章节
    update() {
      if (this.ruleForm.chapterName == "") {
        this.hint = true;
        this.tips = "章节名不能为空";
        return;
      }
      if (this.ruleForm.content == "") {
        this.hint = true;
        this.tips = "章节内容不能为空";
        return;
      }
      
      this.ruleForm.content = newline(this.ruleForm.content);
      this.$set(this.ruleForm, "chapterId", this.updataId);
      updateChapter(this.ruleForm);
      this.$router.go(0);
    },

    //  新增章节
    add() {
      if (this.ruleForm.chapterName == "") {
        this.hint = true;
        this.tips = "章节名不能为空";
        return;
      }
      if (this.ruleForm.content == "") {
        this.hint = true;
        this.tips = "章节内容不能为空";
        return;
      }
      this.hint = false;
      this.ruleForm.content = newline(this.ruleForm.content);
      addChapter(this.ruleForm);
      this.$router.go(0);
    },
    toBack() {
      this.$router.go(-1);
    },
    uploadBtn() {
      this.$router.go(0);
    },
  },

  async created() {
    this.ruleForm.bookId = this.$route.query.bookId;
    this.ruleForm.bookName = this.$route.query.bookName;
    const bookIdInfo = {
      bookId: this.ruleForm.bookId,
    };
    this.result = await getChapterList(bookIdInfo);
    const lastArr = this.result.slice(-1);
    this.lastchapterName = lastArr[0].chapterName;
  },
};
</script >

<style lang="less" scoped>
/deep/ .el-textarea__inner {
  width: 800px;
  height: 333px;
  display: block;
  border: 1px solid #d9d9d9;
  padding: 10px;
  color: #333;
  font-size: 12px;
  line-height: 24px;
  word-break: break-all;
  outline: none;
  text-decoration: none;
  resize: none;
}

/deep/ .el-textarea__inner:focus {
  outline: 0;
  border-color: #343a40;
}

/deep/ .el-textarea .el-input__count {
  color: #c0c4cc;
  right: 40px;
}

.pub_nav_bg {
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  z-index: 4;
  background-color: #fff;
  box-shadow: 0 0 4px #ccc;
  .au_box {
    width: 90%;
    position: relative;
    .mod_tit {
      color: #333;
      font-family: "Microsoft YaHei";
      line-height: 70px;
      text-align: center;
      position: relative;
      .bookname {
        font-size: 24px;
      }
      .bookstore {
        background-color: #1abc9c;
        color: #fff;
        border-radius: 3px;
        padding: 6px 30px;
        line-height: 22px;
        font-size: 16px;
        position: absolute;
        top: 20px;
        right: 0;
        cursor: pointer;
        transition: all 0.3s linear;
      }
    }
  }
}
.pub_con_bg {
  background-color: #f0f1f2;
  min-height: 1200px;
  padding-bottom: 50px;
  .manage {
    width: 1200px;
    margin: 0 auto;
    padding-top: 95px;
    position: relative;
    .listerrbg {
      background: #000;
      opacity: 0.3;
      filter: alpha(opacity=30);
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 8;
      display: none;
    }
    .errlist {
      padding: 15px 20px;
      border: 2px dashed #e7e7eb;
      background-color: #fff;
      font-size: 13px;
      font-weight: normal;
      position: fixed;
      width: 278px;
      z-index: 9;
      .larw {
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        .errcopy {
          background-color: #5d95e8;
          color: #fff;
          padding: 2px 5px;
          display: block;
          width: 270px;
          border: none;
          outline: none;
          text-decoration: none;
          font-style: normal;
        }
      }
      .errbtns {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        height: 40px;
        overflow: hidden;
        margin: 20px -10px 0;
        a {
          float: left;
          display: inline;
          line-height: 38px;
          padding: 0 20px;
        }
        .btn_bg {
          background-color: #1abc9c;
          color: #fff;
          border-radius: 3px;
        }
        .btn_fg {
          color: #1abc9c;
        }
        .err_del {
          color: #e74c3c;
          float: right;
        }
      }
    }

    .side {
      width: 320px;
      border: 1px solid #e7e7eb;
      background-color: #fff;
      color: #333;
      height: 100%;
      position: fixed;
      top: 95px;
      overflow: hidden;
      padding-bottom: 5px;
      .side_tit {
        position: relative;
        overflow: hidden;
        .booktome {
          font-size: 18px;
          line-height: 38px;
          height: 38px;
          font-family: "Microsoft YaHei";
          text-align: center;
          background-color: #e3e4e6;
          font-weight: normal;
          border-bottom: 1px solid #fff;
          position: relative;
          overflow: hidden;
        }
      }
      .articelist {
        overflow: hidden;
        position: relative;
        .tomelist {
          position: relative;
          overflow: auto;
          .l_tome {
            text-indent: 10px;
            line-height: 38px;
            height: 38px;
            overflow: hidden;
            font-weight: bold;
            font-size: 14px;
            border-bottom: 1px solid #e7e7eb;
            cursor: pointer;
            position: relative;
            .art_tit {
              text-align: left;
              .l_name {
                font-style: normal;
              }
              .mod_ps {
                position: absolute;
                right: 0px;
                bottom: 0px;
                display: none;
                text-indent: 0;
                background-color: #eaeaea;
                padding-right: 5px;
              }
              .modname {
                margin-top: 5px;
                display: none;
                float: right;
                width: 20px;
                height: 20px;
                background-position: -1px -315px;
                background-image: url(@/assets/images/ico_c.png);
                background-repeat: no-repeat;
                vertical-align: middle;
                font-style: normal;
              }
            }
            .art_tit:hover .modname {
              display: block;
            }

            .chapterlist {
              position: relative;
              overflow: auto;
              .add_chapter {
                display: none;
                position: fixed;
                bottom: 0;
                width: 305px;
                border: none;
                margin: 5px 0 0;
                height: 42px;
                padding: 0px 0 0 15px;
                background: url(@/assets/images/addchapter.png) no-repeat center;
              }
            }
          }
          .l_tome:hover {
            background-color: #eaeaea;
          }

          .title {
            overflow: overflow-y;
            text-indent: 10px;
            line-height: 38px;
            font-size: 14px;
            text-align: left;

            li {
              .modname {
                margin-top: 5px;
                display: none;
                float: right;
                width: 20px;
                height: 20px;
                background-position: -1px -315px;
                background-image: url(@/assets/images/ico_c.png);
                background-repeat: no-repeat;
                vertical-align: middle;
                font-style: normal;
              }
            }
            li:hover {
              background-color: #eaeaea;
            }

            li:hover .modname {
              display: block;
            }
          }
        }
        .creat_tome {
          position: absolute;
          bottom: 1px;
          z-index: 3;
          background: url(@/assets/images/addtome.png) no-repeat;
          width: 318px;
          height: 42px;
          cursor: pointer;
        }
      }
    }
    .wide {
      border: 1px solid #e7e7eb;
      background-color: #fdfdfd;
      margin-left: 327px;
      padding: 35px 0 30px 22px;
      font-size: 14px;
      position: relative;
      z-index: 3;
      .wide_arr {
        width: 18px;
        height: 48px;
        border: 1px solid #d9d9d9;
        position: fixed;
        top: 50%;
        z-index: 3;
        margin-top: -25px;
        margin-left: -23px;
        .arr_left {
          background-position: -1px -353px;
          width: 18px;
          height: 48px;
          background-image: url(@/assets/images/ico_c.png);
          background-repeat: no-repeat;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .sensitive {
        padding: 0 20px 20px 14px;
        position: relative;
        // display: none;
        .senspad {
          background-color: #fff5bb;
          font-family: SimSun;
          font-size: 12px;
          color: #333;
          line-height: 24px;
          padding: 10px;
          .pub_ico {
            background-position: -14px -52px;
            width: 15px;
            height: 16px;
            margin: 0 5px 0 0;
            background-image: url(@/assets/images/ico_c.png);
            background-repeat: no-repeat;
            display: inline-block;
            vertical-align: middle;
          }
          .strong {
            color: #e74c3c;
            padding-left: 10px;
          }
        }
      }
      .bookend {
        display: none;
        font-family: "SimSun";
        color: #333;
        padding: 0 30px 30px;
        .bookend {
          display: none;
          font-family: "SimSun";
          color: #333;
          padding: 0 30px 30px;
          .book_tome {
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 1px;
            line-height: 24px;
            padding-bottom: 15px;
          }
          h2 {
            font-size: 13px;
            font-weight: bold;
            line-height: 24px;
            padding-bottom: 5px;
          }
          .book_content {
            position: relative;
          }
          .book_summary {
            padding-top: 20px;
          }
        }
      }
      .coding {
        .w_list {
          display: block;
          font-size: 14px;
          text-align: left;
          margin-top: 15px;
          .font_c_gray {
            color: #999;
            margin-left: 16px;
          }
          .minstar {
            color: #a0202d;
            padding-right: 5px;
            font-size: 16px;
            font-family: "SimSun";
            line-height: 40px;
            width: 6px;
            height: 40px;
            overflow: hidden;
          }
          .fl {
            float: left;
          }

          .select1 {
            position: relative;
            z-index: 3;
            .select {
              display: inline-block;
              padding: 0 0 0 10px;
              margin-right: 10px;
              width: 380px;
              border: 1px solid #d9d9d9;
              line-height: 38px;
              height: 38px;
              overflow: hidden;

              .arr_select {
                width: 40px;
                height: 40px;
                background-position: 0 -120px;
                background-image: url(@/assets/images/ico_c.png);
                background-repeat: no-repeat;
                vertical-align: middle;
                float: right;
              }
            }
            // .option {
            //   width: 390px;
            //   top: 39px;
            //   left: 0;
            //   max-height: 505px;
            //   li {
            //     display: block;
            //     line-height: 34px;
            //     height: 34px;
            //     overflow: hidden;
            //     font-size: 12px;
            //     background-color: #fff;
            //     cursor: pointer;
            //     a {
            //       display: block;
            //       color: #666;
            //       outline: none;
            //       text-decoration: none;
            //     }
            //   }
            // }
          }
          .w_con {
            margin-left: 16px;
            position: relative;
            .au_input {
              border: 1px solid #d9d9d9;
              width: 380px;
              padding-left: 10px;
              line-height: 38px;
              height: 38px;
              overflow: hidden;
              .df_input {
                width: 22em;
                color: #333;
                line-height: 38px;
                height: 38px;
                color: #333;
                padding-left: 10px;
                border: none;
                font-size: 14px;
                outline: none;
                text-decoration: none;
              }
            }
            .textarea {
              position: relative;
            }
            .upload_c {
              font-size: 18px;
              font-family: "Microsoft YaHei";
              padding: 15px 155px;
              display: inline-block;
              letter-spacing: 2px;
              transition: all 0.3s linear;
              background-color: #1abc9c;
              color: #fff;
              border-radius: 3px;
            }
            .upload_warn {
              .warn_p {
                color: #333;
                line-height: 24px;
                font-size: 12px;
                .pub_ico {
                  background-position: -14px -52px;
                  width: 15px;
                  height: 16px;
                  margin: 0 5px 0 0;
                  background-image: url(@/assets/images/ico_c.png);
                  background-repeat: no-repeat;
                  display: inline-block;
                  vertical-align: middle;
                }
              }
              p {
                line-height: 24px;
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
        .clear {
          zoom: 1;
        }
      }
    }
  }
}
</style>