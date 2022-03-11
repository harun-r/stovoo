<template>
    <div class="verify-email box-wrap">
      <div class="center-box">
        <div class="form-box">
          <div class="head">
            <h3>
              Verify email address
            </h3>
            <p>Please enter your email address to get a verification code</p>
          </div>
          <div class="form-main">
            <div class="digit-boxes">
                <input value="4" class="digit-box success" />
                <input value="4" class="digit-box success" />
                <input value="4" class="digit-box success" />
                <input value="4" class="digit-box error" />
            </div>
            <div class="hint">
              <p>Please enter a verification code sent to Richoco@gmail.com</p>
            </div>
          </div>
          <div class="form-footer">
            <button class="btn-submit">
              <img src="@/assets/images/arrow-right.png" alt="arrow-right">
            </button>
            <p>
              Didn't get code?

              <router-link to="/">
                Resend
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "VerifyEmail"
}
</script>

<style scoped>

</style>