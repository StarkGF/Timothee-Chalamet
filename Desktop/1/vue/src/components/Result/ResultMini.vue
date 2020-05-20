<template>
<div class="ResultMini">
  <div class="resultBox">
    <input placeholder="请输入报名邮箱，录取结果将发送至您的邮箱" v-model="email" :class="{active:emailWarn!==''}" @focus="blackRed">
    <button @click="result">查询</button>
  </div>
  <p>{{emailWarn}}</p>
  <result-show :parentEmail="email" :parentShow="isShow" :parentStatus="status"></result-show>
</div>
</template>

<script>
import { getResult } from '@/API'
import resultShow from '@/components/Result/resultShow'
export default {
  name: 'ResultMini',
  components: {
    resultShow
  },
  data: function () {
    return {
      email: '',
      isShow: false,
      emailWarn: '',
      status: 0
    }
  },
  methods: {
    result: function () {
      this.show()
      getResult({ email: this.email }).then((data) => {
        if (data.messages !== '访问提交成功') {
          this.emailWarn = data.messages
        } else {
          this.status = data.status
        }
      })
        .catch(function (err) {
          console.log(err)
        })
    },
    show: function () {
      if (this.email !== '') {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    blackRed: function () {
      if (this.emailWarn) {
        this.emailWarn = ''
        this.email = ''
        this.isShow = false
      }
      if (this.isShow) {
        this.isShow = false
      }
    }

  }

}
</script>

<style scoped lang="scss">
  .ResultMini{
    width:960px;
    height:650px;
    background:rgba(255,255,255,1);
    border:5px solid rgba(63,63,63,1);
    opacity:0.8;
    border-radius:30px;
    margin-top: 20px;
    box-sizing: border-box;
    .resultBox{
      margin: 96px auto 0 auto;
      width: 700px;
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      align-items: center;
      span{
        font-size:24px;
        font-weight:400;
        color:rgba(63,63,63,1);
        line-height:9px;
        display: inline-block;
        width: 100px;
      }
      .active{
        border:1px solid rgba(182,71,71,1);
      }
      input{
        width:501px;
        height:32px;
        background:rgba(249,249,249,1);
        border:1px solid rgba(63,63,63,1);
        border-radius:5px;
        padding-left: 8px;
      }
    }
    button{
      float: right;
      width:140px;
      height:40px;
      border:2px solid rgba(63,63,63,1);
      border-radius:20px;
      font-size:24px;
      font-weight:400;
      color:rgba(47,47,47,1);
      line-height:9px;
      cursor: pointer;
    }
    p{
      float: left;
      height: 14px;
      width: 200px;
      margin-left: 140px;
      margin-top: 10px;
      font-size:12px;
      font-weight:400;
      color:rgba(168,63,63,1);
      line-height:9px;
    }
  }

</style>
