<template>
    <div id="Comments">
      <TitleSpecial :parenttitle="Title"></TitleSpecial>
    <CommentsBox></CommentsBox>
    </div>
</template>

<script>
import CommentsBox from '@/components/COM/CommentsBox'
import TitleSpecial from '@/components/TitleSpecial'
export default {
  name: 'Comments',
  components: {
    CommentsBox,
    TitleSpecial
  },
  data: function () {
    return {
      Title: 'COMMENTS'
    }
  }
}
</script>

<style scoped lang="scss">
    #Comments{
      height: 1040px;
      width: 100%;
      background-image: url("../../assets/images/Combg.jpg");
      background-size: cover;
      padding-top: 101px;
    }
</style>
