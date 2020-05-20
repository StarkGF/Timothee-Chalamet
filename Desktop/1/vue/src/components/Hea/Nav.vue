<template>
    <div class="Nav">
      <div class="NavLeft">
        <img src="../../assets/images/logofor.png" >
      </div>
      <ul class="NavRight">
        <li v-for="(value,index) in list" :key="index" @click="navActive(index)" :class="{active:index==current}">{{value}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      list: ['部门', '成员', '历史', '作品', '留言'],
      current: -1,
      comList: ['Department', 'Member', 'History', 'Work', 'Comments']
    }
  },
  methods: {
    navActive: function (index) {
      this.current = index
      document.getElementById(this.comList[index]).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped lang="scss">
  .Nav{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 24px 0;
    box-sizing: border-box;
    .NavLeft{
      width: 260px;
      transform: translateY(-5px);
      .img{
        width: 260px;
        height: 73px;
      }
    }
    .NavRight{
      width: 588px;
      display: flex;
      justify-content: space-around;
      .active {background:rgba(110,202,220,1);}
      li{
        font-weight:400;
        font-size: 20px;
        color:rgba(255,255,255,1);
        width: 82px;
        height: 50px;
        line-height: 50px;
        display: inline-block;
        /*margin: 10px;*/
        /*background:rgba(110,202,220,1);*/
        border-radius:5px;
        text-align: center;
        cursor: pointer;
        /*transition: background-color 400ms linear ;*/
      }
    }
  }

</style>
