<template>
  <div id="querySearch">
    <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容...."
  @select="handleSelect"
  clearable="true"
  autocomplete="no"
></el-autocomplete>
<router-link to="/bookLists">
<span class="iconfont" style="color:#dc0000;font-size: 30px;cursor: pointer;">&#xe69b;</span>
</router-link>
</div>
</template>

<script>
  export default {
    name:'querySearchAsync',
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "大家都在搜", "key": "" },
          { "value": "雪中悍刀行", "key": "" },
          { "value": "剑来", "key": "" },
          { "value": "杀死那个反派！", "key": "" },
          { "value": "沧狼行", "key": "" },
          { "value": "大国军舰", "key": "" },
          { "value": "大明第一臣", "key": "" },
          { "value": "深海余烬", "key": "" },
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>
<style lang="less" scoped>
  /deep/ .el-input__inner {
    width: 360px;
  }
</style>