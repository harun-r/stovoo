<template>
  <div class="question-area">
    <div class="container">
      <div class="title">
        <h3 data-aos="slide-up" data-aos-duration="2000">Frequently asked questions</h3>
      </div>
      <div class="question-ans">
        <Accordion
            :items="items"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Accordion from '@dzangolab/vue-accordion'
import '@dzangolab/vue-accordion/dist/accordion.css' // import stylesheet
export default {
  name: "Questions",
  components: {
    Accordion
  },
  data: function () {
    return {
      items: [
        {
          content: 'some content',
          title: 'What is StoVoo'
        },
        {
          content: 'some more content',
          title: 'What is StoVoo'
        },
        {
          content: 'some other content',
          title: 'What is StoVoo'
        },
        {
          content: 'some other content',
          title: 'What is StoVoo'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>