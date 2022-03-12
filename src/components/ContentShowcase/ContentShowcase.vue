<template>
  <div class="content-showcase-wrap" id="our-brief">
    <div class="container">
      <div class="content-inner bg-yellow" :class="bgColor">
        <div class="cover"
             data-aos="fade-in"
             data-aos-duration="3000"
             data-aos-offset="200px"
             :class="secOrder">
          <img :src="require('@/assets/images/' + imgSrc + '')" alt="images">
        </div>
        <div class="content" >
            <h3 data-aos="slide-up" data-aos-duration="2000" :class="textColor">{{title}}</h3>
            <p data-aos="slide-up" data-aos-duration="3000" :class="textColor">{{desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentShowcase",
  props:{
    bgColor:{
      type: String
    },
    textColor:{
      type: String
    },
    imgSrc:{
      type: String
    },
    secOrder:{
      type: String
    },
    contentOrder: {
      type: String
    },
    title:{
      type: String
    },
    desc:{
      type: String
    }
  }
}
</script>

<style scoped>

</style>