<template>
  <div>
    <div id="myRegister">
      <router-link to="/">
       <img src="../assets/images/logo.jpg" class="img-responsive" alt="Image">
       </router-link>
       <p>我已注册，现在就</p>
       <router-link to="/login"><el-button>登录</el-button></router-link>
    </div>

    <div id="activit">
      <el-steps :active=active finish-status="success" simple style="margin-top: 20px">
      <el-step title="账号密码" ></el-step>
      <el-step title="验证信息" ></el-step>
      <el-step title="完成" ></el-step>
      </el-steps>
    </div>
     <!-- 账户密码 -->
    <div id="reglogin" v-if="active==1">
        <Reglogin @sendReglogin="getReglogin"></Reglogin>
    </div>
    <!-- 详情信息 -->
    <div id="details" v-if="active==2">
      <myDetails @sendDetails="getDetails"></myDetails>
    </div>
    <!-- 注册完成 -->
    <div id="fulfill" v-if="active==3">
    <Fulfill></Fulfill>
    <p>恭喜您完成注册，将在{{timer}}秒后回到主页</p> 
    <hr>
    <br>
    {{regForm}}
    <hr>
    <br>
    {{detaFrom}}
    </div>
    
    
  </div>
</template>

<script>
import Reglogin from '@/components/register/reglogin.vue'
import myDetails from'@/components/register/myDetails.vue'
import Fulfill from '@/components/register/fulfill.vue'

import {register} from '@/utils/api';

export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'userRegister',
  data() {
      return {
        active: 1,
        timer:10,
        otimer:null,
        // 接收子组件传递得值
        regForm:{},
        detaFrom:{},
        username:'',
        password:'',
        checkPass:'',
        data:{}
      };
    },
    methods: {
      getReglogin(val){
       this.regForm=val
       this.active = this.regForm.active
      },

      getDetails(val){
        this.detaFrom=val
        this.active = this.detaFrom.active

        if(this.active==3){

       //调用api将数据传输给后台 
        this.data = {...this.regForm,...this.detaFrom}
        register(this.data);

           this.otimer= setInterval(()=>{
            if(this.timer ==0){
              this.$router.push('/')
            }else {
              this.timer--;
            }
          },1000) 
          this.$once('hook:beforeDestroy', () => {//页面关闭
              clearInterval(this.otimer);//停止
           });
          }
      },

      submit () {
           this.active=this.active+=1;
           if (this.active==4){
            this.$router.push('/')
          }
      },
      
      async register(){
        const data = await register(data);
        console.log(data);
      },
    },
    components:{
     Reglogin, myDetails,Fulfill,
    }
}
</script>

<style lang="less" scoped>
   #myRegister {
    margin: 0 auto;
    width: 90%;
    height: 120px;
    border-bottom: 1px solid #f1f1f1;
    img {
      float: left;
      width: 100px;
      margin-left: 20px;
    }
    p {
      float: left;
      margin: 80px 10px 0 60%;
      font-weight: 100;
      font-size: 13px;
    }
    button {
      float: left;
      margin-top: 60px;
      margin-left: 10px;
    }
   }

   #activit {
    display: inline-block;
    margin-top: 50px;
    width: 70%;
   }

 
</style>