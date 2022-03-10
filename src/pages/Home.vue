<template>
  <div class="home">
    <button @click="goHomeHandler">Home</button>
    <button @click="goSignupHandler">Signup</button>
    <button @click="goLoginHandler">Login</button>
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