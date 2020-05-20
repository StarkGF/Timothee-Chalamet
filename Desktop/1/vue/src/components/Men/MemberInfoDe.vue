<template>
    <div class="MemberInfoDe">
      <MemberInfoGrade :parentMen="Men" @parentYear="tGetYear" :parentchange="change"></MemberInfoGrade>
      <ul class="MemUnder">
        <li :class="{active:value==current}" v-for="(value) in De" :key="value" @click="tGetDepart(value)" >{{value}}</li>
      </ul>
    </div>
</template>

<script>
import MemberInfoGrade from '@/components/Men/MemberInfoGrade'
import { getMember } from '@/API'
import { throttle } from '@/API/Throtle'

export default {
  name: 'MemberInfoDe',
  components: {
    MemberInfoGrade
  },
  created () {
    getMember(this.obj)
      .then((data) => {
        this.Men = data.detail
        if (data.detail.length > 4) {
          this.count = data.detail.length * 150 + (data.detail.length - 1) * 160
          document.getElementsByClassName('memList')[0].style.width = this.count + 'px'
          this.change = true
        } else {
          document.getElementsByClassName('memList')[0].style.width = 1049 + 'px'
          this.change = false
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  data: function () {
    return {
      De: ['APP开发', '前端开发', '游戏开发', '程序开发', 'UI设计'],
      obj: {
        grade: 2018,
        department: 'UI设计'
      },
      Men: [],
      current: 'UI设计',
      count: 0,
      change: false
    }
  },
  methods: {
    getDepart: function (value) {
      this.obj.department = value
      getMember(this.obj)
        .then((data) => {
          this.Men = data.detail
          if (data.detail.length > 4) {
            this.count = data.detail.length * 150 + (data.detail.length - 1) * 160
            document.getElementsByClassName('memList')[0].style.width = this.count + 'px'
            this.change = true
          } else {
            document.getElementsByClassName('memList')[0].style.width = 1049 + 'px'
            this.change = false
          }
        })
        .catch(function (err) {
          console.log(err)
        })
      this.MenActive(this.obj.department)
    },
    getYear: function (data) {
      this.obj.grade = data
      switch (data) {
        case 2011:this.De = ['UI设计', '系统维护']; break
        case 2012:this.De = ['UI设计', '前端开发', '系统维护', '程序开发']; break
        case 2013:this.De = ['UI设计', '前端开发', '系统维护', '程序开发']; break
        case 2014:this.De = ['UI设计', '前端开发', '系统维护', '程序开发']; break
        case 2015:this.De = ['UI设计', '前端开发', '系统维护', '程序开发']; break
        case 2016:this.De = ['UI设计', '前端开发', 'APP开发', '程序开发']; break
        case 2017:this.De = ['UI设计', '前端开发', 'APP开发', '程序开发', '游戏开发']; break
        case 2018:this.De = ['UI设计', '前端开发', 'APP开发', '程序开发', '游戏开发']; break
        case 2019:this.De = ['UI设计', '前端开发', 'APP开发', '程序开发', '游戏开发']; break
      }
      if (this.De.indexOf(this.obj.department) === -1) {
        this.obj.department = this.De[0]
      }
      getMember(this.obj)
        .then((data) => {
          this.Men = data.detail
          if (data.detail.length > 4) {
            this.count = data.detail.length * 150 + (data.detail.length - 1) * 160
            document.getElementsByClassName('memList')[0].style.width = this.count + 'px'
            this.change = true
          } else {
            document.getElementsByClassName('memList')[0].style.width = 1049 + 'px'
            this.change = false
          }
        })
        .catch(function (err) {
          console.log(err)
        })
      this.MenActive(this.obj.department)
    },
    MenActive: function (value) {
      this.current = value
    },
    tGetDepart: function (value, index) {
      throttle(this.getDepart(value, index), 1000)
    },
    tGetYear: function (data) {
      throttle(this.getYear(data), 1000)
    }
  }
}

</script>

<style scoped lang="scss">
  .MemUnder{
    margin: 80px auto 0 auto;
    display: flex;
    width: 500px;
    justify-content: space-around;
    .active {color:rgba(110,202,220,1);}
    li{
      font-size:18px;
      font-weight:300;
      color:rgba(255,255,255,1);
      line-height:30px;
      cursor: pointer;
    }
  }

</style>
