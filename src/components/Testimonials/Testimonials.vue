<template>
  <div class="testimonial-section">
    <div class="container">
      <div class="testimonial-header">
        <h3>Testimonials</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>
      </div>
    </div>

    <div class="testimonial-slide">
      <carousel
          :settings="settings"
      >
        <slide v-for="slide in 15" :key="slide">
          <div class="item">
             <div class="avatar">
                 <img src="@/assets/images/avatar.png" alt="avatar">
             </div>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
             </p>
             <h3>Amalia Brono</h3>
             <span>Director at Spotify</span>
          </div>
        </slide>
        <template #addons>
          <div class="nav-arrow">
            <navigation/>
          </div>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';
export default {
  name: "Testimonials",
  components:{
    Carousel,
    Slide,
    Navigation
  },
  data: function () {
    return{
      settings:{
        itemsToShow: 3.5,
        autoplay:5000,
        transition:500,
        wrapAround:true,
        breakpoints:{
          0:{itemsToShow: 1},
          768:{itemsToShow: 3.5},
        }
      }
    }
  }
}
</script>

<style scoped>

</style>