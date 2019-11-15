<template>
  <div id="chaoToast">
    <div class="contentWrap">
      <div class="content">
        <div class="icon">!</div>
        <p>{{text}}</p>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script>
export default{
  name: "Toast",
  data(){
    return {
      text:"",
    }
  },
  mounted() {
    setTimeout(() => {
      // 3s 后通过父级移除子元素的方式来移除该组件实例和 DOM 节点
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }, 1500);
  }  
}
</script>
<style lang="less" scoped>
  #chaoToast{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    .contentWrap{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .content{
        box-sizing: border-box;
        width:280px;
        height:280px;
        padding:50px;
        background:rgba(30,30,30,0.75);
        border-radius:12px;      
        color:#fff;
        text-align: center;
        .icon{
          width: 46px;
          height: 46px;
          border: 1px #fff solid;
          border-radius: 90px;
          margin:0 auto 38px;
          font-size: 28px;
        }
        p{
          font-size: 26px;
        }
      }
    }
    .mask{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ccc;
      opacity: .2;
      z-index: -3;
    }
  }
</style>