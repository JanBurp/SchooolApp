export const itemsMixin = {
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
      console.log(item);
      return item.carousel[0];
    },

    thumbImage(item) {
      return item.src_thumb;
    },


  },
};
