<template>
    <div class="welcome">
      <img src="../../assets/images/welcomeTop.png"  class="welcomeTop">
      <img srcset="../../assets/images/welcomeUnder.png" class="welcomeUnder" >
      <button class="logIn" @click="logClick">JOIN US</button>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    logClick: function () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
  .welcome{
    text-align: center;
    width: 610px;
    height: 376px;
    margin:230px auto 0 auto;
    .welcomeTop{
      margin-bottom: 42px;
    }
    .welcomeUnder{
      margin-bottom: 72px;
    }
    button{
      background-color: transparent;
      width:168px;
      height:38px;
      border-radius:5px;
      border:2px solid rgba(255,255,255,1);
      font-size:14px;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:30px;
      transform: scale(1);
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.5s, transform 0.5s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.5s, transform 0.5s;
      }
    }
  }
</style>
