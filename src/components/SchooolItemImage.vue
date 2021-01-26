<template>
  <div class="schoool-item-image" :class="imageClass()">
    <img :id="uniqId" :src="imageAuthorization" :alt="image.title" @load="imageLoaded" />
  </div>
</template>

<script>
  export default {
    props : {
      image : Object,
      size : {
        type:String,
        default:'normal',
      },
      cropped : {
        type:Boolean,
        default:false,
      }
    },

    data : function() {
      return {
        imageSize : '',
      };
    },

    computed : {
      src() {
        return this.image['src_'+this.size];
      },
      uniqId() {
        return 'imgId'+this.src.replace(/[:/._]/g, "");
      },
      imageAuthorization() {
        let url = this.src+'?_authorization='+window.token;
        return url;
      },
    },
    methods : {
      imageLoaded() {
        let img = document.querySelector("#"+this.uniqId);
        if (img) {
          let width = img.naturalWidth;
          let height = img.naturalHeight;
          if (width>height) {
            this.imageSize = 'landscape';
          }
          else {
            this.imageSize = 'portrait';
          }
        }
      },
      imageClass() {
        let c = '';
        if (this.cropped) {
          c = 'image-cropped';
        }
        c += ' image-'+this.imageSize;
        return c;
      },
    },
  };
</script>

<style scoped>
  .schoool-item-image {
  }
  .schoool-item-image.image-cropped {
    position: relative;
    overflow:hidden;
    width:100%;
    max-width:100%;
    height: 100%;
    max-height: 100%;
  }
  .schoool-item-image.image-cropped img {
    position: absolute;
    width:auto;
    max-width: none;
    height: 100%;
    max-height: 100%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .schoool-item-image.image-cropped.image-portrait img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: none;
  }
</style>
