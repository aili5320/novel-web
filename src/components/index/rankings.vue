<template>
  <div class="center">
    <div class="rank_menu">
      <div class="rank_side">
        <router-link to="#"><h3>人气榜单</h3></router-link>
        <hr>
        <h3>作品榜单</h3>
        <router-link to="#"><p>月票榜</p></router-link>
        <router-link to="#"><p>24小时畅销榜</p></router-link>
        <router-link to="#"><p>新书榜</p></router-link>
        <router-link to="#"><p>点击榜</p></router-link>
        <router-link to="#"><p>推荐榜</p></router-link>
        <router-link to="#"><p>捧场榜</p></router-link>
        <router-link to="#"><p>完结榜</p></router-link>
        <router-link to="#"><p>新书订阅榜</p></router-link>
        <router-link to="#"><p>24小时更新榜</p></router-link>
        <hr>
        <h3>用户榜单</h3>
        <router-link to="#"><p>读者消费榜</p></router-link>
        <hr>
        <h3>作者榜单</h3>
        <router-link to="#"><p>作者人气榜</p></router-link>
      </div>
      <div class="rank_bottom">
        <router-link to="#">
          <span class="iconfont">&#x344c;</span>
          月票冠军 · 新星作品
        </router-link>
      </div>
    </div>
    <div class="rank_main">
      <div class="rank_banner">
        <div class="rank_i_title_name">
          <span class="active">人气榜单</span>
        </div>
      </div>
      <!-- 月票榜单 -->
      <div class="rank_lests">
         <div class="rank_i_p_tit">月票榜</div>
         <div class="rank1">
          <div class="rank1_info">
          <span class="iconfont" style="color: #d32f2f;">&#xe650;</span>
          <router-link to="#" replace>
          <span>我有一剑</span>
          </router-link>
          <router-link to="#" replace>
            <div style="color:#999999; font-size: 12px;">&emsp;青鸾峰上</div>
          </router-link>
          <router-link to="#" replace>
            <div style="color:#999999;font-size: 12px;">&emsp;[玄幻]</div>
          </router-link>
          <div>&emsp;18826 月票数</div>
          </div>
          <div class="rank1_img">
             <img src="@/assets/images/bookRank.jpeg" alt="我有一剑">
          </div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont" style="color:#fc7403">&#xe652;</span>
            <router-link to="#"><span>星海王座</span></router-link>
          </div>
          <div class="ranks_num">12137</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont" style="color:#f8cc1c">&#xe653;</span>
            <router-link to="#"><span>星际生存从侵略开始</span></router-link>
          </div>
          <div class="ranks_num">6258</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe655;</span>
            <router-link to="#"><span>此地有妖气</span></router-link>
          </div>
          <div class="ranks_num">5076</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe651;</span>
            <router-link to="#"><span>大魏芳华</span></router-link>
          </div>
          <div class="ranks_num">4384</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64e;</span>
            <router-link to="#"><span>驭命图</span></router-link>
          </div>
          <div class="ranks_num">4079</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64d;</span>
            <router-link to="#"><span>凡徒</span></router-link>
          </div>
          <div class="ranks_num">3821</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe656;</span>
            <router-link to="#"><span>剑开太平</span></router-link>
          </div>
          <div class="ranks_num">3372</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64f;</span>
            <router-link to="#"><span>神医圣手</span></router-link>
          </div>
          <div class="ranks_num">2741</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe611;</span>
            <router-link to="#"><span>大造化剑主</span></router-link>
          </div>
          <div class="ranks_num">2421</div>
         </div>
         <div class="rank_i_more">
          <router-link to="#" replace><span>更多></span></router-link>
         </div>
         
      </div>
      <!-- 24小时畅销榜 -->
      <div class="rank_lests">
         <div class="rank_i_p_tit">24小时畅销榜</div>
         <div class="rank1">
          <div class="rank1_info">
          <span class="iconfont" style="color: #d32f2f;">&#xe650;</span>
          <router-link to="#" replace>
          <span>我有一剑</span>
          </router-link>
          <router-link to="#" replace>
            <div style="color:#999999; font-size: 12px;">&emsp;青鸾峰上</div>
          </router-link>
          <router-link to="#" replace>
            <div style="color:#999999;font-size: 12px;">&emsp;[玄幻]</div>
          </router-link>
          <div>&emsp;18826 月票数</div>
          </div>
          <div class="rank1_img">
             <img src="@/assets/images/bookRank.jpeg" alt="我有一剑">
          </div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont" style="color:#fc7403">&#xe652;</span>
            <router-link to="#"><span>星海王座</span></router-link>
          </div>
          <div class="ranks_num">12137</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont" style="color:#f8cc1c">&#xe653;</span>
            <router-link to="#"><span>星际生存从侵略开始</span></router-link>
          </div>
          <div class="ranks_num">6258</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe655;</span>
            <router-link to="#"><span>此地有妖气</span></router-link>
          </div>
          <div class="ranks_num">5076</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe651;</span>
            <router-link to="#"><span>大魏芳华</span></router-link>
          </div>
          <div class="ranks_num">4384</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64e;</span>
            <router-link to="#"><span>驭命图</span></router-link>
          </div>
          <div class="ranks_num">4079</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64d;</span>
            <router-link to="#"><span>凡徒</span></router-link>
          </div>
          <div class="ranks_num">3821</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe656;</span>
            <router-link to="#"><span>剑开太平</span></router-link>
          </div>
          <div class="ranks_num">3372</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64f;</span>
            <router-link to="#"><span>神医圣手</span></router-link>
          </div>
          <div class="ranks_num">2741</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe611;</span>
            <router-link to="#"><span>大造化剑主</span></router-link>
          </div>
          <div class="ranks_num">2421</div>
         </div>
         <div class="rank_i_more">
          <router-link to="#" replace><span>更多></span></router-link>
         </div>
      </div>
      <!-- 新书榜单 -->
      <div class="rank_lests">
         <div class="rank_i_p_tit">新书榜单</div>
         <div class="rank1">
          <div class="rank1_info">
          <span class="iconfont" style="color: #d32f2f;">&#xe650;</span>
          <router-link to="#" replace>
          <span>我有一剑</span>
          </router-link>
          <router-link to="#" replace>
            <div style="color:#999999; font-size: 12px;">&emsp;青鸾峰上</div>
          </router-link>
          <router-link to="#" replace>
            <div style="color:#999999;font-size: 12px;">&emsp;[玄幻]</div>
          </router-link>
          <div>&emsp;18826 月票数</div>
          </div>
          <div class="rank1_img">
             <img src="@/assets/images/bookRank.jpeg" alt="我有一剑">
          </div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont" style="color:#fc7403">&#xe652;</span>
            <router-link to="#"><span>星海王座</span></router-link>
          </div>
          <div class="ranks_num">12137</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont" style="color:#f8cc1c">&#xe653;</span>
            <router-link to="#"><span>星际生存从侵略开始</span></router-link>
          </div>
          <div class="ranks_num">6258</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe655;</span>
            <router-link to="#"><span>此地有妖气</span></router-link>
          </div>
          <div class="ranks_num">5076</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe651;</span>
            <router-link to="#"><span>大魏芳华</span></router-link>
          </div>
          <div class="ranks_num">4384</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64e;</span>
            <router-link to="#"><span>驭命图</span></router-link>
          </div>
          <div class="ranks_num">4079</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64d;</span>
            <router-link to="#"><span>凡徒</span></router-link>
          </div>
          <div class="ranks_num">3821</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe656;</span>
            <router-link to="#"><span>剑开太平</span></router-link>
          </div>
          <div class="ranks_num">3372</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe64f;</span>
            <router-link to="#"><span>神医圣手</span></router-link>
          </div>
          <div class="ranks_num">2741</div>
         </div>
         <div class="rank_data">
          <div class="ranks_name">
            <span class="iconfont">&#xe611;</span>
            <router-link to="#"><span>大造化剑主</span></router-link>
          </div>
          <div class="ranks_num">2421</div>
         </div>
         <div class="rank_i_more">
          <router-link to="#" replace><span>更多></span></router-link>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'rankings',
}
</script>

<style lang="less" scoped>
a:hover{
 color: #e84848;
}
  .center {
    margin-top: 20px;
    max-height: 1400px;
    .rank_menu {
      float: left;
      width: 215px;
      height: 750px;
      .rank_side {
        padding: 10px;
        border:1px solid #e6e6e6;
      h3{
        font-size: 14px;
        font-weight: 700;
        text-align: left;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        text-align: left;
      }
      }
      .rank_bottom {
        margin-top: 15px;
        height: 50px;
        line-height: 50px;
        border:1px solid #e6e6e6;
      }      
    }
    .rank_main {
      width: 965px;
      float: left;
      margin-left:20px;
      .rank_banner {
        height: 80px;
        background: url(@/assets/images/titlebg.png);
        color: #fff;
        letter-spacing: 1px;
        line-height: 78px;
        font-size: 20px;
        padding: 0 20px;
        position: relative;
        .rank_i_title_name {
          position: absolute;
          top: 5px;
          font-size: 18px;
          letter-spacing: .9px;
          font-weight: 400;
         .active {
              cursor: pointer;
         }
        }
        
      }
      .rank_lests {
        width: 258px;
        background-color: #fafafa;
        border: 1px solid #f0f0f0;
        padding: 17px 19px 19px;
        margin-right: 35px;
        margin-bottom: 40px;
        float: left;
        min-height: 479px;
        margin-top: 25px;
        .rank_i_p_tit {
          font-size: 16px;
          color: #333;
          font-weight: 700;
          line-height: 21px;
          text-align: left;
          padding-bottom: 10px;
          border-bottom: 1px solid #e6e6e6;
          margin-bottom: 19px;
        }
        .rank1 {
            height: 95px;
            width: 100%;
            border-bottom: 1px dotted #d6d6d6;
            .rank1_info {
              float: left;
              font-size: 14px;
              font-weight: 400;
              text-align: left;
            }
            .rank1_img {
              float: right;
              height: 80px;
              img {
                height: 100%;
              }
            }
        }
        .rank_data {
          height: 40px;
          width: 100%;
          font-size: 14px;
          font-weight: 400;
          line-height: 35px;
          border-bottom: 1px dotted #d6d6d6;
          .ranks_name {
          float: left;
          }
         .ranks_num {
          float: right;
         }
         
        }
        .rank_i_more {
          float: right;
          span {
            font-size: 12px;
            font-weight: 400;
            color: #999999;
          }
        }
      }
    }
  }
</style>