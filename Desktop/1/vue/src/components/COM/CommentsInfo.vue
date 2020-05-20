<template>
  <div class="CommentsBboxA">
    <div class="CommentsInfo" @scroll="loadMore">
      <ul class="CommentsList"  >
        <li class="comments" v-for="(item ,index) in $store.state.comments " :key="index">
          {{item.content | filterHtml}}
          <span>{{item.time}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getComments } from '@/API'
export default {
  name: 'CommentsInfo',
  // mounted () {
  //   // 注册scroll事件并监听
  //   const self = this
  //   document.getElementsByClassName('CommentsInfo')[0].scroll(function () {
  //     self.loadMore()
  //   })
  // },
  created () {
    getComments(this.obj).then((data) => {
      this.$store.state.comments = this.$store.state.comments.concat(data.comments)
      this.$store.state.obj.amount = data.info.amount
      this.$store.state.allPage = data.info.page_max
      console.log(data)
    })
      .catch(function (err) {
        console.log(err)
      })
  },
  // data: function () {
  //   return {
  //     obj: {
  //       page: 1,
  //       amount: -1
  //     },
  //     allPage: 0
  //   }
  // },
  methods: {
    loadMore () {
      const scrollTop = document.getElementsByClassName('CommentsInfo')[0].scrollTop
      const table = document.getElementsByClassName('CommentsInfo')[0]
      const loading = document.getElementsByClassName('CommentsList')[0]
      const height = parseInt(window.getComputedStyle(table).height)
      const htmlHeight = parseInt(window.getComputedStyle(loading).height) + 27
      if (scrollTop + height >= htmlHeight) {
        console.log((scrollTop + height >= htmlHeight))
        console.log(this.$store.state.allPage)
        if (this.$store.state.obj.page < this.$store.state.allPage) {
          this.$store.state.obj.page++
          setTimeout(() => {
            getComments(this.$store.state.obj).then((data) => {
              this.$store.state.comments = this.$store.state.comments.concat(data.comments)
              this.$store.state.obj.amount = data.info.amount
              this.$store.state.allPage = data.info.page_max
              console.log(data)
            })
              .catch(function (err) {
                console.log(err)
              })
          }, 50)
        }
        // }
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .CommentsBboxA{
    width: 681px;
    overflow: hidden;
    margin: 0 auto;
  .CommentsInfo{
    width: 681px;
    height: 287px;
    margin: 10px auto 53px auto;
    /*overflow: auto;*/
    overflow-x: hidden;
    overflow-y: scroll;
    .CommentsInfo::-webkit-scrollbar {
      display: none;
    }
    ul{
      li{
        width:681px;
        background:rgba(0,0,0,0.28);
        border-radius:5px;
        margin-bottom: 27px;
        padding: 19px 20px;
        position: relative;
        box-sizing: border-box;
        font-size:18px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:30px;
        span{
          position: absolute;
          bottom: 0;
          right: 17px;
          font-size:14px;
          font-weight:300;
          color:rgba(255,255,255,1);
          line-height:30px
        }
      }
    }
  }
  }
</style>
