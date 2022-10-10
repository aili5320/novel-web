<template>
  <div id="myDetailsSty">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- 用户头像 -->
      <span>用户头像</span>
      <el-upload
        action="http://localhost:80/upload/uploadImg"
        list-type="picture-card"
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
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>



      

      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item label="生日" required>
        <el-form-item prop="birthday">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.birthday"
            format="yyyy-MM-dd"
          />
        </el-form-item>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio v-model="sex" label="1">男</el-radio>
          <el-radio v-model="sex" label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="接受消息推送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="关注分类" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="奇幻玄幻" name="type"></el-checkbox>
          <el-checkbox label="武侠仙侠" name="type"></el-checkbox>
          <el-checkbox label="历史军事" name="type"></el-checkbox>
          <el-checkbox label="都市娱乐" name="type"></el-checkbox>
          <el-checkbox label="竞技同人" name="type"></el-checkbox>
          <el-checkbox label="科幻游戏" name="type"></el-checkbox>
          <el-checkbox label="悬疑灵异" name="type"></el-checkbox>
          <el-checkbox label="全部作品" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {deleteImg} from "@/utils/api";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "myDetails",
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      hideUpload: false,
      limitCount: 1,
      reqData:{},
      ruleForm: {
      name: "",
      email: "",
      birthday: "",
      delivery: false,
      type: [],
      active: 3,
      sex:"",
        // 头像
      picUrl: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 7, message: "长度在 2 到 7 个字符", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择生日",
            trigger: "change",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请选择性别",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {

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
      this.reqData={picUrl:this.ruleForm.picUrl}
       deleteImg(this.reqData)
       this.hideUpload = fileList.length >= this.limitCount;
    },

    handSuccess(response, file) {
      this.ruleForm.picUrl = file.response;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm(formName) {
      
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("sendDetails", this.ruleForm);
          console.log("submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.hide .el-upload--picture-card {
  display: none;
}

#myDetailsSty {
  margin: 15px auto;
  width: 600px;
  height: 300px;
  margin-bottom: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
