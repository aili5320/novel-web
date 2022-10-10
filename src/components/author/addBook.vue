<template>
  <div>
    <div class="insertBook">
      <div class="nav">
        <div class="au_box">
          <div class="au_nav_a">
            <router-link to="/" replace>幻想首页</router-link>
            |
            <router-link to="#">编辑介绍</router-link>
            |
            <router-link to="#" class="goodluck">作者福利</router-link>
            |
            <router-link to="#">{{ authorInfo.autName }}</router-link>
            |
            <router-link to="/authorLogin">退出</router-link>
          </div>
          <router-link to="/" class="au_logo"></router-link>
        </div>
      </div>
      <div class="au_create">
        <div class="au_box">
          <div class="au_c_con">
            <div class="au_c_tit">
              <a
                href="javascript:;"
                style="
                  float: right;
                  font-size: 14px;
                  color: #1abc9c;
                  letter-spacing: 1px;
                  font-family: 'Microsoft YaHei';
                  line-height: 40px;
                  margin-left: 10px;
                "
                @click="goBack"
              >
                返回
                <em style="letter-spacing: -2px; padding-left: 2px">>></em>
              </a>
              <a href="javascript:;" class="note pub_ico">投稿须知</a>
              <span class="focus">作品信息</span>
            </div>
            <div class="au_c_form">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="征文活动:" prop="collect">
                  <el-radio-group v-model="ruleForm.collect">
                    <el-radio label="不参与"></el-radio>
                    <el-radio label="参与"></el-radio>
                  </el-radio-group>
                </el-form-item>

                <el-form-item label="书名：" prop="bookName">
                  <el-input
                    v-model="ruleForm.bookName"
                    maxlength="20"
                    show-word-limit
                  ></el-input>
                </el-form-item>
                <el-form-item label="类别：" prop="genre">
                  <el-select v-model="ruleForm.genre" placeholder="请选择分类">
                    <el-option label="奇幻玄幻" value="奇幻玄幻"></el-option>
                    <el-option label="武侠仙侠" value="武侠仙侠"></el-option>
                    <el-option label="历史军事" value="历史军事"></el-option>
                    <el-option label="都市娱乐" value="都市娱乐"></el-option>
                    <el-option label="竞技同人" value="竞技同人"></el-option>
                    <el-option label="科幻游戏" value="科幻游戏"></el-option>
                    <el-option label="悬疑灵异" value="悬疑灵异"></el-option>
                    <el-option label="二次元" value="二次元"></el-option>
                  </el-select>
                  &nbsp;&nbsp;&nbsp;
                  <el-select v-model="ruleForm.theme" placeholder="请选择主题">
                    <el-option label="东方玄幻" value="东方玄幻"></el-option>
                    <el-option label="西方玄幻" value="西方玄幻"></el-option>
                    <el-option label="变身情缘" value="变身情缘"></el-option>
                    <el-option label="异世大陆" value="异世大陆"></el-option>
                    <el-option label="转世重生" value="转世重生"></el-option>
                    <el-option label="异术超能" value="异术超能"></el-option>
                    <el-option label="上古神话" value="上古神话"></el-option>
                    <el-option label="魔法校园" value="魔法校园"></el-option>
                    <el-option label="王朝争霸" value="王朝争霸"></el-option>
                    <el-option label="吸血传奇" value="吸血传奇"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="作品首字母:" prop="acronym">
                  <el-input
                    maxlength="1"
                    v-model="ruleForm.acronym"
                    class="acronym"
                  ></el-input>
                </el-form-item>

                <el-form-item label="关键字:" prop="keyWord">
                  <el-select
                    v-model="ruleForm.keyWord"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="请选择文章标签"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="item in selectWord"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="上传封面:" style="margin-top: 30px">
                  <!-- 小说封面 -->
                  <el-upload
                    action="http://localhost:80/upload/uploadBookImg"
                    list-type="picture-card"
                    :limit="8"
                    accept=".jpg,.jpeg,.png,.JPG,.JPEG"
                    :class="{ hide: hideUpload }"
                    :on-preview="handlePictureCardPreview"
                    :on-success="handSuccess"
                    :on-change="handleIntroduceUploadHide"
                    :on-remove="handleIntroduceRemove"
                    :before-upload="beforeUpload"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" />
                  </el-dialog>
                </el-form-item>
                <div>
                  <p class="au_cor_gay">
                    1、只能上传规格为600*800像素的小于300K的JPG图片
                  </p>
                  <p class="au_cor_gay">
                    2、禁止上传任何有黄色、暴力、血腥、恐怖、广告宣传或者不适合公众欣赏的封面，一经发现即做禁书处理
                  </p>
                  <p class="au_cor_gay">
                    3、作品封面由用户个人制作并上传，基于此产生的法律责任本站不承担连带责任。
                  </p>
                </div>

                <el-form-item
                  label="内容简介："
                  prop="intro"
                  style="margin-top: 30px"
                >
                  <el-input
                    type="textarea"
                    v-model="ruleForm.intro"
                    maxlength="400"
                    show-word-limit
                    placeholder="请在此输入作品简介"
                  ></el-input>
                </el-form-item>

                <el-form-item label="作者寄语：">
                  <el-input
                    type="textarea"
                    v-model="ruleForm.wishes"
                    maxlength="20"
                    show-word-limit
                    placeholder="请在此输入作者寄语"
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button>
                    <router-link to="/addChapter">
                      下一步：上传内容
                    </router-link>
                  </el-button>
                  <el-button type="acronym" @click="submitForm('ruleForm')">
                    添加到作品库
                  </el-button>
                </el-form-item>
              </el-form>
            </div>

            <div class="au_wan">
              <p class="title">说明:</p>
              <p class="au_cor_gay">
                1、作品名字应与内容相符，不具有文学性、故意夸大其词的广告性、政治性、恶搞性或淫亵性作品名将会被删除。
              </p>
              <p class="au_cor_gay">
                2、上传的作品内容必须与符合纵横收录标准，不符合收录标准的作品将被禁阅或删除。
              </p>
              <p class="au_cor_gay">
                3、新作品将在48小时内审核完毕（节假日顺延），请建立完后立即上传章节，凡章节低于三章或少于3000字一般不会通过审核。
              </p>
              <p class="au_cor_gay">
                4、幻想中文网有权将该作品推荐给合作伙伴宣传或转载，以便为作者寻找更多带来收益的机会，不另行专门告知。
              </p>
              <p class="au_cor_gay" style="color: red; margin-top: 10px">
                注：创建作品后请尽快提交新书审核，未通过审核的作品三个月后将被删除。请妥善保存好稿件，避免删除后遗失。
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { deleteImg } from "@/utils/api";
import { addBook } from "@/utils/apiBook";
export default {
  name: "insertBook",

  data() {
    return {
      selectWord: [
        {
          value: "热血",
          label: "热血",
        },
        {
          value: "爽文",
          label: "爽文",
        },
        {
          value: "穿越",
          label: "穿越",
        },
        {
          value: "升级",
          label: "升级",
        },
        {
          value: "异世",
          label: "异世",
        },
        {
          value: "重生",
          label: "重生",
        },
        {
          value: "争霸",
          label: "争霸",
        },
        {
          value: "搞笑",
          label: "搞笑",
        },
        {
          value: "生活",
          label: "生活",
        },
        {
          value: "法宝",
          label: "法宝",
        },
        {
          value: "末世",
          label: "末世",
        },
        {
          value: "魔兽",
          label: "魔兽",
        },
        {
          value: "救亡",
          label: "救亡",
        },
        {
          value: "推理",
          label: "推理",
        },
        {
          value: "网游",
          label: "网游",
        },
        {
          value: "同人",
          label: "同人",
        },
        {
          value: "养成",
          label: "养成",
        },
        {
          value: "生化",
          label: "生化",
        },
        {
          value: "机甲",
          label: "机甲",
        },
        {
          value: "盗墓",
          label: "盗墓",
        },
        {
          value: "轻小说",
          label: "轻小说",
        },
        {
          value: "古典仙侠",
          label: "古典仙侠",
        },
        {
          value: "英雄无敌",
          label: "英雄无敌",
        },
      ],
      dialogVisible: false,
      dialogImageUrl: "",
      hideUpload: false,
      limitCount: 1,
      authorInfo: {},
      ruleForm: {
        bookName: "",
        genre: "",
        theme: "",
        delivery: false,
        type: [],
        collect: "不参与",
        acronym: "",
        keyWord: [],
        wishes: "",
        intro: "",
        bookPic: "",
      },
      rules: {
        bookName: [
          { required: true, message: "书名不能为空", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        acronym: [
          { required: true, message: "请输入作品首字母", trigger: "blur" },
          { min: 1, max: 1, message: "1位字母a-z", trigger: "blur" },
        ],
        keyWord: [{ required: true, message: "请输入关键字", trigger: "blur" }],
        genre: [{ required: true, message: "请选择分类", trigger: "change" }],
        collect: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        intro: [{ required: true, message: "请填写内容简介", trigger: "blur" }],
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isLt1M) {
        this.$message.error("上传头像图片大小不能超过 1MB!");
      }
      return isLt1M;
    },

    handleIntroduceUploadHide(file, fileList) {
      this.hideUpload = fileList.length >= this.limitCount; //this.limitCount就是图片数量
    },
    handleIntroduceRemove(file, fileList) {
      this.reqData = { bookPic: this.ruleForm.bookPic };
      deleteImg(this.reqData);
      this.ruleForm.bookPic = "";
      this.hideUpload = fileList.length >= this.limitCount;
    },

    handSuccess(response, file) {
      this.ruleForm.bookPic = file.response;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$set(this.ruleForm, "autId", this.authorInfo.autId);
          this.$set(this.ruleForm, "autName", this.authorInfo.autName);
          addBook(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },

  components: {  },

  created() {
    this.authorInfo = JSON.parse(this.$route.query.params);
  },
};
</script>

<style lang="less" scoped>
/deep/.hide .el-upload--picture-card {
  display: none;
}
/deep/ .el-input--suffix .el-input__inner {
  padding-right: 47px;
}

.insertBook {
  .au_cor_gay {
    line-height: 20px;
    text-align: left;
    font-size: 12px;
    color: #999;
    padding: 0;
  }
  .au_tip {
    text-align: left;
    font-size: 12px;
    color: #c6c6c6;
    padding: 8px 0 0;
    line-height: 20px;
  }

  .nav {
    position: fixed;
    height: 70px;
    width: 100%;
    background: #fff;
    z-index: 9;
    box-shadow: 2px 2px 2px #ccc;
    position: relative;
    font-family: "Microsoft YaHei";
    .au_box {
      width: 65%;
      margin: 0 auto;
      position: relative;
      .au_nav_a {
        float: right;
        text-align: right;
        color: #ddd;
        font-size: 14px;
        line-height: 24px;
        padding-top: 31px;
        a {
          color: #333;
          margin: 0 10px;
          outline: none;
        }
        .goodluck {
          color: #e74c3c;
        }
        a:hover {
          color: #1abc9c;
        }
      }
      .au_logo {
        background: url(@/assets/images/autLogo.png) no-repeat;
        width: 142px;
        height: 35px;
        float: left;
        margin-top: 18px;
      }
    }
  }
  .au_create {
    background-color: #f0f1f2;
    padding-top: 90px;
    padding: 20px 0 60px;
    .au_box {
      width: 1000px;
      margin: 0 auto;
      position: relative;
      .au_c_con {
        padding: 40px 65px;
        background-color: #fff;
        .au_c_tit {
          border-bottom: 4px solid #f7f7f7;
          height: 40px;
          line-height: 40px;
          color: #333;
          font-family: Microsoft YaHei;
          .note {
            color: #333;
            font-size: 14px;
            float: right;
            background-position: -12px 0;
            padding-left: 25px;
            background-image: url(@/assets/images/ico_c.png);
            background-repeat: no-repeat;
            vertical-align: middle;
          }
          .focus {
            float: left;
            font-size: 18px;
            border-bottom: 4px solid #f7f7f7;
            padding: 0 5px 9px;
            line-height: 28px;
            margin-right: 15px;
            border-bottom: 4px solid #1abc9c;
          }
        }
      }
      .au_c_form {
        margin-top: 20px;
        width: 65%;
        .headTip {
          width: 140px;
          float: left;
        }
      }
      .au_wan {
        margin-top: 50px;
        width: 90%;
        p {
          line-height: 20px;
          font-size: 14px;
        }
        .title {
          text-align: left;
        }
      }
    }
  }
}
</style>