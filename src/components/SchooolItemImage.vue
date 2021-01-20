<template>
  <div class="schoool-item-image">
    <img :src="image.src_normal" :alt="image.title" />
  </div>
</template>

<script>
  export default {
    props : {
      image : Object,
    }
  };
</script>

<style scoped>
  .schoool-item-image {

  }
</style>
