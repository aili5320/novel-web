<template>
  <div id="fulBox">
  <div id="bear"></div>
  </div>
</template>

<script>
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'fulfill'
}
</script>

<style lang="less" scoped>
  #fulBox {
           position: relative;
           top: 100%;
           width: 100%;
           height: 260px;
           background-color: #ccc;
           background: url(@/assets/images/fulfill-bg1.png) no-repeat;
        }

        #bear {
            position: absolute;
            top: 180px;
            width: 200px;
            height: 100px;
            background: url(@/assets/images/fulfill-bear.png) no-repeat;
            /* 元素可以添加多个动画，用逗号分隔 */
            animation: bear 1s steps(8) infinite, move 8s forwards;

        }

        @keyframes bear {
            0% {
                background-position: 0 0;
            }

            100% {
                background-position: -1600px 0;
            }
        }

        @keyframes move {
            0% {
                left: 0;
            }

            100% {
                left: 50%;
                /* margin-left: -100px; */
                transform: translateX(-50%);
            }
        }
</style>