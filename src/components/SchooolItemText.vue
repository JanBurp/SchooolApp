<template>
  <div class="schoool-item-text" v-html="text"></div>
</template>

<script>
  export default {
    props : {
      text : String,
    }
  };
</script>

<style scoped>
  .schoool-item-text {
    color: var(--app-color-grijs);
  }
</style>
