<template>
  <div class="home">
    <Header/>
    <HomeHero/>
    <ContentShowcase
      :bgColor="'bg-red'"
      :textColor="'text-black'"
      :imgSrc="'img-1.png'"
      :secOrder="'order-2'"
      :title="'Binge watch and we get it delivered!'"
      :desc="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'"
    />
    <ContentShowcase
        :bgColor="'bg-yellow'"
        :textColor="'text-white'"
        :imgSrc="'img-2.png'"
        :secOrder="'order-1'"
        :title="'Enjoy quick-sales and Livestream from everywhere'"
        :desc="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'"
    />
    <ContentShowcase
        :bgColor="'bg-blue'"
        :textColor="'text-black'"
        :imgSrc="'img-3.png'"
        :secOrder="'order-2'"
        :title="'Learn diverse dishes from seasoned vendors!'"
        :desc="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'"
    />
    <ContentShowcase
        :bgColor="'bg-black'"
        :textColor="'text-white'"
        :imgSrc="'img-4.png'"
        :secOrder="'order-1'"
        :title="'Monitor and track orders from your Apple watch'"
        :desc="'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'"
    />
    <FunFact/>
    <Testimonials/>
    <Questions/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import HomeHero from "@/components/HomeHero/HomeHero";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import FunFact from "@/components/FunFact/FunFact";
import Testimonials from "@/components/Testimonials/Testimonials";
import Questions from "@/components/Questions/Questions";
import Footer from "@/components/Footer/Footer";
export default {
  name: "Home",
  components:{
    Header,
    HomeHero,
    ContentShowcase,
    FunFact,
    Testimonials,
    Questions,
    Footer
  },

}
</script>

<style scoped>

</style>