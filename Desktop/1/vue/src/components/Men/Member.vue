<template>
    <div id="Member">
      <div class="MemberMask">
          <TitleSpecial :parenttitle="Title"></TitleSpecial>
          <MemberInfoDe></MemberInfoDe>
      </div>
    </div>
</template>

<script>
import TitleSpecial from '@/components/TitleSpecial'
import MemberInfoDe from '@/components/Men/MemberInfoDe'
export default {
  name: 'Member',
  components: {
    MemberInfoDe,
    TitleSpecial
  },
  data: function () {
    return {
      Title: 'OUR TEAM'
    }
  }
}
</script>

<style scoped lang="scss">
  #Member{
    margin-top: 123px;
    width:100%;
    height:852px;
    position: relative;
    background-image: url("../../assets/images/05.jpg");
    background-size: cover;
    .MemberMask{
      box-sizing: border-box;
      padding-top: 51px;
      width:100%;
      height:852px;
      position: absolute;
      top:0;
      background-color:rgba(0,0,0,0.59);
    }
  }

</style>
