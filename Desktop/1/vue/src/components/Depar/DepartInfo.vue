<template>
    <div class="departInfo animated">
      <div class="deparItem" v-for="(value,index) in parentDepar" :key="index">
        <div class="deparItemTop">
          <div class="imgBox">
            <img :src="pic[index]">
          </div>
        </div>
        <div class="deparItemUnder">
          <h3 :style="{color:colors[index]}">{{value.department}}</h3>
          <p>{{value.introduce}}</p>
        </div>
        <button @click="toggle(index)" >MORE
          <transition>
            <div class="buttonHide" v-show="index==now">
            </div>
          </transition>
        </button>
        <transition  name="custom-classes-transition" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
          <div class="departInfoHide" :style="{backgroundColor:colors[index]}" v-show="index==now" @click="back">
            <h3>{{value.department}}</h3>
            <p>{{value.introduce}}</p>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
import backdoor from '../../assets/images/backddor.svg'
import front from '../../assets/images/frontdoor.svg'
import UI from '../../assets/images/UI.svg'
import APP from '../../assets/images/app.svg'
import game from '../../assets/images/game.svg'
export default {
  name: 'DepartInfo',
  props: {
    parentDepar: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data: function () {
    return {
      colors: ['rgba(124,209,255,1)', 'rgba(237,108,158,1)', 'rgba(176,98,192,1)', 'rgba(140,195,172,1)', 'rgba(245,181,126,1)'],
      now: -1,
      pic: [backdoor, front, UI, APP, game]
    }
  },
  // 专门用于存储监听事件回调函数
  methods: {
    toggle (index) {
      this.now = index
    },
    back: function () {
      this.now = -1
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .departInfo{
    width: 1106px;
    height: 358px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 70px;
    .deparItem{
      position: relative;
      width: 214px;
      .deparItemTop{
        margin-bottom: 38px;
        .imgBox{
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background:rgba(255,255,255,1);
          box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.35);
          border-radius:50%;
          border: none;
          display: flex;
          align-items: center;
          img{
            width: 50px;
            height: 50px;
            margin: 0 auto;
          }
        }
      }
      .deparItemUnder{
        h3{
          line-height:30px;
          font-weight:bold;
          font-size:20px;
          margin-bottom: 16px;
        }
        p{
          @include clamp(4);
          padding: 0 26px;
          text-align: left;
          line-height:24px;
          font-weight:300;
          font-size:14px;
        }
      }
      button{
        width:84px;
        height:33px;
        background:rgba(255,255,255,1);
        border:2px solid rgba(170,170,170,1);
        border-radius:5px;
        font-size:20px;
        font-weight:bold;
        color:rgba(213,213,213,1);
        line-height:30px;
        margin-top: 42px;
        position: relative;
        cursor: pointer;
        transition: border 0.5s, color 0.3s;
        &:hover{
          border-color: black;
          color: black;
        }
        .buttonHide{
          width:100px;
          height:44px;
          position: absolute;
          top:-10px;
          left: -10px;
          background-color: white;
          cursor: pointer;
        }
      }
      .departInfoHide{
        position: absolute;
        top: 0;
        width:214px;
        height:297px;
        background:rgba(124,209,255,0.99);
        box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.35);
        border-radius:5px;
        padding: 30px 20px;
        box-sizing: border-box;
        cursor: pointer;
        h3{
          width:80px;
          height:20px;
          font-size:20px;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:30px;
          margin: 0 auto;
        }
        p{
          width:177px;
          height:195px;
          font-size:14px;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:20px;
          margin: 20px auto;
          text-align: left;
          text-indent: 28px;
        }
      }
    }
  }

</style>
