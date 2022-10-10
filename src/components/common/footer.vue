<template>
  <div>
    <div class="au_box">
      <p>
        Copyright
        <em>©</em>
        2022-2022 www.huanxiang.com All Rights Reserved
      </p>
      <p class="company">版权所有 幻想网络技术有限公司</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "hxfooter",
};
</script>

<style lang="less" scoped>
.au_box {
  width: 100%;
  height: 40px;
  background-color: #f0f1f2;
  color: #a8a8a8;
  font-size: 12px;
  position: relative;
  p {
    position: absolute;
    display: block;
    left: 40%;
    line-height: 24px;
    em {
      font-family: Arial;
      padding-right: 5px;
    }
  }
  .company {
    position: absolute;
    left: 45%;
    margin-top: 15px;
  }
}
</style>