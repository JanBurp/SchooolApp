<template>
  <div class="schoool-item-image">
    <img :src="imageAuthorization" :alt="image.title" />
  </div>
</template>

<script>
  export default {
    props : {
      image : Object,
    },

    computed : {
      imageAuthorization() {
        let url = this.image.src_normal+'?_authorization='+window.token;
        return url;
      }
    },

  };
</script>

<style scoped>
  .schoool-item-image {

  }
</style>
