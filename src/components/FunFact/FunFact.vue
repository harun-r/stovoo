<template>
  <div class="fun-fact">
    <div class="container">
      <div class="fun-fact-inner">
        <div class="item">
          <h3><VueJsCounter end="1"></VueJsCounter>M+</h3>
          <p>Users downloaded  & installation</p>
        </div>
        <div class="item">
          <h3>
            <VueJsCounter end="620"></VueJsCounter>K
          </h3>
          <p>Transactions Everyday</p>
        </div>
        <div class="item">
          <h3><VueJsCounter end="10"></VueJsCounter>K</h3>
          <p>Happy Vendors satisfied worldwide</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const VisibilitySensor = require('vue-visibility-sensor');
import VueJsCounter from 'vue-js-counter'
export default {
  name: "FunFact",
  components:{
    VueJsCounter,
    VisibilitySensor
  },
  methods:{
    onChange(){

    }
  }
}
</script>

<style scoped>

</style>