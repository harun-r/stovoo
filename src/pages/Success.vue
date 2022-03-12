<template>
    <div class="success-wrap">
      <div class="container flex-start">
        <div class="box">
          <h3>Account created successfully!</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <div class="download-btn">
            <div class="app">
              <button><img src="@/assets/images/app.png" alt="app"></button>
            </div>
            <div class="play">
              <button><img src="@/assets/images/google-play.png" alt="google-play"></button>
            </div>
          </div>
          <router-link to="/">Go back to home</router-link>
          <div class="logo">
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