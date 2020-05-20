<template>
  <div class="loginTop">
    <div class="topL">
      <img src="../../assets/images/logo.png">
      <span>
        ITStudio
      </span>
    </div>
    <div class="topR">
      <span @click="mainClick">返回首页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinH',
  methods: {
    mainClick: function () {
      this.$router.push('./main')
    }
  }
}
</script>

<style scoped lang="scss">
  .loginTop{
    box-sizing: border-box;
    width: 100%;
    padding: 49px 333px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topL{
      width: 210px;
      display: flex;
      align-items: center;
      img{
        width: 78px;
        height: 80px;
        margin-right: 37px;
        transform: translateY(-8px);
      }
    }
    span{
      font-size:24px;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:9px;
    }
    .topR{
      span{
        font-size:18px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:9px;
        cursor: pointer;
        &:hover{
          color: #2c2c2c;
        }
      }
    }
  }

</style>
