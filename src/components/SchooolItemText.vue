<template>
  <div class="schoool-item-text" v-html="html"></div>
</template>

<script>
  export default {
    props: {
      'text':{
        type: String,
        default:'',
      },
      'small':{
        type:Boolean,
        default:false,
      },
    },
    computed : {
      html() {
        if (this.small && this.text.length>270) {
          let html = this.text;
          html = html.replace(/<(.|\n)*?>/g, ' ');
          let words = html.split(' ');
          let short = '';
          let word = 0;
          while (short.length < 270 && word<words.length) {
            short += ' '+words[word];
            word++;
          }
          return '<p>'+short+'&hellip;</p>';
        }
        return this.text;
      },
    },
  };
</script>

<style scoped>
  .schoool-item-text {
    color: var(--app-color-grijs);
  }
</style>
