<template>
    <div class="WorkInfo">
        <ul>
          <li v-for="(item,index) in productList" :key="index" :class="{WorkInfoNow:index==currentOne}" @mouseenter="Info(index)" @mouseleave="Out">
            <a :href="item.url"><img :src="item.img"></a>
             <div class="WorkInfoBox" >
               <a :href="item.url"><h1>{{item.title}}</h1></a>
             </div>
          </li>
        </ul>
     <div class="buttons">
       <button  :class="{active:index===current}" v-for="(value,index) in currentPage" @click="tGetWorkP(value,index)" :key="index"></button>
     </div>
    </div>
</template>

<script>
import { getWork } from '@/API'
import { throttle } from '@/API/Throtle'

export default {
  name: 'WorkInfo',
  created () {
    getWork({ page: 1 })
      .then((data) => {
        this.productList = data.works
      })
      .catch(function (err) {
        console.log(err)
      })
  },

  data () {
    return {
      productList: [], // 所有数据
      totalPage: 1, // 统共页数，默认为1
      current: 0, // 当前页数 ，默认为1
      pageSize: 6, // 每页显示数量
      currentPage: [1, 2], // 当前页显示内容
      currentOne: -1
    }
  },
  methods: {
    getWorkP: function (page, index) {
      getWork({ page: page })
        .then((data) => {
          this.productList = data.works
        })
        .catch(function (err) {
          console.log(err)
        })
      this.current = index
    },
    Info: function (index) {
      this.currentOne = index
      console.log(this.currentOne)
    },
    Out: function () {
      this.currentOne = -1
    },
    tGetWorkP: function (page, index) {
      throttle(this.getWorkP(page, index), 1000)
    }
  }

}
</script>

<style scoped lang="scss">
  .WorkInfo{
    margin-top: 60px;
    width: 1139px;
    height: 555px;
    ul{
      height: 555px;
      width: 1139px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        display: inline-block;
        width: 330px;
        height: 170px;
        position: relative;
        a{
          display: inline-block;
          color:rgba(255,255,255,1);
          &:hover{
            color: black;
          }
          img{
            width: 330px;
            height: 170px;
          }
        }
        .WorkInfoBox{
          display: none;
        }
      }
    }
    .WorkInfoNow{
      .WorkInfoBox{
        width: 330px;
        height: 170px;
        position: absolute;
        top:0;
        background-color:rgba(170,170,170,0.6);
        text-align: center;
        font-size:20px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:30px;
        padding: 80px 60px;
        box-sizing: border-box;
        display: block;
      }
    }
    .buttons{
      width: 231px;
      height: 21px;
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      .active{
        background:rgba(110,202,220,1);
      }
      button{
        height: 21px;
        width: 83px;
        background:rgba(170,170,170,0.6);
        border-radius:5px;
        cursor: pointer;
        border: none;
      }
    }
  }

</style>
