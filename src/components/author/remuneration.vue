<template>
  <div class="center">
    <div class="nopay">
      <span>很抱歉，您目前还没有签约的作品，暂无稿酬</span>
    </div>
  </div>
</template>

<script>
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'remuneration'
}
</script>

<style lang="less" scoped>
  .center {
    .nopay {
      position: relative;
      margin-top: 10px;
      margin-left: 30%;
      width: 50%;
      height: 650px;
      background:url('@/assets/images/nopay.png') no-repeat;
      background-size: 70%;
      span {
       position: absolute;
       width: 320px;
       top: 90px;
       left: 60px;
       z-index: 1;
      }
    }
    
  }
</style>