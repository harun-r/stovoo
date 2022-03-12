<template>
  <div class="fun-fact">
    <div class="container">
      <div class="fun-fact-inner">
        <div class="item" data-aos="slide-up" data-aos-duration="1000">
          <h3><VueJsCounter end="1"></VueJsCounter>M+</h3>
          <p>Users downloaded  & installation</p>
        </div>
        <div class="item" data-aos="slide-up" data-aos-duration="2000">
          <h3>
            <VueJsCounter end="620"></VueJsCounter>K
          </h3>
          <p>Transactions Everyday</p>
        </div>
        <div class="item" data-aos="slide-up" data-aos-duration="3000">
          <h3><VueJsCounter end="10"></VueJsCounter>K</h3>
          <p>Happy Vendors satisfied worldwide</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter'
export default {
  name: "FunFact",
  components:{
    VueJsCounter,

  },
  methods:{
    onChange(){

    }
  }
}
</script>

<style scoped>

</style>