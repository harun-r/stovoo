<template>
    <div v-if="enterNumber" class="enter-number box-wrap">
    <div class="center-box">
      <div class="form-box">
        <div class="head">
          <h3>
            Your phone number
          </h3>
          <p>Please enter your phone number to get a verification code</p>
        </div>
        <div class="form-main">
          <div class="form-input">
            <div class="has-dropdown">
                <div class="dropdown" @click="dropdownHandler">
                  <img src="@/assets/images/flag.png" alt="flag.png">
                </div>
                <div class="field">
                  <label>Phone number</label>
                  <span class="icon"><img src="@/assets/images/close-icon.png" alt="icon"></span>
                  <input type="text" placeholder="(000)  000  00 00">
                </div>
              <div class="country-dropdown" :class="{ active: showDropdown }">
                <ul>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/flag.png" alt="flag.png">
                      <span>Country Name</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/flag.png" alt="flag.png">
                      <span>Country Name</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/flag.png" alt="flag.png">
                      <span>Country Name</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/flag.png" alt="flag.png">
                      <span>Country Name</span>
                    </a>
                  </li><li>
                  <a href="#">
                    <img src="@/assets/images/flag.png" alt="flag.png">
                    <span>Country Name</span>
                  </a>
                </li><li>
                  <a href="#">
                    <img src="@/assets/images/flag.png" alt="flag.png">
                    <span>Country Name</span>
                  </a>
                </li><li>
                  <a href="#">
                    <img src="@/assets/images/flag.png" alt="flag.png">
                    <span>Country Name</span>
                  </a>
                </li><li>
                  <a href="#">
                    <img src="@/assets/images/flag.png" alt="flag.png">
                    <span>Country Name</span>
                  </a>
                </li>
                </ul>
              </div>
            </div>
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
    </div>
  </div>
    <div v-if="enterNumberDigit" class="verify-number box-wrap">
      <div class="center-box">
        <div class="form-box">
          <div class="head">
            <h3>
              Verify phone number
            </h3>
          </div>
          <div class="form-main">
            <div class="digit-boxes">
                <input value="4" class="digit-box success" />
                <input value="4" class="digit-box success" />
                <input value="4" class="digit-box success" />
                <input value="4" class="digit-box error" />
            </div>
            <div class="hint">
              <p>Please enter a verification code sent to +302154000</p>
            </div>
          </div>
          <div class="form-footer">
            <button @click="goReg" class="btn-submit">
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
    <div v-if="completeReg" class="complete-reg box-wrap">
    <div class="center-box">
      <div class="form-box">
        <div class="head">
          <h3>
            Complete Registration
          </h3>
        </div>
        <div class="form-main">
          <div class="form-half">
            <div class="form-input">
              <label>First name</label>
              <input type="text" placeholder="Richard">
            </div>
            <div class="form-input">
              <label>Last name</label>
              <input type="text" placeholder="Richard">
            </div>
          </div>
          <div class="form-input">
            <label>User name, brand or Company name</label>
            <span class="icon"><img src="@/assets/images/close-icon.png" alt="icon"></span>
            <input type="text" placeholder="@ Richoco">
          </div>
          <div class="form-input">
            <label>Password</label>
            <span class="icon"><img src="@/assets/images/hidden.png" alt="icon"></span>
            <input type="text" placeholder="@ Richoco">
          </div>
          <div class="form-input">
            <label>Confirm password</label>
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
              Create Account
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  name: "VerifyEmail",
  components:{
    VuePhoneNumberInput
  },
  data: function (){
    return{
      enterNumber: true,
      enterNumberDigit: false,
      completeReg:false,
      showDropdown: false
    }
  },
  methods:{
    dropdownHandler(){
      this.showDropdown = !this.showDropdown;
    },
    goNext() {
      this.enterNumber = !this.enterNumber;
      this.enterNumberDigit = !this.enterNumberDigit;
    },
    goReg(){
      this.enterNumberDigit = !this.enterNumberDigit;
      this.completeReg = !this.completeReg;
    },
    goSuccess(){
      this.$router.push('./success')
    }
  }
}
</script>

<style scoped>

</style>