<template>
 <div class="container">
   <router-view />
 </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'App',
  components: {
  },
  mounted() {
    AOS.init()
  },
}
</script>

<style lang="scss">
    .main{
      p{
        font-size: 20px;
      }
    }
</style>
