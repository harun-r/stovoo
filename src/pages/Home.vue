<template>
  <div class="home">
    <Header/>
    <HomeHero/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import HomeHero from "@/components/HomeHero/HomeHero";
export default {
  name: "Home",
  components:{
    Header,
    HomeHero
  },
  methods:{

  }
}
</script>

<style scoped>

</style>