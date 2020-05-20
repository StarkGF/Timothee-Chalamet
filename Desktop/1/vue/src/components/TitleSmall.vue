<template>
  <div class="Titles">
    <h2 class="titleUp">{{parenttitle}}</h2>
    <div class="titleUnder">
      <div class="line"></div>
      <div class="square"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['parenttitle']
}
</script>

<style scoped lang="scss">
  .Titles{
    height: 78px;
    box-sizing: border-box;
    margin: 0 auto;
    .titleUp{
      text-align: center;
      font-size:48px;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:47px;
      width:192px;
      height:47px;
      margin: 0 auto;
    }
    .titleUnder{
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .line{
        width:90px;
        height:3px;
        background:black;
        margin-top: 2px;
      }
      .square{
        width:10px;
        height:10px;
        background:black;
        margin: 0 17px;
      }
    }
  }
</style>
