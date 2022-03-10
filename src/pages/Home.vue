<template>
  <div class="home">

  </div>
</template>

<script>
export default {
  name: "Home",
  components:{

  },
  methods:{
    goHomeHandler() {
      this.$router.push('/')
    },
    goSignupHandler(){
      this.$router.push('/signup')
    },
    goLoginHandler(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>