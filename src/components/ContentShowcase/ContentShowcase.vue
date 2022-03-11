<template>
  <div class="content-showcase-wrap">
    <div class="container">
      <div class="content-inner bg-yellow" :class="bgColor">
        <div class="cover" :class="secOrder">
          <img :src="require('@/assets/images/' + imgSrc + '')" alt="images">
        </div>
        <div class="content" >
            <h3 :class="textColor">{{title}}</h3>
            <p :class="textColor">{{desc}}</p>
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