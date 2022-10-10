<template>
  <div id="bookstore">
    <div id="nav">
      <template>
    <el-tabs v-model="activeName"  :stretch=true  >
    <el-tab-pane label="男生频道" color="red">
      <boyVue></boyVue>
      </el-tab-pane>
    <el-tab-pane label="女生频道" >
      <girlVue></girlVue>
      </el-tab-pane>
    </el-tabs>
</template>
    </div>
  </div>
</template>

<script>
import boyVue from '../bookType/boy.vue';
import girlVue from '../bookType/girl.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "bookstore",
  data() {
    return{
      activeName:''
    }
  },
  components:{
    boyVue,girlVue
  }
};
</script>
  
<style lang="less" scoped>
#bookstore {
  margin: 0 auto;
  width: 98%;
  /deep/.el-tabs__item {
   font-size: 16px;
   font-weight: 700;
  }
  
}
</style>