<template>
<div>
  <Wrap></Wrap>

  <div id="index-content">
    <div id="index-nav">
      <div>
        <span class="ewmtip">
          <i class="iconfont">&#x3448;</i>移动端
          </span>
        <div class="ewm">
          <div class="point"></div>
          <div class="ewm-pic">
            <img src="@/assets/images/app.png" alt="">
          </div>
          <router-link to="#"><i class="iconfont" style="float: left;">&#xe63b;安卓</i></router-link>
          <router-link to="#"><i class="iconfont">&#xe624;苹果</i></router-link>
          <router-link to="#"><i class="iconfont" style="float: right;">&#xe6c9;公众号</i></router-link>
          </div>
      </div>
      <div class="author">
        <router-link to="/authorlogin">
        <span class="iconfont">&#xf00f5;</span>
        <span>作者专区</span></router-link> 
      </div>
      <template>
        <!-- tab-position="right"  导航栏右放置 -->
         <el-tabs v-model="activeName"  @tab-click="handleClick"  >
         <el-tab-pane label="首页" name="home" style="fount-sizi:16px">
             <Home></Home>
         </el-tab-pane>
         <el-tab-pane label="书库" name="bookstore">
          <Bookstore></Bookstore>
          </el-tab-pane>
         <el-tab-pane label="排行" name="top">
          <Rankings></Rankings>
         </el-tab-pane>
         <el-tab-pane label="完本" name="end">
          <Bookstore></Bookstore>
         </el-tab-pane>
         <el-tab-pane label="漫画" name="comic">
          <Comic></Comic>
         </el-tab-pane>
         </el-tabs>
       </template>
    </div>
  </div> 
  </div>
</template>

<script>
// import QuerySearchAsync from '@/components/index/querySearchAsync.vue'
import Home from '@/components/index/home.vue' 
import Bookstore from '@/components/index/bookstore.vue';
import Rankings from '@/components/index/rankings.vue'
import Comic from '@/components/index/comic.vue'
import Wrap from '@/components/common/wrap.vue'
export default {
// eslint-disable-next-line vue/multi-word-component-names
name:'index',

data() {
      return {
        activeName: 'home',
        userInfo:{},
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      logbtn () {
        // this.$router
      },
    },
components:{
  Home,Bookstore,Rankings,Comic,Wrap
  },
 
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__header {
  padding: 5px;
}
/deep/ .el-tabs__active-bar {
  background-color: #d32f2f;
}

/deep/.el-tabs__item.is-active {
    color: #d32f2f;
}

/deep/.el-tabs__item:hover {
    color: #d32f2f;
}

/deep/ .el-tabs__item{
  font-weight: 700;
  font-size: 20px;
}
a:hover {
  color: #d32f2f;
}

#index-content {
  width: 90%;
  margin: 0 auto;
}
li {
  list-style: none;
}
 #head {
  img {
    float: left;
    width: 100px;
    display: inline;
  }
  #search {
    float: left;
    margin: 40px 0 40px 340px;
    width: 30%;
    border-radius: 3px;
  }
  #search-btn {
    float: left;
    height: 46px;
    margin:40px 0 0px -55px;
  }
  #head-right {
    display: inline-block;
    margin: 60px 0 40px 10%;
   li {
      float: left;
      margin-left: 20px;
      font-size: 14px;
      color: black;
    }
    li:hover {
      color: #af211a;
    }
  }

 }

  #index-nav { 
  font-size: 16px;
  font-weight: 700;
  margin-top: 40px;
  position: relative;
   .author {
    position: absolute;
    top: 10px;
    right: 40px;
    font-size: 20px;
    z-index: 6;
   }

  .ewmtip {
    position: absolute;
    top: 10px;
    left: 400px;
    font-size: 20px;
    z-index: 999;
  }

  .ewmtip:hover {
    color: #d32f2f;
    cursor:pointer;
   }
  .ewmtip:hover + .ewm {
    display:block;
  }
  .ewm {
    position: absolute;
    display:none;
    width: 200px;
    height: 230px;
    top: 55px;
    left: 395px;
    z-index: 999;
    background-color: #bad3d7;
    .point {
    position: absolute;
    top: -20px;
    left: 50px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #bad3d7;
    }
    span {
      font-size: 24px;
    }
    .ewm-pic {
      width: 200px;
      height: 200px;
      img {
        height: 100%;
      }
    }
  }
  .ewm:hover {
    display: block;
  }
 }

</style>