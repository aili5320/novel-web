<template>
  <div>
    <div class="page">
      <el-pagination
  background
  layout="prev, pager, next"
  :total="0">
</el-pagination>
    </div>
    
  </div>
</template>

<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
name:'contract'
}
</script>

<style lang="less" scoped>
/deep/ .el-icon-arrow-left:before {
    content: "上一页";
    
}


/deep/.el-icon-arrow-right:before {
    content: "下一页";
}

</style>