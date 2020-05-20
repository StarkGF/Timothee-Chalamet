<template>
  <div>
    <div class="MemberInfoG">
      <span class="arrow" @click="ToLeft">&lt;</span>
      <div class="yearListBox">
        <ul class="yearList" ref="ulYear">
          <li :class="{active:index==current}" v-for="(value,index) in years" :key="value" @click="songetYear(value,index)">
            {{value}}
          </li>
        </ul>
      </div>
      <span class="arrow" @click="ToRight">&gt;</span>
    </div>
    <div class="Members">
      <span class="arrow" @click="Left(parentchange)" v-show="parentchange">&lt;</span>
      <div class="menListBox">
        <ul class="memList" ref="ulMem">
          <li class="mmm" v-for="(value ,index) in parentMen" :key="index">
            <img :src="value.img">
            <h4>{{value.name}}</h4>
            <p>{{value.quote}}</p>
          </li>
        </ul>
      </div>
      <span class="arrow" @click="Right(parentchange)" v-show="parentchange">&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberInfoGrade',
  data: function () {
    return {
      years: [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011],
      now: 0,
      now1: 0,
      current: 1,
      arrowS: true
    }
  },
  props: {
    parentMen: {
      type: Array,
      default: () => [],
      required: true
    },
    parentchange: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  // updated () {
  //   console.log(this.$refs.ulMem)
  //   this.$refs.ulMem.style.width = `${this.props.parentCount}px`
  // },
  // created () {
  //   console.log(this.$refs.ulMem)
  //   this.$refs.ulMem.style.width = `${this.props.parentCount}px`
  // },
  methods: {
    songetYear: function (value, index) {
      this.$emit('parentYear', value)
      this.current = index
      // this.$refs.ulMem.style.width = `${this.props.parentCount}px`
    },
    ToRight: function () {
      if (this.now < 2) {
        this.now++
        this.$refs.ulYear.style.marginLeft = `${this.now * -1049}px`
      }
    },
    ToLeft: function () {
      if (this.now > 0) {
        this.now--
        this.$refs.ulYear.style.marginLeft = `${this.now * -1049}px`
      }
    },
    Right: function (bool) {
      if (this.now1 < 1 && bool) {
        this.now1++
        this.$refs.ulMem.style.marginLeft = `${this.now1 * -1049}px`
      }
    },
    Left: function (bool) {
      if (this.now1 > 0 && bool) {
        this.now1--
        this.$refs.ulMem.style.marginLeft = `${this.now1 * -1049}px`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .MemberInfoG{
    width: 1236px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    margin:88px auto;
    .arrow{
      width:30px;
      height:33px;
      font-size:60px;
      font-weight:bold;
      color:rgba(0,0,0,1);
      line-height:60px;
      cursor: pointer;
      transform: translateY(-5px);
      &:hover{
        color: white;
      }
    }
   .yearListBox{
     width: 1049px;
     overflow: hidden;
     .yearList{
       display: flex;
       justify-content: space-around;
       width: 2400px;
       transition: margin-left 500ms linear;
       .active {color:rgba(110,202,220,1);}
       li{
         font-size:60px;
         font-weight:400;
         color:rgba(255,255,255,1);
         line-height:60px;
         cursor: pointer;
       }
     }
   }
  }
  .Members {
    height: 312px;
    width: 1236px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    .arrow {
      width: 30px;
      height: 33px;
      font-size: 60px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 120px;
      cursor: pointer;
      &:hover{
        color: white;
      }
    }
    .menListBox{
      width: 1049px;
      overflow: hidden;
      .memList{
        display: flex;
        /*width: 2098px;*/
        justify-content: space-around;
        transition: margin-left 500ms linear;
        li{
          display: inline-block;
          width: 241px;
          height: 100%;
          color:rgba(254,254,254,1);
          text-align: center;
          img{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: none;
          }
          h4{
            height:24px;
            margin-top: 28px;
            margin-bottom: 28px;
          }
        }
      }
    }
  }

</style>
