export const itemsMixin = {

  data : function(){
    return {
      id_type : false,
    };
  },

  mounted() {
    this.id_type = this.$route.params.id_type;
  },

  methods: {

    loadNext(event) {
      this.loadMore().then(function(){
        event.target.complete();
      });
    },

    hasImage(item) {
      return (item.carousel.length>0);
    },

    firstImage(item) {
      return item.carousel[0];
    },

    thumbImage(item) {
      return item.src_thumb;
    },


  },
};
