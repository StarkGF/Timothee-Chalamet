<template>
  <div id="About">
    <Title :parenttitle="Title"></Title>
    <AboInfoTop></AboInfoTop>
    <AboInfoUnder></AboInfoUnder>
  </div>
</template>

<script>
import Title from '@/components/Title'
import AboInfoTop from '@/components/About/AboInfoTop'
import AboInfoUnder from '@/components/About/AboInfoUnder'
export default {
  name: 'About',
  components: {
    Title,
    AboInfoTop,
    AboInfoUnder
  },
  data: function () {
    return {
      Title: 'ABOUT'
    }
  }
}
</script>

<style scoped>
  #About{
    width: 1106px;
    margin: 110px auto;
  }
</style>
