<template>
    <div class="success-wrap">
      <div class="container flex-start">
        <div class="box"  >
          <h3
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-offset="200px"
          >Account created successfully!</h3>
          <p data-aos="slide-up" data-aos-duration="1500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <div class="download-btn">
            <div class="app" data-aos="slide-up" data-aos-duration="2000">
              <button><img src="@/assets/images/app.png" alt="app"></button>
            </div>
            <div class="play" data-aos="slide-up" data-aos-duration="3000">
              <button><img src="@/assets/images/google-play.png" alt="google-play"></button>
            </div>
          </div>
          <router-link to="/" data-aos="slide-up" data-aos-duration="3000">Go back to home</router-link>
          <div class="logo" data-aos="slide-up" data-aos-duration="3000">
            <img src="@/assets/images/logo-white.png" alt="white">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Success"
}
</script>

<style scoped>

</style>