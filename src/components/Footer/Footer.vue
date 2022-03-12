<template>
    <div class="footer" id="contact">
      <div class="footer-top"
           data-aos="fade-in"
           data-aos-duration="3000"
           data-aos-offset="200px"
      >
        <h3>Download and try it now</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero </p>
        <div class="footer-btn">
          <router-link to="/">
            <img src="@/assets/images/google-play.png" alt="app">
          </router-link>
          <router-link to="/">
            <img src="@/assets/images/app.png" alt="app">
          </router-link>
        </div>
      </div>
      <div class="footer-center"
           data-aos="fade-in"
           data-aos-duration="3000"
           data-aos-offset="200px"
      >
        <div>
          <img class="logo-f" src="@/assets/images/logo-white.png" alt="logo-white">
          <p> Limestone Road STE 200-C in Wilmington, DE 19808 hello@stovoo.com  +1 (302) 451-9589</p>
          <ul>
            <li>
              <router-link to="/">
                <img src="@/assets/images/linkedin.png" alt="app">
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="@/assets/images/twitter.png" alt="app">
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="@/assets/images/facebook.png" alt="app">
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="@/assets/images/instagram.png" alt="app">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom"
           data-aos="fade-in"
           data-aos-duration="3000"
           data-aos-offset="200px"
      >
        <div class="container">
          <div class="footer-inner">
            <p>© Copyright StoVoo Inc</p>
            <div class="right">
              <router-link to="/">Privacy</router-link>
              <router-link to="/">Terms</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>