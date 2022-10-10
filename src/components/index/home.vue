<template>
  <div id="home-content">
    <!-- 分类 -->
    <div id="head">
      <div id="Collapse">
        <div>
          <p id="Collapse-tips">作品分类</p>
        </div>
        <el-row :gutter="12">
          <el-col :span="12">
          <router-link to="/fantasy">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe620;</span>
              奇幻玄幻 
              </el-card>
              </router-link>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe60f;</span>
              武侠仙修 
              </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe611;</span>
              历史军事 
              </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe839;</span>
              都市娱乐 
              </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe645;</span>
              竞技同人 
              </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe60e;</span>
              科幻游戏 
              </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe688;</span>
              悬疑灵异 
              </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover"> 
              <span class="iconfont">&#xe612;</span>
              全部作品 
              </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 轮播图 -->
      <div id="index-blank">
        <!-- 轮播图 -->
        <div id="index-Carousel">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="(item,index)  in CarouselList" :key="index">
              <el-image
            style="width: 100%; height: 100%"
            :src="item.url"
            fit="cover"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div id="news">
      <div id="news-left">
        <div id="left-top">
          <ul>
            <p class="p-tip tip-top">月票榜7月新星《凡徒》</p>
            <li><a href="javascript:;">月票榜6月冠军《我有一剑》</a></li>
            <li><a href="javascript:;">网络文学行业文明公约</a></li>
            <li><a href="javascript:;">步履无声新书：此地有妖气</a></li>
            <li><a href="javascript:;">他曾是少年新书：巡天司</a></li>
            <li><a href="javascript:;">未成年人专项举报通道</a></li>
            <li><a href="javascript:;">纵横小说电子签约正式上线</a></li>
            <a href="javascript:;" id="more">查看最多></a>
          </ul>
        </div>
        <div id="left-bottom">
          <img src="@/assets/images/logo.jpg" title="logo">
          <img src="@/assets/images/app.png" id="left-bottom-ewm" title="下载手机客户端"> 
        </div>
      </div>
      <div id="news-centre">
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <div class="p-tip">我李洛，终将成为那万相之王：万相之王</div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <div class="p-tip">无情帝王家，挚爱亲朋皆可杀：济世药尊</div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <div>
                <p>[仙侠]</p>
                <a href="javascript:void(0);">
                  仙囚：长剑在手，试问仙人谁敢一战</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[仙侠]</p>
                <a href="javascript:void(0);"
                  >圣尊之途：一路争夺，一路杀戮成长</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[玄幻]</p>
                <a href="javascript:void(0);"
                  >我有一尊炼妖壶：天地为炉阴阳为炭</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[仙侠]</p>
                <a href="javascript:void(0);"
                  >剑悬天门：诸仙低首，修士过而不入</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[西幻]</p>
                <a href="javascript:void(0);"
                  >骑砍之龙与领主：御龙飞天领主争霸</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[玄幻]</p>
                <a href="javascript:void(0);"
                  >镇压诸天：一朝悟道，奠定无敌之姿</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[仙侠]</p>
                <a href="javascript:void(0);"
                  >诸天无上仙尊：我能修补世间万物！</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[二次元]</p>
                <a href="javascript:void(0);">在宝可梦玩云顶：我有三星裂空座</a>
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[都市]</p>
                <a href="javascript:void(0);"
                  >华娱星辰：闯荡娱乐圈铸就商业帝国</a
                >
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <div>
                <p>[都市]</p>
                <a href="javascript:void(0);"
                  >阴阳小神医：一朝觉醒，得无上传承</a
                >
              </div>
            </div></el-col
          >
        </el-row>
      </div>
      <div id="news-right">
        <div id="news-right-title">
          <p>榜单</p>
          <a href="javascript:;">更多</a>
        </div>

        <div id="news-right-lists">
          <div>
            <i class="iconfont icon-1_round_solid font-icon" style="color: #d32f2f;"></i>
            <a href="javasript:;">星海王座</a>
            <span>热度：11237</span>
          </div>
          <div>
            <i class="iconfont icon-2_round_solid font-icon" style="color: #fc7403;"></i>
            <a href="javasript:;">星际生存从侵略开始</a>
            <span>热度：6255</span>
          </div>
          <div>
            <i class="iconfont icon-3_round_solid font-icon" style="color: #f8cc1c;"></i>
            <a href="javasript:;">此地有妖气</a>
            <span>热度：5660</span>
          </div>
          <div>
            <i class="iconfont icon-4_round_solid font-icon" ></i>
            <a href="javasript:;">我有一剑</a>
            <span>热度：4738</span>
          </div>
          <div>
            <i class="iconfont icon-5_round_solid font-icon"></i>
            <a href="javasript:;">驭命图</a>
            <span>热度：4119</span>
          </div>
          <div>
            <i class="iconfont icon-6_round_solid font-icon" ></i>
            <a href="javasript:;">凡徒</a>
            <span>热度：3891</span>
          </div>
          <div>
            <i class="iconfont icon-7_round_solid font-icon" ></i>
            <a href="javasript:;">剑开太平</a>
            <span>热度：3710</span>
          </div>
          <div>
            <i class="iconfont icon-8_round_solid font-icon" ></i>
            <a href="javasript:;">神医圣手</a>
            <span>热度：3631</span>
          </div>
          <div>
            <i class="iconfont icon-9_round_solid font-icon"></i>
            <a href="javasript:;">大魏芳华</a>
            <span>热度：2988</span>
          </div>
          <!-- <div>
            <i class="iconfont icon-1_round_solid font-icon" ></i>
            <a href="javasript:;">大造化剑主</a>
            <span>热度：1632</span>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  data(){
    return {
      CarouselList:[
        {
          id:0,
          url:'http://static.zongheng.com/upload/recommend/73/97/7397381375ef090ce963f50c23cc1bb0.jpeg'
        },
        {
          id:1,
          url:'http://static.zongheng.com/upload/recommend/52/00/5200fb4833c8b8b2cba47795f9ce4b64.jpeg'
        },
        {
          id:2,
          url:'http://static.zongheng.com/upload/recommend/60/18/6018cf2d6c75e84bba26eec2c3eb7690.jpeg'
        },
        {
          id:3,
          url:'http://static.zongheng.com/upload/recommend/79/13/79131391aaec37d801e5b8be0a4c75e6.jpeg'
        },
        {
          id:4,
          url:'http://static.zongheng.com/upload/recommend/8f/5e/8f5efe9221351f298317ec08eb166499.jpeg'
        },
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.p-tip {
  font-size: 18px;
  color: #a11313;
}
.p-tip:hover {
  color: #e84848;
}

a {
  color: #333333;
}
a:hover {
  color: #e84848;
}
#more {
  text-decoration: none;
  color: #999999;
  font-size: 8px;
  float: left;
}

#index-blank {
  #index-Carousel {
    width: 76%;
    float: left;
    margin: 5px 20px 0px 20px;
    // 轮播图
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}

#Collapse {
  float: left;
  height: 300px;
  width: 20%;
  font-size: 13px;
  #Collapse-tips {
  margin: 15px;
  };
  span {
    color:#a5b3c7;
    font-size: 16px;
  }

}

#news {
  #news-left {
    float: left;
    width: 20%;
    height: 400px;
    .tip-top {
     margin-top: 25px;
    }
    #left-top {
      display: block;
      height: 70%;
      background-color: #fafafa;
      border: 1px solid #f0f0f0;
      li {
        margin: 5px;
      }
    }
    #left-bottom {
      margin-top: 15px;
      height: 26%;
      display: block;
      // height: 60%;
      background-color: #fafafa;
      border: 1px solid #f0f0f0;
    img {
      height: 100%;
    }
    }
  }
  #news-centre {
    float: left;
    margin-left: 15px;
    width: 55%;
    height: 400px;
    padding-top: 15px;
    background-color: #fafafa;
    border: 1px solid #f0f0f0;
    div {
      display: inline-block;
      margin-top: 10px;
      font-size: 18px;
    }
    p {
      display: inline;
      color: #a699a6;
    }
  }
  #news-right {
    float: left;
    margin-left: 15px;
    width: 20%;
    height: 400px;
    background-color: #fafafa;
    border: 1px solid #f0f0f0;
    overflow-y: scroll;
    #news-right-title {
      height: 20px;
      width: 100%;
      p {
      float: left;
      font-size: 20px;
      margin: 20px;
      }
      a {
        float: right;
        margin: 20px;
        font-weight: 200;
        font-size: 14px;
      }
    }
    #news-right-lists {
      margin: 35px 0 0 35px;
      width: 80%;
      
     div {
        border-bottom: 1px dotted #cccccc;
       
      i {
        font-size: 30px;
        font-weight: lighter;
      }

      a {
        display: inline-block;
        width: 280px;
      }
      
      span {
        font-weight: 200;
        font-size: 14px;
        color:#b09999;
       }
      }
    }
  }
}
</style>