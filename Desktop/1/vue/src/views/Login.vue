<template>
  <transition appear enter-active-class="animated fadeInRight" leave-active-class="fadeOutRight">
  <div class="Login" :style="{height:`${height}px`}">
      <JoinH></JoinH>
      <div class="Application">
        <div class="Buttons">
          <button @click="toggle(1)">提交报名</button>
          <button @click="toggle(2)">查询结果</button>
        </div>
        <keep-alive>
          <component v-bind:is="name"></component>
        </keep-alive>
      </div>
    </div>
  </transition>
</template>

<script>
import JoinH from '@/components/Join/JoinH'
import JoinF from '@/components/Join/JoinF'
import ResultMini from '@/components/Result/ResultMini'
export default {
  name: 'Login',
  components: {
    JoinH: JoinH,
    JoinF: JoinF,
    ResultMini: ResultMini
  },
  data: function () {
    return {
      name: JoinF,
      height: 1080
    }
  },
  methods: {
    toggle (num) {
      if (num === 1) {
        this.name = JoinF
        this.height = 1080
      } else {
        this.name = ResultMini
        this.height = 1080
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Login{
    background-image: url("../assets/images/loginBg.png");
    background-size: cover;
    width: 100%;
    background-attachment: fixed;
  }
  .Application{
    height: 640px;
    width: 960px;
    margin: 40px auto 0 auto;
    .Buttons{
      button{
        width:140px;
        height:40px;
        background:rgba(63,63,63,1);
        border-radius:10px;
        font-size:24px;
        font-weight:400;
        color:rgba(249,249,249,1);
        line-height:9px;
        cursor: pointer;
        border: none;
      }
      button:first-child{margin-right: 30px}
    }
  }
</style>
