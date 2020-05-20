<template>
    <div id="History">
      <Title :parenttitle="Title"></Title>
      <HisTop></HisTop>
    </div>
</template>

<script>
import Title from '@/components/Title'
import HisTop from '@/components/His/HisTop'
export default {
  name: 'History',
  components: {
    Title,
    HisTop
  },
  data: function () {
    return {
      Title: 'HISTORY'
    }
  }
}
</script>

<style scoped lang="scss">
  #History{
    margin-top: 128px;
  }

</style>
