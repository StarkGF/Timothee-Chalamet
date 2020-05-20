<template>
  <div>
    <div class="HisTop">
      <span class="arrow">&lt;</span>
      <ul class="YearsList">
        <li :class="{active:index==current}" v-for="(value,index) in years" :key="value" @click="tGetHisYear(value,index)">
          {{value}}
        </li>
      </ul>
      <span class="arrow">&gt;</span>
    </div>
    <HisUnder :parentHis="history"></HisUnder>
  </div>
</template>

<script>
import { getHistory } from '@/API'
import HisUnder from '@/components/His/HisUnder'
import { throttle } from '@/API/Throtle'

export default {
  name: 'HisTop',
  created () {
    getHistory(this.obj)
      .then((data) => {
        this.history = data.detail
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  components: {
    HisUnder
  },
  data: function () {
    return {
      years: [2014, 2015, 2016, 2017, 2018, 2019],
      history: [],
      obj: {
        year: 2018
      },
      current: 4
    }
  },
  methods: {
    getHisYear: function (value, index) {
      this.obj.year = value
      getHistory(this.obj)
        .then((data) => {
          this.history = data.detail
        })
        .catch(function (err) {
          console.log(err)
        })

      this.current = index
    },
    tGetHisYear: function (value, index) {
      throttle(this.getHisYear(value, index), 1000)
    }
  }
}
</script>

<style scoped lang="scss">
  .HisTop{
    width: 1144px;
    height: 100px;
    margin: 56px auto 0 auto;
    display: flex;
    justify-content: space-around;
    .arrow{
      font-size:60px;
      font-weight:bold;
      color:rgba(0,0,0,1);
      line-height:30px;
      line-height: 100px;
    }
    .YearsList{
      width: 915px;
      height: 100px;
      display: flex;
      justify-content: space-around;
      .active{
        background:rgba(51,51,51,1);
        color:rgba(255,255,255,1);
      }
      li{
        width:100px;
        height:100px;
        background:rgba(255,255,255,1);
        border:5px solid rgba(181,181,181,1);
        border-radius:50%;
        font-size:22px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:100px;
        text-align: center;
        cursor: pointer;
      }
    }
  }

</style>
