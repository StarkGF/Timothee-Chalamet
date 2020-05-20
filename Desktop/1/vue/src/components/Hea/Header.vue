<template>
    <div class="header">
      <Nav></Nav>
      <Welcome></Welcome>
    </div>
</template>

<script>
import Nav from '@/components/Hea/Nav'
import Welcome from '@/components/Hea/Welcome'
export default {
  name: 'Header',
  components: {
    Nav,
    Welcome
  }
}
</script>

<style scoped lang="scss">
  .header{
    background-image: url("../../assets/images/NavBg.jpg");
    background-size: cover;
    width: 100%;
    height: 720px;
    button{
      background-color: transparent;
    }
  }

</style>
