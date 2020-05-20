<template>
<div class="AboInfoUnder">
  <div class="AboInfoUnder-left">
    <img src="../../assets/images/02.png">
  </div>
  <div class="AboInfoUnder-right">
    <div class="rightItem" v-for="(value,index) in intro" :key="index">
      <div class="rightItemTop">
        <img :src="value.pic">
        <h1>{{value.title}}</h1>
      </div>
      <p>{{value.info}}</p>
    </div>
  </div>
</div>
</template>

<script>
import first from '../../assets/images/index1.png'
import second from '../../assets/images/inde2x.png'
import third from '../../assets/images/inde3x.png'

export default {
  name: 'AboInfoUnder',
  data: function () {
    return {
      intro: [
        {
          pic: first,
          title: '团队文化',
          info: '爱特一直以聚集和培养培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。'
        },
        {
          pic: second,
          title: '优秀创意',
          info: '用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。'
        },
        {
          pic: third,
          title: '乐在其中',
          info: '汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以 逻辑洞察数据，以细节战胜漏洞'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.AboInfoUnder{
  width: 1106px;
  height: 420px;
  .AboInfoUnder-left{
    float: left;
    img{
      width: 589px;
      height: 419px;
    }
  }
  .AboInfoUnder-right{
    float: right;
    height: 345px;
    width: 514px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rightItem{
      height: 95px;
    }
    .rightItemTop{
      height: 35px;
      img{
        float: left;
        margin-right: 15px;
        height: 35px;
        width: 35px;
      }
      h1{
        font-size:25px;
        font-weight:400;
        color:rgba(90,90,90,1);
        line-height:30px;
        float: left;
      }
    }
    p{
      font-size:17px;
      font-weight:400;
      color:rgba(90,90,90,1);
      line-height:24px;
      margin-left: 9px;
      width: 510px;
      margin-top: 19px;
      text-align: left;
    }
  }

}

</style>
