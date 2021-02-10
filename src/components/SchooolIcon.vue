<template>
  <div class="schoool-icon" :class="iconClass()"></div>
</template>

<script>
  export default {
    name: 'Icon',

    props: {
      'name':{
        type: String,
        default:'',
      },
    },

    // data : function() {
    //   return {
    //     hover : false,
    //     isFontAwsome : false,
    //   };
    // },

    computed : {
    },

    methods : {

      mouseOver : function() {
        if (!this.disabled) this.hover = true;
      },

      mouseLeave : function() {
        this.hover = false;
      },

      mouseClick : function() {
        this.hover = false; // prevent touch devices to set hover
        this.$emit('click');
      },

      iconClass : function() {
        let c = 'schoool-icon-'+this.name;
        return c;
      },


    }
  };
</script>

<style scoped>
  .schoool-icon {
    width:2rem;
    height: 2rem;
  }
  .schoool-icon::before {
    position: relative;
    top: 0.15rem;
    font-size: 2rem;
  }
</style>
