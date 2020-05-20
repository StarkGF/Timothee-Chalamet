<template>
   <div>
     <Header></Header>
     <About  ref="_About"></About>
     <Department ref="_Department"></Department>
     <Member ref="_Member"></Member>
     <History ref="_History"></History>
     <Work ref="_Work"></Work>
     <Comments></Comments>
     <Footer></Footer>
   </div>
</template>

<script>
import Header from '@/components/Hea/Header'
import Department from '@/components/Depar/Department'
import About from '@/components/About/About'
import Member from '@/components/Men/Member'
import History from '@/components/His/History'
import Work from '@/components/Works/Work'
import Comments from '@/components/COM/Comments'
import Footer from '@/components/Footer/Footer'
export default {
  name: 'Main',
  components: {
    Header,
    Department,
    About,
    Member,
    History,
    Work,
    Comments,
    Footer
  }
}
</script>

<style scoped>

</style>
