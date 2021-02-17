<template>
  <ion-icon :src="src" :size="size"></ion-icon>
</template>

<script>
  export default {
    name: 'Icon',

    props: {
      'name':{
        type: String,
        default:'',
      },
      'size':{
        type:String,
        default:'',
      },
    },

    computed : {
      src() {
        if (this.name=='nop') {
          return '';
        }
        return 'assets/svg/'+this.name+'.svg';
      },
    },
};
</script>
