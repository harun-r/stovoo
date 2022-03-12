<template>
  <div  class="login box-wrap">
    <div class="center-box">
      <div class="form-box">
        <div class="head">
          <h3>
            Login to StoVoo
          </h3>
        </div>
        <div class="form-main">
          <div class="form-input">
            <label>Email Address</label>
            <span class="icon"><img src="@/assets/images/close-icon.png" alt="icon"></span>
            <input type="text" placeholder="desk@richoco.studio">
          </div>
          <div class="form-input">
            <label>Password</label>
            <span class="icon"><img src="@/assets/images/hidden.png" alt="icon"></span>
            <input type="text" placeholder="@ Richoco">
          </div>
          <div class="checkbox-wrap">
            <input id="checkbox" type="checkbox">
            <label for="checkbox">I have read and accept the Terms of use</label>
          </div>
        </div>
        <div class="form-footer">
          <button @click="goSuccess" class="account-submit">
            Login Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods:{
    goSuccess(){
      this.$router.push('./success')
    }
  }
}
</script>

<style scoped>

</style>