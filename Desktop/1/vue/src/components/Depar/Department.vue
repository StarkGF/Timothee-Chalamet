<template>
    <div id="Department">
      <Title v-bind:parenttitle="Title"></Title>
      <DepartInfo :parentDepar="depar" ></DepartInfo>
    </div>
</template>

<script>
import { getTest } from '@/API'
import DepartInfo from '@/components/Depar/DepartInfo'
import Title from '@/components/Title'
export default {
  name: 'Department',
  components: {
    DepartInfo,
    Title
  },
  data () {
    return {
      depar: [],
      Title: 'DEPARTMENT'
    }
  },
  created () {
    getTest().then((data) => {
      this.depar = data.departments
    })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
  #Department{
    width: 1106px;
    margin: 0 auto;
  }
</style>
