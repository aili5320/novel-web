<template>
  <div class="author_title">
     <div class="title_left">
        <router-link to="/"
          ><img src="@/assets/images/logo.jpg" alt=""
        /></router-link>
      </div>
      <div class="title_right">
        <ul>
          <li><a href="/">幻想首页</a></li>
          <li><span>|</span></li>
          <li><a href="javascript:;">编辑介绍</a></li>
          <li><span>|</span></li>
          <li style="color: #eb4c3c"><a href="javascript:;">作者福利</a></li>
          <li><span>|</span></li>
          <li><a href="javascript:;">{{autName}}</a></li>
          <li><span>|</span></li>
          <li> <router-link to="/authorLogin">退出</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name:"authorTitle",
  props:{
    autName:{
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="less" scoped>
   a:hover {
  color: #7595cc;
}
  .author_title {
  width: 100%;

    height: 70px;
    width: 100%;
    background: #fff;
    z-index: 9;
    box-shadow: 2px 2px 2px #ccc;

  .title_left {
    img {
      float: left;
      width: 100px;
      display: inline;
      margin-left: 5%;
    }
  }
  .title_right {
    float: right;
    margin-right: 80px;
    li {
      float: left;
      margin: 30px 10px 0 20px;
      font-size: 14px;
      font-weight: 700;
    }
  }
}
</style>