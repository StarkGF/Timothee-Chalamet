<template>
<div class="JoinF">
  <div class="pInfo" v-show="isShow">
    <div class="Info">
      <span>学生姓名</span>
      <input v-model="person.name" placeholder="16位以内" maxlength="16"  @focus="blackRed('name',0)" :class="{active:form[0].Warn!==''}">
      <p>{{form[0].Warn}}</p>
    </div>
    <div class="Info">
      <span>手机号码</span>
      <input v-model="person.phone" placeholder="11位手机号码" maxlength="12" @focus="blackRed('phone',1)" :class="{active:form[1].Warn!==''}">
      <p>{{form[1].Warn}}</p>
    </div>
    <div class="Info">
      <span>邮箱地址</span>
      <input v-model="person.email"  @focus="blackRed('email',2)" :class="{active:form[2].Warn!==''}" maxlength="20">
      <p>{{form[2].Warn}}</p>
    </div>
    <div class="Info">
      <span>专业年级</span>
      <input v-model="person.major" placeholder="20xx级xxx样式"  @focus="blackRed('major',3)" :class="{active:form[3].Warn!==''}" >
      <p>{{form[3].Warn}}</p>
    </div>
    <div class="Info">
      <span>意向部门</span>
      <select   v-model="person.departer">
        <option value="前端开发" selected>前端开发</option>
        <option value="程序开发">程序开发</option>
        <option value="游戏开发">游戏开发</option>
        <option value="APP开发">APP开发</option>
        <option value="UI设计">UI设计</option>
      </select>
      <p></p>
    </div>
    <div class="gura">
      <span>验证码&nbsp;</span>
        <input placeholder="验证码将发送至您的邮箱" v-model="person.code"  @focus="blackRed('code',4)" :class="{active:form[4].Warn!==''}" maxlength="6">
        <button @click="sendCode" v-show="inCode">{{btn_text}}</button>
        <button v-show="!inCode"><span class="CODE">{{code_time}}</span>(重新发送)</button>
        <button @click="send">提交</button>
    </div>
    <p class="codeCheck">{{form[4].Warn}}</p>
  </div>
  <h1 v-show="!isShow" class="result">您已成功提交报名表</h1>
</div>
</template>

<script>
import { postINfo, postCode } from '@/API'
import qs from 'qs'
import { Check } from '@/API/Check'

export default {
  name: 'JoinF',
  data: function () {
    return {
      form: [{
        isNAME: false,
        Warn: ''
      },
      {
        isTEL: false,
        Warn: ''
      },
      {
        isEMAIL: false,
        Warn: ''
      },
      {
        isGrade: false,
        Warn: ''
      },
      {
        isCODE: false,
        Warn: ''
      }],
      person: {
        name: '',
        phone: '',
        email: '',
        major: '',
        code: '',
        departer: '前端开发'
      },
      isSEND: true,
      inCode: true,
      code_time: 0,
      btn_text: '获取验证码',
      isShow: true
    }
  },
  methods: {
    send: function () {
      this.CheckA(this.person)
      console.log(this.isSEND)
      if (this.isSEND) {
        console.log(this.person)
        postINfo(qs.stringify(this.person)).then((data) => {
          console.log(data)
          const msg = data.messages
          if (data.state === 'emailError') {
            this.form[2].Warn = msg
          } else if (data.state === 'nameError') {
            this.form[0].Warn = msg
          } else if (data.state === 'phoneError') {
            this.form[1].Warn = msg
          } else if (data.state === 'majorError') {
            this.form[3].Warn = msg
          } else if (data.state === 'codeError') {
            this.form[4].Warn = msg
          } else if (msg === '访问提交成功') {
            this.isShow = false
          }
        })
          .catch(function (err) {
            console.log(err)
          })
      }
    },
    sendCode: function () {
      postCode(qs.stringify({ email: this.person.email })).then((data) => {
        if (data.state === 'emailError') {
          const msg = data.messages
          this.form[2].Warn = msg
        } else {
          this.inCode = false
          this.code_time = 30
          this.timer()
        }
      })
        .catch(function (err) {
          console.log(err)
        })
    },
    timer: function () {
      if (this.code_time > 0) {
        this.code_time--
        this.btn_text = `${this.code_time}s后重新发送`
        setTimeout(this.timer, 1000)
      } else {
        this.code_time = 0
        this.btn_text = '获取验证码'
        this.inCode = true
      }
    },
    CheckA: function (person) {
      this.form[0].Warn = Check.Name(person.name)
      this.form[1].Warn = Check.phone(person.phone)
      this.form[2].Warn = Check.Card(person.email)
      this.form[3].Warn = Check.DepartmentChoice(person.major)
      this.form[4].Warn = Check.CodeC(person.code)
      for (let i = 0; i < 5; i++) {
        if (this.form[i].Warn !== '') {
          this.isSEND = false
          console.log(this.isSEND)
        } else {
          this.isSEND = true
        }
      }
    },
    blackRed: function (key, index) {
      if (this.form[index].Warn) {
        this.form[index].Warn = ''
        this.person[key] = ''
      }
    }

  }
}
</script>

<style scoped lang="scss">
.JoinF{
  margin-top: 20px;
  width:960px;
  height:580px;
  background:rgba(255,255,255,1);
  border:5px solid rgba(51,51,51,1);
  opacity:0.8;
  border-radius:30px;
  padding: 101px 116px;
  box-sizing: border-box;
    .Info{
      justify-content: space-between;
      margin-bottom: 15px;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      span{
        font-size:24px;
        font-weight:400;
        color:rgba(63,63,63,1);
        line-height:9px;
      }
      input{
        width:501px;
        height:32px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(63,63,63,1);
        border-radius:5px;
        padding-left: 8px;
        padding-top: 4px;
        box-sizing: border-box;
      }
      .active{
        border:1px solid rgba(182,71,71,1);
      }
      p{
        height: 14px;
        width: 200px;
        margin-left: 142px;
        margin-top: 4px;
        font-size:12px;
        font-weight:400;
        color:rgba(168,63,63,1);
        line-height:9px;
      }
      select{
        width:501px;
        height:32px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(63,63,63,1);
        border-radius:5px;
        padding-left: 8px;
        padding-top: 4px;
        box-sizing: border-box;
      }
    }
  .gura{
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      font-size:24px;
      font-weight:400;
      color:rgba(63,63,63,1);
      line-height:40px;
      display: inline-block;
    }
    input{
      width:188px;
      height:32px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(63,63,63,1);
      border-radius:5px;
      margin-left: 32px;
      padding-left: 8px;
      box-sizing: border-box;
    }
    .active{
      border:1px solid rgba(182,71,71,1);
    }
    button{
      width:120px;
      height:40px;
      background:rgba(255,255,255,1);
      border:2px solid rgba(63,63,63,1);
      border-radius:20px;
      font-size:18px;
      font-weight:400;
      color:rgba(63,63,63,1);
      line-height:9px;
      cursor: pointer;
    }
    .CODE{
      font-size: 14px;
    }
  }
  .pInfo{
    width: 642px;
  }
  .codeCheck{
    height: 14px;
    width: 200px;
    margin-left: 142px;
    margin-top: 4px;
    font-size:12px;
    font-weight:400;
    color:rgba(168,63,63,1);
    line-height:9px;
  }
  h1{
    height:47px;
    font-size:48px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:47px;
    margin: 150px auto;
    width: 450px;
  }

}
</style>
