<template>
  <div class="center">
    <div class="wrap">
      <div class="left">
        <img :src="userInfo.userPic" />
        <p>
          <a href="javascript:;"></a>
        </p>
      </div>
      <div class="right">
        <p class="name">
          {{ userInfo.realName }}
          <i class="moon"></i>
          <b>(侍御史)</b>
          <b class="vip vip0">
            <a href="javascript:;"></a>
          </b>
        </p>
        <p class="introduce" v-if="!userInfo.remark">
          <i>简介&nbsp;&nbsp;</i>
          暂无简介~
        </p>

        <p class="introduce" v-if="userInfo.remark">
          <i>简介&nbsp;&nbsp;</i>
          {{ userInfo.remark }}
        </p>
        <p class="num">
          <span>
            账户余额&nbsp;&nbsp;
            <i>1000</i>
            <i>&nbsp;幻想币&nbsp;</i>
          </span>
          <span>
            我的月票&nbsp;&nbsp;
            <i>1000</i>
            <i>&nbsp;张&nbsp;</i>
            <a href="javascript:;" title="如何获得月票"></a>
          </span>
          <span>
            我的推荐票&nbsp;&nbsp;
            <i>10000</i>
            <i>&nbsp;张&nbsp;</i>
            <a href="javascript:;" title="如何获得推荐票"></a>
          </span>
        </p>
        <p class="btn-iphone">
          <router-link to="/recharge">
            <i>立即充值</i>
          </router-link>
        </p>
      </div>
    </div>
    <div class="set-box">
      <template>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <!-- 基本信息 -->
            <div class="base">
              <p>
                <i>账号</i>
                {{ userInfo.userName }}
              </p>
              <p class="ano-name">
                <i>用户昵称</i>
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="realName"
                  maxlength="13"
                  show-word-limit
                >
                </el-input>
                <b>30天内只能修改一次</b>
              </p>
              <p class="base-sex">
                <i>性别</i>
                <template>
                  <el-radio v-model="sex" label="1">男</el-radio>
                  <el-radio v-model="sex" label="0">女</el-radio>
                </template>
              </p>
              <p class="base-date">
                <i>出生日期</i>
                <el-date-picker
                  v-model="birthday"
                  type="date"
                  placeholder="选择日期时间"
                  default-time="12:00:00"
                >
                </el-date-picker>
              </p>
              <p>
                <i>绑定手机</i>
                <em v-if="newphoneSWT">{{ userInfo.phone }}</em>
                <em></em>
                <el-input
                  v-if="!newphoneSWT"
                  type="Number"
                  placeholder="请输入手机号码"
                  v-model="newphone"
                  class="no-number"
                  maxlength="11"
                  show-word-limit
                >
                </el-input>

                <a href="javascript:;" class="bind" @click="phoneBtn()"
                  >修改绑定</a
                >
              </p>
              <p>
                <i>个人签名</i>
                <el-input
                  type="textarea"
                  placeholder="请输入个人签名"
                  v-model="remark"
                  maxlength="100"
                  show-word-limit
                  resize="none"
                >
                </el-input>
              </p>
              <div class="base-btn" @click="updateBtn">确认修改</div>
              <div class="base-cancel" @click="clean">取消修改</div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="修改头像" name="second">
            <!-- 修改头像 -->
            <div class="header">
              <div class="header-left" v-if="imgSwitch">
                <p class="up-img">上传新头像</p>
                <div class="up-box">
                  <!-- <section class="up-select">
                    <i>未选择文件</i>
                    <input type="file" class="fileImg" @change="changepic" />
                    <input type="button" value="浏览" />
                    <p class="up-tip" v-if="upTip">
                      <i></i>
                      请上传指定格式的图片！
                    </p>
                  </section> -->
                  <section class="cut">
                    <el-upload
                      action="http://localhost:80/upload/uploadImg"
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

                    <!-- <img :src="fileImg" /> -->
                  </section>
                  <p class="up-limit">(支持JPG,JPEG,PNG,最大不超过3M)</p>
                </div>
              </div>
              <div class="header-left hede hide" v-if="!imgSwitch">
                <p class="defalut">选择新头像</p>
                <ul class="defalut-box">
                  <li class="def-img-act"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div class="header-middle">
                <div class="preview">预览新头像</div>

                <div class="preview-img" v-if="!picUrl">
                  <img src="@/assets/images/noPic.png" alt="" />
                </div>
                <img class="preview-img" v-if="picUrl" :src="picUrl" />
                <p class="preview-tip">大头像尺寸：180*180像素</p>

                <div class="preview-imgl" v-if="!picUrl">
                  <img
                    src="@/assets/images/noPic.png"
                    style="
                      width: auto;
                      height: auto;
                      max-width: 100%;
                      max-height: 100%;
                    "
                  />
                </div>
                <img class="preview-imgl" :src="picUrl" v-if="picUrl" />
                <p class="preview-tipl">小头像尺寸：40*40像素</p>
              </div>
              <div class="header-right">
                <p class="save-img" @click="uploadPic">保存头像</p>
                <p class="save-up" @click="Imgbtn" v-if="imgSwitch">
                  选择默认头像
                </p>
                <p
                  class="save-up"
                  @click="Imgbtn"
                  v-if="!imgSwitch"
                  style="background-color: #5fa9dc"
                >
                  上传头像
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="third">
            <!-- 修改密码 -->
            <div class="password">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <p class="suer_name">
                  <i>用户昵称</i>
                  <span>{{ userInfo.realName }}</span>
                </p>
                <el-form-item label="原密码" prop="oldPsw">
                  <el-input
                    type="password"
                    v-model="ruleForm.oldPsw"
                  ></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="check">
                  <el-input
                    v-model.number="ruleForm.check"
                    class="check"
                  ></el-input>
                  <img
                    src="@/assets/images/updpassimg.png"
                    class="reload-img"
                  />
                </el-form-item>

                <el-form-item>
                  <el-button
                    type="primary"
                    @click="submitForm('ruleForm')"
                    style="
                      width: 120px;
                      margin-right: 35px;
                      background-color: #d32f2f;
                      border-color: #d32f2f;
                    "
                    >提交</el-button
                  >
                  <el-button @click="resetForm('ruleForm')" style="width: 120px"
                    >重置</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script>

import { updateUserInfo } from "@/utils/api";
import { removePropertyOfNull } from "@/utils/stringUtils";
import { updatePsw } from "@/utils/api";
import { deleteImg } from "@/utils/api";
import { updataPic } from "@/utils/api";
export default {
  name: "accountSet",
  data() {
    var checkoldPsw = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("原密码不能为空"));
      }
      callback();
    };

    var checkCheck = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userInfo: {},
      activeName: "first",
      imgSwitch: true,
      newphoneSWT: true,
      reqInfo: {},
      realName: "",
      sex: "",
      birthday: "",
      newphone: "",
      remark: "",
      fileImg: "",
      upTip: false,
      check: "",
      reqPsw: {},
      picUrl: "",
      dialogVisible: false,
      dialogImageUrl: "",
      hideUpload: false,
      limitCount: 1,
      ruleForm: {
        oldPsw: "",
        pass: "",
        checkPass: "",
        check: "",
      },
      rules: {
        oldPsw: [{ validator: checkoldPsw, trigger: "blur" }],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
          ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        check: [{ validator: checkCheck, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 修改密码
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.reqPsw = {
            userName: this.userInfo.userName,
            oldPsw: this.ruleForm.oldPsw,
            pass: this.ruleForm.pass,
            checkPass: this.ruleForm.checkPass,
            check: this.ruleForm.check,
          };

          updatePsw(this.reqPsw);
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 修改基本信息
    async updateBtn() {
      this.reqInfo = {
        userId: this.userInfo.userId,
        realName: this.realName,
        sex: this.sex,
        birthday: this.birthday,
        newphone: this.newphone,
        remark: this.remark,
      };
      const newReqInfo = removePropertyOfNull(this.reqInfo);
      const data = await updateUserInfo(newReqInfo);
      this.userInfo = JSON.stringify(data);
      localStorage.setItem("userInfo", this.userInfo);
      this.$router.go(0);
    },

    replacePhone(str) {
      let sta = str.substr(0, 3);
      let end = str.substr(7, 11);
      return sta + "****" + end;
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    Imgbtn() {
      this.imgSwitch = !this.imgSwitch;
    },
    phoneBtn() {
      this.newphoneSWT = !this.newphoneSWT;
    },

    // 更新用户头像
    async uploadPic() {
      if(this.picUrl=="") return this.$message.error("修改头像不能为空！")
      const data = {
        userId: this.userInfo.userId,
        oldPic: this.userInfo.userPic,
        newPic: this.picUrl,
      };
      const result = await updataPic(data);
      this.userInfo = JSON.stringify(result);
      localStorage.setItem("userInfo", this.userInfo);
      this.$router.go(0);
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
      this.reqData = { picUrl: this.picUrl };
      deleteImg(this.reqData);
      this.picUrl = "";
      this.hideUpload = fileList.length >= this.limitCount;
    },

    handSuccess(response, file) {
      this.picUrl = file.response;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    clean() {
      (this.realName = ""),
        (this.sex = ""),
        (this.birthday = ""),
        (this.remark = "");
    },
  },
  created() {
    var str = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(str);
    this.sex = this.userInfo.sex;
    this.userInfo.phone = this.replacePhone(this.userInfo.phone);
  },
};
</script>

<style lang="less" scoped>
/deep/.hide .el-upload--picture-card {
  display: none;
}
/deep/.el-upload--picture-card {
  width: 295px;
  height: 295px;
  border: none;
}

/deep/ .el-upload-list--picture-card .el-upload-list__item {
  overflow: hidden;
  background-color: #fff;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  width: 295px;
  height: 295px;
  margin: none;
  display: inline-block;
}

/deep/ .el-upload--picture-card i {
  font-size: 65px;
  font-weight: 200;
  color: #d32f2f;
  position: relative;
  top: 100px;
}

/deep/ .el-form-item__label {
  text-align: left;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  line-height: 40px;
  padding: 0 12px 0 0;
  color: #999;
  box-sizing: border-box;
}
/deep/ .el-input {
  width: 30%;
}
.el-date-editor.el-input {
  width: 327.6px;
}

/deep/ .el-textarea {
  position: relative;
  display: inline-block;
  width: 45%;
  vertical-align: bottom;
  font-size: 14px;
}

/deep/ .el-textarea__inner {
  height: 70px;
}
.center {
  width: 1200px;
  margin: 0 auto;
  .wrap {
    min-height: 190px;
    width: 100%;
    background: #f7f7f7;
    border: 1px solid #e6e6e6;
    position: relative;
    .left {
      height: 128px;
      width: 128px;
      border: 1px solid #d8d8d8;
      margin-top: 30px;
      margin-left: 25px;
      position: relative;
      background-color: #fff;
      border-radius: 50%;
      img,
      p {
        height: 120px;
        width: 120px;
        position: absolute;
        left: 4px;
        top: 4px;
        overflow: hidden;
        cursor: pointer;
      }
      img {
        border-radius: 50%;
      }
    }
    .right {
      position: absolute;
      width: 1030px;
      left: 170px;
      top: 0;
      text-align: left;
      .name {
        font-weight: 900;
        font-size: 20px;
        color: #333;
        margin-top: 36px;
        margin-bottom: 15px;
        width: 100%;
        .moon {
          display: inline-block;
          width: 18px;
          height: 16px;
          font-weight: 400;
          font-style: normal;
          background: url(@/assets/images/points.png) no-repeat center center;
          background-position: center center;
        }
        b {
          display: inline-block;
          font-size: 14px;
          color: #666;
        }
        span {
          display: block;
          float: right;
          background-color: #d32f2f;
          border-radius: 2px;
          font-size: 12px;
          line-height: 24px;
          width: 110px;
          height: 24px;
          margin-right: 25px;
          cursor: pointer;
          i {
            display: inline-block;
            vertical-align: -2px;
            width: 12px;
            height: 12px;
            background: url(@/assets/images/pen.png) no-repeat center center;
            background-size: 12px 12px;
            margin-left: 9px;
            margin-right: 5px;
          }
          a {
            color: #fff;
          }
        }
      }
      .introduce {
        font-size: 14px;
        color: #666;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 25px;
        i {
          font-size: 14px;
          color: #999;
          letter-spacing: 1.08px;
        }
      }
      .num {
        margin-top: 35px;
        span {
          display: inline-block;
          font-size: 14px;
          color: #999;
          letter-spacing: 1.08px;
          width: 300px;
          i:nth-of-type(1) {
            font-family: ArialMT;
            font-size: 18px;
            color: #d32f2f;
          }
          i:nth-of-type(2) {
            font-size: 14px;
            color: #666;
          }
          a {
            display: inline-block;
            width: 13px;
            height: 13px;
            background: url(@/assets/images/q.png) no-repeat left top;
            background-size: 26px 13px;
            cursor: pointer;
          }
          a:hover {
            background-position: -13px 0;
          }
        }
      }
      .btn-iphone {
        position: absolute;
        bottom: 0;
        right: 10px;
        i {
          width: 70px;
          height: 24px;
          line-height: 24px;
          display: inline-block;
          font-size: 12px;
          color: #d32f2f;
          letter-spacing: 0.9px;
          text-align: center;
          border: 1px solid #d32f2f;
          border-radius: 2px;
          cursor: pointer;
          margin-right: 15px;
        }
        i:hover {
          background-color: #e84848;
          color: #fff;
        }
      }
    }
  }
  .set-box {
    margin-top: 30px;
    min-height: 517px;
    border: 1px solid #e0e0e0;
    position: relative;
    .base {
      margin: 27px 40px 40px;
      overflow: hidden;
      text-align: left;
      p {
        font-size: 14px;
        color: #333;
        line-height: 19px;
        padding: 13px;
        i {
          display: inline-block;
          width: 83px;
          height: 19px;
          font-size: 14px;
          color: #999;
          letter-spacing: 1.08px;
          margin-right: 22px;
        }
        b {
          padding-left: 17px;
          opacity: 0.6;
          color: #666;
        }
        .bind {
          float: right;
          margin-right: 48%;
          width: 70px;
          height: 25px;
          border: 1px solid #d32f2f;
          border-radius: 2px;
          font-size: 12px;
          color: #d32f2f;
          text-align: center;
          line-height: 25px;
          cursor: pointer;
        }
      }
      .base-btn {
        margin-left: 118px;
        width: 169px;
        background: #d32f2f;
        border-radius: 2px;
        text-align: center;
        color: #fff;
      }

      .base-cancel {
        color: #333;
        letter-spacing: 0.72px;
        padding-left: 50px;
      }
      .base-cancel:hover {
        color: #d32f2f;
      }
      .base-btn,
      .base-cancel {
        margin-top: 25px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        letter-spacing: 0.72px;
        float: left;
        cursor: pointer;
      }
    }
    .header {
      margin: 27px 40px 40px;
      overflow: hidden;
      text-align: left;

      .header-left,
      .header-middle {
        float: left;
        border-right: 1px solid #e6e6e6;
        height: 400px;
        position: relative;
      }
      .header-left {
        width: 457px;
        .up-img {
          float: left;
          font-size: 14px;
          color: #999;
          width: 91px;
          height: 405px;
          line-height: 38px;
        }
        .up-box {
          float: left;
          width: 300px;
          height: 405px;
          .cut {
            width: 297px;
            height: 297px;
            margin-top: 40px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
          }
          .up-limit {
            font-size: 12px;
            color: #999;
            letter-spacing: 0.92px;
            margin-top: 9px;
            margin-bottom: 0;
          }
        }

        .defalut {
          font-size: 14px;
          color: #999;
        }
        .defalut-box {
          width: 420px;
          margin-top: 25px;
          margin-left: 20px;
          li {
            width: 64px;
            height: 64px;
            margin-right: 6px;
            margin-bottom: 6px;
            background: url(@/assets/images/default-header.png) no-repeat left
              top;
            float: left;
            cursor: pointer;
            box-sizing: border-box;
          }
          li:nth-of-type(2) {
            background-position: -70px 0;
          }
          li:nth-of-type(3) {
            background-position: -140px 0;
          }
          li:nth-of-type(4) {
            background-position: -210px 0;
          }
          li:nth-of-type(5) {
            background-position: -280px 0;
          }
          li:nth-of-type(6) {
            background-position: -350px 0;
          }
          li:nth-of-type(7) {
            background-position: 0 -70px;
          }
          li:nth-of-type(8) {
            background-position: -70px -70px;
          }
          li:nth-of-type(9) {
            background-position: -140px -70px;
          }
          li:nth-of-type(10) {
            background-position: -210px -70px;
          }
          li:nth-of-type(11) {
            background-position: -280px -70px;
          }
          li:nth-of-type(12) {
            background-position: -350px -70px;
          }
          li:nth-of-type(13) {
            background-position: 0 -140px;
          }
          li:nth-of-type(14) {
            background-position: -70px -140px;
          }
          .defalut-box li:nth-of-type(15) {
            background-position: -140px -140px;
          }
          li:nth-of-type(16) {
            background-position: -210px -140px;
          }
          li:nth-of-type(17) {
            background-position: -280px -140px;
          }
          li:nth-of-type(18) {
            background-position: -350px -140px;
          }
          li:nth-of-type(19) {
            background-position: 0 -210px;
          }
          li:nth-of-type(20) {
            background-position: -70px -210px;
          }
        }
      }

      .header-left::before,
      .header-middle::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        right: -5px;
        width: 8px;
        height: 8px;
        border-top: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        background-color: #fff;
      }
      .header-middle {
        float: left;
        border-right: 1px solid #e6e6e6;
        height: 400px;
        position: relative;
        .preview {
          font-size: 14px;
          color: #999;
          margin-left: 25px;
        }
        .preview-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #eee no-repeat left top;
          background-size: 100%;
          margin-left: 70px;
          margin-top: 56px;
          margin-bottom: 18px;
          overflow: hidden;
        }
        .preview-imgl {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #eee no-repeat left top;
          background-size: 100% 100%;
          margin-left: 108px;
          margin-top: -10px;
          margin-bottom: 9px;
          overflow: hidden;
        }

        .preview-tip,
        .preview-tipl {
          width: 276px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          font-size: 12px;
          color: #999;
          letter-spacing: 0.92px;
          margin-bottom: 74px;
        }
      }

      .header-right {
        width: 300px;
        padding-left: 40px;
        height: 400px;
        float: left;
        .save-img,
        .save-up {
          width: 246px;
          height: 36px;
          line-height: 36px;
          letter-spacing: 0.72px;
          text-align: center;
          border-radius: 2px;
          font-size: 14px;
          cursor: pointer;
        }
        .save-img {
          background-color: #d32f2f;
          color: #fff;
          margin-top: 155px;
          margin-bottom: 18px;
        }
        .save-up {
          color: #333;
          border: 1px solid #d6d6d6;
          margin-top: 18px;
        }
      }
    }
    .password {
      margin: 27px 40px 40px;
      overflow: hidden;
      text-align: left;
      .suer_name {
        margin-bottom: 20px;
        i {
          color: #999;
        }
        span {
          margin-left: 53px;
          font-weight: 700;
        }
      }
      .checkBox {
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
        margin-left: 50px;
        .img {
          width: 100%;
        }
      }
      .check {
        width: 200px;
      }
      .reload-img {
        width: 90px;
        height: 40px;
        margin-top: -5px;
        margin-left: 10px;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
      }
    }
  }
}
</style>