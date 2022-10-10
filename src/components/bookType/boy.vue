<template>
  <div id="boy-content">
    <div id="nav">
          <!-- 作品分类 -->
    <div id="sort">
      <el-row>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <span style="float: left; margin:5px 0 5px 5px;">作品分类:</span>
          </div></el-col
        >
        <el-col :span="22" 
          ><div class="grid-content bg-purple-light" style="float: left; ">
            <div >
              <el-radio-group v-model="sort_radio" size="medium">
                <el-radio-button label="全部作品"></el-radio-button>
                <el-radio-button label="奇幻玄幻"></el-radio-button>
                <el-radio-button label="武侠仙侠"></el-radio-button>
                <el-radio-button label="历史军事"></el-radio-button>
                <el-radio-button label="都市娱乐"></el-radio-button>
                <el-radio-button label="科幻游戏"></el-radio-button>
                <el-radio-button label="悬疑灵异"></el-radio-button>
                <el-radio-button label="竞技同人"></el-radio-button>
                <el-radio-button label="评论文集"></el-radio-button>
              </el-radio-group>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <!-- 写作进度 -->
    <div id="schedule">
      <el-row>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <span style="float: left; margin:5px 0 5px 5px;">写作进度:</span>
          </div></el-col
        >
        <el-col :span="22" 
          ><div class="grid-content bg-purple-light" style="float: left;">
            <div >
              <el-radio-group v-model="schedule_radio" size="medium">
                <el-radio-button label="全部作品"></el-radio-button>
                <el-radio-button label="连载中"></el-radio-button>
                <el-radio-button label="已完结"></el-radio-button>
              </el-radio-group>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <!-- 作品字数 -->
    <div id="wordCount">
      <el-row>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <span style="float: left; margin:5px 0 5px 5px;">作品字数:</span>
          </div></el-col
        >
        <el-col :span="22" 
          ><div class="grid-content bg-purple-light" style="float: left;">
            <div >
              <el-radio-group v-model="wordCount_radio" size="medium">
                <el-radio-button label="全部作品"></el-radio-button>
                <el-radio-button label="30万字以下"></el-radio-button>
                <el-radio-button label="30万-50万"></el-radio-button>
                <el-radio-button label="50万-100万"></el-radio-button>
                <el-radio-button label="100万-200万"></el-radio-button>
                <el-radio-button label="200万以上"></el-radio-button>
              </el-radio-group>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <!-- 更新时间 -->
        <div id="updataTime">
      <el-row>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <span style="float: left; margin:5px 0 5px 5px;">更新时间:</span>
          </div></el-col
        >
        <el-col :span="22" 
          ><div class="grid-content bg-purple-light" style="float: left;">
            <div >
              <el-radio-group v-model="updataTime_radio" size="medium">
                <el-radio-button label="全部作品"></el-radio-button>
                <el-radio-button label="三日内"></el-radio-button>
                <el-radio-button label="七日内"></el-radio-button>
                <el-radio-button label="半月内"></el-radio-button>
                <el-radio-button label="一月内"></el-radio-button>
              </el-radio-group>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <!-- 书名首字母 -->
     <div id="initial">
      <el-row>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <span style="float: left; margin:5px 0 5px 5px;">首字母:</span>
          </div></el-col
        >
        <el-col :span="22" 
          ><div class="grid-content bg-purple-light" style="float: left;margin-left: -22px;">
            <div >
              <el-radio-group v-model="initial_radio" size="medium">
                <el-radio-button label="全部作品"></el-radio-button>
                <el-radio-button label="A"></el-radio-button>
                <el-radio-button label="B"></el-radio-button>
                <el-radio-button label="C"></el-radio-button>
                <el-radio-button label="D"></el-radio-button>
                <el-radio-button label="E"></el-radio-button>
                <el-radio-button label="F"></el-radio-button>
                <el-radio-button label="G"></el-radio-button>
                <el-radio-button label="H"></el-radio-button>
                <el-radio-button label="I"></el-radio-button>
                <el-radio-button label="J"></el-radio-button>
                <el-radio-button label="K"></el-radio-button>
                <el-radio-button label="L"></el-radio-button>
                <el-radio-button label="M"></el-radio-button>
                <el-radio-button label="N"></el-radio-button>
                <el-radio-button label="O"></el-radio-button>
                <el-radio-button label="P"></el-radio-button>
                <el-radio-button label="Q"></el-radio-button>
                <el-radio-button label="R"></el-radio-button>
                <el-radio-button label="S"></el-radio-button>
                <el-radio-button label="T"></el-radio-button>
                <el-radio-button label="U"></el-radio-button>
                <el-radio-button label="V"></el-radio-button>
                <el-radio-button label="W"></el-radio-button>
                <el-radio-button label="X"></el-radio-button>
                <el-radio-button label="Y"></el-radio-button>
                <el-radio-button label="Z"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
              </el-radio-group>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <!-- 其他 -->
    <div id="other">
      <el-row>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <span style="float: left; margin:5px 0 5px 5px;">其他:</span>
          </div></el-col
        >
        <el-col :span="22" 
          ><div class="grid-content bg-purple-light" style="float: left;">
            <div >
              <el-radio-group v-model="other_radio" size="medium">
                <el-radio-button label="不限"></el-radio-button>
                <el-radio-button label="免费"></el-radio-button>
                <el-radio-button label="VIP"></el-radio-button>
                <el-radio-button label="只看签约"></el-radio-button>
              </el-radio-group>
            </div></div
        ></el-col>
      </el-row>
    </div>
    <hr>
    <!-- 已选择 -->
    <div id="pitch">
      <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <span style="float: left; margin:0 0 5px 55px;">已选中:</span>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"  style="float: left;margin:0 100px 0 -300px;">
       {{sort_radio}}
       {{schedule_radio}}
       {{wordCount_radio}}
       {{updataTime_radio}}
       {{initial_radio}}
       {{other_radio}}
      </div></el-col>
      </el-row>
    </div>
    </div>

    <div id="orderBy">
      <el-row>
      <el-col :span="20"><div class="grid-content bg-purple">
        <span style="cursor: default;">排序方式:</span>
        <span>
          <template >
          <el-select v-model="website" placeholder="网站总点击" size="mini">
           <el-option value="总点击"/>
           <el-option value="月点击"/>
           <el-option value="周点击"/>
           <el-option value="日点击"/>
          </el-select>
          </template>
        </span>
        <span>
          <template >
          <el-select v-model="usersite" placeholder="用户总点击" size="mini">
           <el-option value="用户总点击"/>
           <el-option value="用户月点击"/>
           <el-option value="用户周点击"/>
           <el-option value="用户日点击"/>
          </el-select>
          </template>
        </span>
        <span>
          <template >
          <el-select v-model="recommend" placeholder="总推荐" size="mini">
           <el-option value="总推荐"/>
           <el-option value="月推荐"/>
           <el-option value="周推荐"/>
           <el-option value="日推荐"/>
          </el-select>
          </template>
        </span>
        <span style="cursor: pointer;">
          总收藏
        </span>
        <span style="cursor: pointer;">
          总字数
        </span>
        <span style="cursor: pointer;">
          更新时间
        </span>


      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light" style="float:right; margin-right: 30px;">
        <span class="iconfont" style="cursor: pointer; font-size: 24px;">&#xe673;</span>
        <span class="iconfont" style="cursor: pointer; font-size: 24px;">&#xe625;</span>
      </div></el-col>
      </el-row>
    </div>
    <div id="content-body">
       <el-row >
       <el-col :span="12" v-for="(item,index) in 40" :key="index">
          <div id="Eachword" >
                   <el-row>
                   <el-col :span="8"><div class="grid-content bg-purple">
                    <div class="bookbox">
                    <img src="@/assets/images/bookImg.jpeg"  alt="">
                   </div>
                   </div></el-col>
                   <el-col :span="16"><div class="grid-content bg-purple-light">
                     <div class="bookInfo">
                        <div class="bookname">
                          <a href="javascript:;">雪中悍刀行</a>
                        </div>
                         <div class="booklink">
                           <a href="javascript:;">烽火戏诸侯</a>
                           | 
                           <a href="javascript:;">奇幻玄幻</a>
                           | 
                           <span>已完结</span>
                           | 
                           <span>总收藏数:595166</span>
                         </div>
                         <div class="bookintro">
                          江湖是一张珠帘。
                          大人物小人物，是珠子，大故事小故事，是串线。
                          情义二字，则是那些珠子的精气神。
                          ————
                          开始收官中。
                          最终章将以那一声“小二上酒”结尾。
                         【北京影视出版创作基金扶持作品】鸣谢北京市新闻出版广电局
                         </div>
                         <div class="bookupdate">
                           <a href="javascript:;">
                            最新章节：番外第十章
                           </a>
                         </div>
                     </div> 
                   </div></el-col>
                   </el-row>
          </div>
       </el-col>
       <el-col :span="12"><div class="grid-content bg-purple-light">2</div></el-col>
       </el-row>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "boy",
  data() {
    return {
      sort_radio: '全部作品',
      schedule_radio:'全部作品',
      wordCount_radio:'全部作品',
      updataTime_radio:'全部作品',
      initial_radio:'全部作品',
      other_radio:'不限',
      website:'',
      usersite:'',
      recommend:'',
      booklist:{
        // 书名
         bookname:'雪中悍刀行',
        //  作者
         author:'烽火戏诸侯',
        //  类型
         booktype:'奇幻玄幻',
        //  状态
         bookstatus:'已完结',
        //  点赞数量
         countNum:'595166',
        //  最新章节名
         newest:'',
        //  最新章节地址
         newestUlr:'',
        //  小说封面
         bookImg:'@/assets/images/bookImg.jpeg'
      }
    };
  },
  methods:{
    //  if(this.sort_radio=='全部作品'&& this.schedule_radio=='全部作品'){
    //    this.sort_radio=='111';
    //    this.schedule_radio='22';
    //  }
  }
};
</script >
 
<style lang="less" scoped>

a {
  text-decoration: none;
  color:#000;
}

a:hover {
  color:#e84871 !important;
}

#nav {
    width: 100%;
    height: 400px;
    background-color: #f7f7f7;
  }

 #orderBy {
    width: 100%;
    height: 30px;
    span {
     float: left;
     margin-left: 10px;
     font-size: 12px;
     line-height: 30px;
    }
 }
 
 #content-body {
  width: 100%;
  max-height: 2050px;
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  #Eachword {
   height: 160px;
  //  border-bottom: 1px dotted #cccccc;
   .bookbox {
      margin: 20px;   
      width: 200px;
      height: 130px;
      float: left;
      img {
           width: 100px;
           height: 130px;
           border-radius: 4px;
           box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
         }
   }
   .bookInfo {
    margin: 20px;
    float: left;
    width: 60%;
    .bookname {
      float: left;
      display: block;
     }
    .booklink {
      margin-top: 5px;
      float: left;
      display: block;
      font-size: 12px;
      color:#9999a6;
      a{
        color:#9999a6;
      }
    }
    .bookintro {
      margin-top: 15px;
      float: left;
      display: block;
      font-size: 13px;
      color: #666;
      line-height: 20px;
      max-height: 40px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .bookupdate {
      margin-top: 5px;
      float: left;
      display: block;
      font-size: 12px;
      color:#9999a6;
    }
   }
  }
 }



/deep/ .el-radio-button--medium .el-radio-button__inner {
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
}

/deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background-color: #ff5e79;
  border-color: #ff5e79; 
  box-shadow: -1px 0 0 0 #ff5e79; 
}

</style>