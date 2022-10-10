<template>
  <div id="zfb">
    <div id="head">
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <span>充值账号:</span><el-input
              v-model="loginName"
              placeholder="请输入账户"
              maxlength="12"
              style="
              width: 240px;"
            ></el-input>
          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple"><span class="iconfont" style=" font-size: 44px; color:#05b40f;">&#xe6c9;</span></div></el-col>
      </el-row>
      <el-row >
        <el-col :span="8"><div class="grid-content bg-purple-dark" style="margin-top: 20px;">
            <span>充值数额:(1元=100幻想币)</span>
          </div></el-col>
      </el-row>
      <el-row>
      <el-col :span="24">
  <div class="grid-content bg-purple-dark" style="margin-top: 25px;">
    <el-radio-group v-model="radio">
      <el-radio-button label="1000bit"></el-radio-button>
      <el-radio-button label="3000bit"></el-radio-button>
      <el-radio-button label="5000bit"></el-radio-button>
      <el-radio-button label="10000bit"></el-radio-button>
      <el-radio-button label="100000bit"></el-radio-button>
    </el-radio-group>
  </div>
      </el-col>
      </el-row>
      <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <el-input ref="num" v-model="num" placeholder="其他额度" style=" width: 90px;"></el-input>
        <el-button @click="focusBtn">幻想币</el-button>
        <span  style=" width: 60px;">(不小于500幻想币)</span>
      </div></el-col>
      </el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark" style="margin-top: 30px;">
        {{count}}
      </div></el-col>
      <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark" style="margin-top: 30px;">
        <el-button type="danger" style="width: 240px;" @click="recSubmit">立即充值</el-button>
      </div></el-col>
     </el-row>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "wx",
  data() {
    return {
      loginName: "",
      radio: '',
      num:'',
      count:''
    };
  },
  methods:{
    recSubmit (){
      if(this.loginName==''){
        this.$router.push('/login')
      }
    },
    focusBtn(){
       this.$refs.num.focus()
    }
  },
  updated() {
      if(this.count!=null){
         var dis=this.radio.replace('bit','');
        this.count='亲爱的，您需要支付 '+Number(dis)/100+'.00元'
       }
  },
};
</script>

<style lang="less" scoped>
#zfb {
  height: 370px;
  span {
    color:#61625e;
    font-weight: 200;
    font-size: 14px;
  }
  
}
</style>