<template>
<div class="footer">
  <img src="../../assets/images/footerword_03.png">
  <p>中国海洋大学 | 信息科学与工程学院B505 | @2019ITStudio All Right Reserved</p>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .footer{
    width: 100%;
    height: 376px;
    background:rgba(220,220,220,1);
    position: relative;
    img{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      width: 569px;
    }
    p{
     text-align: center;
      height:25px;
      font-size:23px;
      font-weight:400;
      color:rgba(139,139,139,1);
      line-height:25px;
      position: absolute;
      top:300px;
      width: 100%;
    }
  }
</style>
