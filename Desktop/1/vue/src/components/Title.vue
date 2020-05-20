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
    .titleUp{
      text-align: center;
      height:48px;
      font-size:60px;
      font-weight:bold;
      color:rgba(0,0,0,1);
      line-height:48px;
    }
    .titleUnder{
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .line{
        width:90px;
        height:3px;
        background:rgba(0,0,0,1);
        margin-top: 2px;
      }
      .square{
        width:10px;
        height:10px;
        background:rgba(0,0,0,1);
        margin: 0 17px;
      }
    }
  }
</style>
