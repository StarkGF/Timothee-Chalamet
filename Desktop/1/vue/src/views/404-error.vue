<template>
    <div class="Error">
      <div class="errorNav">
        <img src="../assets/images/logo.png">
        <span>ITStudio</span>
      </div>
      <div class="errorUnder">
        <span>404</span>
        <div class="noBattery">
          <span>SORRY, THE PAGE NOT FOUND</span>
        </div>
      </div>
      <div class="tips">
        中国海洋大学  |  信息科学与工程学院B505  |  @2020 ITStudio All Right Reserved
      </div>
    </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style scoped lang="scss">
  .Error{
    padding-top: 9px;
    padding-left: 360px;
    height: 1080px;
    background-size: cover;
    background-image: url("../assets/images/NavBg.jpg");
    .errorNav{
      display: flex;
      align-items: center;
     img{
       width: 68px;
       height: 70px;
       margin-right: 26px;
     }
      span{
        font-size:24px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:9px;
        display: inline-block;
      }
    }
    .errorUnder{
      width: 990px;
      height: 464px;
      position: relative;
      left: 50%;
      top: 45%;
      transform: translate(-60%,-50%);
      span{
        font-size:60px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:48px;
        margin-left: 630px;
        width:104px;
        height:47px;
      }
      .noBattery{
        height: 416px;
        background-image: url("../assets/images/error.png");
         span{
           width:597px;
           height:32px;
           font-size:36px;
           font-weight:400;
           color:rgba(255,255,255,1);
           line-height:48px;
           display: inline-block;
           margin: 73px 97px 311px 296px;
         }
      }
    }
    .tips{
      width:856px;
      height:26px;
      font-size:24px;
      font-weight:300;
      color:rgba(255,255,255,1);
      line-height:30px;
      margin: 470px auto 0 auto;
      transform: translateX(-150px);
    }
  }
</style>
