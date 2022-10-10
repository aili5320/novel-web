<template>
  <div id="reg">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-checkbox :checked="ischeck"
        >注册账号即代表您已同意并接收《幻想用户服务协议》《法律声明》
      </el-checkbox>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { proveUsername } from "@/utils/api";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "reglogin",
  data() {
    var checkUse = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (/[^\w\\]/g.test(value)) {
        callback(new Error("用户名由数字和字母组成╮(╯-╰)╭"));
      }

      setTimeout(() => {
        if (value.length < 6) {
          callback(new Error("你的用户名过短╮(╯-╰)╭"));
        } else {
          callback();
        }
        if (value.length > 12) {
          callback(new Error("你的用户名过长╮(╯-╰)╭"));
        } else {
          callback();
        }
      }, 1000);

      if (this.ruleForm.flag != 0) {
        callback(new Error("用户名已被占用哦╮(╯-╰)╭亲，要不换一个吧"));
      } else  {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ischeck: true,
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
        active: 2,
        reqData: {},
        flag: 0,
      },
      rules: {
        username: [{ validator: checkUse, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      if (this.ruleForm.username != null) {
        this.ruleForm.reqData = { username: this.ruleForm.username };
        const data = await proveUsername(this.ruleForm.reqData);
        this.ruleForm.flag = data.flag;
      }

      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!!");
          this.$emit("sendReglogin", this.ruleForm);
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
#reg {
  margin: 15px auto;
  width: 500px;
  height: 300px;
  margin-bottom: 10px;
  width: 380px;
  #clause {
    input,
    p {
      display: inline-block;
      font-size: 12px;
    }
  }
}
</style>