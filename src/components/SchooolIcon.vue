<template>
  <div class="schoool-icon" :class="iconClass()"></div>
</template>

<script>
  export default {
    name: 'Icon',

    props: {
      'type':{
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
        if (this.disabled) this.hover = false;
        var c = '';
        if (!this.isFontAwsome) {
          c = 'g-icon g-icon-' + this.type + ' mmv-icon-shape-' + this.shape;
        }
        else {
          c = 'fas ' + this.type + ' ' + this.shape;
        }

        if (this.shape=='round') c += '  btn-outline-primary';
        if (this.disabled) {
          c += ' disabled';
        }
        else {
          if (this.shape!=='none') {
            if (this.active)  c += ' btn-outline-primary';
            if (this.hover)   c += ' btn-outline-primary text-white';
          }
        }
        if (this.type=='delete' || this.type=='close') c += ' text-danger';

        if (this.styling=='light') {
          c += ' mmm-text-white';
        }
        else {
          if($("body").hasClass('mijn-kringen')){
            c += ' mmv-text-kringen_kleur';
          }
          if($("body").hasClass('mijn-zorg')){
            c += ' mmv-text-zorgkleur';
          }
          if($("body").hasClass('onderzoekslab')){
            c += ' mmv-text-lab_kleur';
          }
        }

        return c;
      },


    }
  };
</script>

<style scoped>

</style>
