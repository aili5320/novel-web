<template>
  <div>
    <div class="wrap">
      <div class="nav-hover">
        <a href="javascript:;" class="mes-active nav-ah">系统消息</a>
        <a href="javascript:;">私人消息</a>
        <a href="javascript:;">查看回复</a>
        <a href="javascript:;" class="after">查看点赞</a>
        <b>
          <a href="javascript:;">
            <span></span>
            黑名单
          </a>
        </b>
      </div>
      <div class="system">
        <div class="system-box" v-if="disFlag">
          <p class="tip">幻想小说电子签约正式上线</p>
          <section>
            各位作者朋友好，为了更好的为大家服务，减少各位作者朋友在签约过程中的打印和邮寄成本，提高签约效率，幻想小说近期对签约流程进行了升级优化，即日起“幻想小说电子签约功能”正式上线，欢迎各位作者朋友前来投稿。幻想小说将一如既往的为广大作者朋友们打造更加舒适良好的创作环境。如有疑问请联系客服电话：4000000000，客服QQ：4000000000
            <br />
          </section>
          <p class="time">
            2022-06-28 11:16
            <i class="system-del" @click="delBtn"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "message",
  data(){
   return {
    disFlag:true
   }
  },
  methods:{
    delBtn () {
      this.disFlag = !this.disFlag
      this.$message.info("删除成功")
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  .nav-hover {
    margin-top: 26px;
    margin-bottom: 20px;
    margin-left: -25px;
    font-size: 16px;
    height: 16px;
    color: #999;
    text-align: left;
    a {
      display: inline-block;
      padding: 0 27px;
      border-right: 1px solid #e6e6e6;
      cursor: pointer;
      font-size: 16px;
      height: 16px;
      line-height: 14px;
      position: relative;
      color: #999;
    }
    a:hover {
      color: #333;
      font-weight: 900;
      z-index: 99;
    }
    .mes-active {
      color: #333;
      font-weight: 900;
      z-index: 99;
    }
    .nav-ah::before {
      content: "";
      position: absolute;
      top: 27px;
      left: 55px;
      display: block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-left: 1px solid #e6e6e6;
      border-top: 1px solid #e6e6e6;
      transform: rotate(45deg);
      z-index: 11;
    }
    .after {
      border: 0;
    }
    b {
      font-size: 14px;
      color: #333;
      float: right;
      cursor: pointer;
      a {
        color: #333;
        span {
          display: inline-block;
          width: 21px;
          height: 19px;
          background: url(@/assets/images/black.png) no-repeat left top;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
  .system {
    position: relative;
    padding-bottom: 58px;
    min-height: 390px;
    text-align: left;
    border: 1px solid #e6e6e6;
    .system-box {
      border-bottom: 1px dashed #ccc;
      font-size: 14px;
      color: #333;
      margin: 0 21px;
      .tip {
        font-weight: 900;
        font-size: 16px;
        color: #333;
        margin: 25px 0 10px;
      }
      section {
        background-color: #f7f8fa;
        line-height: 25px;
        padding: 21px;
        overflow: hidden;
      }
      .time {
        margin: 8px 0 27px;
        font-size: 14px;
        color: #999;
        .system-del {
        width: 15px;
        height: 15px;
        background: url(@/assets/images/del.png) no-repeat left top;
        vertical-align: middle;
        cursor: pointer;
        float: right;
      }
      }
      
    }
  }
}
</style>