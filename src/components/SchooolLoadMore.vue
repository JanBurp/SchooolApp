<template>
  <div v-if="more" class="schoool-load-more">
    <ion-infinite-scroll-content loading-spinner="dots" loading-text="Meer items laden..."></ion-infinite-scroll-content>
  </div>
  <div v-else class="schoool-load-more">
    <p>Geen items meer</p>
  </div>
</template>

<script>
  export default {
    props : {
      more : {
        type:Boolean,
        default:true,
      },
    }
  };
</script>

<style scoped>
  .schoool-load-more {
    margin:1rem 0 2rem;
  }
  .schoool-load-more p {
    text-align: center;
  }
</style>
