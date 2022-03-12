<template>
  <div class="header">
    <div class="container">
      <div class="header-inner">
        <div class="bar">
          <router-link @click="menuHandler" to="/">
            <img src="@/assets/images/bar.png" alt="bar"/>
          </router-link>
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/images/logo.png" alt="stovoo"/>
          </router-link>
        </div>
        <div class="menu-right" :class="{ active: showMobileMenu }">
          <ul>
            <li>
              <a class="active" href="#" v-scroll-to="'#our-brief'">Our brief</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#contact'">Contact</a>
            </li>
          </ul>
          <div class="header-btn">
            <button @click="goLoginHandler" class="btn-login">Login</button>
            <button @click="goSignupHandler" class="btn-create-account">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: function () {
    return{
      showMobileMenu: false
    }
  },
  methods: {
    goSignupHandler(){
      this.$router.push('/signup')
    },
    goLoginHandler(){
      this.$router.push('/login')
    },
    menuHandler(){
      this.showMobileMenu = !this.showMobileMenu;
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
}
</script>

<style scoped>

</style>