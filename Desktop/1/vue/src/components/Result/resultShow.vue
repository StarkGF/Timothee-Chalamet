<template>
  <div class="resultShow">
  <TitleSmall :parenttitle="Title"></TitleSmall>
    <br>
    <p v-if="parentShow">{{parentEmail}}</p>
    <div class="state">
      <div class="res" v-for="(item,index) in state" :key="index" :style="{border:`8px solid ${colors[item]}`}">
        <h4>{{title[index]}}</h4>
        <p>{{position[item]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSmall from '@/components/TitleSmall'
export default {
  name: 'resultShow',
  components: {
    TitleSmall
  },
  data: function () {
    return {
      Title: '录取状态',
      email: '',
      colors: ['rgba(107, 107, 107, 1)', 'rgba(137, 201, 151, 1)', 'rgba(235, 104, 119, 1)'],
      position: ['未开始', '已通过', '未通过'],
      title: ['初审', '笔试', '面试', '录取'],
      state: [0, 0, 0, 0]
    }
  },
  props: {
    parentEmail: {
      type: String,
      default: '',
      required: true
    },
    parentShow: {
      type: Boolean,
      default: false,
      required: true
    },
    parentStatus: {
      type: Number,
      default: 0,
      required: true
    }
  },
  watch: {
    parentEmail (n, o) {
      console.log(n)
    },
    parentShow (n, o) {
      console.log(n)
    },
    parentStatus (n, o) {
      switch (n) {
        case 1:this.$set(this.state, 0, 1); break
        case 2:this.$set(this.state, 0, 2); break
        case 3:this.$set(this.state, 1, 1); this.$set(this.state, 0, 1); break
        case 4:this.$set(this.state, 1, 2); this.$set(this.state, 0, 1); break
        case 5:this.$set(this.state, 2, 1); this.$set(this.state, 1, 1); this.$set(this.state, 0, 1); break
        case 6:this.$set(this.state, 2, 2); this.$set(this.state, 1, 1); this.$set(this.state, 0, 1); break
        case 7:this.$set(this.state, 3, 1); this.$set(this.state, 2, 1); this.$set(this.state, 1, 1); this.$set(this.state, 0, 1); break
        case 8:this.$set(this.state, 3, 2); this.$set(this.state, 2, 1); this.$set(this.state, 1, 1); this.$set(this.state, 0, 1); break
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .resultShow{
    width: 940px;
    display: inline-block!important;
    margin: 40px auto;
    p{
      margin: 0 auto;
      text-align: center;
      font-size:24px;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
    .state{
      display: flex;
      width: 940px;
      height: 170px;
      justify-content: space-around;
      margin-top: 66px;
      .res{
        width:162px;
        height:162px;
        background:rgba(255,255,255,1);
        /*border:8px solid rgba(137,201,151,1);*/
        border-width: 8px;
        border-radius:50%;
        box-sizing: border-box;
        align-items: center;
        text-align: center;
        padding-top: 50px;
        h4{
          font-size:32px;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:9px;
          margin-bottom: 20px;
          height: 32px;
        }
        p{
          font-size:22px;
          font-weight:400;
          color:rgba(155,155,155,1);
          line-height:9px;
        }
      }
    }
  }
</style>
