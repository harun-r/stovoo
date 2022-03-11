<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot name="body">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style>

</style>
