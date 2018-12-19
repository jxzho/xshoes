<template>
  <div class="homeBD-discount">
    <div class="content" v-for="(item, index) of discounts" :key="index">
      <h2>{{item.title}}</h2>
      <p class="desc">{{item.desc}}</p>
      <div class="pic">
        <img :src="item.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBodyDiscount",
  data() {
    return {
      discounts: [
        {
          title: "今日优惠",
          desc: "5折好价",
          src: "http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1"
        },
        {
          title: "限时团购",
          desc: "春节不打烊",
          src: "http://shihuo.hupucdn.com/trade/reposition/2017-10-04/27812ca1b16a075e15f56a17686cbe95.png?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          title: "一键海淘",
          desc: "轻送跨国购买",
          src: "http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/0/w/160/h/160/interlace/1"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .homeBD-discount {
    margin-top: @secOffset;
    display: flex;
    justify-content: center;

    .content {
      width: 1.14rem;
      padding: .18rem 0;
      background: #fff;
      margin: 0 4px;
      text-align: center;

      h2 {
        font-weight: 600;
      }

      .desc {
        margin: .05rem 0;
        font-size: .12rem;
      }

      .pic {
        width: .6rem;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
    }
  }
</style>


