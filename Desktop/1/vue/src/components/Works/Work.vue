<template>
    <div id="Work">
      <Title v-bind:parenttitle="title"></Title>
    <WorkInfo></WorkInfo>
    </div>
</template>
<script>
import Title from '@/components/Title'
import WorkInfo from '@/components/Works/WorkInfo'
export default {
  name: 'Work',
  components: {
    WorkInfo,
    Title
  },
  data: function () {
    return {
      title: 'WORKS'
    }
  }
}
</script>

<style scoped lang="scss">
    #Work{
      width: 1138px;
      margin: 145px auto;
    }
</style>
