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
      return item.carousel[0];
    },
  },
};
