<template >
  <div class="CommentsBox">
    <CommentsInfo></CommentsInfo>
  <div class="CommentsBox2" >
    <textarea placeholder="写点什么...." v-model="obj.content" maxlength="80" @focus="clear">
    </textarea>
        <span>
        {{obj.content.length}}/80
       </span>
    <button @click="send">
      SEND
    </button>
    <p>{{warn}}</p>
    </div>
  </div>
</template>

<script>
import { postComments, getComments } from '@/API'

import CommentsInfo from '@/components/COM/CommentsInfo'
import qs from 'qs'

export default {
  name: 'CommentsBox',
  components: {
    CommentsInfo
  },
  data: function () {
    return {
      obj: {
        content: ''
      },
      warn: '',
      isSend: true
    }
  },
  methods: {
    send: function () {
      this.check(this.obj.content)
      if (this.isSend) {
        postComments(qs.stringify(this.obj)).then((data) => {
          console.log(data)
          this.obj.content = ''
        })
          .catch(function (err) {
            console.log(err)
          })
        this.refresh()
      }
    },
    refresh: function () {
      this.$store.state.obj.page = 1
      this.$store.state.obj.amount = -1
      getComments(this.$store.state.obj).then((data) => {
        this.$store.state.comments = []
        this.$store.state.comments = this.$store.state.comments.concat(data.comments)
        document.getElementsByClassName('CommentsInfo')[0].scrollTop = 0
      })
        .catch(function (err) {
          console.log(err)
        })
    },
    check: function (value) {
      if (!value) {
        this.warn = '评论不能为空哦'
        this.isSend = false
      } else {
        this.isSend = true
      }
    },
    clear: function () {
      this.warn = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .CommentsBox{
    height: 405+53+287px;
    width:990px;
    margin: 0 auto;
    position: relative;
    .CommentsBox2{
      width:984px;
      height:278px;
      border: 6px solid white;
      border-radius: 5px;
      textarea{
        width:984px;
        height:278px;
        line-height:30px;
        padding: 18px 23px;
        resize: none;
        background-color: transparent;
        font-size:24px;
        font-weight:300;
        color:rgba(255,255,255,1);
        box-sizing: border-box;
      }
      span{
        font-size:24px;
        font-weight:300;
        color:rgba(255,255,255,1);
        line-height:30px;
        display: inline-block;
        float: right;
        transform: translate(-23px,-42px);
      }
      button{
        width:206px;
        height:76px;
        background:rgba(170,170,170,0.46);
        border-radius:5px;
        font-size:38px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:30px;
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
        border: none;
        transition: all ease .5s;
        &:hover {
          color: black;
        }
      }
      p{
        width:412px;
        height:24px;
        font-size:24px;
        font-weight:300;
        color:rgba(255,255,255,0.5);
        line-height:30px;
        margin-top: 50px;
      }
    }

  }
</style>
