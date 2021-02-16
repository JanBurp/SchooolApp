export const itemsMixin = {

  data : function(){
    return {
      id_type : false,
    };
  },

  mounted() {
    this.setTypeId();
  },

  watch: {
    '$route.path': function() {
      this.setTypeId();
    }
  },

  methods: {

    setTypeId() {
      let match = this.$route.path.match(/\/.*\/(.*)/);
      if (match) {
        this.id_type = match[1];
      }
      else {
         this.id_type = false;
      }
    },

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
