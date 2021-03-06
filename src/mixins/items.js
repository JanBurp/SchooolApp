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

  computed : {

    itemId() {
      return this.$route.params.id;
    },

    itemIdType() {
      return this.$route.params.id_type;
    },

    item() {
      return this.getItemById(this.itemId);
    },

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
      return (item.carousel && item.carousel.length>0);
    },

    firstImage(item) {
      if (this.hasImage(item)) {
        return item.carousel[0];
      }
      return false;
    },

    thumbImage(item) {
      return item.src_thumb;
    },

    closeItem() {
      this.$router.go(-1);
    },

  },
};
