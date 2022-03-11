<template>
  <router-view />
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

@import "./assets/scss/app.scss";
</style>
