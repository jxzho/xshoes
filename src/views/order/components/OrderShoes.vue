<template>
  <div class="order-shoes">
    <div class="picture">
      <img :src="shoesData.picture">
    </div>
    <section class="info">
      <div>
        <span class="name">{{shoesData.name}}</span>
        <p class="desc">{{shoesData.description}}</p>
      </div>
      <footer class="price">
        <span>¥ {{shoesData.price}}</span>
        <i>×{{shoesData.buyNum}}</i>
      </footer>
    </section>
    <div class="change-buy-num">
      <!-- <van-stepper v-model="shoesData.buyNum"/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderShoes",
  props: ['shoesData'],
}
</script>

<style lang="less" scpoed>
  .order-shoes {
    margin-top: .1rem;
    padding: .1rem;
    background: #fff;
    display: flex;

    .picture {
      width: 1rem;
      height: 1rem;
      border-radius: 5px;
      margin-right: .1rem;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .info {
      flex: 1;
      .flex-column();
      justify-content: space-between;

      .name {
        font-size: .16rem;
        line-height: 1;
        color: #000;
        font-weight: 500;
        margin-bottom: .05rem;
      }

      .desc {
        color: #000;
        font-size: .14rem;
        line-height: .15rem;
        .mul-overflow();
      }

      .price {
        display: flex;
        justify-content: space-between;

        span {
          color: @xRed;
          font-size: .2rem;
          line-height: 1;
          align-items: self-end;
          font-weight: 500;
        }
      
        i {
          font-size: .14rem;
          line-height: .14rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
</style>


