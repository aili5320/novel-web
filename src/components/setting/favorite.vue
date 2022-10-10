<template>
  <div class="wrap">
    <div class="hsub">
      <div class="hsub_tab">
        <ul>
          <li class="active">
            <a href="javascript:;">我的书架</a>
          </li>
        </ul>
      </div>
      <div class="hsub_r">
        当前书架收藏书籍
        <span class="red">12</span>
      </div>
    </div>
    <div class="home-main">
      <div class="btntab">
        <div class="fl">
          <a href="javascript:;" class="active">全部</a>
          <a href="javascript:;">VIP</a>
          <a href="javascript:;">连载</a>
          <a href="javascript:;">完结</a>
        </div>
        <div class="fr">
          <a href="javascript:;">默认书架</a>
          <a href="javascript:;">自定义</a>
        </div>
      </div>
      <div class="home_innerwrap">
        <div class="shelf_list_tit">
          <div class="bookSelecter"></div>
          <div class="catName">类别</div>
          <div class="bookName">书名</div>
          <div class="author">作者</div>
          <div class="upDateChapter">最新章节</div>
          <div class="bookMark">书签</div>
          <div class="bookStatus">状态</div>
          <div class="updateTime">更新时间</div>
          <div class="ctrlBook">操作</div>
        </div>
        <ul>
          <li class="shelf_bookLine listType_a">
            <div class="bookSelecter">
              <label class="labelBox">
                <input
                  type="checkbox"
                  autocomplete="off"
                  class="inputCheckbox"
                />
                <em class="em_checked"></em>
              </label>
            </div>
            <div class="catName">
              <a href="javascript:;">[仙侠]</a>
            </div>
            <div class="bookName">
              <a href="javascript:;" class="txtove">剑来</a>
              <em></em>
            </div>
            <div class="author">
              <a href="javascript:;" class="txtove">烽火戏诸侯</a>
            </div>
            <div class="upDateChapter">
              <a href="javascript:;">第一千零五十章 酒桌之上无敌手</a>
            </div>
            <div class="bookMark">
              <a>无</a>
            </div>
            <div class="bookStatus">连载中</div>
            <div class="updateTime">1天前</div>
            <div class="ctrlBook">
              <a href="javascript:;" class="redbtn">继续阅读</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "favorite",
};
</script>

<style lang="less" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  .hsub {
    height: 45px;
    line-height: 35px;
    clear: both;
    .hsub_tab {
      height: 45px;
      float: left;
      .active {
        float: left;
        padding: 0 25px;
        position: relative;
        a {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #333;
          font-weight: 700;
          letter-spacing: 1.33px;
        }
      }
    }
    .hsub_r {
      float: right;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #999;
      letter-spacing: 0;
      .red {
        font-family: ArialMT;
        font-size: 14px;
        color: #d32f2f;
        letter-spacing: 0;
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
  .home-main {
    border: 1px solid #e6e6e6;
    min-height: 400px;
    position: relative;
    padding-bottom: 58px;
    padding-top: 25px;
    .btntab {
      padding: 0 25px 25px 25px;
      overflow: hidden;
      .fl {
        float: left;
        a {
          margin-right: 5px;
        }
      }
      .fr {
        float: right;
        a {
          margin-right: 5px;
        }
      }
      a {
        width: 80px;
        height: 25px;
        line-height: 25px;
        font-family: MicrosoftYaHei;
        display: inline-block;
        font-size: 12px;
        color: #333;
        text-align: center;
        border: 1px solid #e6e6e6;
        border-radius: 2px;
      }
      .active {
        background: #d32f2f;
        border: 1px solid #d32f2f;
        color: #fff;
      }
    }
    .home_innerwrap {
      padding: 0 24px;
      .shelf_list_tit {
        display: table;
        width: 100%;
        background: #f7f7f7;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        color: #999;
        border-bottom: 0;
        div {
          display: table-cell;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin: 0;
          vertical-align: bottom;
          padding: 0;
          position: relative;
        }
        .bookSelecter {
          position: relative;
          width: 18px;
        }
        .catName {
          width: 67px;
          padding-left: 20px;
        }
        .bookName {
          width: 293px;
        }
        .author {
          width: 147px;
        }
        .upDateChapter {
          width: 248px;
        }
        .bookMark {
          width: 90px;
        }
        .bookStatus {
          width: 97px;
        }
        .updateTime {
          width: 100px;
        }
        .ctrlBook {
          width: 75px;
        }
      }
      ul {
        .listType_a {
          height: 60px;
          line-height: 60px;
          border-bottom: 1px dotted #ccc;
          div {
            display: table-cell;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin: 0;
            vertical-align: bottom;
            padding: 0;
            position: relative;
          }
          .bookSelecter {
            position: relative;
            width: 18px;
            .labelBox {
              width: 13px;
              height: 13px;
              left: 0;
              top: 23px;
              position: absolute;
              .inputCheckbox {
                vertical-align: middle;
                left: -20px;
                position: relative;
                visibility: hidden;
              }
              .em_checked {
                width: 13px;
                height: 13px;
                position: absolute;
                left: 0;
                top: 0;
                background-image: url(@/assets/images/order_ico.png);
                background-position: -15px -15px;
                cursor: pointer;
              }
            }
          }
          .catName {
            width: 67px;
            padding-left: 20px;
            a {
              float: left;
              color: #999;
              letter-spacing: 1.17px;
            }
          }
          .bookName {
            width: 293px;
            a {
              color: #333;
              letter-spacing: 1.17px;
              max-width: 210px;
              float: left;
            }
          }
          .author {
            width: 150px;
            a {
              color: #999;
              letter-spacing: 1.17px;
              max-width: 104px;
            }
          }
          .upDateChapter {
            width: 255px;
            a {
              color: #999;
              letter-spacing: 1.17px;
              max-width: 200px;
            }
          }
          .bookMark {
            padding-left: 5px;
            width: 92px;
            a {
              float: left;
            }
          }
          .bookStatus {
            width: 97px;
            color: #999;
            letter-spacing: 1.17px;
          }
          .updateTime {
            color: #999;
            letter-spacing: 1.17px;
            width: 100px;
          }
          .ctrlBook {
            width: 75px;
            a {
              cursor: pointer;
              width: 70px;
              height: 25px;
              background: #d32f2f;
              border-radius: 2px;
              font-family: MicrosoftYaHei;
              font-size: 12px;
              color: #fff;
              letter-spacing: 0;
              position: absolute;
              left: 3px;
              top: 17px;
              line-height: 25px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>