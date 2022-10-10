<template>
  <div class="center">
    <authorTitleVue></authorTitleVue>
    <div class="au_box">
      <div class="au_draft">
        <div class="draft_tit">
          <router-link to="/authorIndex" class="backup">
            返回
            <em>>></em>
          </router-link>
          <em class="ico_draft"></em>
          存稿箱
        </div>
        <div class="draft_nav">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="草稿箱" name="first">
              您当前暂无草稿 ( ´◔ ‸◔` )
            </el-tab-pane>
            <el-tab-pane label="定时发布" name="second">
              您当前暂无定时发布章节 ( ´◔ ‸◔` )
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="draft_hide">
          <div class="draft_boxs clear"></div>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import authorTitleVue from "../common/authorTitle.vue";
import myfooter from "@/components/common/footer.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "drafts",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },

  components: {
    authorTitleVue,
    myfooter,
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-tabs__content {
  height: 459px;
  line-height: 459px;
  overflow: hidden;
  position: relative;
}
.center {
  background-color: #f0f1f2;
  .au_box {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    .au_draft {
      padding: 40px 60px;
      border: 1px solid #e5e3e3;
      margin-top: 20px;
      font-family: Microsoft YaHei;
      position: relative;
      overflow: hidden;
      margin-right: 20px;
      background-color: #fff;
      .draft_tit {
        color: #999;
        font-size: 22px;
        height: 43px;
        overflow: hidden;
        text-align: left;
        .backup {
          float: right;
          font-size: 14px;
          color: #1abc9c;
          letter-spacing: 1px;
          font-family: "Microsoft YaHei";
          em {
            letter-spacing: -2px;
            padding-left: 2px;
          }
        }
        .ico_draft {
          background-position: -35px -272px;
          width: 25px;
          height: 43px;
          background-image: url(@/assets/images/ico.png);
          background-repeat: no-repeat;
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>