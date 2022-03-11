<template>
    <div class="create-account">
      <button @click="goBackHome" class="close">
        <img src="@/assets/images/close.png" alt="close">
      </button>
      <div class="content form-box">
        <div class="head">
          <h3>
            Create Account
          </h3>
          <p>Please enter your email address to get a verification code</p>
        </div>
        <div class="form-main">
          <div class="form-input">
            <label>Email</label>
            <span class="icon"><img src="@/assets/images/close-icon.png" alt="close-icon"></span>
            <input placeholder="Richoco@gmail.com"/>
          </div>
        </div>
        <div class="form-footer">
          <button @click="goNext" class="btn-submit">
            <img src="@/assets/images/arrow-right.png" alt="arrow-right">
          </button>
          <p>
            Already have an account?

            <router-link to="/">
              Login
            </router-link>
          </p>
        </div>
      </div>
      <div class="video-bg">
        <video autoplay="true"
        >
          <source src="@/assets/video/video-4.mp4" type="video/mp4">
        </video>
      </div>
    </div>
</template>

<script>
import VideoBackground from 'vue-responsive-video-background-player'
export default {
  name: "Signup",
  components:{
    VideoBackground
  },
  methods:{
    goBackHome(){
      this.$router.push('/')
    },
    goNext(){
      this.$router.push('/verify-email')
    }
  }
}
</script>

<style scoped>

</style>