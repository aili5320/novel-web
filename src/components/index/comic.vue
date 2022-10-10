<template>
  <div class="center">
    <div class="comic" v-for="(item,index) in 40" :key="index">
      <div class="comicPic">
        <img src="@/assets/images/comicPic.jpeg" alt="">
      </div>
      <div class="comicInfo">
        <div class="comicName">
          <router-link to="#">地狱游戏</router-link>
          </div>
        <div class="intro">【周六 周天更新】 地球深处，隐藏着跨越几十亿年的秘密，随着地质活动的加剧，这些秘密逐渐在一座小城爆发出来，由地下传来的死aaaaaaaaa</div>
        <div class="comicRead">
          <span>立即阅读</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
name:'comic'
}
</script>

<style lang="less" scoped>
a:hover {
  color: #333;
}

   .center {
    display: flex;
    flex-wrap:wrap;
    .comic {
      display: flex;
      margin: 20px;
      width: 300px;
      height: 160px;
      .comicPic {
        flex:1;
        width: 120px;
        height: 160px;
        cursor:pointer;
        img {
          height: 100%;
        }
      }
      .comicInfo {
        flex:1;
        width: 240px;
        height: 160px;
        margin-left: 20px;
        text-align: left;
        font-size: 14px;
        .comicName {
          color: #333;
          font-size: 16px;
        }
        .intro {
          font-size: 14px;
          color: #666;
          letter-spacing: 1px;
          line-height: 24px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
          max-height: 96px;
        }
        .comicRead {
              width: 150px;
              height: 36px;
              background: #d32f2f;
              border-radius: 2px;
              color: #fff;
              font-size: 14px;
              line-height: 36px;
              text-align: center;
              letter-spacing: 1px;
              cursor:pointer
        }
       } 
    }
   }
</style>