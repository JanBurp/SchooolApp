<template>
  <div class="schoool-logo">
    <img :src="logo" alt="Logo" />
  </div>
</template>

<script>
  export default {
    props : {
      logo : String,
    },
  };
</script>

<style scoped>
  .schoool-logo {
    text-align:center;
  }
  .schoool-logo img {
    height: 7rem;
    margin:1rem 0 2rem;
  }
</style>
