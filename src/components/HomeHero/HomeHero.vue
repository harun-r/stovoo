<template>

  <div class="home-hero">
    <div class="container">
      <div class="home-hero-inner">
        <div class="video">
          <img src="@/assets/images/video-bg.png" alt="video">
          <button @click="showModal" class="video-play">
            <img src="@/assets/images/play.png" alt="video">
          </button>
          <Modal
              v-show="isModalVisible"
              @close="closeModal">
            <template v-slot:body>
             <div class="modal">
               ddfd
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
              <radial-progress-bar :diameter="64"
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
              <li>
                <router-link to="/"><img src="@/assets/images/icons/video.png" alt="video"></router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="@/assets/images/icons/heart.png" alt="video">
                  <span>56</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="@/assets/images/icons/hand.png" alt="video">
                  <span>12</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="@/assets/images/icons/rosun.png" alt="video">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
          <h3>Order great Foods and much more!</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed </p>
          <div class="download-btn">
            <div class="app">
              <button><img src="@/assets/images/app.png" alt="app"></button>
            </div>
            <div class="play">
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
export default {
  name: "HomeHero",
  components:{
    RadialProgressBar,
    Modal
  },
  data: function () {
    return{
      completedSteps: 50,
      totalSteps: 100,
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style scoped>

</style>