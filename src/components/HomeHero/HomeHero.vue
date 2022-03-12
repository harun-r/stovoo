<template>

  <div class="home-hero">
    <div class="container">
      <div class="home-hero-inner">
        <div class="video">
          <img src="@/assets/images/video-bg.png" alt="video">
          <button
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-offset="200px"
              @click="showModal" class="video-play">
            <img src="@/assets/images/play.png" alt="video">
          </button>
          <Modal
              v-show="isModalVisible"
              @close="closeModal">
            <template v-slot:body>
             <div class="modal-wrap">
               <div class="video-wrap">
                 <video id="videoElement"
                        controls="true"
                        @canplay="updatePaused"
                        @playing="updatePaused"
                        @pause="updatePaused"
                 >
                   <source src="@/assets/video/video.mp4" type="video/mp4">
                 </video>
               </div>
               <button
                   type="button"
                   class="btn-close"
                   @click="closeModal"
               >
                 <img src="@/assets/images/close.png" alt="close">
               </button>
             </div>
            </template>
          </Modal>
        </div>
        <div class="info">
              <radial-progress-bar

                  data-aos="fade-in"
                  data-aos-duration="3000"
                  data-aos-offset="200px"

                  :diameter="64"
                                           :strokeWidth="4"
                                           :innerStrokeWidth="4"
                                           :startColor="'#FF8906'"
                                           :stopColor="'#FF8906'"
                                           :innerStrokeColor="'#ffffff'"
                                           :completed-steps="completedSteps"
                                           :total-steps="totalSteps">
                <img src="@/assets/images/video-bg.png" alt="video">
              </radial-progress-bar>
          <div class="info-right">
            <ul>
              <li data-aos="slide-up" data-aos-duration="1000">
                <router-link to="/"><img src="@/assets/images/icons/video.png" alt="video"></router-link>
              </li>
              <li data-aos="slide-up" data-aos-duration="1500">
                <router-link to="/">
                  <img src="@/assets/images/icons/heart.png" alt="video">
                  <span><VueJsCounter end="56"/></span>
                </router-link>
              </li>
              <li data-aos="slide-up" data-aos-duration="2000">
                <router-link to="/">
                  <img src="@/assets/images/icons/hand.png" alt="video">
                  <span><VueJsCounter end="22"/></span>
                </router-link>
              </li>
              <li data-aos="slide-up" data-aos-duration="2500">
                <router-link to="/">
                  <img src="@/assets/images/icons/rosun.png" alt="video">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
          <h3
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-offset="200px"
          >Order great Foods and much more!</h3>
          <p data-aos="slide-up" data-aos-duration="1500" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed </p>
          <div class="download-btn">
            <div class="app" data-aos="slide-up" data-aos-duration="2000">
              <button><img src="@/assets/images/app.png" alt="app"></button>
            </div>
            <div class="play" data-aos="slide-up" data-aos-duration="3000">
              <button><img src="@/assets/images/google-play.png" alt="google-play"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
import Modal from "@/components/Modal/Modal";
import VueJsCounter from 'vue-js-counter'
export default {
  name: "HomeHero",
  components:{
    RadialProgressBar,
    Modal,
    VueJsCounter,
  },
  data: function () {
    return{
      completedSteps: 50,
      totalSteps: 100,
      isModalVisible: false,
      videoElement: null,
      paused: null
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      this.videoElement.play();
    },
    closeModal() {
      this.isModalVisible = false;
      this.videoElement.pause();
    },
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },

  },
  computed: {
    videoElement () {
      return this.$refs.video;
    },
    playing() { return !this.paused; }
  }
}
</script>

<style scoped>

</style>