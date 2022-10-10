<template>
  <div class="authorIndex">
     <authorTitleVue :autName="authorInfo.autName"></authorTitleVue> 
    <div class="author_head">
      <div class="authorPic">
          <img :src="authorInfo.autPic" alt="">
          <div class="pic_shad"></div>
      </div>
      
      <div class="author_info">
        <span>
          {{authorInfo.autName}} 
          <i class="iconfont" style="margin-left:15px;font-size: 20px;">&#xf014f;</i> 
          <i class="iconfont" style="margin-left:15px;font-size: 20px;">&#xe917;</i> </span>
        <span>
           <i class="iconfont" style="font-size: 18px;">&#xe696;</i>
          昨日订阅数量:0.0
        </span>
        <span>
         <i class="iconfont" style="font-size: 18px;">&#xf00b0;</i>  
          作者已审核
        </span>
      </div>
      <div class="insertBook">
       <a src="javascript:;" @click="insBook">
       <div class="insertBookBox">
          <p>创建新书</p>
        </div>
        </a>
      </div> 
    </div>
    <div class="center">
       <div class="center-nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="作品库" name="warehouse">
          <warehouse :books="books"></warehouse>
        </el-tab-pane>
        <el-tab-pane label="稿酬查询" name="second"><remuneration></remuneration></el-tab-pane>
        <el-tab-pane label="合同查询" name="third"><contract></contract></el-tab-pane>
    </el-tabs>
    
       </div>
       <div class="place">
          <span class="iconfont">&#xe64a;</span>
          <p>网站公告</p>
        </div>
    </div>

  <!-- <div class="footers"><FooterVue></FooterVue></div>  -->
   
  </div>
</template>

<script>
import warehouse from '@/components/author/warehouse.vue'
import remuneration from '@/components/author/remuneration.vue'
import contract from '@/components/author/contract'
import authorTitleVue from '@/components/common/authorTitle.vue';
// import FooterVue from '@/components/common/footer.vue';
import { queryBooks }from '@/utils/apiBook'
export default {
    data() {
      return {
        activeName: 'warehouse',
        authorInfo:{},
        books:[]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      insBook (){
        this.$router.push({
            path: '/addBook',
            query: {
            params: JSON.stringify(this.authorInfo)
        }
        }) 
      }
    },
    components: {
      warehouse,remuneration,contract,authorTitleVue,
    },
    async created() {
      this.authorInfo= JSON.parse(this.$route.query.params);
      const queryInfo = {autId:this.authorInfo.autId}
      const result = await queryBooks(queryInfo);
      this.books = result;
    }
  };
</script>

<style lang="less" scoped>
.authorIndex {
    font-family: "Microsoft YaHei";
/deep/  .el-tabs__item {
  cursor: pointer;
 font-size: 26px;
 line-height: 60px;
 height: 60px;
 color: #999999;
}

/deep/ .el-tabs__item.is-active {
    color: #333;
    border-bottom: 4px solid #1abc9c;

}

/deep/ .el-tabs__active-bar {
  background-color: #1abc9c;
}

/deep/ .el-tabs__nav-wrap {
     overflow: visible; 
    margin-bottom: -1px;
    position: relative;
}


.author_head {  
  width: 100%;
  height: 200px;
  // background-image: linear-gradient(to left, #ffffff, #6a80a9);
  background: url(@/assets/images/aut_head_bg.jpg) no-repeat center top;
  .authorPic {
    float: left;
    width: 170px;
    height: 170px;
    position: relative;
    top:20px ; 
    margin: 0 70px 0 3px;
    display: inline;
    img {
      width: 100%;
    }
    .pic_shad {
      position: absolute;
    left: 0;
    top: 0;
    background: url(../assets/images/radius_pic.png) no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    }
  }
  .author_info {
    float: left;
    margin-top: 20px;
    width: 200px;
    text-align: left;
    span {
      display: block;
      margin: 10px 0 10px 0;
    }
    span:nth-child(1) {
    color: #535353;
    font-size: 20px;
    }
  }
  .insertBook {
   float: right;
   margin: 5%;
   cursor: pointer;
    // margin: 80px 0 0 500px;

    width: 250px;
    height: 60px;
    background-color: #1abc9c;
    font-size: 25px;
    border-radius: 10px;
    p {
      line-height: 60px;
      font-weight: 700;
      color: #dbedeb;
      display: inline-block;
    }
    
  }
}
.center {
  position: relative;
  width: 80%;
  max-height: 800px;
  margin: 0 auto;
  .place {
      position: absolute;
      top: 15px;
      right: 40px;
      display: inline;
      p {
        display: inline;
        font-size: 20px;
        color: #999;
      }
      span {
        font-size: 20px;
        color: #999;
      }
    }
}
.center-bottom {
      color: #ccc;
      font-size: 14px;
    }
}

</style>