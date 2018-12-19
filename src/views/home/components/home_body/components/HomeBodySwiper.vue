<template>
  <div class="homeBD-swiper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="http://shihuo.hupucdn.com/appHome/201812/1509/b83097dbad49c78c64d0c4bc38d70a5e.png?imageView2/2/w/750/h/380/interlace/1">
      </swiper-slide>
      <swiper-slide>
        <img src="http://shihuo.hupucdn.com/appHome/201812/1318/fedde17dca02a0f4e7fba28174232d46.png?imageView2/2/w/750/h/380/interlace/1">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeBodySwiper",
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        observer: true,
        observeParents: true,
        effect: 'coverflow'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .homeBD-swiper {
    height: 0;
    padding-bottom: 50.6%;
    overflow: hidden;
    background: rgba(0, 0, 0, .2);

    & /deep/ .swiper-wrapper {
      display: flex;
    }
    & /deep/ .swiper-slide img {
      width: 3.75rem;
    }
    & /deep/ .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
</style>
